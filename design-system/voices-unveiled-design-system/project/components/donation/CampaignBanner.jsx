import React from "react";
import { Button } from "../core/Button.jsx";

/**
 * Campaign alert banner for urgent fundraising moments. Warm but serious —
 * not aggressive, avoids red. Optional progress bar.
 */
export function CampaignBanner({
  eyebrow = "Urgent",
  title,
  body,
  raised = null,
  goal = null,
  ctaLabel = "Donate Now",
  onCta,
  style = {},
  ...rest
}) {
  const pct = raised != null && goal ? Math.min(100, Math.round((raised / goal) * 100)) : null;
  return (
    <div
      style={{
        background: "var(--midnight)",
        color: "var(--ivory)",
        borderRadius: "var(--radius-lg)",
        padding: "28px 32px",
        fontFamily: "var(--font-sans)",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        alignItems: "center",
        justifyContent: "space-between",
        ...style,
      }}
      {...rest}
    >
      <div style={{ flex: "1 1 360px", minWidth: 0 }}>
        <span style={{ display: "inline-block", textTransform: "uppercase", letterSpacing: "0.14em", fontSize: "11px", fontWeight: 700, color: "var(--gold)", marginBottom: "8px" }}>
          {eyebrow}
        </span>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 700, margin: "0 0 6px", lineHeight: 1.25 }}>
          {title}
        </h3>
        {body && <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.5, color: "rgba(250,246,239,0.82)" }}>{body}</p>}
        {pct != null && (
          <div style={{ marginTop: "16px", maxWidth: "440px" }}>
            <div style={{ height: "8px", borderRadius: "var(--radius-pill)", background: "rgba(250,246,239,0.18)", overflow: "hidden" }}>
              <div style={{ width: `${pct}%`, height: "100%", background: "var(--gold)", borderRadius: "var(--radius-pill)", transition: "width var(--dur-slow) var(--ease-out)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginTop: "7px", color: "rgba(250,246,239,0.82)" }}>
              <span>${raised.toLocaleString()} raised</span>
              <span>Goal ${goal.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>
      <div style={{ flex: "none" }}>
        <Button variant="soft" size="lg" onClick={onCta}>{ctaLabel}</Button>
      </div>
    </div>
  );
}
