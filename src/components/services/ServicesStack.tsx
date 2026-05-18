import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

function StackLayer({ ic, label, sub, active }: { ic: IconName; label: string; sub: string; active?: boolean }) {
  return (
    <div style={{
      padding: "18px 20px",
      border: "1px solid " + (active ? "var(--m-accent)" : "var(--m-line)"),
      background: active ? "color-mix(in oklab, var(--m-accent), var(--m-bg-raised) 92%)" : "var(--m-bg)",
      display: "flex", alignItems: "center", gap: 16,
    }}>
      <span style={{ color: active ? "var(--m-accent)" : "var(--m-ink)" }}><Icon name={ic} size={24} /></span>
      <div style={{ flex: 1 }}>
        <div className="m-mono" style={{ fontSize: 11, color: active ? "var(--m-accent-deep)" : "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</div>
        <div style={{ fontSize: 14, marginTop: 4, color: "var(--m-ink-2)" }}>{sub}</div>
      </div>
      {active && <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />}
    </div>
  );
}

function ComboRow({ ic, label, desc, accent }: { ic: IconName; label: string; desc: string; accent?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <span style={{ color: accent ? "var(--m-accent)" : "var(--m-ink-3)", paddingTop: 4 }}>
        <Icon name={ic} size={22} />
      </span>
      <div>
        <div style={{ fontSize: 17, fontWeight: 500, color: "var(--m-ink)" }}>{label}</div>
        <div style={{ fontSize: 14, color: "var(--m-ink-3)", marginTop: 6, lineHeight: 1.55 }}>{desc}</div>
      </div>
    </div>
  );
}

export function ServicesStack() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ background: "var(--m-bg-sunken)", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="The stack · How disciplines combine"
        title={<>Each can be hired alone. <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>Together</em> they compound.</>}
        lead="Most engagements run 01 → 02 → 03 in sequence. We don't stack them by default — we stack them when the business case is there."
      />
      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
        <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", padding: 32, position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <StackLayer ic="orbit"    label="03 · Automation & AI"  sub="Agents, pipelines, voice — wired into the system below." active />
            <StackLayer ic="brackets" label="02 · Custom Software"  sub="Operator UI, schema, audit log — the system that runs the business." />
            <StackLayer ic="compass"  label="01 · System Design"    sub="The map, blueprint and rules — what the software is for." />
          </div>
          <div style={{ position: "absolute", left: 16, right: 16, bottom: -1, height: 1, background: "var(--m-line)" }} />
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <ComboRow ic="compass"  label="System Design alone" desc="A diagnostic, a map, a written plan. Take it to any team that can build." />
            <ComboRow ic="brackets" label="System + Software"   desc="The most common engagement. The plan and the production system that runs it." />
            <ComboRow ic="orbit"    label="The full stack"      desc="Add intelligent automation on top — usually 6–12 months after the system is live." accent />
          </div>
        </div>
      </div>
    </section>
  );
}
