#!/usr/bin/env python3
"""
Genera el sitio estático de Voices Unveiled en site/ a partir de:
  content/site.yml      configuración global (nombre, enlaces, navegación)
  content/data.yml      datos estructurados (impacto, programas, testimonios…)
  content/stories/*.md  historias de estudiantes (front matter + Markdown)
  content/blog/*.md     artículos del blog (front matter + Markdown)
  templates/            plantillas Jinja2 (base, partials, pages)
  assets/               CSS, JS, imágenes y documentos (se copian tal cual)

Uso:  python3 tools/build_site.py
Requiere: jinja2, markdown, pyyaml  (pip install jinja2 markdown pyyaml)
"""
import datetime as dt
import hashlib
import os
import re
import shutil
import sys

import markdown
import yaml
from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
CONTENT = os.path.join(ROOT, "content")
TEMPLATES = os.path.join(ROOT, "templates")
ASSETS = os.path.join(ROOT, "assets")
OUT = os.path.join(ROOT, "site")

# Rutas antiguas (WordPress) → nuevas. Se escriben como RedirectMatch en .htaccess.
REDIRECTS = [
    ("about-new", "/about/"), ("team", "/about/#founder"),
    ("services", "/programs/self-empowerment-course/"), ("empowerment-course", "/programs/self-empowerment-course/"),
    ("holistic-and-integrative-education", "/programs/holistic-education/"),
    ("emergency-assistance", "/programs/emergency-assistance/"),
    ("distinguished-guest-speakers", "/programs/guest-speakers/"),
    ("student-stories", "/stories/"), ("student-reviews", "/impact/testimonials/#students"),
    ("supporter-testimonials", "/impact/testimonials/#supporters"),
    ("donate-now", "/donate/"), ("become-a-monthly-donor", "/donate/monthly/"),
    ("donations/.*", "/donate/emergency-funds/"), ("emergency-funds-for-.*", "/donate/emergency-funds/"),
    ("emergency-fund", "/donate/emergency-funds/"), ("time-is-running-out", "/donate/"),
    ("get-involved", "/donate/"),
    ("privacy-policy", "/privacy/"), ("guide", "/safety-guide/"), ("resources", "/impact/"),
    ("podcast", "/about/#media"), ("blogroll", "/blog/"), ("category/.*", "/blog/"),
    ("z-live-broadcast-for-change", "/about/#media"), ("hello-world", "/blog/"), ("new-blog-post", "/blog/"),
    ("student-application", "https://voicesunveiled.org/student-application/"),
]


def load_yaml(name):
    with open(os.path.join(CONTENT, name), encoding="utf-8") as f:
        return yaml.safe_load(f)


def load_md_dir(sub):
    """Lee *.md con front matter YAML; devuelve lista de dicts con html/slug."""
    items = []
    d = os.path.join(CONTENT, sub)
    for name in sorted(os.listdir(d)):
        if not name.endswith(".md"):
            continue
        with open(os.path.join(d, name), encoding="utf-8") as f:
            raw = f.read()
        m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
        meta = yaml.safe_load(m.group(1)) if m else {}
        body = m.group(2) if m else raw
        html = markdown.markdown(body, extensions=["extra", "smarty"], output_format="html5")
        item = dict(meta)
        item["slug"] = name[:-3]
        item["html"] = html
        if "date" in item:
            d0 = item["date"] if isinstance(item["date"], dt.date) else dt.date.fromisoformat(str(item["date"]))
            item["date"] = d0
            item["date_display"] = d0.strftime("%B %-d, %Y")
        items.append(item)
    return items


def write(path, content):
    full = os.path.join(OUT, path.lstrip("/"))
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)


