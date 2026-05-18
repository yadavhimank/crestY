import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

type SampleKind = "compass-sample" | "brackets-sample" | "orbit-sample";

interface ServiceData {
  n: string;
  icon: IconName;
  title: string;
  lead: string;
  body: string;
  includes: string[];
  deliverables: [IconName, string][];
  sample: SampleKind;
}

const SERVICES: ServiceData[] = [
  {
    n: "01", icon: "compass",
    title: "System Design & Setup",
    lead: "Map messy operations and design a cleaner way to run.",
    body: "We map how your business actually runs, strip away the friction, and design a repeatable workflow before a single line of code is written. The output is an operating map your team agrees with — and can run.",
    includes: ["Workflow design", "Process mapping", "Business logic", "Operational audits"],
    deliverables: [
      ["document",  "Operating map · v1"],
      ["dashboard", "Workflow blueprint"],
      ["speak",     "Stakeholder readouts"],
    ],
    sample: "compass-sample",
  },
  {
    n: "02", icon: "brackets",
    title: "Custom Software & Tools",
    lead: "Build internal tools that match how your business works.",
    body: "We build CRMs, admin panels, and dashboards tailored to your exact business rules — production-grade, observability built in, and designed to evolve with your team.",
    includes: ["CRMs", "Admin panels", "Dashboards", "Custom tools"],
    deliverables: [
      ["database",  "Schema + data model"],
      ["dashboard", "Operator UI"],
      ["shield",    "Roles & audit log"],
    ],
    sample: "brackets-sample",
  },
  {
    n: "03", icon: "orbit",
    title: "Automation & AI",
    lead: "Automate repetitive work and customer communication.",
    body: "Intelligent agents and rule-based pipelines that handle support, sales coordination, and operations autonomously. Voice, chat, email, internal — wired into the system we already built.",
    includes: ["AI chatbots", "Voice bots", "Follow-ups", "Data pipelines"],
    deliverables: [
      ["cpu",  "Agent + tools"],
      ["beam", "Event pipeline"],
      ["mail", "Customer touchpoints"],
    ],
    sample: "orbit-sample",
  },
];

export function ServicesEditorialRows() {
  return (
    <section style={{ borderTop: "1px solid var(--m-line-strong)" }}>
      {SERVICES.map((s, i) => (
        <ServiceRow key={s.n} s={s} isLast={i === SERVICES.length - 1} />
      ))}
    </section>
  );
}

function ServiceRow({ s, isLast }: { s: ServiceData; isLast: boolean }) {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-[80px_1.05fr_0.95fr_280px] gap-8 lg:gap-10 px-5 py-12 md:px-8 md:py-14 lg:px-14 lg:py-14" style={{
      borderBottom: isLast ? "none" : "1px solid var(--m-line)",
      alignItems: "start", position: "relative",
    }}>
      <div className="m-mono" style={{ fontSize: 13, color: "var(--m-ink-4)", paddingTop: 8 }}>
        {s.n} / 03
      </div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
          <Icon name={s.icon} size={32} />
          <h2 className="m-display text-2xl md:text-3xl lg:text-4xl xl:text-[44px]" style={{ letterSpacing: "-0.025em", lineHeight: 1 }}>{s.title}</h2>
        </div>
        <p className="text-[15px] lg:text-[19px]" style={{ maxWidth: 420, lineHeight: 1.4, color: "var(--m-ink)", fontStyle: "italic", fontFamily: "var(--m-display)" }}>
          {s.lead}
        </p>
        <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {s.includes.map((t) => <span key={t} className="m-tag">{t}</span>)}
        </div>
      </div>

      <div style={{ paddingTop: 6 }}>
        <p style={{ fontSize: 14, color: "var(--m-ink-3)", lineHeight: 1.6 }}>{s.body}</p>
        <div style={{ marginTop: 22 }}>
          <span className="m-eyebrow">Typical deliverables</span>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
            {s.deliverables.map(([ic, t]) => (
              <li key={t} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--m-ink-2)" }}>
                <span style={{ color: "var(--m-ink-4)" }}><Icon name={ic} size={16} /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ServiceSampleArtefact kind={s.sample} />
    </article>
  );
}

