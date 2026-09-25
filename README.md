# Voices Unveiled — sitio estático

Sitio de <https://voicesunveiled.org/> reconstruido en código propio (HTML, CSS y JS estáticos, sin WordPress),
siguiendo el design system "The Voice & Dignity" (`design-system/`).
Se publica en <https://voicesunveiled.unicopartners.com.mx/> (HostGator).

## Estructura

| Ruta | Contenido |
|------|-----------|
| `content/site.yml` | Configuración global: nombre, contacto, enlaces externos, navegación, pie. |
| `content/data.yml` | Datos estructurados: cifras de impacto, programas, electivas, niveles de donación, FAQ, testimonios, prensa. |
| `content/stories/*.md` | Historias de estudiantes (front matter + Markdown). |
| `content/blog/*.md` | Artículos del blog (front matter + Markdown). |
| `templates/` | Plantillas Jinja2: `base.html`, `partials/` (header, footer, macros, iconos) y `pages/`. |
| `assets/` | `css/site.css` (tokens + componentes), `js/site.js`, `img/`, `docs/` (reportes PDF). |
| `site/` | **Salida generada.** Es lo que se publica. No editar a mano. |
| `design-system/` | Handoff de Claude Design con tokens, componentes y guías del diseño. |
| `tools/build_site.py` | Genera `site/` a partir de contenido, plantillas y assets. |
| `tools/deploy.py` | Sube `site/` a HostGator por SFTP/FTP (`--prune` borra en el servidor lo que ya no existe). |
| `tools/legacy/` | Herramientas de la primera fase (copia del WordPress original). |

## Flujo de trabajo

```bash
pip install jinja2 markdown pyyaml
python3 tools/build_site.py          # genera site/
python3 -m http.server -d site 8000  # previsualizar en http://localhost:8000
git add -A && git commit && git push # el workflow de GitHub Actions publica site/ en HostGator
```

Para publicar hace falta que `site/` esté regenerado y commiteado: el workflow `.github/workflows/deploy.yml`
sube el contenido de `site/` con las credenciales guardadas como secretos del repositorio
(`HOSTGATOR_FTP_HOST`, `HOSTGATOR_FTP_USER`, `HOSTGATOR_FTP_PASS`, `HOSTGATOR_FTP_PORT`).

## Cómo editar contenido

- **Textos de una página:** edita la plantilla en `templates/pages/`.
- **Cifras, programas, testimonios, FAQ, niveles de donación:** `content/data.yml`.
- **Nueva historia de estudiante:** crea `content/stories/<nombre>.md` con `name, age, location, quote, image`.
- **Nuevo artículo:** crea `content/blog/<slug>.md` con `title, date, image, excerpt` y el cuerpo en Markdown.
- **Enlaces y navegación:** `content/site.yml`.

Las URLs antiguas del WordPress redirigen a las nuevas (ver `REDIRECTS` en `tools/build_site.py`).

## Documentos de la organización implementados (sep 2026)

- **Donate page (DAF/QCD):** donación mensual por defecto, opción "Other", secciones de donor-advised fund y
  IRA/QCD con el nombre legal (Café de la Culture) y EIN visibles; nombre legal también en el pie.
- **Website updates 6/26:** citas de Valarie Kaur, @crystaldawnalchemy y R. (13) añadidas a testimonios, portada e impacto.
- **VU Courses:** página de educación holística alineada con el documento; foto sugerida incorporada.
- **Website Notes 1/26:** diseño responsivo, un solo flujo de donación (única/mensual), testimonios completos.
  El termómetro de donantes mensuales no es posible en un sitio estático (queda en backlog).

## Backlog

- **Donaciones:** los botones llevan a las páginas de donación del WordPress original (GiveWP + Stripe),
  igual que las campañas de emergencia. Pendiente migrar a Stripe Payment Links / PayPal propios
  (`donate_url`, `monthly_url` y `emergency_campaigns` en `content/`).
- **Formulario de contacto:** sin `contact_endpoint` en `site.yml`, abre el cliente de correo con el mensaje
  prellenado. Configurar un servicio (Formspree, Web3Forms) o endpoint propio.
- **Formularios de Student Application y WhatsApp Community:** enlazan al WordPress original.
- **Newsletter:** usa el formulario alojado de Mailchimp (funciona sin backend).
- **The Reclamation:** el botón de reserva lleva a la página de pago del WordPress original.
- **Termómetro de donantes mensuales:** requiere datos en vivo de la plataforma de donación.
- **Dominio:** cuando se apunte `voicesunveiled.org` a HostGator, cambiar `base_url` en `site.yml`.
