import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

interface Tier {
  tag: string;
  title: string;
  price: string[];
  summary: string;
  includes: string[];
  icon: IconName;
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    tag: "Engagement · 01",
    title: "Diagnostic",
    price: ["Fixed-fee", "2 weeks"],
    summary: "A written operating diagnostic — the smallest possible engagement. Often a yes-or-no decision for everything that follows.",
    includes: ["Stakeholder interviews", "Current-state map", "Recommendations doc", "30-min readout"],
    icon: "observe",
  },
  {
    tag: "Engagement · 02",
    title: "Design & Build",
    price: ["Retainer", "8–14 weeks"],
    summary: "The core engagement. System design feeds custom software, shipped in focused, reversible modules.",
    includes: ["Operating map · v1", "System architecture", "Production software", "Embedded operator support"],
    icon: "build",
    featured: true,
  },
  {
    tag: "Engagement · 03",
    title: "Operate & Automate",
    price: ["Quarterly", "Ongoing"],
    summary: "Once the system is live, we layer intelligent automation and stay on as the operating partner.",
    includes: ["Agents & pipelines", "Monthly health review", "Roadmap iteration", "On-call ops"],
    icon: "deploy",
  },
];

function EngagementCard({ t }: { t: Tier }) {
  return (
    <article style={{
      border: "1px solid " + (t.featured ? "var(--m-ink)" : "var(--m-line)"),
      background: t.featured ? "var(--m-ink)" : "var(--m-bg-raised)",
      color: t.featured ? "var(--m-bg)" : "var(--m-ink)",
      padding: 28,
      display: "flex", flexDirection: "column", gap: 18,
      position: "relative",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="m-mono" style={{ fontSize: 11, color: t.featured ? "rgba(255,255,255,0.5)" : "var(--m-ink-4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.tag}</span>
        <Icon name={t.icon} size={22} />
      </div>
      <h3 className="m-display text-xl md:text-2xl lg:text-3xl" style={{ letterSpacing: "-0.025em", lineHeight: 1 }}>{t.title}</h3>
      <div style={{ display: "flex", gap: 14, paddingBottom: 18, borderBottom: "1px solid " + (t.featured ? "rgba(255,255,255,0.18)" : "var(--m-line)") }}>
        {t.price.map((p, i) => (
          <span key={i} className="m-mono" style={{
            fontSize: 11,
            color: t.featured ? "rgba(255,255,255,0.7)" : "var(--m-ink-3)",
            padding: "4px 8px",
            border: "1px solid " + (t.featured ? "rgba(255,255,255,0.2)" : "var(--m-line)"),
            letterSpacing: "0.06em",
          }}>{p}</span>
        ))}
      </div>
      <p style={{ fontSize: 14, color: t.featured ? "rgba(255,255,255,0.7)" : "var(--m-ink-2)", lineHeight: 1.55 }}>{t.summary}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {t.includes.map((item) => (
          <li key={item} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: t.featured ? "rgba(255,255,255,0.85)" : "var(--m-ink-2)" }}>
            <span style={{ color: t.featured ? "var(--m-accent)" : "var(--m-ink-3)" }}><Icon name="check" size={14} /></span>
            {item}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", paddingTop: 18 }}>
        <Link
          href="/contact"
          className={t.featured ? "m-btn" : "m-btn m-btn-ghost"}
          style={t.featured ? {
            background: "var(--m-bg)", color: "var(--m-ink)", borderColor: "var(--m-bg)", width: "100%", justifyContent: "center",
          } : { width: "100%", justifyContent: "center" }}
        >
          Brief us on this <Icon name="arrowRight" size={14} />
        </Link>
      </div>
    </article>
  );
}

export function ServicesEngagement() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Engagement model · three sizes"
        title={<>Start small. <em style={{ fontStyle: "italic" }}>Earn</em> the next step.</>}
        lead="Three engagement sizes, each priced and scoped before we begin. No open-ended retainers."
      />
      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TIERS.map((t) => <EngagementCard key={t.title} t={t} />)}
      </div>
    </section>
  );
}
