// Voices Unveiled homepage — composed from DS components + site chrome.
const { Button, ImpactCard, StoryCard, Testimonial, Tag } = window.VoicesUnveiledDesignSystem_cb8f0b;

const STORIES = [
  { name: "Arezou", age: 27, quote: "The course gave me hope and strength to keep learning." },
  { name: "Marwa", age: 22, quote: "I found a community that believes in my future." },
  { name: "Sahar", age: 30, quote: "For the first time, I am leading — not waiting." },
];

const PROGRAMS = [
  { tag: "Education", tone: "plum", title: "Self-Empowerment Course", body: "Two full semesters covering mental health, women's health, leadership, and critical thinking." },
  { tag: "Mental health", tone: "sage", title: "Trauma-Informed Care", body: "Professional therapy and regular one-on-one support sessions for students." },
  { tag: "Leadership", tone: "terracotta", title: "Mentorship Programs", body: "English, exam prep, data analytics, and computer programming with expert mentors." },
];

function HomePage({ onDonate, onNav }) {
  return (
    <div>
      {/* Hero */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "56px", alignItems: "center" }}>
          <div>
            <Eyebrow>Voices emerging from silence</Eyebrow>
            <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "56px", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--plum)", margin: "0 0 20px" }}>
              Keep her learning, healing, and reclaiming her voice.
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "20px", lineHeight: 1.6, color: "var(--text-body)", maxWidth: "520px", margin: "0 0 32px" }}>
              Voices Unveiled provides free online education, mental health support, and
              leadership development for Afghan women and girls.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Button variant="primary" size="lg" onClick={onDonate}>Sponsor a Student</Button>
              <Button variant="secondary" size="lg" onClick={() => onNav("Impact")}>See Our Impact</Button>
            </div>
          </div>
          <VeilArt height={460} />
        </div>
      </Section>

      {/* Mission strip */}
      <Section bg="var(--white)">
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "30px", lineHeight: 1.45, color: "var(--text-strong)", maxWidth: "var(--measure)", margin: "0 auto", textAlign: "center" }}>
          We believe education is a lifeline. When the world closed its doors to Afghan women,
          we built a new one — <em style={{ color: "var(--terracotta)" }}>online, free, and safe.</em>
        </p>
      </Section>

      {/* Impact numbers */}
      <Section>
        <Eyebrow>Our impact in 2024</Eyebrow>
        <SerifH2 style={{ marginBottom: "32px" }}>The difference your support made.</SerifH2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          <ImpactCard value="115" label="Scholarships raised & awarded" />
          <ImpactCard value="50" label="Students given internet funding" />
          <ImpactCard value="20" label="Intern graduates trained" />
          <ImpactCard value="8" label="Ongoing mentorship programs" />
        </div>
      </Section>

      {/* Stories */}
      <Section bg="var(--white)">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px", gap: "20px", flexWrap: "wrap" }}>
          <div>
            <Eyebrow>Student stories</Eyebrow>
            <SerifH2>Resilience, in their own words.</SerifH2>
          </div>
          <Button variant="ghost" onClick={() => onNav("Stories")}>Explore all stories →</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {STORIES.map((s) => (
            <StoryCard key={s.name} {...s} onCta={() => onNav("Stories")} />
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section>
        <Eyebrow>Programs</Eyebrow>
        <SerifH2 style={{ marginBottom: "32px" }}>How we support our students.</SerifH2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
          {PROGRAMS.map((p) => (
            <div key={p.title} style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "26px", boxShadow: "var(--shadow-sm)" }}>
              <Tag tone={p.tone}>{p.tag}</Tag>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", fontWeight: 700, color: "var(--text-strong)", margin: "16px 0 8px" }}>{p.title}</h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", lineHeight: 1.6, color: "var(--text-muted)", margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section bg="var(--white)">
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Testimonial
            quote="I was not confident enough to speak. Now I believe I am valuable, precious, and need to be heard."
            name="Ehsaneh, 28"
            cta={<Button variant="primary" onClick={onDonate}>Support more students like Ehsaneh</Button>}
          />
        </div>
      </Section>

      {/* Volunteer CTA */}
      <Section>
        <div style={{ background: "var(--terracotta-100)", borderRadius: "var(--radius-xl)", padding: "48px 56px", display: "flex", gap: "32px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ maxWidth: "560px" }}>
            <SerifH2 style={{ marginBottom: "10px" }}>Share your skills. Help create a safe learning space.</SerifH2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "17px", lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>
              Teachers, counselors, mentors, and organizers — there's a place for you.
            </p>
          </div>
          <Button variant="primary" size="lg" onClick={() => onNav("Volunteer")}>Become a Volunteer</Button>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { HomePage });
