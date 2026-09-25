# Voices Unveiled — The Voice & Dignity Design System

> **Dignified. Human. Safe. Empowering. Hopeful.**
> A serious, warm, and hopeful digital refuge for Afghan women and girls.

Voices Unveiled is a nonprofit digital platform supporting Afghan women and girls
through free online education, mental health support, leadership development,
emergency assistance, volunteering, storytelling, and donation campaigns. This
design system — internally **The Voice & Dignity System** — encodes the brand's
visual language, voice, and reusable interface so donors, volunteers, and students
can quickly understand the mission, trust the organization, and take action.

The core creative concept is **voices emerging from silence**: education,
confidence, community, and voice reclaimed. The brand is feminine but not fragile,
serious but not cold, empowering — never victimizing.

---

## Sources

These materials were provided and informed the system. The reader may not have
access; they are recorded for provenance.

- **Logo** — `uploads/Voices-Unveiled_Logo_crop.png` (copied to `assets/logo-full.png`).
  Full-color illustrated mark: a woman in a patterned veil above the "VOICES /
  UNVEILED" wordmark.
- **2024 Annual Impact Report** — `uploads/VOICES-UNVEILED-2024-ANNUAL-REPORT-1.pdf`
  (9 pages). Source of real impact data and program/voice copy. Executive Director:
  Cara Cruickshank. Site: voicesunveiled.org.
- **Brand brief** — the written "Voices Unveiled Design System" notes supplied with
  this project (palette, type, components, patterns, voice, safety).

**Real 2024 impact data** (use these, not invented numbers): 115 scholarships
raised & awarded · 50 students given internet funding · 20 intern graduates ·
8 active volunteers (20 volunteers mobilized) · 8 ongoing mentorships · 2 full
semesters of the flagship self-empowerment course · trauma-informed therapy for
5 students.

---

## The five parts of the system

1. **Foundations** — color, typography, spacing, imagery (`tokens/`, `guidelines/`).
2. **Components** — buttons, cards, forms, testimonials, donation blocks (`components/`).
3. **Patterns** — donation journey, story / impact / program pages (`ui_kits/`).
4. **Voice** — tone, copywriting, storytelling rules (this readme).
5. **Safety** — privacy, consent, dignity, responsible representation (this readme).

---

## A note on fonts

Headings use **Libre Baskerville**; body/UI uses **Inter**; multilingual content
uses **Noto Naskh Arabic / Noto Sans**. All three are loaded from the Google Fonts
CDN via `tokens/fonts.css` (no binaries are committed). **If you need offline /
self-hosted binaries, please supply the font files and we'll swap the `@import`
for self-hosted `@font-face` rules.**

## A note on the palette vs. the logo

The brief specifies a refined palette led by **Deep Plum** with terracotta, hope
gold, sage, midnight blue on a soft ivory ground. The existing illustrated logo
uses a warmer teal / terracotta / navy mix. This system follows the **brief's
palette** as the canonical brand colors and treats the logo as fixed artwork that
sits on ivory/white. If you'd like the palette re-tuned toward the logo's teals,
that's a quick change — flag it.

---

## CONTENT FUNDAMENTALS

How Voices Unveiled writes. The voice is **empathetic, clear, empowering, and
direct** — it speaks *with dignity, not pity*.

**Person & address.** Speak to the donor/volunteer as **"you"**, and about the
organization as **"we"**. Center the reader's agency: *"Your gift keeps education,
connection, and hope alive."* Students are named with first name + age + country
(*"Arezou, 27 · Afghanistan"*), never reduced to their circumstances.

**Agency over victimhood.** Emphasize what women are reclaiming — learning,
healing, voice — not what was taken. ✅ *"Help Afghan women and girls continue
learning, healing, and reclaiming their voices."* ❌ *"These poor women have
nothing left."* Avoid trauma as spectacle; lead with resilience and transformation.

**Concrete, plain, active.** Short sentences. Real numbers tied to real outcomes
(*"$25 — internet access for one student"*). Always connect emotion to a clear
action. Trauma-related language is handled carefully and sparingly.

**Casing & punctuation.** Sentence case for body and most headings. Editorial
serif headlines may be a few impactful words (*"Keep her learning."*). Small
eyebrow labels use UPPERCASE with wide letter-spacing (e.g. `OUR IMPACT`).
Impact numbers are large and bare (`115`, `50`, `8`). Currency: `$25`, `$1,000`.

**Tone examples (verbatim brand microcopy).**
- Donation: *"Your gift keeps education, connection, and hope alive."*
- Volunteer: *"Share your skills. Help create a safe learning space."*
- Stories: *"Every story is shared with care and consent."*
- Newsletter: *"Receive updates on student stories, program impact, and ways to help."*

**Emoji.** Not used in the product UI. The brand voice is warm but serious;
warmth comes from language and color, not emoji. (Emoji appear in this readme only
as ✅/❌ editorial markers — never ship them in the interface.)

**CTA verbs.** Donate Now · Sponsor a Student · Give Monthly · Keep Her Learning ·
Read Her Story · See Our Impact · Become a Volunteer · Join Our Newsletter.

---

## VISUAL FOUNDATIONS

**Overall vibe.** A warm, protective, hopeful refuge. Soft ivory dominates; deep
plum anchors; terracotta and gold add humanity and light. Generous white space —
the surface should feel calm, never crowded.

