One-line: The brand's pill-shaped action button — primary plum for the strongest CTAs, with secondary/soft/ghost for supporting and low-pressure actions.

```jsx
<Button variant="primary" size="lg">Donate Now</Button>
<Button variant="secondary">Read Her Story</Button>
<Button variant="soft">Join Our Newsletter</Button>
```

Variants: `primary` / `donate` (Deep Plum, white text, darkens on hover) ·
`secondary` (plum outline, faint plum fill on hover) · `soft` (warm beige,
plum text — for newsletter / read more) · `ghost` (text-only).
Sizes `sm | md | lg`. Supports `iconLeft` / `iconRight` (pass a Lucide `<i>` or
SVG), `fullWidth`, `disabled`. Always pill-radius; press compresses to 0.98;
3px terracotta focus ring for keyboard users.