function ServiceSampleArtefact({ kind }: { kind: SampleKind }) {
  if (kind === "compass-sample") {
    return (
      <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", aspectRatio: "1 / 1.05", padding: 16, display: "flex", flexDirection: "column" }}>
        <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", marginBottom: 8 }}>SAMPLE · OPERATING MAP</div>
        <div style={{ flex: 1, position: "relative" }}>
          <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
          <svg viewBox="0 0 240 240" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <g fontFamily="var(--m-mono)" fontSize="7" fill="currentColor" opacity="0.45">
              <text x="6" y="38">SALES</text>
              <text x="6" y="118">OPS</text>
              <text x="6" y="198">SHIP</text>
            </g>
            <g stroke="currentColor" strokeWidth="0.5" opacity="0.2">
              <line x1="44" y1="38" x2="240" y2="38" />
              <line x1="44" y1="118" x2="240" y2="118" />
              <line x1="44" y1="198" x2="240" y2="198" />
            </g>
            <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
              <path d="M50 38 H 110" />
              <path d="M110 38 L 140 118" />
              <path d="M140 118 H 190" />
              <path d="M190 118 L 215 198" />
              <path d="M215 198 H 230" className="m-flow-line" />
            </g>
            {([[50,38],[110,38],[140,118],[190,118],[215,198],[230,198]] as [number,number][]).map(([x,y],i) => (
              <rect key={i} x={x-3} y={y-3} width="6" height="6" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
            ))}
          </svg>
        </div>
        <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", fontSize: 10 }} className="m-mono">
          <span style={{ color: "var(--m-ink-4)" }}>3 lanes · 6 nodes</span>
          <span style={{ color: "var(--m-accent)" }}>v2 · CLEAN</span>
        </div>
      </div>
    );
  }
  if (kind === "brackets-sample") {
    return (
      <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", aspectRatio: "1 / 1.05", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: "10px 12px", borderBottom: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>K2 · OPERATOR PANEL</div>
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-ink-5)" }} />
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-ink-5)" }} />
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-accent)" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", flex: 1 }}>
          <div style={{ borderRight: "1px solid var(--m-line)", padding: "10px 0", display: "flex", flexDirection: "column", gap: 12, alignItems: "center", color: "var(--m-ink-4)" }}>
            <Icon name="dashboard" size={14} />
            <Icon name="grid" size={14} />
            <Icon name="database" size={14} />
            <Icon name="team" size={14} />
            <Icon name="shield" size={14} />
          </div>
          <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-3)" }}>Renewals · Q3</div>
            <div style={{ height: 6, background: "var(--m-line)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, width: "62%", background: "var(--m-accent)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
              {[1, 2, 3, 4].map((r) => (
                <div key={r} style={{ border: "1px solid var(--m-line)", padding: "8px 10px" }}>
                  <div className="m-mono" style={{ fontSize: 9, color: "var(--m-ink-4)" }}>R-{1200 + r}</div>
                  <div style={{ fontSize: 11, marginTop: 4 }}>Active · {r * 7}d</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--m-line)", padding: "8px 12px", display: "flex", justifyContent: "space-between" }} className="m-mono">
          <span style={{ fontSize: 10, color: "var(--m-ink-4)" }}>Operator · Avery</span>
          <span style={{ fontSize: 10, color: "var(--m-accent)" }}>● live</span>
        </div>
      </div>
    );
  }
  return (
    <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", aspectRatio: "1 / 1.05", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>SAMPLE · AGENT THREAD</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <AgentLine kind="in"  who="Caller" text="Hi, I need to reschedule my refill for next Tuesday." />
        <AgentLine kind="out" who="Agent"  text="Got it — moving order #SO-2241 to Tue, May 26. Confirm?" />
        <AgentLine kind="in"  who="Caller" text="Yes please." />
        <AgentLine kind="out" who="Agent"  text="Done. SMS confirmation on the way." accent />
      </div>
      <div style={{ paddingTop: 10, borderTop: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between" }} className="m-mono">
        <span style={{ fontSize: 10, color: "var(--m-ink-4)" }}>Auto-resolved · 38s</span>
        <span style={{ fontSize: 10, color: "var(--m-accent)" }}>● 94% rate</span>
      </div>
    </div>
  );
}

function AgentLine({ kind, who, text, accent }: { kind: "in" | "out"; who: string; text: string; accent?: boolean }) {
  const isIn = kind === "in";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: isIn ? "flex-start" : "flex-end" }}>
      <div className="m-mono" style={{ fontSize: 9, color: "var(--m-ink-4)" }}>{who}</div>
      <div style={{
        fontSize: 11,
        padding: "6px 10px",
        maxWidth: "85%",
        background: isIn ? "var(--m-bg-sunken)" : (accent ? "var(--m-accent)" : "var(--m-ink)"),
        color: isIn ? "var(--m-ink)" : (accent ? "var(--m-accent-ink)" : "var(--m-bg)"),
        border: isIn ? "1px solid var(--m-line)" : "1px solid transparent",
        lineHeight: 1.4,
      }}>{text}</div>
    </div>
  );
}
