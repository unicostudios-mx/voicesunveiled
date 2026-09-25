// Decorative brand art — abstract veil / voice-wave motifs used instead of
// stock photography of real people (a deliberate safety + dignity choice).
function VeilArt({ height = 420, style = {} }) {
  return (
    <div style={{
      height, borderRadius: "var(--radius-xl)", overflow: "hidden", position: "relative",
      background: "linear-gradient(150deg, #5A2A4F 0%, #4B2142 45%, #1F2A44 100%)",
      ...style,
    }}>
      <svg viewBox="0 0 400 420" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g fill="none" strokeLinecap="round">
          <path d="M90 -40 C200 90 120 230 250 460" stroke="#C46A4A" strokeWidth="60" opacity="0.22" />
          <path d="M150 -40 C260 90 180 230 310 460" stroke="#E5B84B" strokeWidth="42" opacity="0.18" />
          <path d="M40 -40 C150 90 70 230 200 460" stroke="#A9B8A4" strokeWidth="30" opacity="0.16" />
        </g>
        <g stroke="#FAF6EF" strokeWidth="1.5" opacity="0.5" fill="none">
          <path d="M30 330 Q60 300 90 330 T150 330 T210 330 T270 330" />
          <path d="M30 350 Q60 322 90 350 T150 350 T210 350 T270 350" opacity="0.6" />
        </g>
        <circle cx="320" cy="80" r="4" fill="#E5B84B" opacity="0.7" />
        <circle cx="345" cy="120" r="3" fill="#C46A4A" opacity="0.7" />
        <circle cx="300" cy="140" r="2.5" fill="#FAF6EF" opacity="0.6" />
      </svg>
    </div>
  );
}

// A soft image placeholder for where real, consented photography would go.
function PhotoSlot({ height = 240, label = "Photograph", tone = "ivory", style = {} }) {
  const bg = tone === "sage" ? "var(--sage-100)" : tone === "terra" ? "var(--terracotta-100)" : "var(--ivory-200)";
  return (
    <div style={{
      height, borderRadius: "var(--radius-lg)", background: bg,
      display: "flex", alignItems: "center", justifyContent: "center",
      border: "1px dashed var(--border-default)", ...style,
    }}>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "8px" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.5-3.5L9 20" />
        </svg>
        {label}
      </span>
    </div>
  );
}

function Eyebrow({ children, color = "var(--terracotta)" }) {
  return (
    <span style={{ display: "inline-block", textTransform: "uppercase", letterSpacing: "0.14em",
      fontSize: "12px", fontWeight: 700, color, fontFamily: "var(--font-sans)", marginBottom: "14px" }}>
      {children}
    </span>
  );
}

function Section({ children, bg = "transparent", style = {} }) {
  return (
    <section style={{ background: bg, padding: "var(--space-9) 0", ...style }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 28px" }}>{children}</div>
    </section>
  );
}

function SerifH2({ children, style = {} }) {
  return <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "40px", lineHeight: 1.15, color: "var(--text-strong)", margin: 0, letterSpacing: "-0.01em", ...style }}>{children}</h2>;
}

Object.assign(window, { VeilArt, PhotoSlot, Eyebrow, Section, SerifH2 });
