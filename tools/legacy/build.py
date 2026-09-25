#!/usr/bin/env python3
"""
Convierte el mirror de voicesunveiled.org (WordPress) en un sitio estático
que vive bajo BASE_PATH (por defecto la raíz del dominio, "") sin depender de WordPress.

Uso:  tools/build.py <dir_mirror>/voicesunveiled.org [site/]

Qué hace:
  * copia todos los archivos, quitando el sufijo de query (?ver=…) de los nombres
  * reescribe todas las URLs absolutas del sitio original a BASE_PATH
  * elimina scripts/estilos de plugins que requieren backend (WooCommerce,
    GiveWP, Mailchimp, Site Kit, Akismet, editor de bloques, emojis, feeds…)
  * convierte los embeds de donación GiveWP en iframes que cargan el formulario
    desde el sitio original (las donaciones siguen procesándose allí)
  * apunta los formularios Gravity Forms al sitio original
"""
import os
import re
import shutil
import sys

BASE_PATH = os.environ.get("BASE_PATH", "").rstrip("/")
ORIGIN = "https://voicesunveiled.org"

# Assets que se eliminan del HTML (regex sobre el atributo src/href)
DROP_ASSETS = re.compile(
    r"(wp-content/plugins/(woocommerce|woocommerce-payments|give|give-recurring|give-fee-recovery|"
    r"mailchimp-for-woocommerce|google-site-kit|akismet|popup-maker)/"
    r"|wp-content/uploads/pum/"
    r"|wp-includes/js/dist/"
    r"|wp-includes/js/comment-reply"
    r"|wp-includes/js/plupload/"
    r"|wp-includes/css/dist/"
    r"|wp-includes/blocks/"
    r"|wp-content/plugins/thrive-visual-editor/editor/js/dist/woo\.min\.js"
    r"|wp-content/themes/thrive-theme/inc/assets/dist/woo(commerce)?\."
    r"|wp-content/plugins/thrive-visual-editor/editor/js/dist/modules/(login|user-profile|avatar-picker|file-upload)\."
    r")"
)
# En páginas con formulario GiveWP se conservan el editor de bloques y los scripts de Give
DROP_ASSETS_LIGHT = re.compile(
    r"(wp-content/plugins/(woocommerce|woocommerce-payments|mailchimp-for-woocommerce|google-site-kit|akismet|popup-maker)/"
    r"|wp-content/uploads/pum/"
    r"|wp-includes/js/comment-reply"
    r"|wp-includes/js/plupload/"
    r"|wp-content/plugins/thrive-visual-editor/editor/js/dist/woo\.min\.js"
    r"|wp-content/themes/thrive-theme/inc/assets/dist/woo(commerce)?\."
    r"|wp-content/plugins/thrive-visual-editor/editor/js/dist/modules/(login|user-profile|avatar-picker|file-upload)\."
    r")"
)
# Scripts inline que se eliminan si contienen alguna de estas cadenas
DROP_INLINE = (
    "wc_add_to_cart_params", "woocommerce_params", "wc_cart_fragments_params",
    "wc_order_attribution", "give_global_vars", "give_stripe_vars", "Give_Recurring_Vars",
    "give_fee_recovery_object", "giveApiSettings", "givewpDonationFormBlock",
    "mailchimp_public_data", "mcPixelConfig", "mailchimp-for-woocommerce",
    "pum_vars", "pum_popups", "pum_sub_vars", "_googlesitekit", "wpemojiSettings",
    "window._wpemojiSettings", "wp.apiFetch", "wp.i18n", "wp.date.setSettings",
    "sbjs", "preferencesStore", "wc-blocks", "wp.blocks", "wp.hooks",
    "wp.data", "moment.updateLocale", "wp.date", "wp.apiFetch",
)
DROP_INLINE_LIGHT = (
    "wc_add_to_cart_params", "woocommerce_params", "wc_cart_fragments_params",
    "wc_order_attribution", "mailchimp_public_data", "mcPixelConfig", "mailchimp-for-woocommerce",
    "pum_vars", "pum_popups", "pum_sub_vars", "_googlesitekit", "wpemojiSettings",
    "window._wpemojiSettings", "sbjs", "wc-blocks",
)
# <link> que se eliminan por rel
DROP_LINK_REL = ("alternate", "pingback", "EditURI", "wlwmanifest", "shortlink", "https://api.w.org/")

# Redirecciones que existen en el sitio original (origen → destino)
REDIRECTS = [
    ("donate", "donate-now/"),
    ("emergency-fund", "donations/emergency-funds-for-ava-and-nima/"),
    ("time-is-running-out", "donations/time-is-running-out/"),
    ("reclamation", "reclamation/"),
]

