import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

const SECTORS: [IconName, string][] = [
  ["compass",  "Renewable energy"],
  ["grid",     "E-commerce"],
  ["shield",   "Pharmaceutical"],
  ["cpu",      "Pharmacy"],
  ["database", "IT services"],
  ["spark",    "Consumer platform"],
];

export function WorkSectors() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Sectors · Where we work"
        title={<>Four industries. <em style={{ fontStyle: "italic" }}>One method.</em></>}
      />
      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)" }}>
        {SECTORS.map(([ic, n], i) => (
          <div key={n} style={{
            padding: "28px 18px",
            borderRight: "1px solid var(--m-line)",
            borderBottom: "1px solid var(--m-line)",
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
