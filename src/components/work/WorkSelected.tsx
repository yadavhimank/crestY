import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

export function WorkSelected() {
  return (
    <section style={{ background: "var(--m-bg-sunken)", padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Selected · K2 Renewals · 2024"
        title={<>Five tools, <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>one</em> operating system.</>}
        lead="A deeper read on the K2 engagement — what we found, what we changed, what the team runs now."
        action={<button className="m-btn m-btn-bare">Read the case <Icon name="arrowRight" size={13} /></button>}
      />
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56 }}>
        <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>BEFORE → AFTER · OPERATING MAP</span>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-accent)" }}>v3.2 LIVE</span>
          </div>
          <div style={{ height: 480, position: "relative", padding: 24 }}>
            <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.45 }} />
            <svg viewBox="0 0 540 480" style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
              <text x="14" y="22" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity="0.45">A · BEFORE · 5 SYSTEMS · 17 HANDOFFS</text>
              <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
                <path d="M30 60 C 70 40, 130 110, 200 80 S 320 50, 400 100 S 480 80, 520 110" />
                <path d="M30 120 C 90 170, 180 90, 240 150 S 360 200, 420 130 S 500 160, 520 150" />
                <path d="M50 180 C 110 150, 190 200, 260 180 S 320 130, 380 200 S 450 200, 520 210" />
                <path d="M30 90 C 80 180, 230 30, 290 170 S 420 90, 520 200" />
              </g>
              {([[30,60],[200,80],[400,100],[520,110],[30,120],[240,150],[420,130],[520,150],[50,180],[260,180],[380,200],[520,210],[110,40],[300,40],[160,170],[330,210]] as [number,number][]).map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="3" stroke="currentColor" strokeWidth="1" fill="var(--m-bg-raised)" />
              ))}
              <line x1="14" y1="240" x2="530" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
              <text x="14" y="262" fontFamily="var(--m-mono)" fontSize="10" fill="var(--m-accent)">B · AFTER · 1 SYSTEM · 5 HANDOFFS</text>
              <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
                <path d="M30 300 H 140 V 360 H 250 V 300 H 360 V 420 H 520" />
                <path d="M30 360 H 100 V 420 H 200 V 360 H 320 V 460 H 520" className="m-flow-line" />
              </g>
              {([[30,300],[140,300],[250,300],[360,300],[140,360],[250,360],[320,360],[520,360],[200,420],[360,420],[520,420],[100,360],[320,460],[520,460]] as [number,number][]).map(([x,y],i)=>(
                <rect key={i} x={x-4} y={y-4} width="8" height="8" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
              ))}
              <circle cx="520" cy="420" r="10" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
              <circle cx="520" cy="420" r="4" fill="var(--m-accent)" />
            </svg>
          </div>
        </div>
        <div style={{ paddingTop: 4 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
            <span className="m-tag m-tag-dot">Renewable energy</span>
            <span className="m-tag">CRM</span>
            <span className="m-tag">Workflow</span>
            <span className="m-tag">Live · 18 months</span>
          </div>
          <h3 className="m-display" style={{ fontSize: 42, letterSpacing: "-0.025em", lineHeight: 1 }}>
            The team didn&apos;t need a new tool. They needed the right boundaries between the ones they had.
          </h3>
          <p style={{ marginTop: 20, fontSize: 16, color: "var(--m-ink-2)", lineHeight: 1.65 }}>
            K2 Renewals were running on five tools — Salesforce, three custom spreadsheets, and a deeply-loved Slack channel —
            with 17 handoffs between a lead landing and a signed contract. The Mettle engagement collapsed all of it into a
            single operating system the team designed alongside us.
          </p>
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, padding: "24px 0", borderTop: "1px solid var(--m-line)", borderBottom: "1px solid var(--m-line)" }}>
            {([
              ["compass",  "Phase 01 · Diagnostic", "2 weeks"],
              ["brackets", "Phase 02 · Build",      "11 weeks"],
              ["deploy",   "Phase 03 · Deploy",     "2 weeks"],
              ["orbit",    "Phase 04 · Operate",    "Ongoing"],
            ] as [IconName, string, string][]).map(([ic, t, m]) => (
              <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ color: "var(--m-ink-3)" }}><Icon name={ic} size={18} /></span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{t}</div>
                  <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", marginTop: 2 }}>{m}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {([
              ["+70hrs","saved / week"],
              ["5 → 1","operating systems"],
              ["17 → 5","handoffs"],
            ] as [string, string][]).map(([n, l]) => (
              <div key={l}>
                <div className="m-display" style={{ fontSize: 38, letterSpacing: "-0.03em" }}>{n}</div>
                <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