TAG_RE = re.compile(r"<(script|link|style)\b[^>]*?(?:/>|>.*?</\1>|>)", re.S | re.I)


def clean_tag(tag: str, light: bool = False) -> str:
    """Devuelve '' si la etiqueta debe eliminarse, si no la devuelve intacta.
    light=True conserva GiveWP y el editor de bloques (páginas con formulario de donación)."""
    low = tag.lower()
    m = re.search(r"""(?:src|href)\s*=\s*["']([^"']+)""", tag, re.I)
    ref = m.group(1) if m else ""
    drop_assets = DROP_ASSETS_LIGHT if light else DROP_ASSETS
    drop_inline = DROP_INLINE_LIGHT if light else DROP_INLINE
    if ref and drop_assets.search(ref):
        return ""
    if ref and re.search(r"(/cdn-cgi/|accounts\.google\.com/gsi)", ref):
        return ""
    if ref and "js.stripe.com" in ref and not light:
        return ""
    if low.startswith("<link") and "fonts.googleapis" in ref and "givewp" in low and not light:
        return ""
    if low.startswith("<link"):
        rel = re.search(r"""rel\s*=\s*["']([^"']+)""", tag, re.I)
        if rel and rel.group(1) in DROP_LINK_REL:
            return ""
        if ref and ("/feed" in ref or "wp-json" in ref or "xmlrpc" in ref):
            return ""
    if low.startswith("<script") and not ref:
        if any(k in tag for k in drop_inline):
            return ""
    if low.startswith("<style"):
        if "wp-emoji" in tag or "img.wp-smiley" in tag:
            return ""
    return tag


GIVE_EMBED_RE = re.compile(r"<div\s+class='root-data-givewp-embed'[^>]*?data-src='([^']+)'[^>]*>\s*</div>", re.S)


CF_A_RE = re.compile(r'<a href="/cdn-cgi/l/email-protection#([0-9a-f]+)"([^>]*)>(.*?)</a>', re.S)
CF_A2_RE = re.compile(r'<a href="/cdn-cgi/l/email-protection"([^>]*?)data-cfemail="([0-9a-f]+)"[^>]*>[^<]*</a>')
CF_SPAN_RE = re.compile(r'<span class="__cf_email__" data-cfemail="([0-9a-f]+)">[^<]*</span>')


def cf_decode(hexstr: str) -> str:
    b = bytes.fromhex(hexstr)
    return "".join(chr(c ^ b[0]) for c in b[1:])


def process_html(html: str) -> str:
    # 0) Correos ofuscados por Cloudflare → texto/mailto normales
    html = CF_SPAN_RE.sub(lambda m: cf_decode(m.group(1)), html)
    html = CF_A2_RE.sub(lambda m: f'<a href="mailto:{cf_decode(m.group(2))}">{cf_decode(m.group(2))}</a>', html)
    html = CF_A_RE.sub(lambda m: f'<a href="mailto:{cf_decode(m.group(1))}"{m.group(2)}>{m.group(3)}</a>', html)
    html = re.sub(r'href="/cdn-cgi/l/email-protection#([0-9a-f]+)"', lambda m: f'href="mailto:{cf_decode(m.group(1))}"', html)
    # 1) Donaciones GiveWP: se conserva el embed original (donationFormBlockApp.js crea el iframe
    #    hacia el sitio original y lo redimensiona), con limpieza ligera de scripts
    light = "root-data-givewp-embed" in html

    def give_iframe(m):
        url = m.group(1).replace("&amp;", "&")
        return (
            f'<iframe class="givewp-form-iframe" src="{url}" title="Donation form" '
            f'loading="lazy" style="width:100%;min-height:760px;border:0;display:block"></iframe>'
        )
    # 2) Eliminar assets/scripts dependientes de WordPress
    html = TAG_RE.sub(lambda m: clean_tag(m.group(0), light), html)

    # 3) Formularios Gravity Forms → envían al sitio original
    html = re.sub(r"(<form[^>]*\bid='gform_\d+'[^>]*action=')/", r"\1" + ORIGIN + "/", html)

    # 4) Quitar query strings de assets locales (?ver=…)
    html = re.sub(
        r"(voicesunveiled\.org/[^\s\"'<>?#]+\.(?:css|js|png|jpe?g|gif|svg|webp|woff2?|ttf|eot|ico|pdf|mp4|mp3|json))\?[^\s\"'<>]*",
        r"\1",
        html,
    )

    # 5) Reescribir host → BASE_PATH (formas normal, protocolo relativo y escapada JSON)
    html = html.replace("https:\\/\\/voicesunveiled.org", BASE_PATH.replace("/", "\\/"))
    html = html.replace("https://voicesunveiled.org", BASE_PATH)
    html = html.replace("http://voicesunveiled.org", BASE_PATH)
    html = html.replace("//voicesunveiled.org/", BASE_PATH + "/")
    # Los iframes de donación y los gform deben seguir apuntando al original
    html = html.replace(f'src="{BASE_PATH}/?givewp-route', f'src="{ORIGIN}/?givewp-route')
    html = html.replace(f"action='{BASE_PATH}/", f"action='{ORIGIN}/")
    # Referencias a la API/admin que sobrevivan → al original (evitan 404 en nuestro host)
    esc_base = BASE_PATH.replace("/", "\\/")
    esc_origin = ORIGIN.replace("/", "\\/")
    for p in ("/wp-json", "/wp-admin", "/wp-login.php", "/xmlrpc.php", "/?give", "/?post_type=give_forms"):
        esc_p = p.replace("/", "\\/")
        html = html.replace(esc_base + esc_p, esc_origin + esc_p)  # variante escapada (JSON en scripts)
        html = re.sub(r"(?<![\\\w])" + re.escape(BASE_PATH + p), ORIGIN + p, html)  # no tocar la forma escapada
    html = html.replace(ORIGIN + ORIGIN, ORIGIN)  # evita duplicar el origen cuando BASE_PATH es ""
    return html


