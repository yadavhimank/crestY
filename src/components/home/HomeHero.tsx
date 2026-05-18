import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";

const PARTNERS: [string, IconName][] = [
  ["K2 Renewals",    "compass"],
  ["Barnshenn",      "grid"],
  ["Solivia Pharma", "shield"],
  ["Northbound SaaS","cpu"],
  ["Halcyon Care",   "team"],
  ["Mercer & Pine",  "document"],
];

export function HomeHero() {
  return (
    <section style={{ position: "relative", padding: "84px 56px 72px" }}>
      <HeroBackdrop />

      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
            <span className="m-eyebrow">Systems consulting · Est. 2023</span>
          </div>

          <h1 className="m-display" style={{ fontSize: 124, lineHeight: 0.86, letterSpacing: "-0.045em", marginBottom: 28 }}>
            We design<br />
            and automate<br />
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>how</em> your<br />
            business <em style={{ fontStyle: "italic" }}>runs.</em>
          </h1>

          <p style={{ fontSize: 19, color: "var(--m-ink-2)", maxWidth: 480, lineHeight: 1.55, marginBottom: 32 }}>
            From messy workflows to fully automated systems — we help businesses
            run faster, cleaner, and more efficiently. Three disciplines, one operating method.
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="m-btn m-btn-primary">
              Start a conversation <Icon name="arrowUpRight" size={14} />
            </Link>
            <Link href="/work" className="m-btn m-btn-ghost">See our work</Link>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em", marginLeft: 8 }}>
              · 6 systems shipped · 4 industries
            </span>
          </div>
        </div>

        <HeroSchematic />
      </div>

      <div style={{ marginTop: 72, paddingTop: 28, borderTop: "1px solid var(--m-line)", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <span className="m-eyebrow" style={{ color: "var(--m-ink-4)" }}>Operating partners</span>
        {PARTNERS.map(([n, ic]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--m-ink-3)" }}>
            <Icon name={ic} size={16} />
            <span className="m-display" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>{n}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroSchematic() {
  return (
    <div style={{
      aspectRatio: "5 / 6",
      maxHeight: 600,
      border: "1px solid var(--m-line)",
      background: "var(--m-bg-raised)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderBottom: "1px solid var(--m-line)" }}>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>OPERATIONAL MAP · v3.2</span>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-ink-5)" }} />
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-ink-5)" }} />
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
        </div>
      </div>

      <div style={{ padding: 24, position: "relative", flex: 1, height: "calc(100% - 41px)" }}>
        <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

        <svg viewBox="0 0 480 600" style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
          <text x="14" y="26" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity="0.45">A · BEFORE</text>
          <text x="14" y="318" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity="0.45">B · AFTER</text>

          <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
            <path d="M40 80 C 80 60, 120 130, 180 100 S 280 60, 340 110 S 420 80, 440 130" />
            <path d="M40 140 C 100 200, 160 110, 220 170 S 320 220, 380 160 S 430 200, 440 180" />
            <path d="M60 220 C 110 180, 180 240, 240 220 S 300 180, 360 240 S 420 230, 430 250" />
            <path d="M40 100 C 80 200, 200 50, 260 200 S 380 100, 440 220" />
          </g>
          {([
            [40,80],[180,100],[340,110],[440,130],
            [40,140],[220,170],[380,160],[440,180],
            [60,220],[240,220],[360,240],[430,250],
            [120,60],[280,50],[160,200],[300,260],
          ] as [number,number][]).map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="3" stroke="currentColor" strokeWidth="1" fill="var(--m-bg-raised)" />
          ))}

          <line x1="20" y1="290" x2="460" y2="290" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

          <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
            <path d="M40 360 H 130 V 420 H 220 V 360 H 320 V 480 H 440" />
            <path d="M40 420 H 90 V 480 H 180 V 420 H 280 V 540 H 440" className="m-flow-line" />
          </g>
          {([
            [40,360],[130,360],[220,360],[320,360],
            [130,420],[220,420],[280,420],[440,420],
            [180,480],[320,480],[440,480],
            [90,420],[280,540],[440,540],
          ] as [number,number][]).map(([x,y],i) => (
            <rect key={i} x={x-4} y={y-4} width="8" height="8" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
          ))}
          <circle cx="440" cy="480" r="8" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
          <circle cx="440" cy="480" r="3" fill="var(--m-accent)" />

          <text x="14" y="180" fontFamily="var(--m-mono)" fontSize="9" fill="currentColor" opacity="0.4">17 handoffs · 4 systems</text>
          <text x="14" y="572" fontFamily="var(--m-mono)" fontSize="9" fill="var(--m-accent)">5 handoffs · 1 system</text>
        </svg>

        <div style={{
          position: "absolute", bottom: 18, right: 18,
          padding: "8px 12px",
          background: "var(--m-bg)",
          border: "1px solid var(--m-line)",
        }}>
          <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>EFFICIENCY</div>
          <div className="m-mono" style={{ fontSize: 14, fontWeight: 500 }}>+ 312<span style={{ color: "var(--m-accent)" }}>%</span></div>
        </div>
      </div>
    </div>
  );
}