def main():
    site = load_yaml("site.yml")
    data = load_yaml("data.yml")
    stories = load_md_dir("stories")
    posts = sorted(load_md_dir("blog"), key=lambda p: p["date"], reverse=True)

    build_id = hashlib.sha1(str(dt.datetime.now()).encode()).hexdigest()[:8]
    today = dt.date.today()

    env = Environment(loader=FileSystemLoader(TEMPLATES), autoescape=select_autoescape(["html"]), trim_blocks=True, lstrip_blocks=True)
    base_ctx = dict(site=site, data=data, stories=stories, posts=posts, build_id=build_id,
                    build_year=today.year, build_date=today.strftime("%B %-d, %Y"))

    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    os.makedirs(OUT)

    pages = []  # (url, template, page-meta, extra-context)

    def add(url, template, title, description=None, section=None, image=None, **extra):
        pages.append((url, template, dict(url=url, title=title, description=description, section=section, image=image), extra))

    add("/", "pages/home.html", None, site["description"], section=None)
    add("/about/", "pages/about.html", "About", "Voices Unveiled empowers Afghan women with free online education, mental health support, leadership development and community building. Together, we shape brighter futures.", "About Us")
    add("/programs/", "pages/programs.html", "Programs", "Offered free of charge through Cafe de la Culture, our programs produce tangible improvements in knowledge of women's studies, self-expression, self-compassion, confidence, and optimism.", "Programs")
    add("/programs/self-empowerment-course/", "pages/program-course.html", "Empowerment Course", "Sponsor a student in Afghanistan, for a full 3 month intensive self-empowerment course. Help us build brighter futures - women are the key to making peace that lasts.", "Programs")
    add("/programs/holistic-education/", "pages/program-holistic.html", "Holistic and Integrative Education", "Every woman and girl in Afghanistan deserves not just education, but the emotional strength, healing, and community support to truly thrive.", "Programs")
    add("/programs/emergency-assistance/", "pages/program-emergency.html", "Emergency Assistance", "We are committed to raising funds to meet the critical food and medical needs of our students.", "Programs")
    add("/programs/guest-speakers/", "pages/program-speakers.html", "Distinguished Guest Speakers", "Our guest speakers bring stories, wisdom, and inspiration that leave a lasting impact on our students.", "Programs")
    add("/impact/", "pages/impact.html", "Impact", "Read our 2025 and 2024 Annual Impact Reports.", "Impact")
    add("/impact/testimonials/", "pages/testimonials.html", "Testimonials", "Student and supporter testimonials.", "Impact")
    add("/stories/", "pages/stories.html", "Student Stories", "Student stories from Voices Unveiled.", "Impact")
    for i, s in enumerate(stories):
        related = [x for x in stories if x["slug"] != s["slug"]][i % 7:i % 7 + 3] or stories[:3]
        add(f"/stories/{s['slug']}/", "pages/story.html", f"{s['name']}, Age {s['age']}, {s['location']}", s["quote"], "Impact", s["image"], story=s, related=related)
    add("/blog/", "pages/blog.html", "Blog", "Blog - Voices Unveiled.", "Blog")
    for i, p in enumerate(posts):
        related = [x for x in posts if x["slug"] != p["slug"]][:3]
        add(f"/blog/{p['slug']}/", "pages/post.html", p["title"], p.get("excerpt"), "Blog", p.get("image"), post=p, related=related)
    add("/volunteer/", "pages/volunteer.html", "Volunteer", "We are a grassroots organization built on volunteer work and heart. Here are several ways you can contribute.", "Get Involved")
    add("/work-with-us/", "pages/work-with-us.html", "Work With Us", "If you're passionate about gender equality, digital safety and education, and you want your skills to directly support women in crisis, we'd love to hear from you.", "Get Involved")
    add("/donate/", "pages/donate.html", "Donate Now", "This is our moment to choose hope. Every dollar keeps hope alive.", "Get Involved")
    add("/donate/now/", "pages/donate-now.html", "Donate now", "Complete your gift to Voices Unveiled: choose an amount, one-time or monthly.", "Get Involved")
    add("/donate/monthly/", "pages/donate-monthly.html", "Become a Monthly Lifeline", "Your ongoing support fuels education, safety, and opportunity for Afghan women and girls, month after month.", "Get Involved")
    add("/donate/emergency-funds/", "pages/emergency-funds.html", "Support Emergency Medical and Relief Aid", "Emergency funds for students and families in crisis.", "Get Involved")
    add("/contact/", "pages/contact.html", "Contact", "Get in touch with Voices Unveiled.", "Get Involved")
    add("/whatsapp-community/", "pages/whatsapp.html", "Whatsapp Community", "Join the Voices Unveiled WhatsApp Community.", "Get Involved")
    add("/privacy/", "pages/privacy.html", "Privacy Policy", "Privacy Policy - Voices Unveiled.", None)
    add("/safety-guide/", "pages/safety-guide.html", "Guide", "Online safety guide for students.", None)
    add("/reclamation/", "pages/reclamation.html", "The Reclamation: a 12-week global immersion", "A live, intimate workshop for women leaders, creatives, and changemakers ready to come home to themselves.", None, "/assets/img/reclamation/hero.jpg")
    add("/404/", "pages/404.html", "Page not found", None, None)

    for url, template, page, extra in pages:
        html = env.get_template(template).render(page=page, **base_ctx, **extra)
        write(url + "index.html", html)
    shutil.move(os.path.join(OUT, "404", "index.html"), os.path.join(OUT, "404.html"))
    os.rmdir(os.path.join(OUT, "404"))

    # Assets
    shutil.copytree(ASSETS, os.path.join(OUT, "assets"))

    # sitemap + robots
    urls = [u for u, *_ in pages if u != "/404/"]
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        sm.append(f"  <url><loc>{site['base_url']}{u}</loc><lastmod>{today.isoformat()}</lastmod></url>")
    sm.append("</urlset>")
    write("/sitemap.xml", "\n".join(sm) + "\n")
    write("/robots.txt", f"User-agent: *\nAllow: /\nSitemap: {site['base_url']}/sitemap.xml\n")

    # .htaccess: https, índices limpios, redirecciones antiguas, 404, caché
    ht = ["DirectoryIndex index.html", "Options -Indexes", "ErrorDocument 404 /404.html",
          "<IfModule mod_rewrite.c>", "  RewriteEngine On",
          "  RewriteCond %{HTTPS} !=on", "  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]",
          "</IfModule>"]
    for old, new in REDIRECTS:
        ht.append(f"RedirectMatch 301 ^/{old}/?$ {new}")
    ht += ["<IfModule mod_expires.c>", "  ExpiresActive On",
           '  ExpiresByType image/jpeg "access plus 30 days"', '  ExpiresByType image/png "access plus 30 days"',
           '  ExpiresByType image/webp "access plus 30 days"', '  ExpiresByType image/svg+xml "access plus 30 days"',
           '  ExpiresByType text/css "access plus 7 days"', '  ExpiresByType application/javascript "access plus 7 days"',
           '  ExpiresByType application/pdf "access plus 30 days"', "</IfModule>",
           "<IfModule mod_deflate.c>", "  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml", "</IfModule>"]
    write("/.htaccess", "\n".join(ht) + "\n")

    n = sum(len(f) for _, _, f in os.walk(OUT))
    print(f"{len(pages)} páginas, {n} archivos en {OUT}")


if __name__ == "__main__":
    sys.exit(main())
