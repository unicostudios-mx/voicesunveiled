// Header + Footer chrome for the Voices Unveiled marketing site.
const { Button } = window.VoicesUnveiledDesignSystem_cb8f0b;

const NAV = ["About", "Programs", "Impact", "Stories", "Volunteer"];

function SiteHeader({ active, onNav, onDonate }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 20,
      background: "rgba(250,246,239,0.92)", backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-subtle)",
    }}>
      <div style={{
        maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 28px",
        height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a onClick={() => onNav("Home")} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer", textDecoration: "none" }}>
          <img src="../../assets/logo-full.png" alt="Voices Unveiled" style={{ height: "48px", display: "block" }} />
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "19px", color: "var(--plum)", letterSpacing: "0.01em" }}>
            Voices Unveiled
          </span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {NAV.map((item) => (
            <a key={item} onClick={() => onNav(item)} style={{
              cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: 500,
              color: active === item ? "var(--plum)" : "var(--text-body)",
              borderBottom: active === item ? "2px solid var(--terracotta)" : "2px solid transparent",
              paddingBottom: "2px", transition: "color var(--dur) var(--ease-out)",
            }}>{item}</a>
          ))}
          <Button variant="donate" size="sm" onClick={onDonate}>Donate</Button>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  const cols = [
    ["Explore", ["About", "Programs", "Impact", "Stories"]],
    ["Take action", ["Donate", "Sponsor a Student", "Volunteer", "Monthly Giving"]],
    ["Connect", ["Newsletter", "Contact", "Instagram", "LinkedIn"]],
  ];
  return (
    <footer style={{ background: "var(--midnight)", color: "var(--ivory)", marginTop: "var(--space-10)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 28px 40px",
        display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "40px" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "20px", marginBottom: "12px" }}>Voices Unveiled</div>
          <p style={{ fontSize: "14.5px", lineHeight: 1.6, color: "rgba(250,246,239,0.72)", maxWidth: "280px", margin: 0 }}>
            Education, connection, and hope for Afghan women and girls. Every story is shared with care and consent.
          </p>
        </div>
        {cols.map(([head, links]) => (
          <div key={head}>
            <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--gold)", marginBottom: "14px" }}>{head}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map((l) => (
                <li key={l}><a style={{ color: "rgba(250,246,239,0.85)", textDecoration: "none", fontSize: "14.5px", cursor: "pointer" }}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(250,246,239,0.14)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "20px 28px",
          display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between",
          fontSize: "13px", color: "rgba(250,246,239,0.6)" }}>
          <span>Voices Unveiled is a registered 501(c)(3) nonprofit · EIN 00-0000000</span>
          <span>Privacy &amp; Safety · voicesunveiled.org</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteHeader, SiteFooter });
