import React from "react";
import { Button } from "../core/Button.jsx";

/**
 * Student story card — ivory ground, serif quote, minimal details,
 * donation-linked CTA. Focuses on agency and resilience, not trauma.
 */
export function StoryCard({
  name,
  age,
  country = "Afghanistan",
  quote,
  image = null,
  ctaLabel = "Read Her Story",
  onCta,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        background: "var(--ivory)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow-sm)",
        ...style,
      }}
      {...rest}
    >
      {image && (
        <div style={{ height: "180px", overflow: "hidden" }}>
          <img src={image} alt={`Portrait of ${name}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      )}
      <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        <div>
          <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "16px", color: "var(--text-strong)" }}>
            {name}{age ? `, ${age}` : ""}
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-muted)" }}>{country}</div>
        </div>
        <blockquote
          style={{
            margin: 0,
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "18px",
            lineHeight: 1.5,
            color: "var(--plum)",
            flex: 1,
          }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div style={{ marginTop: "auto" }}>
          <Button variant="secondary" size="sm" onClick={onCta}>{ctaLabel}</Button>
        </div>
      </div>
    </div>
  );
}
