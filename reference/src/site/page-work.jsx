// Mettle — Work page · case studies index

function SiteWork() {
  return (
    <SiteFrame active="work">
      <WorkHeader />
      <WorkFilter />
      <WorkIndex />
      <WorkSelected />
      <WorkSectors />
      <CTAStrip
        eyebrow="Selected work · 06"
        heading={<>Your business is the next <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>case study.</em></>}
        body="We take 4–5 new operating partners a year. The next slot opens August."
      />
    </SiteFrame>
  );
}

function WorkHeader() {
  return (
    <section style={{ padding: "84px 56px 32px", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "end" }}>
        <div>
          <span className="m-eyebrow">Work · Six live systems</span>
          <h1 className="m-display" style={{ fontSize: 108, letterSpacing: "-0.045em", lineHeight: 0.9, marginTop: 22 }}>
            Systems we&apos;ve<br/>
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>shipped</em>, not<br/>
            slides we&apos;ve drawn.
          </h1>
        </div>
        <div style={{ paddingBottom: 12 }}>
          <p style={{ fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 440 }}>
            Six engagements across four industries. Each one is a working operating system —
            owned by the team that runs it.
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 28 }}>
            {[["6","Live systems"],["4","Industries"],["3.2yr","Avg. lifespan"]].map(([n,l])=>(
              <div key={l}>
                <div className="m-display" style={{ fontSize: 36, letterSpacing: "-0.025em" }}>{n}</div>
                <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkFilter() {
  const filters = [
    ["grid",     "All",            true],
    ["compass",  "System design"],
    ["brackets", "Software"],
    ["orbit",    "Automation"],
    ["database", "Data"],
    ["team",     "Operations"],
  ];
  return (
    <div style={{
      padding: "16px 56px",
      borderTop: "1px solid var(--m-line)",
      borderBottom: "1px solid var(--m-line)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "var(--m-bg-raised)",
      position: "sticky", top: 65, zIndex: 5,
    }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {filters.map(([ic, l, active]) => (
          <button key={l} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 12px",
            border: "1px solid " + (active ? "var(--m-ink)" : "var(--m-line)"),
            background: active ? "var(--m-ink)" : "var(--m-bg)",
            color: active ? "var(--m-bg)" : "var(--m-ink-2)",
            fontSize: 13, fontWeight: 500, cursor: "pointer",
            fontFamily: "var(--m-sans)",
          }}>
            <MIcon name={ic} size={14} /> {l}
          </button>
        ))}
      </div>
      <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>06 results · sort by · most recent</span>
    </div>
  );
}

const WORK_CASES = [
  {
    id: "k2",
    n: "01",
    title: "K2 Renewals",
    sector: "Renewable energy",
    region: "Scotland · UK",
    year: "2024",
    icon: "compass",
    disciplines: ["System design", "Custom software"],
    summary: "A 5-tool sales stack collapsed into one operating system tuned to how the team actually closes.",
    metric: ["+70hrs", "saved / week"],
    cover: "k2",
  },
  {
    id: "barnshenn",
    n: "02",
    title: "Barnshenn",
    sector: "E-commerce",
    region: "London · UK",
    year: "2024",
    icon: "grid",
    disciplines: ["Software", "Operations"],
    summary: "Unified ops platform rebuilt around the team's real sales-to-fulfilment sequence.",
    metric: ["3.2×", "throughput"],
    cover: "barn",
  },
  {
    id: "solivia",
    n: "03",
    title: "Solivia Pharma",
    sector: "Pharma · Voice agent",
    region: "Mumbai · IN",
    year: "2025",
    icon: "orbit",
    disciplines: ["Automation", "AI"],
    summary: "Always-on voice agent handling refill coordination across 1,200 patients without escalation.",
    metric: ["94%", "auto-resolved"],
    cover: "solivia",
  },
  {
    id: "northbound",
    n: "04",
    title: "Northbound SaaS",
    sector: "B2B SaaS · License flow",
    region: "Toronto · CA",
    year: "2025",
    icon: "cpu",
    disciplines: ["System design", "Software"],
    summary: "Rebuilt the trial-to-paid pipeline as a single state machine — replacing 3 stitched-together vendor tools.",
    metric: ["+38%", "conversion"],
    cover: "north",
  },
  {
    id: "halcyon",
    n: "05",
    title: "Halcyon Care",
    sector: "Healthcare · Triage",
    region: "Singapore · SG",
    year: "2025",
    icon: "shield",
    disciplines: ["Automation", "Data"],
    summary: "Clinical triage assistant routing intake messages to the right specialist queue, with audit log.",
    metric: ["-62%", "intake time"],
    cover: "halcyon",
  },
  {
    id: "mercer",
    n: "06",
    title: "Mercer & Pine",
    sector: "Legal · Practice management",
    region: "London · UK",
    year: "2026",
    icon: "document",
    disciplines: ["System design"],
    summary: "Written operating diagnostic and matter-management blueprint for a 14-partner litigation practice.",
    metric: ["1 doc", "12 weeks runway"],
    cover: "mercer",
  },
];

function WorkIndex() {
  return (
    <section style={{ padding: "48px 0 80px" }}>
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {WORK_CASES.map((c) => <CaseCard key={c.id} c={c} />)}
      </div>
    </section>
  );
}

function CaseCard({ c }) {
  return (
    <article
      style={{
        border: "1px solid var(--m-line)",
        background: "var(--m-bg-raised)",
        display: "flex", flexDirection: "column",
        cursor: "pointer",
        transition: "transform 240ms var(--ease-out-fine), border-color 140ms var(--ease-out-fine)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.borderColor = "var(--m-ink)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.borderColor = ""; }}
    >
      <CaseCover cover={c.cover} icon={c.icon} n={c.n} />
      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{c.sector}</span>
          <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>{c.year}</span>
        </div>
        <h3 className="m-display" style={{ fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{c.title}</h3>
        <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{c.summary}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
          {c.disciplines.map((d) => (<span key={d} className="m-tag">{d}</span>))}
        </div>
        <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <div className="m-display" style={{ fontSize: 28, letterSpacing: "-0.025em", lineHeight: 1 }}>{c.metric[0]}</div>
            <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>{c.metric[1]}</div>
          </div>
          <span style={{ color: "var(--m-ink-3)" }}><MIcon name="arrowUpRight" size={16} /></span>
        </div>
      </div>
    </article>
  );
}

/* Per-case schematic cover. Five+ variants so the index doesn't repeat. */
function CaseCover({ cover, icon, n }) {
  return (
    <div style={{ height: 220, position: "relative", borderBottom: "1px solid var(--m-line)", background: "var(--m-bg-sunken)", overflow: "hidden" }}>
      <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
      <CaseCoverArt kind={cover} />
      <div style={{ position: "absolute", top: 14, left: 14, display: "flex", alignItems: "center", gap: 8 }}>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>CASE · {n}</span>
      </div>
      <div style={{ position: "absolute", top: 14, right: 14, color: "var(--m-ink-3)" }}>
        <MIcon name={icon} size={20} />
      </div>
    </div>
  );
}

function CaseCoverArt({ kind }) {
  if (kind === "k2") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <path d="M30 60 H 90 V 110 H 150 V 60 H 220 V 160 H 290" />
          <path d="M30 130 H 70 V 180 H 200 V 130 H 250 V 180 H 290" className="m-flow-line" />
        </g>
        {[[30,60],[90,60],[90,110],[150,110],[150,60],[220,60],[220,160],[290,160],[30,130],[70,130],[70,180],[200,180],[200,130],[250,130],[250,180],[290,180]].map(([x,y],i)=>(
          <rect key={i} x={x-3} y={y-3} width="6" height="6" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
        ))}
      </svg>
    );
  }
  if (kind === "barn") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="0.75" opacity="0.6">
          {[40, 80, 120, 160].map(y => <line key={y} x1="30" y1={y} x2="290" y2={y} />)}
          {[40, 90, 140, 190, 240, 290].map(x => <line key={x} x1={x} y1="40" x2={x} y2="180" />)}
        </g>
        {[
          [90, 40], [140, 80], [190, 120], [240, 80], [290, 160], [40, 120], [40, 160],
        ].map(([x,y],i) => (
          <rect key={i} x={x-6} y={y-6} width="12" height="12" stroke="var(--m-accent)" strokeWidth="1.25" fill="var(--m-bg-raised)" />
        ))}
        <rect x="284" y="154" width="12" height="12" stroke="var(--m-accent)" strokeWidth="1.5" fill="var(--m-accent)" />
      </svg>
    );
  }
  if (kind === "solivia") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1" fill="none">
          <ellipse cx="160" cy="110" rx="120" ry="40" />
          <ellipse cx="160" cy="110" rx="80" ry="60" transform="rotate(-25 160 110)" />
          <ellipse cx="160" cy="110" rx="50" ry="80" transform="rotate(40 160 110)" />
        </g>
        <circle cx="160" cy="110" r="10" fill="var(--m-accent)" />
        <circle cx="160" cy="110" r="16" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
        {[[240,78],[84,146],[200,170],[110,68]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="3" fill="var(--m-accent)" />
        ))}
      </svg>
    );
  }
  if (kind === "north") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <rect x="30" y="70" width="50" height="50" />
          <rect x="120" y="70" width="50" height="50" />
          <rect x="210" y="70" width="50" height="50" />
          <line x1="80" y1="95" x2="120" y2="95" />
          <line x1="170" y1="95" x2="210" y2="95" />
        </g>
        <g fontFamily="var(--m-mono)" fontSize="8" fill="currentColor" opacity="0.5" textAnchor="middle">
          <text x="55" y="98">TRIAL</text>
          <text x="145" y="98">ACTIVE</text>
          <text x="235" y="98">PAID</text>
        </g>
        <circle cx="55" cy="160" r="4" fill="var(--m-accent)" />
        <circle cx="145" cy="160" r="4" fill="var(--m-accent)" />
        <circle cx="235" cy="160" r="6" fill="var(--m-accent)" />
        <circle cx="235" cy="160" r="12" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
      </svg>
    );
  }
  if (kind === "halcyon") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <circle cx="160" cy="60" r="6" />
          <line x1="160" y1="66" x2="160" y2="100" />
          <line x1="60" y1="160" x2="160" y2="100" />
          <line x1="160" y1="100" x2="260" y2="160" />
          <line x1="160" y1="100" x2="160" y2="160" />
        </g>
        {[[60,160],[160,160],[260,160]].map(([x,y],i)=>(
          <g key={i}>
            <rect x={x-12} y={y-8} width="24" height="20" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
            <text x={x} y={y+5} fontFamily="var(--m-mono)" fontSize="8" textAnchor="middle" fill="currentColor" opacity="0.6">{["GP","RX","ER"][i]}</text>
          </g>
        ))}
      </svg>
    );
  }
  // mercer — document
  return (
    <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
        <path d="M100 40 H 200 L 220 60 V 180 H 100 Z" />
        <polyline points="200,40 200,60 220,60" />
        <line x1="120" y1="90" x2="200" y2="90" />
        <line x1="120" y1="110" x2="200" y2="110" />
        <line x1="120" y1="130" x2="180" y2="130" />
        <line x1="120" y1="150" x2="160" y2="150" />
      </g>
      <rect x="106" y="166" width="10" height="6" fill="var(--m-accent)" />
    </svg>
  );
}