def process_css(css: str) -> str:
    css = re.sub(r"(voicesunveiled\.org/[^\s\"')?#]+)\?[^\s\"')#]*", r"\1", css)
    css = css.replace("https://voicesunveiled.org", BASE_PATH).replace("//voicesunveiled.org/", BASE_PATH + "/")
    return css


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    src = sys.argv[1].rstrip("/")
    out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(__file__), "..", "site")
    out = os.path.abspath(out)
    if os.path.isdir(out):
        shutil.rmtree(out)
    count = 0
    for root, _dirs, files in os.walk(src):
        rel_root = os.path.relpath(root, src)
        for name in files:
            # quitar '@query' añadido por wget (style.css@ver=1.css → style.css)
            clean = re.sub(r"@[^/]*$", "", name)
            if clean != name:
                base_ext = re.search(r"@[^/]*?(\.[a-z0-9]+)$", name)
                # wget añade .css/.html tras el query; conservamos la extensión real del archivo
                if base_ext and not clean.endswith(base_ext.group(1)):
                    pass
            rel = os.path.normpath(os.path.join(rel_root, clean))
            if rel.startswith("wp-json") or rel.startswith("feed") or rel.startswith("xmlrpc"):
                continue
            if rel_root == "." and rel.endswith(".html") and rel != "index.html":
                continue  # redirecciones del original; se cubren con .htaccess
            dst = os.path.join(out, rel)
            if os.path.exists(dst):
                continue  # ya existe versión sin query
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            path = os.path.join(root, name)
            if rel.endswith(".html"):
                with open(path, encoding="utf-8", errors="replace") as f:
                    data = f.read()
                with open(dst, "w", encoding="utf-8") as f:
                    f.write(process_html(data))
            elif rel.endswith("modules/image-gallery.min.js"):
                with open(path, encoding="utf-8", errors="replace") as f:
                    data = f.read()
                data = data.replace("fetchCaptionsFromMedia(){const t=window.location.origin;", f'fetchCaptionsFromMedia(){{const t="{ORIGIN}";')
                with open(dst, "w", encoding="utf-8") as f:
                    f.write(data)
            elif rel.endswith(".css"):
                with open(path, encoding="utf-8", errors="replace") as f:
                    data = f.read()
                with open(dst, "w", encoding="utf-8") as f:
                    f.write(process_css(data))
            else:
                shutil.copy2(path, dst)
            count += 1
    # .htaccess: cache de assets y páginas limpias
    with open(os.path.join(out, ".htaccess"), "w") as f:
        f.write(
            "DirectoryIndex index.html\n"
            "Options -Indexes\n"
            "<IfModule mod_rewrite.c>\n  RewriteEngine On\n"
            "  RewriteCond %{HTTPS} !=on\n"
            "  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]\n"
            "</IfModule>\n"
            + "".join(f"RedirectMatch 301 ^{BASE_PATH}/{a}/?$ {BASE_PATH}/{b}\n" for a, b in REDIRECTS)
            +
            "<IfModule mod_expires.c>\n  ExpiresActive On\n"
            "  ExpiresByType image/jpeg \"access plus 30 days\"\n  ExpiresByType image/png \"access plus 30 days\"\n"
            "  ExpiresByType image/webp \"access plus 30 days\"\n  ExpiresByType image/svg+xml \"access plus 30 days\"\n"
            "  ExpiresByType text/css \"access plus 7 days\"\n  ExpiresByType application/javascript \"access plus 7 days\"\n"
            "</IfModule>\n"
        )
    print(f"{count} archivos escritos en {out}")


if __name__ == "__main__":
    main()
