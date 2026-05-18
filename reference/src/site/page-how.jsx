// Mettle — How we work · the method

function SiteHow() {
  return (
    <SiteFrame active="how">
      <HowHeader />
      <HowRail />
      <HowPhasesDetail />
      <HowArtefacts />
      <HowToolkit />
      <HowEthos />
      <CTAStrip
        eyebrow="Engage"
        heading={<>Send us the messy version. We&rsquo;ll send you the <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>map.</em></>}
        body="Most engagements start with the diagnostic. Two weeks, fixed-fee, no commitment beyond."
      />
    </SiteFrame>
  );
}

function HowHeader() {
  return (
    <section style={{ padding: "84px 56px 32px", position: "relative" }}>
      <MHeroBackdrop />
      <div style={{ position: "relative" }}>
        <span className="m-eyebrow">How we work · Four phases · One method</span>
        <h1 className="m-display" style={{ fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.92, maxWidth: 1100, marginTop: 22 }}>
          Diagnose before you build.<br/>
          <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>Build</em> like the system <em style={{ fontStyle: "italic" }}>has to last.</em>
        </h1>
        <p style={{ marginTop: 24, fontSize: 18, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 640 }}>
          The Mettle method is four phases run as a loop. Each phase has a defined output that
          the team that owns the business — not just the team that builds the system — can read and approve.
        </p>
      </div>
    </section>
  );
}

const PHASES = [
  {
    n: "01", icon: "observe", t: "Observe",
    d: "Interview teams. Inspect tools. Map how work actually moves through your business today.",
    out: "A truthful operating map",
    duration: "1–2 weeks",
    artefacts: ["Stakeholder interviews", "Current-state map", "Friction inventory"],
    body: "We start with people, not software. Every operator gets an hour. Every tool gets opened. We come back with a map that the team recognises — usually one that surfaces the friction nobody had named.",
  },
  {
    n: "02", icon: "simplify", t: "Simplify",
    d: "Remove redundant handoffs. Define cleaner business rules. Strip the workflow to its load-bearing parts.",
    out: "A blueprint your team agrees with",
    duration: "1 week",
    artefacts: ["Future-state blueprint", "Business rule register", "Workshop · stakeholders"],
    body: "Most operating problems vanish once you remove the steps that don't have to be there. We propose the simplest workflow that does the work, then refine it in a single workshop with the team.",
  },
  {
    n: "03", icon: "build", t: "Build",
    d: "Ship the system in focused modules. Each one is testable, deployable, and reversible.",
    out: "Software that matches the business",
    duration: "8–12 weeks",
    artefacts: ["Production software", "Operator UI", "Schema + audit log"],
    body: "Modules ship weekly. Operators see the system come together. No big bang launch — by the time the system is finished, half the team is already using parts of it.",
  },
  {
    n: "04", icon: "deploy", t: "Deploy",
    d: "Launch with the team in the room. Refine based on real operational feedback, not assumptions.",
    out: "Operators who own the outcome",
    duration: "2 weeks · then ongoing",
    artefacts: ["Runbooks", "Training session", "First-month support"],
    body: "We sit with the team for the first two weeks. Then we hand the keys over. Software ages well when the people who use it shape it from the start.",
  },
];

