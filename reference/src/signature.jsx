// Signature interactive artboard — the Operational Map
// User drags a slider; the chaotic "before" graph morphs into the
// orderly orthogonal "after" pipeline. Designed as the one moment a
// visitor remembers — it visualises what Mettle does in 8 seconds.

function ABSignature() {
  const [t, setT] = React.useState(0.18);
  // 0 = messy / before; 1 = clean / after

  // 7-node BEFORE positions (chaotic, organic)
  const beforePts = [
    [80, 220],  // 0 lead
    [220, 120], // 1
    [200, 320], // 2
    [380, 90],  // 3
    [440, 240], // 4
    [560, 170], // 5
    [620, 320], // 6
  ];
  // 7-node AFTER positions (orthogonal grid)
  const afterPts = [
    [80, 220],   // 0 - same start
    [200, 220],  // 1
    [200, 320],  // 2
    [380, 220],  // 3
    [440, 320],  // 4
    [560, 220],  // 5
    [620, 220],  // 6 - same end vertical level shifted later
  ];

  const lerp = (a, b, k) => a + (b - a) * k;
  const pts = beforePts.map(([bx, by], i) => {
    const [ax, ay] = afterPts[i];
    return [lerp(bx, ax, t), lerp(by, ay, t)];
  });

  // Chaotic curve uses many anchors
  const chaosPath = `M ${beforePts[0][0]} ${beforePts[0][1]}
    C 150 280, 180 100, ${beforePts[1][0]} ${beforePts[1][1]}
    S 180 320, ${beforePts[2][0]} ${beforePts[2][1]}
    C 280 360, 340 60, ${beforePts[3][0]} ${beforePts[3][1]}
    S 500 280, ${beforePts[4][0]} ${beforePts[4][1]}
    C 540 180, 580 130, ${beforePts[5][0]} ${beforePts[5][1]}
    S 580 360, ${beforePts[6][0]} ${beforePts[6][1]}`;

  // Orthogonal path between morphed points (just polylines through pts)
  const cleanPath = pts
    .map(([x, y], i) => {
      if (i === 0) return `M ${x} ${y}`;
      const [px, py] = pts[i - 1];
      // L-shaped step: horizontal then vertical
      return `L ${x} ${py} L ${x} ${y}`;
    })
    .join(" ");

  // Cross-fade: at low t show chaos prominently; at high t show clean.
  const chaosOpacity = 1 - t;
  const cleanOpacity = t;

  const stages = [
    { k: 0,    label: "Discovery", hint: "17 handoffs · 4 systems · undocumented" },
    { k: 0.33, label: "Mapped",    hint: "Workflow audited. Friction surfaced." },
    { k: 0.66, label: "Designed",  hint: "12 → 5 handoffs. One source of truth." },
    { k: 1,    label: "Shipped",   hint: "Live. Observable. Owned by the team." },
  ];

  const currentStage = stages.reduce((acc, s) => (t >= s.k - 0.001 ? s : acc), stages[0]);

  return (
    <div className="mettle" style={{ width: "100%", height: "100%", background: "var(--m-bg)", color: "var(--m-ink)", padding: "44px 56px", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
        <div>
          <span className="m-eyebrow">Signature moment · Drag the slider</span>
          <h2 className="m-display" style={{ fontSize: 56, letterSpacing: "-0.025em", lineHeight: 1, marginTop: 14 }}>
            From chaos to <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>clarity.</em>
          </h2>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>STAGE</div>
          <div className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>{currentStage.label}</div>
          <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 4, letterSpacing: "0.04em" }}>{currentStage.hint}</div>
        </div>
      </header>

      {/* Diagram canvas */}
      <div style={{ flex: 1, position: "relative", border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", overflow: "hidden" }}>
        <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.7 }} />

        {/* Track labels */}
        <div style={{ position: "absolute", top: 16, left: 20, display: "flex", gap: 20 }}>
          <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>OPERATIONAL MAP · LIVE</span>
        </div>
        <div style={{ position: "absolute", top: 16, right: 20, display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
          <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)" }}>{Math.round(t * 100)}% transformed</span>
        </div>

        <svg viewBox="0 0 720 400" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", position: "relative" }}>
          {/* Chaos paths (fade out) */}
          <g style={{ opacity: chaosOpacity, transition: "opacity 80ms linear" }}>
            <path d={chaosPath} stroke="currentColor" strokeWidth="1" fill="none" opacity="0.45" />
            {/* extra chaos lines */}
            <path d="M 120 380 C 200 200, 320 360, 400 200 S 540 80, 660 280" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.25" />
            <path d="M 80 60 C 200 200, 360 60, 480 240 S 600 100, 660 220" stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.25" />
          </g>

          {/* Clean orthogonal path (fade in) */}
          <g style={{ opacity: cleanOpacity, transition: "opacity 80ms linear" }}>
            <path d={cleanPath} stroke="var(--m-accent)" strokeWidth="1.5" fill="none" />
            {t > 0.7 && (
              <path d={cleanPath} stroke="var(--m-accent)" strokeWidth="1.5" fill="none" className="m-flow-line" opacity="0.6" />
            )}
          </g>

          {/* Nodes — morphed positions */}
          {pts.map(([x, y], i) => {
            const isStart = i === 0;
            const isEnd = i === pts.length - 1;
            const stroke = t > 0.5 ? "var(--m-accent)" : "currentColor";
            return (
              <g key={i}>
                {t > 0.9 && isEnd && (
                  <circle cx={x} cy={y} r="14" fill="none" stroke="var(--m-accent)" opacity="0.3" className="m-flow-pulse" />
                )}
                {/* Shape morphs: circle → square */}
                <g transform={`translate(${x},${y})`}>
                  <rect
                    x={-6}
                    y={-6}
                    width={12}
                    height={12}
                    rx={lerp(6, 0, t)}
                    fill="var(--m-bg-raised)"
                    stroke={stroke}
                    strokeWidth="1.25"
                  />
                  {(isStart || isEnd) && (
                    <circle cx="0" cy="0" r="2" fill={stroke} />
                  )}
                </g>
                {/* Node label */}
                {(isStart || isEnd) && (
                  <text
                    x={x}
                    y={y - 14}
                    fontFamily="var(--m-mono)"
                    fontSize="10"
                    textAnchor="middle"
                    fill="currentColor"
                    opacity="0.6"
                  >
                    {isStart ? "LEAD" : "DONE"}
                  </text>
                )}
              </g>
            );
          })}

          {/* Floating before/after labels */}
          <text x="20" y="395" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity={0.4 + chaosOpacity * 0.4}>
            BEFORE · undocumented sprawl
          </text>
          <text x="700" y="395" fontFamily="var(--m-mono)" fontSize="10" textAnchor="end" fill="var(--m-accent)" opacity={0.4 + cleanOpacity * 0.6}>
            AFTER · one pipeline · observable
          </text>
        </svg>

        {/* Stat readouts in corners */}
        <div style={{ position: "absolute", left: 20, bottom: 24, display: "flex", gap: 20 }}>
          <StatChip k="Handoffs" v={Math.round(lerp(17, 5, t))} />
          <StatChip k="Systems"  v={Math.round(lerp(4, 1, t))} />
          <StatChip k="Hrs/wk lost" v={Math.round(lerp(70, 4, t))} />
        </div>
      </div>

      {/* Scrubber */}
      <div style={{ marginTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span className="m-eyebrow">Transformation</span>
          <div style={{ display: "flex", gap: 8 }}>
            {stages.map((s) => (
              <button
                key={s.label}
                onClick={() => setT(s.k)}
                className="m-tag"
                style={{
                  background: Math.abs(t - s.k) < 0.05 ? "var(--m-ink)" : "var(--m-bg-raised)",
                  color: Math.abs(t - s.k) < 0.05 ? "var(--m-bg)" : "var(--m-ink-3)",
                  border: `1px solid ${Math.abs(t - s.k) < 0.05 ? "var(--m-ink)" : "var(--m-line)"}`,
                  cursor: "pointer",
                  transition: "all 140ms",
                }}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
        <input
          type="range"
          min="0" max="1" step="0.01"
          value={t}
          onChange={(e) => setT(parseFloat(e.target.value))}
          className="m-scrubber"
          style={{ width: "100%" }}
        />
      </div>

      {/* Scrubber styles */}
      <style>{`
        .m-scrubber {
          -webkit-appearance: none; appearance: none;
          height: 2px; background: var(--m-line-2);
          outline: none; border: 0; cursor: pointer;
        }
        .m-scrubber::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 16px; height: 16px; border-radius: 999px;
          background: var(--m-ink); border: 2px solid var(--m-bg-raised);
          box-shadow: 0 0 0 1px var(--m-ink-2);
          cursor: grab;
        }
        .m-scrubber::-moz-range-thumb {
          width: 16px; height: 16px; border-radius: 999px;
          background: var(--m-ink); border: 2px solid var(--m-bg-raised);
          box-shadow: 0 0 0 1px var(--m-ink-2);
          cursor: grab;
        }
      `}</style>
    </div>
  );
}

function StatChip({ k, v }) {
  return (
    <div style={{
      padding: "8px 12px",
      background: "var(--m-bg)",
      border: "1px solid var(--m-line)",
      minWidth: 96,
    }}>
      <div className="m-mono" style={{ fontSize: 9, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>{k.toUpperCase()}</div>
      <div className="m-mono" style={{ fontSize: 18, fontWeight: 500, marginTop: 2 }}>{v}</div>
    </div>
  );
}

Object.assign(window, { ABSignature });