/* ─── Featured selected work · a deep dive on K2 ──────── */
function WorkSelected() {
  return (
    <section style={{ background: "var(--m-bg-sunken)", padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Selected · K2 Renewals · 2024"
        title={<>Five tools, <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>one</em> operating system.</>}
        lead="A deeper read on the K2 engagement — what we found, what we changed, what the team runs now."
        action={<button className="m-btn m-btn-bare">Read the case <MIcon name="arrowRight" size={13} /></button>}
      />

      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56 }}>
        {/* Before / after sketch */}
        <div style={{ border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", overflow: "hidden" }}>
          <div style={{ padding: "14px 18px", borderBottom: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>BEFORE → AFTER · OPERATING MAP</span>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-accent)" }}>v3.2 LIVE</span>
          </div>
          <div style={{ height: 480, position: "relative", padding: 24 }}>
            <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.45 }} />
            <svg viewBox="0 0 540 480" style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
              {/* BEFORE half */}
              <text x="14" y="22" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity="0.45">A · BEFORE · 5 SYSTEMS · 17 HANDOFFS</text>
              <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
                <path d="M30 60 C 70 40, 130 110, 200 80 S 320 50, 400 100 S 480 80, 520 110" />
                <path d="M30 120 C 90 170, 180 90, 240 150 S 360 200, 420 130 S 500 160, 520 150" />
                <path d="M50 180 C 110 150, 190 200, 260 180 S 320 130, 380 200 S 450 200, 520 210" />
                <path d="M30 90 C 80 180, 230 30, 290 170 S 420 90, 520 200" />
              </g>
              {[[30,60],[200,80],[400,100],[520,110],[30,120],[240,150],[420,130],[520,150],[50,180],[260,180],[380,200],[520,210],[110,40],[300,40],[160,170],[330,210]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="3" stroke="currentColor" strokeWidth="1" fill="var(--m-bg-raised)" />
              ))}

              <line x1="14" y1="240" x2="530" y2="240" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

              {/* AFTER half */}
              <text x="14" y="262" fontFamily="var(--m-mono)" fontSize="10" fill="var(--m-accent)">B · AFTER · 1 SYSTEM · 5 HANDOFFS</text>
              <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
                <path d="M30 300 H 140 V 360 H 250 V 300 H 360 V 420 H 520" />
                <path d="M30 360 H 100 V 420 H 200 V 360 H 320 V 460 H 520" className="m-flow-line" />
              </g>
              {[[30,300],[140,300],[250,300],[360,300],[140,360],[250,360],[320,360],[520,360],[200,420],[360,420],[520,420],[100,360],[320,460],[520,460]].map(([x,y],i)=>(
                <rect key={i} x={x-4} y={y-4} width="8" height="8" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
              ))}
              <circle cx="520" cy="420" r="10" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
              <circle cx="520" cy="420" r="4" fill="var(--m-accent)" />
            </svg>
          </div>
        </div>

        {/* Narrative + outputs */}
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
            {[
              ["compass",  "Phase 01 · Diagnostic", "2 weeks"],
              ["brackets", "Phase 02 · Build",      "11 weeks"],
              ["deploy",   "Phase 03 · Deploy",     "2 weeks"],
              ["orbit",    "Phase 04 · Operate",    "Ongoing"],
            ].map(([ic, t, m]) => (
              <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ color: "var(--m-ink-3)" }}><MIcon name={ic} size={18} /></span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{t}</div>
                  <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", marginTop: 2 }}>{m}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {[["+70hrs","saved / week"],["5 → 1","operating systems"],["17 → 5","handoffs"]].map(([n,l])=>(
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

/* ─── Sectors strip ───────────────────────────────────── */
function WorkSectors() {
  const sectors = [
    ["compass",  "Renewable energy"],
    ["grid",     "E-commerce"],
    ["shield",   "Healthcare"],
    ["orbit",    "Pharma"],
    ["cpu",      "B2B SaaS"],
    ["document", "Legal · Professional services"],
  ];
  return (
    <section style={{ padding: "72px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Sectors · Where we work"
        title={<>Four industries. <em style={{ fontStyle: "italic" }}>One method.</em></>}
      />
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 0, borderTop: "1px solid var(--m-line)", borderBottom: "1px solid var(--m-line)" }}>
        {sectors.map(([ic, n], i) => (
          <div key={n} style={{
            padding: "28px 18px",
            borderRight: i < sectors.length - 1 ? "1px solid var(--m-line)" : "none",
            display: "flex", flexDirection: "column", gap: 12,
          }}>
            <MIcon name={ic} size={22} />
            <div style={{ fontSize: 14, fontWeight: 500 }}>{n}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { SiteWork });