function HowRail() {
  return (
    <section style={{ padding: "0 56px 32px", position: "relative" }}>
      <div style={{
        position: "relative",
        borderTop: "1px solid var(--m-line-strong)", paddingTop: 32,
      }}>
        <div style={{
          position: "absolute", left: 0, right: 0, top: 32, height: 1,
          background: "var(--m-line-strong)", display: "none"
        }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {PHASES.map((p, i) => (
            <a key={p.n}
               href={`#/how-we-work?phase=${p.n}`}
               onClick={(e)=>{ e.preventDefault(); const el = document.getElementById(`phase-${p.n}`); if (el) el.scrollIntoView({block: "start", behavior: "smooth"}); }}
               style={{ position: "relative", display: "block", textDecoration: "none", color: "inherit", paddingTop: 16 }}
            >
              <span style={{
                position: "absolute", top: -36, left: 0,
                width: 10, height: 10, borderRadius: 999, background: "var(--m-ink)",
              }} />
              {i === 1 && (
                <span style={{
                  position: "absolute", top: -42, left: -6,
                  width: 22, height: 22, borderRadius: 999, border: "1px solid var(--m-accent)",
                }} className="m-flow-pulse" />
              )}
              <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>PHASE {p.n}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                <MIcon name={p.icon} size={26} />
                <h3 className="m-display" style={{ fontSize: 36, letterSpacing: "-0.02em" }}>{p.t}</h3>
              </div>
              <p style={{ marginTop: 12, fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{p.d}</p>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--m-line)" }}>
                <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>OUTPUT</div>
                <div style={{ marginTop: 4, fontSize: 13, fontWeight: 500 }}>{p.out}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Per-phase deep section ──────────────────────────── */
function HowPhasesDetail() {
  return (
    <section style={{ borderTop: "1px solid var(--m-line)" }}>
      {PHASES.map((p, i) => (
        <article key={p.n} id={`phase-${p.n}`} style={{
          padding: "80px 56px",
          borderBottom: "1px solid var(--m-line)",
          background: i % 2 === 0 ? "var(--m-bg)" : "var(--m-bg-raised)",
          display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <span className="m-mono" style={{ fontSize: 12, color: "var(--m-ink-4)", letterSpacing: "0.12em" }}>PHASE {p.n}</span>
              <span style={{ width: 24, height: 1, background: "var(--m-line-2)" }} />
              <span className="m-mono" style={{ fontSize: 12, color: "var(--m-ink-3)" }}>{p.duration}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 22 }}>
              <MIcon name={p.icon} size={42} />
              <h2 className="m-display" style={{ fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.9 }}>{p.t}</h2>
            </div>
            <p style={{ fontSize: 18, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 480, marginBottom: 28 }}>{p.body}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <span className="m-eyebrow">Output</span>
                <div className="m-display" style={{ fontSize: 22, marginTop: 8, letterSpacing: "-0.015em", lineHeight: 1.2 }}>{p.out}</div>
              </div>
              <div>
                <span className="m-eyebrow">Artefacts</span>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                  {p.artefacts.map((a) => (
                    <li key={a} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--m-ink-2)" }}>
                      <span style={{ width: 4, height: 4, background: "var(--m-ink-3)", borderRadius: 999 }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <PhaseDiagram phase={p.n} icon={p.icon} />
        </article>
      ))}
    </section>
  );
}

/* Per-phase schematic. Each phase gets its own visual */
function PhaseDiagram({ phase, icon }) {
  if (phase === "01") {
    // Observe — interviews / people network
    return (
      <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg)", padding: 24, aspectRatio: "5/4", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>OBSERVE · STAKEHOLDER MAP</span>
          <span className="m-mono" style={{ fontSize: 10, color: "var(--m-accent)" }}>12 interviews</span>
        </div>
        <svg viewBox="0 0 480 360" style={{ width: "100%", height: "calc(100% - 24px)" }}>
          {/* Central node */}
          <circle cx="240" cy="180" r="38" stroke="currentColor" strokeWidth="1" fill="var(--m-bg-raised)" />
          <text x="240" y="184" fontFamily="var(--m-mono)" fontSize="10" textAnchor="middle" fill="currentColor">OPS</text>

          {/* Stakeholders ring */}
          {[
            [80,  80,  "SALES"],
            [400, 80,  "FINANCE"],
            [60,  300, "FULFIL"],
            [420, 300, "SUPPORT"],
            [240, 40,  "FOUNDER"],
            [240, 320, "CUSTOMER"],
          ].map(([x,y,l],i) => (
            <g key={i}>
              <line x1="240" y1="180" x2={x} y2={y} stroke="currentColor" strokeWidth="0.75" opacity="0.4" strokeDasharray="3 4" />
              <circle cx={x} cy={y} r="22" stroke="var(--m-accent)" strokeWidth="1.25" fill="var(--m-bg)" />
              <text x={x} y={y+3} fontFamily="var(--m-mono)" fontSize="9" textAnchor="middle" fill="currentColor" opacity="0.7">{l}</text>
            </g>
          ))}

          {/* Tools (small circles, fainter) */}
          {[[160, 130, "CRM"], [330, 140, "SHEET"], [180, 240, "EMAIL"], [320, 250, "SLACK"]].map(([x,y,l],i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="10" stroke="currentColor" strokeWidth="0.75" fill="var(--m-bg-sunken)" opacity="0.85" />
              <text x={x} y={y+3} fontFamily="var(--m-mono)" fontSize="7" textAnchor="middle" fill="currentColor" opacity="0.5">{l}</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }
  if (phase === "02") {
    // Simplify — messy → clean overlay
    return (
      <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg)", padding: 24, aspectRatio: "5/4", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>SIMPLIFY · LOAD-BEARING ONLY</span>
          <span className="m-mono" style={{ fontSize: 10, color: "var(--m-accent)" }}>−12 steps</span>
        </div>
        <svg viewBox="0 0 480 360" style={{ width: "100%", height: "calc(100% - 24px)" }}>
          {/* Messy ghost */}
          <g stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.25">
            <path d="M30 100 C 70 60, 160 150, 240 100 S 350 60, 460 120" />
            <path d="M30 160 C 100 220, 180 130, 260 200 S 360 250, 460 180" />
            <path d="M40 220 C 110 180, 200 240, 280 220 S 340 180, 460 240" />
          </g>
          {/* Clean overlay */}
          <g stroke="var(--m-accent)" strokeWidth="1.5" fill="none">
            <path d="M30 160 H 140 V 260 H 290 V 160 H 460" />
          </g>
          {[[30,160],[140,160],[140,260],[290,260],[290,160],[460,160]].map(([x,y],i)=>(
            <rect key={i} x={x-5} y={y-5} width="10" height="10" stroke="var(--m-accent)" fill="var(--m-bg)" strokeWidth="1.5" />
          ))}
          <text x="30" y="60" fontFamily="var(--m-mono)" fontSize="9" fill="currentColor" opacity="0.4">17 steps · before</text>
          <text x="30" y="320" fontFamily="var(--m-mono)" fontSize="9" fill="var(--m-accent)">5 steps · after</text>
        </svg>
      </div>
    );
  }
  if (phase === "03") {
    // Build — modules dropping in
    return (
      <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg)", padding: 24, aspectRatio: "5/4", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>BUILD · MODULE TIMELINE</span>
          <span className="m-mono" style={{ fontSize: 10, color: "var(--m-accent)" }}>week 8 / 11</span>
        </div>
        <svg viewBox="0 0 480 360" style={{ width: "100%", height: "calc(100% - 24px)" }}>
          {/* Timeline axis */}
          <line x1="40" y1="320" x2="460" y2="320" stroke="currentColor" strokeWidth="1" />
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={i} x1={40 + i * 42} y1="316" x2={40 + i * 42} y2="324" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          ))}
          <text x="40" y="345" fontFamily="var(--m-mono)" fontSize="9" fill="currentColor" opacity="0.5">w1</text>
          <text x="460" y="345" fontFamily="var(--m-mono)" fontSize="9" fill="currentColor" opacity="0.5" textAnchor="end">w11</text>

          {/* Module bars */}
          {[
            ["M1 · Schema",      40,  140, 100, 40, true],
            ["M2 · Operator UI", 120, 200, 140, 80, true],
            ["M3 · Roles",       190, 110, 100, 100, true],
            ["M4 · Reports",     300, 170, 90,  140, false],
            ["M5 · API",         360, 80,  60,  180, false],
          ].map(([label, x, w, h, y, done], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h}
                stroke={done ? "var(--m-accent)" : "currentColor"}
                strokeWidth={done ? "1.5" : "1"}
                fill={done ? "color-mix(in oklab, var(--m-accent), transparent 80%)" : "var(--m-bg-raised)"}
                opacity={done ? 1 : 0.6}
              />
              <text x={x + 8} y={y + 18} fontFamily="var(--m-mono)" fontSize="9" fill="currentColor" opacity={done ? 0.9 : 0.5}>{label}</text>
            </g>
          ))}
        </svg>
      </div>
    );
  }
  // 04 — Deploy / handover
  return (
    <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg)", padding: 24, aspectRatio: "5/4", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>DEPLOY · HANDOVER</span>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-accent)" }}>day 0 · live</span>
      </div>
      <svg viewBox="0 0 480 360" style={{ width: "100%", height: "calc(100% - 24px)" }}>
        {/* Two clusters with a bridge between */}
        <g>
          <text x="30" y="40" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity="0.5">METTLE</text>
          <text x="330" y="40" fontFamily="var(--m-mono)" fontSize="10" fill="var(--m-accent)">CLIENT TEAM</text>
        </g>
        {/* Mettle nodes (fading) */}
        {[[60, 100], [110, 140], [80, 200], [130, 240]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="10" stroke="currentColor" strokeWidth="1" fill="var(--m-bg-raised)" opacity={0.7 - i*0.12} />
        ))}
        {/* Bridge / handoff */}
        <line x1="160" y1="180" x2="320" y2="180" stroke="var(--m-accent)" strokeWidth="1.25" strokeDasharray="6 8" />
        <polyline points="305,170 320,180 305,190" stroke="var(--m-accent)" strokeWidth="1.25" fill="none" />
        {/* Client nodes (growing) */}
        {[[360, 100], [410, 140], [380, 200], [430, 240]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="10" stroke="var(--m-accent)" strokeWidth={1 + i * 0.25} fill="var(--m-bg-raised)" />
        ))}
        {/* The system in the middle */}
        <rect x="220" y="160" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="var(--m-bg-raised)" />
        <text x="240" y="184" fontFamily="var(--m-mono)" fontSize="9" textAnchor="middle" fill="currentColor">SYSTEM</text>
      </svg>
    </div>
  );
}

/* ─── Artefacts gallery ────────────────────────────────── */
function HowArtefacts() {
  const items = [
    ["document", "Operating map",  "A truthful current-state diagram of how work moves through the business."],
    ["dashboard","Blueprint",      "The simpler future-state workflow, business rules, and decision points."],
    ["database", "Schema + rules", "The data model and the business logic that operates on it."],
    ["grid",     "Operator UI",    "The actual screens your team uses every day, designed module by module."],
    ["shield",   "Audit log",      "Roles, permissions, and a chronological record of every system action."],
    ["speak",    "Readouts",       "30-minute stakeholder sessions, recorded and written up — no jargon."],
  ];
  return (
    <section style={{ background: "var(--m-bg-sunken)", padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Artefacts · What every engagement produces"
        title={<>Things a non-engineer can <em style={{ fontStyle: "italic" }}>read.</em></>}
        lead="We don't hide work behind jargon. Every artefact is written for the team that runs the business — not just the team that built it."
      />
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {items.map(([ic, t, d]) => (
          <article key={t} style={{ background: "var(--m-bg-raised)", border: "1px solid var(--m-line)", padding: 28, display: "flex", flexDirection: "column", gap: 14, minHeight: 200 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <MIcon name={ic} size={28} />
              <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>ARTEFACT</span>
            </div>
            <h4 className="m-display" style={{ fontSize: 26, letterSpacing: "-0.02em" }}>{t}</h4>
            <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Toolkit ─────────────────────────────────────────── */
function HowToolkit() {
  const tools = [
    { cat: "Map", items: ["Miro · interviews", "FigJam · whiteboards", "Linear · scope"] },
    { cat: "Build", items: ["TypeScript · most stacks", "Postgres · data of record", "Next.js · operator UIs"] },
    { cat: "Automate", items: ["Inngest · pipelines", "Anthropic + OpenAI", "ElevenLabs · voice"] },
    { cat: "Operate", items: ["Sentry · errors", "Datadog · ops", "Linear · roadmap"] },
  ];
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Toolkit · Pragmatic, not religious"
        title={<>We pick tools that <em style={{ fontStyle: "italic" }}>your team</em> can keep using.</>}
        lead="No bespoke stacks for the sake of it. We use boring technology where boring is right."
      />
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--m-line)", borderBottom: "1px solid var(--m-line)" }}>
        {tools.map((t, i) => (
          <div key={t.cat} style={{
            padding: "32px 24px",
            borderRight: i < 3 ? "1px solid var(--m-line)" : "none",
          }}>
            <span className="m-eyebrow">{t.cat}</span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              {t.items.map((it) => (
                <li key={it} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--m-ink-2)" }}>
                  <span style={{ width: 4, height: 4, background: "var(--m-ink-4)", borderRadius: 999 }} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Ethos · what we won't do ─────────────────────────── */
function HowEthos() {
  const yes = [
    ["check", "Fixed-fee diagnostics"],
    ["check", "Code your team owns"],
    ["check", "Reversible decisions"],
    ["check", "Operators in the room"],
    ["check", "Written artefacts"],
    ["check", "On-call after launch"],
  ];
  const no = [
    ["cross", "Open-ended retainers"],
    ["cross", "Vendor lock-in"],
    ["cross", "Big-bang launches"],
    ["cross", "Strategy decks without code"],
    ["cross", "Whitepapers"],
    ["cross", "Buzzword automation"],
  ];
  return (
    <section style={{ background: "var(--m-ink)", color: "var(--m-bg)", padding: "96px 0", borderTop: "1px solid var(--m-line-strong)" }}>
      <SectionHead
        dark
        kicker="Ethos · Two columns"
        title={<>What we <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>do</em>. What we <em style={{ fontStyle: "italic" }}>won&rsquo;t.</em></>}
        lead="Written down so we hold ourselves to it — and so you can decide quickly whether we're your kind of studio."
      />
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <EthosColumn label="We do" rows={yes} positive />
        <EthosColumn label="We won't" rows={no} />
      </div>
    </section>
  );
}

function EthosColumn({ label, rows, positive }) {
  return (
    <div style={{ border: "1px solid rgba(255,255,255,0.18)", padding: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 18, borderBottom: "1px solid rgba(255,255,255,0.18)" }}>
        <span className="m-mono" style={{ fontSize: 12, color: positive ? "var(--m-accent)" : "rgba(255,255,255,0.55)", letterSpacing: "0.12em" }}>{label.toUpperCase()}</span>
        <span className="m-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{rows.length} commitments</span>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
        {rows.map(([ic, t], i) => (
          <li key={t} style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 18, letterSpacing: "-0.01em", paddingBottom: 14, borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
            <span style={{ color: positive ? "var(--m-accent)" : "rgba(255,255,255,0.4)" }}>
              <MIcon name={ic} size={20} />
            </span>
            <span className="m-display" style={{ fontSize: 22 }}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { SiteHow });
