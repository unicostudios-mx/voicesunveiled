import React from "react";
import { Button } from "../core/Button.jsx";

const DEFAULT_TIERS = [
  { amount: 25, impact: "Internet access for one student" },
  { amount: 50, impact: "Course materials and internet support" },
  { amount: 100, impact: "Emergency intervention or family support" },
  { amount: 300, impact: "One trimester of education for one student" },
  { amount: 1000, impact: "A year of education, coaching & counseling" },
];

/**
 * Donation impact selector — choose an amount and see what it makes possible,
 * with a monthly-giving toggle. Shows "where your money goes" by tier.
 */
export function DonationSelector({
  tiers = DEFAULT_TIERS,
  defaultAmount = 100,
  ctaLabel = "Donate Now",
  onDonate,
  style = {},
  ...rest
}) {
  const [amount, setAmount] = React.useState(defaultAmount);
  const [monthly, setMonthly] = React.useState(false);
  const selected = tiers.find((t) => t.amount === amount) || tiers[0];

  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-md)",
        padding: "28px",
        maxWidth: "440px",
        fontFamily: "var(--font-sans)",
        ...style,
      }}
      {...rest}
    >
      {/* monthly toggle */}
      <div style={{ display: "inline-flex", background: "var(--ivory-200)", borderRadius: "var(--radius-pill)", padding: "4px", marginBottom: "20px" }}>
        {[["One-time", false], ["Monthly", true]].map(([lbl, val]) => (
          <button
            key={lbl}
            onClick={() => setMonthly(val)}
            style={{
              border: "none",
              cursor: "pointer",
              padding: "8px 20px",
              borderRadius: "var(--radius-pill)",
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "inherit",
              background: monthly === val ? "var(--plum)" : "transparent",
              color: monthly === val ? "var(--ivory)" : "var(--text-muted)",
              transition: "background var(--dur) var(--ease-out)",
            }}
          >
            {lbl}
          </button>
        ))}
      </div>

      {/* amount grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "16px" }}>
        {tiers.map((t) => {
          const on = t.amount === amount;
          return (
            <button
              key={t.amount}
              onClick={() => setAmount(t.amount)}
              style={{
                cursor: "pointer",
                padding: "14px 0",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                fontSize: "20px",
                background: on ? "var(--plum)" : "var(--ivory)",
                color: on ? "var(--ivory)" : "var(--plum)",
                border: on ? "1.5px solid var(--plum)" : "1.5px solid var(--border-default)",
                transition: "all var(--dur) var(--ease-out)",
              }}
            >
              ${t.amount.toLocaleString()}
            </button>
          );
        })}
      </div>

      {/* impact line */}
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "var(--sage-100)", borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: "20px", minHeight: "44px" }}>
        <span style={{ color: "var(--terracotta)", fontWeight: 700, flex: "none" }}>→</span>
        <span style={{ fontSize: "14.5px", lineHeight: 1.4, color: "#3F4D3C" }}>
          {selected.impact}
        </span>
      </div>

      <Button variant="primary" size="lg" fullWidth onClick={() => onDonate && onDonate({ amount, monthly })}>
        {ctaLabel} — ${selected.amount.toLocaleString()}{monthly ? "/mo" : ""}
      </Button>
      <p style={{ fontSize: "12.5px", color: "var(--text-muted)", textAlign: "center", margin: "12px 0 0", lineHeight: 1.5 }}>
        Voices Unveiled is a 501(c)(3). Your gift is tax-deductible.
      </p>
    </div>
  );
}
