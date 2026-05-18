import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

interface Service {
  n: string;
  ic: IconName;
  t: string;
  d: string;
  tags: string[];
}

const SERVICES: Service[] = [
  { n: "01", ic: "compass",  t: "System Design & Setup",   d: "Map messy operations and design a cleaner way to run.", tags: ["Workflow", "Audit", "Logic"] },
  { n: "02", ic: "brackets", t: "Custom Software & Tools", d: "Build internal tools that match how your business works.", tags: ["CRM", "Dashboards", "Tools"] },
  { n: "03", ic: "orbit",    t: "Automation & AI",         d: "Automate repetitive work and customer communication.", tags: ["Agents", "Pipelines", "Bots"] },
];

export function HomeServicesStrip() {
  return (
    <section style={{ background: "var(--m-bg-raised)", borderTop: "1px solid var(--m-line)", padding: "56px 0 64px" }}>
      <SectionHead
        kicker="Three problems · Three disciplines"
        title={<>One operating <em style={{ fontStyle: "italic" }}>method.</em></>}
        lead="Operating problems rarely respect org charts. Each discipline can be hired alone, but they were designed to work together."
        action={
          <Link href="/services" className="m-btn m-btn-bare">
            All services <Icon name="arrowRight" size={13} />
          </Link>
        }
      />

      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{
        borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)",
      }}>
        {SERVICES.map((s, i) => (
          <Link
            key={s.n}
            href="/services"
            style={{
              padding: "32px 28px",
              borderRight: "1px solid var(--m-line)",
              borderBottom: "1px solid var(--m-line)",
              display: "flex", flexDirection: "column", gap: 16,
              cursor: "pointer",
              transition: "background 140ms var(--ease-out-fine)",
              textDecoration: "none", color: "inherit",
            }}
            className="hover:bg-m-bg"
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>{s.n} / 03</span>
              <Icon name={s.ic} size={28} />
            </div>
            <h3 className="m-display text-xl md:text-2xl lg:text-3xl" style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}>{s.t}</h3>
            <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55, maxWidth: 320 }}>{s.d}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
              {s.tags.map((t) => <span key={t} className="m-tag">{t}</span>)}
            </div>
            <div style={{ marginTop: "auto", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)" }}>Read service</span>
              <Icon name="arrowUpRight" size={14} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
