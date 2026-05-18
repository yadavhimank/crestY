// Page mockup: Home

function PageHome() {
  return (
    <MPageFrame active="home">
      <MHeroBackdrop />

      {/* Hero */}
      <section style={{ position: "relative", padding: "72px 64px 56px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
            <span className="m-eyebrow">Systems consulting · Est. 2023</span>
          </div>

          <h1 className="m-display" style={{ fontSize: 116, lineHeight: 0.88, letterSpacing: "-0.04em", marginBottom: 28 }}>
            We design<br/>
            and automate<br/>
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>how</em> your<br/>
            business <em style={{ fontStyle: "italic" }}>runs.</em>
          </h1>

          <p style={{ fontSize: 18, color: "var(--m-ink-2)", maxWidth: 460, lineHeight: 1.55, marginBottom: 32 }}>
            From messy workflows to fully automated systems — we help businesses
            run faster, cleaner, and more efficiently.
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button className="m-btn m-btn-primary">Start a conversation <MIcon name="arrowUpRight" size={14} /></button>
            <button className="m-btn m-btn-ghost">See our work</button>
          </div>

          {/* Stat strip */}
          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingTop: 24, borderTop: "1px solid var(--m-line)" }}>
            {[
              ["+70hrs", "Saved per week, K2 Renewals"],
              ["6", "Systems shipped, 4 industries"],
              ["3", "Disciplines, one operating method"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="m-display" style={{ fontSize: 36, letterSpacing: "-0.025em" }}>{n}</div>
                <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 6, letterSpacing: "0.04em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero schematic — the signature "messy → clean" diagram */}
        <HeroSchematic />
      </section>

      {/* Services strip below the fold */}
      <section style={{
        background: "var(--m-bg-raised)",
        borderTop: "1px solid var(--m-line)",
        padding: "32px 64px",
        position: "relative",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
          <span className="m-eyebrow">Three problems, three disciplines</span>
          <button className="m-btn m-btn-bare">All services <MIcon name="arrowRight" size={13} /></button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--m-line)" }}>
          {[
            ["01", "compass", "System Design & Setup", "Map messy operations and design a cleaner way to run."],
            ["02", "brackets", "Custom Software & Tools", "Build internal tools that match how your business works."],
            ["03", "orbit", "Automation & AI", "Automate repetitive work and customer communication."],
          ].map(([n, ic, t, d], i) => (
            <div key={n} style={{
              padding: "28px 28px 24px",
              borderRight: i < 2 ? "1px solid var(--m-line)" : "none",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>{n}</span>
                <MIcon name={ic} size={22} />
              </div>
              <h4 style={{ fontSize: 22, letterSpacing: "-0.015em" }}>{t}</h4>
              <p style={{ fontSize: 13, color: "var(--m-ink-3)", lineHeight: 1.5 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </MPageFrame>
  );
}

/* ─── Hero "messy → clean" schematic ─────────────────────── */
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
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderBottom: "1px solid var(--m-line)" }}>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>OPERATIONAL MAP · v3.2</span>
        <div style={{ display: "flex", gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-ink-5)" }} />
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-ink-5)" }} />
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
        </div>
      </div>

      {/* Two-track diagram */}
      <div style={{ padding: 24, position: "relative", flex: 1, height: "calc(100% - 41px)" }}>
        <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />

        <svg viewBox="0 0 480 600" style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}>
          {/* Track labels */}
          <text x="14" y="26" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity="0.45">A · BEFORE</text>
          <text x="14" y="318" fontFamily="var(--m-mono)" fontSize="10" fill="currentColor" opacity="0.45">B · AFTER</text>

          {/* BEFORE — chaotic graph */}
          <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.55">
            <path d="M40 80 C 80 60, 120 130, 180 100 S 280 60, 340 110 S 420 80, 440 130" />
            <path d="M40 140 C 100 200, 160 110, 220 170 S 320 220, 380 160 S 430 200, 440 180" />
            <path d="M60 220 C 110 180, 180 240, 240 220 S 300 180, 360 240 S 420 230, 430 250" />
            <path d="M40 100 C 80 200, 200 50, 260 200 S 380 100, 440 220" />
          </g>
          {/* BEFORE nodes — random scatter */}
          {[
            [40,80],[180,100],[340,110],[440,130],
            [40,140],[220,170],[380,160],[440,180],
            [60,220],[240,220],[360,240],[430,250],
            [120,60],[280,50],[160,200],[300,260],
          ].map(([x,y],i)=> (
            <circle key={i} cx={x} cy={y} r="3" stroke="currentColor" strokeWidth="1" fill="var(--m-bg-raised)" />
          ))}

          {/* Divider */}
          <line x1="20" y1="290" x2="460" y2="290" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

          {/* AFTER — clean orthogonal pipeline */}
          <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
            <path d="M40 360 H 130 V 420 H 220 V 360 H 320 V 480 H 440" />
            <path d="M40 420 H 90 V 480 H 180 V 420 H 280 V 540 H 440" className="m-flow-line" />
          </g>
          {/* AFTER nodes */}
          {[
            [40,360],[130,360],[220,360],[320,360],
            [130,420],[220,420],[280,420],[440,420],
            [180,480],[320,480],[440,480],
            [90,420],[280,540],[440,540],
          ].map(([x,y],i)=> (
            <rect key={i} x={x-4} y={y-4} width="8" height="8" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
          ))}
          {/* Highlight endpoint */}
          <circle cx="440" cy="480" r="8" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
          <circle cx="440" cy="480" r="3" fill="var(--m-accent)" />

          {/* Annotations */}
          <text x="14" y="180" fontFamily="var(--m-mono)" fontSize="9" fill="currentColor" opacity="0.4">17 handoffs · 4 systems</text>
          <text x="14" y="572" fontFamily="var(--m-mono)" fontSize="9" fill="var(--m-accent)">5 handoffs · 1 system</text>
        </svg>

        {/* Bottom counter */}
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

Object.assign(window, { PageHome, HeroSchematic });
