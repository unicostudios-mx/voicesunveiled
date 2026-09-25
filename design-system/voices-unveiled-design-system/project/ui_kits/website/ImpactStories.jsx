// Impact + Stories pages for the Voices Unveiled site.
const { ImpactCard, StoryCard, Testimonial, SafetyNote, Button, Tag } = window.VoicesUnveiledDesignSystem_cb8f0b;

const OUTCOMES = [
  "Two full semesters of the flagship self-empowerment course",
  "Trauma-informed therapy for 5 students",
  "Women's health sessions with doctors from France and the U.S.",
  "Sustained 2 women's arts programs in Afghanistan",
];

function ImpactPage({ onDonate }) {
  return (
    <div>
      <Section>
        <div style={{ maxWidth: "var(--measure)" }}>
          <Eyebrow>Our impact</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "52px", lineHeight: 1.1, color: "var(--plum)", margin: "0 0 18px", letterSpacing: "-0.02em" }}>
            2024 marked a transformative year.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "20px", lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
            Thanks to your generosity, we created lasting change in the lives of Afghan women and girls.
          </p>
        </div>
      </Section>

      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          <ImpactCard value="115" label="Scholarships raised & awarded" />
          <ImpactCard value="50" label="Students given internet funding" />
          <ImpactCard value="20" label="Intern graduates trained" />
          <ImpactCard value="8" label="Active volunteers on the team" />
        </div>
      </Section>

      <Section bg="var(--white)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <Eyebrow>Program outcomes</Eyebrow>
            <SerifH2 style={{ marginBottom: "20px" }}>Shaping futures, responding to needs.</SerifH2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {OUTCOMES.map((o) => (
                <li key={o} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontFamily: "var(--font-sans)", fontSize: "16.5px", lineHeight: 1.5, color: "var(--text-body)" }}>
                  <span style={{ color: "var(--terracotta)", fontWeight: 700, flex: "none", marginTop: "1px" }}>✓</span>{o}
                </li>
              ))}
            </ul>
          </div>
          <PhotoSlot height={320} label="Students learning online" tone="sage" />
        </div>
      </Section>

      <Section>
        <div style={{ background: "var(--midnight)", color: "var(--ivory)", borderRadius: "var(--radius-xl)", padding: "48px 56px", display: "flex", gap: "32px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ maxWidth: "560px" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "30px", fontWeight: 700, marginBottom: "10px" }}>Read the full 2024 Annual Impact Report.</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "16px", lineHeight: 1.6, color: "rgba(250,246,239,0.8)", margin: 0 }}>
              Financial transparency and program detail, start to finish.
            </p>
          </div>
          <Button variant="soft" size="lg">Download report (PDF)</Button>
        </div>
      </Section>
    </div>
  );
}

const ALL_STORIES = [
  { name: "Arezou", age: 27, quote: "The course gave me hope and strength to keep learning." },
  { name: "Marwa", age: 22, quote: "I found a community that believes in my future." },
  { name: "Sahar", age: 30, quote: "For the first time, I am leading — not waiting." },
  { name: "Nadia", age: 24, quote: "I learned that my voice has value, and people will listen." },
  { name: "Freshta", age: 19, quote: "Studying again gave my days purpose and direction." },
  { name: "Roya", age: 26, quote: "The counseling helped me carry what felt unbearable." },
];

function StoriesPage({ onDonate }) {
  return (
    <div>
      <Section>
        <div style={{ maxWidth: "var(--measure)", marginBottom: "28px" }}>
          <Eyebrow>Student stories</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "52px", lineHeight: 1.1, color: "var(--plum)", margin: "0 0 18px", letterSpacing: "-0.02em" }}>
            Every story is shared with care and consent.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "19px", lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 22px" }}>
            These are journeys of agency, resilience, and transformation.
          </p>
          <SafetyNote />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {ALL_STORIES.map((s) => (
            <StoryCard key={s.name} {...s} ctaLabel="Sponsor a student like her" onCta={onDonate} />
          ))}
        </div>
      </Section>

      <Section bg="var(--white)">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Testimonial
            quote="I am so touched by the work Voices Unveiled does. Everyone should do anything they can to support them."
            name="Zainab Salbi"
            detail="Founder, Women for Women International"
            cta={<Button variant="primary" onClick={onDonate}>Donate Now</Button>}
          />
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { ImpactPage, StoriesPage });
