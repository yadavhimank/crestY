// Page mockup: How we work / Process

function PageHowWeWork() {
  const phases = [
    {
      n: "01", icon: "observe", t: "Observe",
      d: "Interview teams. Inspect tools. Map how work actually moves through your business today.",
      out: "A truthful operating map",
    },
    {
      n: "02", icon: "simplify", t: "Simplify",
      d: "Remove redundant handoffs. Define cleaner business rules. Strip the workflow to its load-bearing parts.",
      out: "A blueprint your team agrees with",
    },
    {
      n: "03", icon: "build", t: "Build",
      d: "Ship the system in focused modules. Each one is testable, deployable, and reversible.",
      out: "Software that matches the business",
    },
    {
      n: "04", icon: "deploy", t: "Deploy",
      d: "Launch with the team in the room. Refine based on real operational feedback, not assumptions.",
      out: "Operators who own the outcome",
    },
  ];

  return (
    <MPageFrame active="how">
      {/* Header */}
      <section style={{ padding: "60px 64px 32px" }}>
        <span className="m-eyebrow" style={{ marginBottom: 20, display: "block" }}>How we work · Four phases · One method</span>
        <h1 className="m-display" style={{ fontSize: 84, letterSpacing: "-0.035em", lineHeight: 0.92, maxWidth: 1000 }}>
          Diagnose before<br/>
          you build. <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>Build</em> like<br/>
          the system <em style={{ fontStyle: "italic" }}>has to last.</em>
        </h1>
      </section>

      {/* Phase rail */}
      <section style={{ padding: "0 64px 32px", flex: 1, position: "relative" }}>
        {/* Connector strip */}
        <div style={{
          position: "absolute", left: 64, right: 64, top: 32, height: 1,
          background: "var(--m-line-strong)",
        }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, paddingTop: 32 }}>
          {phases.map((p, i) => (
            <div key={p.n} style={{ position: "relative", paddingTop: 28 }}>
              {/* Node marker on the rail */}
              <span style={{
                position: "absolute", top: -4, left: 0,
                width: 8, height: 8, borderRadius: 999, background: "var(--m-ink)",
              }} />
              {i === 1 && (
                <span style={{
                  position: "absolute", top: -8, left: -4,
                  width: 16, height: 16, borderRadius: 999, border: "1px solid var(--m-accent)",
                }} className="m-flow-pulse" />
              )}

              <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>
                PHASE {p.n}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                <MIcon name={p.icon} size={24} />
                <h3 className="m-display" style={{ fontSize: 32, letterSpacing: "-0.02em" }}>{p.t}</h3>
              </div>
              <p style={{ marginTop: 12, fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{p.d}</p>

              <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid var(--m-line)" }}>
                <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>OUTPUT</div>
                <div style={{ marginTop: 4, fontSize: 13, fontWeight: 500 }}>{p.out}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schematic detail panel — example of phase 1 output */}
      <section style={{ borderTop: "1px solid var(--m-line)", padding: "32px 64px", background: "var(--m-bg-raised)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <span className="m-eyebrow">Sample artefact · Operating map</span>
          <h3 className="m-display" style={{ fontSize: 36, letterSpacing: "-0.02em", marginTop: 12 }}>
            Every Mettle engagement produces something a non-engineer can read.
          </h3>
          <p style={{ marginTop: 16, fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 480 }}>
            We don&apos;t hide work behind jargon. Diagrams, runbooks, and decision logs are
            shared as we go — so the team that runs the business after we leave actually does.
          </p>
        </div>

        <MiniMap />
      </section>
    </MPageFrame>
  );
}

function MiniMap() {
  return (
    <div style={{
      border: "1px solid var(--m-line)",
      background: "var(--m-bg)",
      padding: 20,
      position: "relative",
      aspectRatio: "16 / 9",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>FIG · 1.2 · ORDER FLOW</span>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>after · v2</span>
      </div>
      <svg viewBox="0 0 560 280" style={{ width: "100%", height: "85%" }}>
        {/* Lanes */}
        <g fontFamily="var(--m-mono)" fontSize="9" fill="currentColor" opacity="0.45">
          <text x="0" y="40">SALES</text>
          <text x="0" y="120">OPS</text>
          <text x="0" y="200">FULFILMENT</text>
        </g>
        <g stroke="currentColor" strokeWidth="0.5" opacity="0.2">
          <line x1="60" y1="40" x2="560" y2="40" />
          <line x1="60" y1="120" x2="560" y2="120" />
          <line x1="60" y1="200" x2="560" y2="200" />
        </g>

        {/* Pipeline */}
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <path d="M80 40 H 180" />
          <path d="M180 40 L 220 120" />
          <path d="M220 120 H 320" />
          <path d="M320 120 L 360 200" />
          <path d="M360 200 H 480" />
          <path d="M480 200 L 520 200" className="m-flow-line" />
        </g>

        {/* Node markers */}
        {[
          [80,40,"Lead in"],
          [180,40,"Qualified"],
          [220,120,"Quoted"],
          [320,120,"PO"],
          [360,200,"Picked"],
          [480,200,"Shipped"],
          [520,200,"Done"],
        ].map(([x,y,l],i)=> (
          <g key={i}>
            <rect x={x-5} y={y-5} width="10" height="10" stroke="var(--m-accent)" fill="var(--m-bg)" strokeWidth="1.25" />
            <text x={x} y={y-10} fontFamily="var(--m-mono)" fontSize="8" textAnchor="middle" fill="currentColor" opacity="0.7">{l}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

Object.assign(window, { PageHowWeWork, MiniMap });
