# Voices Unveiled — Website UI Kit

A high-fidelity, interactive recreation of the Voices Unveiled marketing site,
composed entirely from the design-system components in `../../components`.

## Run
Open `index.html`. It loads the compiled `_ds_bundle.js` and the page modules
below, then renders an app shell with working navigation.

## Flow
- **Home** — hero, mission, 2024 impact numbers, student stories, programs,
  testimonial, volunteer CTA.
- **Donate** — campaign banner, donation impact selector (sticky), testimonial,
  FAQ. Clicking any "Donate / Sponsor" CTA routes here.
- **Impact** — headline, key numbers, program outcomes, annual-report download.
- **Stories** — browsable story cards with the required safety note; "Volunteer"
  routes here as a placeholder.

## Files
- `index.html` — app shell + client-side routing.
- `SiteChrome.jsx` — `SiteHeader`, `SiteFooter`.
- `Decor.jsx` — `VeilArt`, `PhotoSlot`, `Eyebrow`, `Section`, `SerifH2` helpers.
- `HomePage.jsx`, `DonatePage.jsx`, `ImpactStories.jsx` — page screens.

## Notes
- **Imagery:** real, consented student photography is intentionally represented by
  abstract brand art (`VeilArt`) and labeled `PhotoSlot` placeholders rather than
  stock photos of women — a deliberate dignity & safety choice. Replace
  `PhotoSlot`s with approved photography in production.
- All copy uses the brand voice and real 2024 impact figures from the annual report.
- Components are consumed via `window.VoicesUnveiledDesignSystem_cb8f0b`; helper
  components are shared across Babel scripts via `Object.assign(window, …)`.
