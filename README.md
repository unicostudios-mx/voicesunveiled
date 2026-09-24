# Voices Unveiled — sitio estático

Versión en código propio de <https://voicesunveiled.org/>, sin WordPress.
Se publica en <https://unicopartners.com.mx/voicesunveiled/> (HostGator).

## Estructura

| Ruta | Contenido |
|------|-----------|
| `site/` | Sitio listo para publicar (HTML, CSS, JS, imágenes, PDFs). Es lo que se sube al hosting. |
| `tools/fetch.sh` | Descarga una copia del sitio WordPress original. |
| `tools/pages.txt` | Páginas y posts no enlazados desde el menú que también se copian. |
| `tools/build.py` | Convierte la copia en sitio estático bajo `/voicesunveiled`. |
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
`HOSTGATOR_REMOTE_DIR` (por defecto `unicopartners.com.mx/voicesunveiled`).

Para servir desde otra ruta (por ejemplo la raíz de un dominio propio) regenera con
`BASE_PATH=/ tools/build.py …` o `BASE_PATH=""`.

## Qué sigue dependiendo del WordPress original (por ahora)

- **Formularios de donación (GiveWP + Stripe):** se muestran en un iframe cargado desde voicesunveiled.org.
- **Formularios Gravity Forms** (Student Application, WhatsApp Community) envían al sitio original.
- **Formulario de contacto y suscripción a Mailchimp** (Thrive Lead Generation): el envío requiere el backend de WordPress; hay que reemplazarlo por un servicio de formularios o un endpoint propio.
- **Tienda (WooCommerce)** y páginas de cuenta/carrito: no se copiaron.
