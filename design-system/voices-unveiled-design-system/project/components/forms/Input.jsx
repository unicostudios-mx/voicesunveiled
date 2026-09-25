import React from "react";

/** Text input / textarea with brand focus ring. Use inside <Field>. */
export function Input({
  as = "input",
  invalid = false,
  style = {},
  ...rest
}) {
  const Tag = as;
  const base = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    fontSize: "16px",
    color: "var(--text-strong)",
    background: "var(--white)",
    border: `1.5px solid ${invalid ? "var(--danger)" : "var(--border-default)"}`,
    borderRadius: "var(--radius-md)",
    padding: as === "textarea" ? "12px 14px" : "12px 14px",
    minHeight: as === "textarea" ? "112px" : "auto",
    resize: as === "textarea" ? "vertical" : undefined,
    outline: "none",
    transition: "border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)",
  };
  return (
    <Tag
      style={{ ...base, ...style }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = "var(--plum)";
        e.currentTarget.style.boxShadow = "var(--shadow-focus)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = invalid ? "var(--danger)" : "var(--border-default)";
        e.currentTarget.style.boxShadow = "none";
      }}
      {...rest}
    />
  );
}
