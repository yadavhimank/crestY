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
    <section style={{ background: "var(--m-bg-sunken)", padding: "80px 56px", borderTop: "1px solid var(--m-line)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
        <h2 className="m-display" style={{ fontSize: 72, letterSpacing: "-0.035em", lineHeight: 0.95 }}>
          Numbers we
          <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}> stand behind.</em>
        </h2>
        <p style={{ fontSize: 16, color: "var(--m-ink-2)", lineHeight: 1.55, maxWidth: 420 }}>
          Reported by clients, measured the quarter after launch. No projections, no &lsquo;up to&rsquo;.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, borderTop: "1px solid var(--m-line-strong)", paddingTop: 32 }}>
        {STATS.map(([n, l, ic]) => (
          <div key={l}>
            <div style={{ color: "var(--m-ink-4)", marginBottom: 18 }}><Icon name={ic} size={20} /></div>
            <div className="m-display" style={{ fontSize: 64, letterSpacing: "-0.035em", lineHeight: 0.95 }}>{n}</div>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
