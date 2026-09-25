import React from "react";

/**
 * Required notice wherever student stories/images appear.
 * Soft sage ground = care. Defaults to the canonical brand copy.
 */
export function SafetyNote({
  children = "Some names, images, or identifying details may be changed to protect student safety.",
  style = {},
  ...rest
}) {
  return (
    <div
      role="note"
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
        background: "var(--sage-100)",
        border: "1px solid rgba(105,124,99,0.25)",
        borderRadius: "var(--radius-md)",
        padding: "12px 16px",
        fontFamily: "var(--font-sans)",
        fontSize: "13.5px",
        lineHeight: 1.5,
        color: "#3F4D3C",
        ...style,
      }}
      {...rest}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A6E54" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: "1px" }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <span>{children}</span>
    </div>
  );
}
