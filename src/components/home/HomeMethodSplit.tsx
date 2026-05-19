import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

const PHASES: [string, IconName, string, string][] = [
  ["01", "observe",  "Understand", "Audit broken systems. Map fragmented workflows, hidden dependencies, and ownership gaps before any recommendation is made."],
  ["02", "simplify", "Redesign",   "Engineer a clear operating model. Restructure process flow, define system boundaries, and align data contracts."],
  ["03", "build",    "Build",      "Ship modular infrastructure. Implement production-grade systems, connect APIs, and automate repetitive operations."],
  ["04", "deploy",   "Optimize",   "Stabilize and compound clarity. Monitor performance, tune automation loops, and refine as the business scales."],
];

export function HomeMethodSplit() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ background: "var(--m-ink)", color: "var(--m-bg)", borderTop: "1px solid var(--m-line-strong)" }}>
      <SectionHead
        dark
        kicker="The method · 4 phases"
        title={<>Diagnose before <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>you build.</em></>}
        lead="A repeatable four-phase method. Every Mettle engagement runs this loop. Outputs at each phase are human-readable, not engineering-only."
        action={
          <Link href="/how-we-work" className="m-btn m-btn-ghost" style={{ color: "var(--m-bg)", borderColor: "rgba(255,255,255,0.3)" }}>
            Full method <Icon name="arrowRight" size={13} />
          </Link>
        }
      />

      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-2 lg:grid-cols-4" style={{
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.18)",
        borderLeft: "1px solid rgba(255,255,255,0.18)",
      }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 28, height: 1, background: "rgba(255,255,255,0.18)" }} />
        {PHASES.map(([n, ic, t, d], i) => (
          <div key={n} style={{
            padding: "44px 24px 28px",
            borderRight: "1px solid rgba(255,255,255,0.12)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            position: "relative",
          }}>
            <span style={{
              position: "absolute", top: 24, left: 24,
              width: 8, height: 8, borderRadius: 999,
              background: i === 1 ? "var(--m-accent)" : "var(--m-bg)",
              boxShadow: i === 1 ? "0 0 0 6px rgba(111,176,136,0.18)" : "none",
            }} />
            <span className="m-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}>PHASE {n}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, color: "var(--m-bg)" }}>
              <Icon name={ic} size={22} />
              <h3 className="m-display" style={{ fontSize: 30, letterSpacing: "-0.02em" }}>{t}</h3>
            </div>
            <p style={{ marginTop: 14, fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
