import React from "react";

const TONES = {
  plum: { background: "var(--plum)", color: "var(--ivory)" },
  gold: { background: "var(--gold)", color: "var(--charcoal)" },
  terracotta: { background: "var(--terracotta)", color: "#fff" },
  success: { background: "var(--success)", color: "#fff" },
  danger: { background: "var(--danger)", color: "#fff" },
};

/** Solid status/count badge — stronger than a Tag. */
export function Badge({ children, tone = "plum", style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-sans)",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        padding: "4px 9px",
        borderRadius: "var(--radius-pill)",
        ...TONES[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
