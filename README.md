# Voices Unveiled — sitio estático

Versión en código propio de <https://voicesunveiled.org/>, sin WordPress.
Se publica en <https://voicesunveiled.unicopartners.com.mx/> (HostGator, carpeta `voicesunveiled.unicopartners.com.mx`).

## Estructura

| Ruta | Contenido |
|------|-----------|
| `site/` | Sitio listo para publicar (HTML, CSS, JS, imágenes, PDFs). Es lo que se sube al hosting. |
| `tools/fetch.sh` | Descarga una copia del sitio WordPress original. |
| `tools/pages.txt` | Páginas y posts no enlazados desde el menú que también se copian. |
| `tools/build.py` | Convierte la copia en sitio estático (rutas desde la raíz del dominio). |
| `tools/deploy.py` | Sube `site/` a HostGator por SFTP o FTP. |

## Flujo

```bash
tools/fetch.sh /tmp/vu-mirror                       # 1. copia del original (solo si se quiere re-sincronizar)
tools/build.py /tmp/vu-mirror/voicesunveiled.org    # 2. genera site/
tools/deploy.py --dry-run                           # 3. revisa qué se subiría
tools/deploy.py                                     # 4. publica
```

`deploy.py` lee las credenciales de las variables `HOSTGATOR_FTP_HOST`, `HOSTGATOR_FTP_USER`,
`HOSTGATOR_FTP_PASS`, `HOSTGATOR_FTP_PORT` (22 SFTP / 21 FTP) y opcionalmente
`HOSTGATOR_REMOTE_DIR` (por defecto `voicesunveiled.unicopartners.com.mx`).

Para servir desde una subcarpeta regenera con, por ejemplo,
`BASE_PATH=/voicesunveiled tools/build.py …`.

## Qué sigue dependiendo del WordPress original (por ahora)

- **Formularios de donación (GiveWP + Stripe):** se muestran en un iframe cargado desde voicesunveiled.org.
- **Formularios Gravity Forms** (Student Application, WhatsApp Community) envían al sitio original.
- **Formulario de contacto y suscripción a Mailchimp** (Thrive Lead Generation): el envío requiere el backend de WordPress; hay que reemplazarlo por un servicio de formularios o un endpoint propio.
- **Tienda (WooCommerce)** y páginas de cuenta/carrito: no se copiaron.

## Backlog

- **Formulario de donación (GiveWP):** no se muestra en la copia estática aunque se conserva el embed original
  (`donationFormBlockApp.js` + iframe a voicesunveiled.org). Pendiente de diagnosticar en navegador real;
  alternativa: enlazar a la página de donación del sitio original o migrar a un botón de Stripe/PayPal propio.
- **Contacto y suscripción a Mailchimp:** el envío depende de `admin-ajax.php` del WordPress original.
  Reemplazar por un servicio de formularios o un endpoint propio.
