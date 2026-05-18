import { Icon } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

interface Quote {
  q: string;
  name: string;
  role: string;
  initials: string;
}

const QUOTES: Quote[] = [
  {
    q: "Mettle rebuilt the spine of our operations. Same team, twice the throughput.",
    name: "Anya R.",
    role: "Founder, K2 Renewals",
    initials: "AR",
  },
  {
    q: "They wrote less software than I expected, and the team adopted all of it.",
    name: "Idris O.",
    role: "COO, Barnshenn",
    initials: "IO",
  },
  {
    q: "The diagnostic alone was worth the engagement. The system we got was the bonus.",
    name: "Marta E.",
    role: "Ops Director, Solivia Pharma",
    initials: "ME",
  },
];

export function HomeTestimonials() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="What partners say"
        title={<>Trusted by the people who <em style={{ fontStyle: "italic" }}>run things.</em></>}
      />
      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QUOTES.map((q) => (
          <figure key={q.name} style={{ margin: 0, border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
            <span style={{ color: "var(--m-accent)" }}><Icon name="spark" size={24} /></span>
            <blockquote className="m-display" style={{ fontSize: 22, lineHeight: 1.25, letterSpacing: "-0.01em", margin: 0 }}>
              &ldquo;{q.q}&rdquo;
            </blockquote>
            <figcaption style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--m-line)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 40, height: 40, border: "1px solid var(--m-line)", background: "var(--m-bg-sunken)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span className="m-display" style={{ fontSize: 16, color: "var(--m-ink-3)" }}>{q.initials}</span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{q.name}</div>
                <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>{q.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
