import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

const PRINCIPLES: [IconName, string, string][] = [
  ["spark",   "Process first, AI second",     "Adding AI to a broken process just makes mistakes happen faster. We fix the logic before applying any technology."],
  ["beam",    "Systems over decks",           "No strategy PDFs. Production-grade code, custom tools, and automation pipelines that live in the business and drive real output."],
  ["network", "Execution is the strategy",   "Most consulting fails in the gap between advice and action. We bridge that gap by owning the implementation."],
  ["team",    "Technology as leverage",       "Tools are chosen because they provide the best leverage for your constraints — not because they're trending."],
];

export function HomePrinciples() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Principles · How we think"
        title={<>Four rules that shape every <em style={{ fontStyle: "italic" }}>line of code.</em></>}
        lead="No proprietary frameworks. Just four habits we'd rather not break."
      />
      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-2 lg:grid-cols-4" style={{ borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)" }}>
        {PRINCIPLES.map(([ic, t, d], i) => (
          <div key={t} style={{
            padding: "32px 24px",
            borderRight: "1px solid var(--m-line)",
            borderBottom: "1px solid var(--m-line)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>0{i + 1}</span>
              <Icon name={ic} size={22} />
            </div>
            <h4 className="m-display" style={{ fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.15 }}>{t}</h4>
            <p style={{ marginTop: 12, fontSize: 14, color: "var(--m-ink-3)", lineHeight: 1.55 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
