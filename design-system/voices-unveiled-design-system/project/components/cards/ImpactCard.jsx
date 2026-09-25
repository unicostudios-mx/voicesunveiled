import React from "react";

/**
 * Impact statistic card — large plum number, gold accent rule, short caption.
 * Used on homepage, impact, and donation pages.
 */
export function ImpactCard({ value, label, icon = null, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        padding: "26px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        ...style,
      }}
      {...rest}
    >
      {icon && <div style={{ color: "var(--terracotta)", marginBottom: "2px" }}>{icon}</div>}
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 700,
          fontSize: "44px",
          lineHeight: 1,
          color: "var(--plum)",
        }}
      >
        {value}
      </div>
      <div style={{ width: "32px", height: "3px", borderRadius: "2px", background: "var(--gold)" }} />
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          lineHeight: 1.45,
          color: "var(--text-muted)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