**Color.** Deep Plum `#4B2142` for primary buttons, headlines, nav highlights.
Soft Ivory `#FAF6EF` as the dominant background. Terracotta `#C46A4A` for secondary
detail, icons, hover and emotional accents. Hope Gold `#E5B84B` *sparingly* — impact
numbers, small highlights, accent rules. Midnight Blue `#1F2A44` for footer,
reports, and institutional/credibility sections. Soft Sage `#A9B8A4` for mental
health / wellbeing / care contexts. Charcoal `#242124` body text; Warm Gray
`#6F6663` secondary text. Imagery skews **warm** and naturally lit — never cold,
desaturated, or grainy "crisis" photography.

**Typography.** Libre Baskerville (serif) carries emotion — headlines,
testimonials, story quotes. Inter (sans) carries function — nav, forms, buttons,
program copy. Headline scale 32–56px+, body 16–18px, leading ~1.55–1.7 for reading
comfort. Quotes are set large in serif, often with a terracotta opening quote mark.

**Spacing & layout.** 12-column grid, max content width 1120–1200px, long-form text
constrained to 680–760px. Section spacing 80–120px. Mobile: single column, sticky
or always-visible Donate button, stacked cards, large (≥44px) tap targets.

**Corner radii.** Pills (`999px`) for buttons and tags. Cards use soft 12–20px
radii. Nothing sharp-cornered; nothing cartoonishly round.

**Cards.** White or Soft Ivory fill, a thin subtle border (`--border-subtle`)
**or** a soft warm-tinted shadow (`--shadow-sm`/`--shadow-md`), 12–20px radius,
generous internal padding. Impact cards: large plum number, small gold accent rule,
short caption. Story cards: ivory ground, serif quote, minimal personal details,
safety note, donation-linked CTA.

**Shadows.** Soft and **warm-tinted** (plum/midnight alpha), never neutral gray.
`--shadow-sm` for resting cards, `--shadow-md` on hover/raised, `--shadow-lg` for
modals.

**Borders.** Hairline `1px` in warm neutrals for dividers and resting card edges;
plum/terracotta for emphasis and focus.

**Backgrounds.** Predominantly flat Soft Ivory or white. Dark institutional
sections use Midnight Blue. **Avoid** heavy gradients; if any depth is needed use a
very subtle ivory→deeper-ivory wash. Three subtle, optional graphic motifs may
texture large empty areas: **Thread** (a thin connecting line), **Veil/Layer**
(soft translucent overlapping shapes), **Voice Wave** (gentle sound-wave lines).
Use them quietly, never literally.

**Motion.** Gentle and reassuring. Fades and small (4–8px) rises with
`--ease-out`; durations 140–420ms. **No bounces, no springy overshoot.** Respect
`prefers-reduced-motion`.

**Hover states.** Primary buttons darken (plum → `--plum-700`). Secondary/ghost
fill with a faint plum tint. Cards lift with a slightly stronger shadow and a 2–4px
rise. Links gain terracotta underline. **Press states** compress subtly
(`scale(0.98)`) and deepen color — no big movement.

**Focus.** Always visible: a 3px terracotta focus ring (`--shadow-focus`) for
keyboard users; never removed.

**Transparency & blur.** Used sparingly — a translucent veil motif overlay, or a
subtle scrim over photography to protect text legibility (a soft plum/midnight
gradient scrim, not a hard black bar). Avoid trendy heavy glassmorphism.

**Imagery & safety.** Show learning, writing, online connection, community, hands,
notebooks, screens, natural light, safe educational settings. Avoid voyeuristic or
sensationalist imagery and the clichés of chains, cages, or dark silhouettes.
**Safety note** required wherever student stories/images appear: *"Some names,
images, or identifying details may be changed to protect student safety."*

---

## ICONOGRAPHY

No proprietary icon font or SVG sprite was provided with the source materials.

- **System icons** use **Lucide** (`https://unpkg.com/lucide@latest`), an open
  MIT-licensed set with a clean 1.5–2px stroke that matches the brand's gentle,
  modern, non-aggressive feel. *This is a substitution* — flagged for the user; if
  Voices Unveiled has a preferred icon set, supply it and we'll swap.
- **Stroke & style.** Outline (stroke) icons, 1.75px weight, rounded line caps,
  drawn in `--text-muted` or `--color-primary`; terracotta on hover/active. Sized
  18–24px inline, up to 32px in feature contexts. Decorative accents (e.g. impact
  cards) may tint icons gold sparingly.
- **No emoji** in product UI (see Content Fundamentals). No unicode glyphs as
  functional icons.
- **Logo** is illustrative artwork, not an icon — see `assets/logo-full.png` and
  logo-usage rules below. Keep clear space around it equal to the height of the
  "V"; place it on ivory/white, never over busy photography.

Icon usage in components/kits links Lucide from CDN and calls
`lucide.createIcons()` after render.

---

## Index / Manifest

**Root**
- `styles.css` — global entry (only `@import`s).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper for download/use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**`assets/`** — `logo-full.png` (and any added logo variants).

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown
in the Design System tab.

**`components/`** — reusable React primitives, each with `.jsx` + `.d.ts` +
`.prompt.md` + a `@dsCard` HTML:
- `core/` — `Button`, `Tag`, `Badge`, `SafetyNote`
- `cards/` — `ImpactCard`, `StoryCard`, `Testimonial`
- `donation/` — `DonationSelector`, `CampaignBanner`
- `forms/` — `Input`, `Field`

**`ui_kits/website/`** — high-fidelity recreation of the marketing site
(homepage, impact, story, donation flows) composed from the components.

To validate the system at any time, run the design-system check; it lists
components, cards, tokens, and any issues.
