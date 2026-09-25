import React from "react";

/**
 * Large testimonial block — one of the brand's strongest emotional assets.
 * Big serif quote, terracotta quote mark, minimal attribution.
 */
export function Testimonial({
  quote,
  name,
  detail = "Afghanistan",
  cta = null,
  tone = "ivory",
  style = {},
  ...rest
}) {
  const grounds = {
    ivory: { background: "var(--ivory)", color: "var(--text-strong)", quoteColor: "var(--plum)" },
    sage: { background: "var(--sage-100)", color: "var(--text-strong)", quoteColor: "var(--plum)" },
    dark: { background: "var(--midnight)", color: "var(--ivory)", quoteColor: "var(--ivory)" },
  };
  const g = grounds[tone];
  return (
    <figure
      style={{
        margin: 0,
        background: g.background,
        borderRadius: "var(--radius-xl)",
        padding: "44px 48px",
        position: "relative",
        ...style,
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "72px",
          lineHeight: 0.6,
          color: "var(--terracotta)",
          display: "block",
          marginBottom: "8px",
        }}
      >
        &ldquo;
      </span>
      <blockquote
        style={{
          margin: 0,
          fontFamily: "var(--font-serif)",
          fontSize: "26px",
          lineHeight: 1.45,
          color: g.quoteColor,
        }}
      >
        {quote}
      </blockquote>
      <figcaption style={{ marginTop: "22px", fontFamily: "var(--font-sans)" }}>
        <div style={{ fontWeight: 600, fontSize: "16px", color: g.color }}>{name}</div>
        <div style={{ fontSize: "14px", color: tone === "dark" ? "rgba(250,246,239,0.7)" : "var(--text-muted)" }}>{detail}</div>
      </figcaption>
      {cta && <div style={{ marginTop: "24px" }}>{cta}</div>}
    </figure>
  );
}
