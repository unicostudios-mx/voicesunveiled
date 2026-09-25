import React from "react";

const TONES = {
  plum: { background: "rgba(75,33,66,0.08)", color: "var(--plum)" },
  terracotta: { background: "var(--terracotta-100)", color: "var(--terracotta-700)" },
  gold: { background: "var(--gold-100)", color: "#8A6A14" },
  sage: { background: "var(--sage-100)", color: "#4A5C46" },
  midnight: { background: "rgba(31,42,68,0.08)", color: "var(--midnight)" },
  neutral: { background: "var(--warm-gray-100)", color: "var(--text-muted)" },
};

/** Small pill label for program categories, topics, filters. */
export function Tag({ children, tone = "plum", style = {}, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-sans)",
        fontSize: "13px",
        fontWeight: 500,
        padding: "5px 12px",
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
