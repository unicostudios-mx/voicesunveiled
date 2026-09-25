import React from "react";

let _id = 0;

/** Form field wrapper: visible label, optional hint, error message. */
export function Field({ label, hint, error, required = false, children, style = {}, ...rest }) {
  const id = React.useMemo(() => `vu-field-${++_id}`, []);
  const child = React.isValidElement(children)
    ? React.cloneElement(children, { id, invalid: !!error })
    : children;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontFamily: "var(--font-sans)", ...style }} {...rest}>
      <label htmlFor={id} style={{ fontSize: "14px", fontWeight: 600, color: "var(--text-strong)" }}>
        {label}
        {required && <span style={{ color: "var(--terracotta)", marginLeft: "3px" }}>*</span>}
      </label>
      {hint && !error && <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>{hint}</span>}
      {child}
      {error && <span style={{ fontSize: "13px", color: "var(--danger)" }}>{error}</span>}
    </div>
  );
}
