import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

const STATS: [string, string, IconName][] = [
  ["+70hrs", "Saved / week · K2 Renewals",           "compass"],
  ["3.2×",   "Order throughput · Barnshenn",          "grid"],
  ["94%",    "Auto-resolved calls · Solivia",         "orbit"],
  ["6",      "Live operating systems · 4 industries", "database"],
];

export function HomeNumbers() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16 lg:px-14 lg:py-20" style={{ background: "var(--m-bg-sunken)", borderTop: "1px solid var(--m-line)" }}>
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-16 items-end mb-8 md:mb-14">
        <h2 className="m-display text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px]" style={{ letterSpacing: "-0.035em", lineHeight: 0.95 }}>
          Numbers we
          <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}> stand behind.</em>
        </h2>
        <p style={{ fontSize: 16, color: "var(--m-ink-2)", lineHeight: 1.55, maxWidth: 420 }}>
          Reported by clients, measured the quarter after launch. No projections, no &lsquo;up to&rsquo;.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8" style={{ borderTop: "1px solid var(--m-line-strong)" }}>
        {STATS.map(([n, l, ic]) => (
          <div key={l}>
            <div style={{ color: "var(--m-ink-4)", marginBottom: 18 }}><Icon name={ic} size={20} /></div>
            <div className="m-display text-[32px] sm:text-[44px] lg:text-[64px]" style={{ letterSpacing: "-0.035em", lineHeight: 0.95 }}>{n}</div>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
