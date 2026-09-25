// Voices Unveiled donation page — selector + trust + testimonial + FAQ.
const { DonationSelector, CampaignBanner, Testimonial, Button } = window.VoicesUnveiledDesignSystem_cb8f0b;

const FAQ = [
  ["Is my donation tax-deductible?", "Yes. Voices Unveiled is a registered 501(c)(3) nonprofit; your gift is tax-deductible to the full extent allowed by law."],
  ["Where does my money go?", "Directly to scholarships, internet access, course materials, mental health support, and emergency assistance for Afghan women and girls."],
  ["Can I give monthly?", "Yes — our Monthly Donors Circle accepts a recurring gift of any amount, providing the steady support our students rely on."],
];

function DonatePage() {
  return (
    <div>
      <Section>
        <CampaignBanner
          title="Help keep Voices Unveiled open."
          body="With the withdrawal of U.S. AID, we are one of the few remaining pathways to education for Afghan women. Help us raise $50,000 to continue."
          raised={32500} goal={50000}
        />
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: "56px", alignItems: "start" }}>
          <div>
            <Eyebrow>Make a gift</Eyebrow>
            <SerifH2 style={{ marginBottom: "16px" }}>Your gift keeps education, connection, and hope alive.</SerifH2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", lineHeight: 1.65, color: "var(--text-body)", maxWidth: "var(--measure)", marginBottom: "28px" }}>
              Every dollar you invest directly impacts the lives of Afghan women and girls.
              Choose an amount to see what it makes possible.
            </p>
            <Testimonial
              tone="sage"
              quote="The mentorship changed how I see myself. I am no longer waiting for permission to learn."
              name="Marwa, 22"
            />
          </div>
          <div style={{ position: "sticky", top: "100px" }}>
            <DonationSelector defaultAmount={300} />
          </div>
        </div>
      </Section>

      <Section bg="var(--white)">
        <Eyebrow>Questions</Eyebrow>
        <SerifH2 style={{ marginBottom: "28px" }}>Giving with confidence.</SerifH2>
        <div style={{ maxWidth: "var(--measure)", display: "flex", flexDirection: "column", gap: "4px" }}>
          {FAQ.map(([q, a]) => (
            <details key={q} style={{ borderBottom: "1px solid var(--border-subtle)", padding: "18px 0" }}>
              <summary style={{ cursor: "pointer", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "17px", color: "var(--text-strong)", listStyle: "none" }}>{q}</summary>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "15.5px", lineHeight: 1.6, color: "var(--text-muted)", margin: "12px 0 0" }}>{a}</p>
            </details>
          ))}
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { DonatePage });
