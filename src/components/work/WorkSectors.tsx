import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

const SECTORS: [IconName, string][] = [
  ["compass",  "Renewable energy"],
  ["grid",     "E-commerce"],
  ["shield",   "Healthcare"],
  ["orbit",    "Pharma"],
  ["cpu",      "B2B SaaS"],
  ["document", "Legal · Professional services"],
];

export function WorkSectors() {
  return (
    <section style={{ padding: "72px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Sectors · Where we work"
        title={<>Four industries. <em style={{ fontStyle: "italic" }}>One method.</em></>}
      />
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, borderTop: "1px solid var(--m-line)", borderBottom: "1px solid var(--m-line)" }}>
        {SECTORS.map(([ic, n], i) => (
          <div key={n} style={{
            padding: "28px 18px",
            borderRight: i < SECTORS.length - 1 ? "1px solid var(--m-line)" : "none",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            <Icon name={ic} size={22} />
            <div style={{ fontSize: 14, fontWeight: 500 }}>{n}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
