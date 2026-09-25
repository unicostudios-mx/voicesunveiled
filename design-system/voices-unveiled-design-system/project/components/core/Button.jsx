import React from "react";

const SIZES = {
  sm: { padding: "9px 18px", fontSize: "14px" },
  md: { padding: "13px 26px", fontSize: "15px" },
  lg: { padding: "16px 32px", fontSize: "16px" },
};

/**
 * Voices Unveiled primary action button.
 * Variants: primary (Deep Plum), secondary (plum outline),
 * soft (warm beige), ghost, donate (always-visible plum).
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = "button",
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "9px",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    lineHeight: 1,
    border: "1.5px solid transparent",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur) var(--ease-out), color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    width: fullWidth ? "100%" : "auto",
    whiteSpace: "nowrap",
    ...SIZES[size],
  };

  const variants = {
    primary: { background: "var(--plum)", color: "var(--text-on-primary)" },
    donate: { background: "var(--plum)", color: "var(--text-on-primary)" },
    secondary: {
      background: "transparent",
      color: "var(--plum)",
      borderColor: "var(--plum)",
    },
    soft: { background: "var(--terracotta-100)", color: "var(--plum)" },
    ghost: { background: "transparent", color: "var(--plum)" },
  };

  const hovers = {
    primary: (e, on) => (e.currentTarget.style.background = on ? "var(--plum-700)" : "var(--plum)"),
    donate: (e, on) => (e.currentTarget.style.background = on ? "var(--plum-700)" : "var(--plum)"),
    secondary: (e, on) => (e.currentTarget.style.background = on ? "rgba(75,33,66,0.06)" : "transparent"),
    soft: (e, on) => (e.currentTarget.style.background = on ? "#EACBBC" : "var(--terracotta-100)"),
    ghost: (e, on) => (e.currentTarget.style.background = on ? "rgba(75,33,66,0.06)" : "transparent"),
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => !disabled && hovers[variant](e, true)}
      onMouseLeave={(e) => !disabled && hovers[variant](e, false)}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => !disabled && (e.currentTarget.style.transform = "scale(1)")}
      onFocus={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-focus)")}
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
