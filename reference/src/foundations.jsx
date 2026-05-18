// Foundations artboards: cover, color, typography, motion, principles

function MArtboardShell({ tag, title, kicker, children, padded = true }) {
  return (
    <div
      className="mettle"
      style={{
        width: "100%",
        height: "100%",
        background: "var(--m-bg)",
        color: "var(--m-ink)",
        padding: padded ? "56px 64px" : 0,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {(tag || title) && (
        <header style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 40 }}>
          {tag && <span className="m-eyebrow">{tag}</span>}
          {kicker && <span className="m-eyebrow" style={{ color: "var(--m-ink-4)" }}>{kicker}</span>}
        </header>
      )}
      {title && (
        <h2 style={{ fontSize: 56, marginBottom: 40, letterSpacing: "-0.02em" }}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

/* ─── Cover ─────────────────────────────────────────────── */
function ABCover() {
  return (
    <div
      className="mettle"
      style={{
        width: "100%", height: "100%",
        background: "var(--m-bg)",
        color: "var(--m-ink)",
        padding: "56px 64px 48px",
        display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
      }}
    >
      {/* Top rule */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid var(--m-line-strong)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <MIcon name="mark" size={22} />
          <span className="m-mono" style={{ fontSize: 13, letterSpacing: "0.04em", fontWeight: 500 }}>Mettle</span>
        </div>
        <span className="m-eyebrow">Design Language · v1.0 · May 2026</span>
      </div>

      {/* Big editorial title */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span className="m-eyebrow" style={{ marginBottom: 24 }}>The operating system for Mettle</span>
        <h1 className="m-display" style={{ fontSize: 156, lineHeight: 0.88, letterSpacing: "-0.045em", marginBottom: 28 }}>
          A language<br/>
          for <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>systems</em><br/>
          that think.
        </h1>
        <p style={{ fontSize: 19, maxWidth: 620, lineHeight: 1.55, color: "var(--m-ink-2)" }}>
          Mettle designs and automates how businesses operate. This is the visual and
          structural grammar that every page, product and proposal speaks — tokens,
          typography, components, and the motion that ties them together.
        </p>
      </div>

      {/* Bottom rail */}
      <footer style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, paddingTop: 24, borderTop: "1px solid var(--m-line)" }}>
        {[
          ["01", "Foundations", "Color · Type · Space"],
          ["02", "Iconography", "24 thin-line marks"],
          ["03", "Components", "Buttons · Cards · Tags"],
          ["04", "Pages & Motion", "Five hero surfaces"],
        ].map(([n, t, s]) => (
          <div key={n}>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>{n}</div>
            <div style={{ marginTop: 6, fontWeight: 500 }}>{t}</div>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 4 }}>{s}</div>
          </div>
        ))}
      </footer>
    </div>
  );
}

/* ─── Color ─────────────────────────────────────────────── */
function Swatch({ varName, label, hexLight, hexDark, big }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          height: big ? 200 : 100,
          background: `var(${varName})`,
          border: "1px solid var(--m-line)",
          borderRadius: 4,
        }}
      />
      <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)" }}>{varName}</div>
      <div style={{ fontWeight: 500 }}>{label}</div>
      <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>
        L {hexLight} · D {hexDark}
      </div>
    </div>
  );
}

function ABColor() {
  return (
    <MArtboardShell tag="01 · Foundations" kicker="Color" title="Two surfaces, one accent.">
      <p style={{ fontSize: 17, color: "var(--m-ink-2)", maxWidth: 640, marginBottom: 36 }}>
        Light surfaces speak with restraint — warm off-white and near-black with a single
        electric accent. Dark surfaces speak with confidence — charcoal, cream and signal green.
        The accent is never decorative; it earns its place by directing the eye.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, flex: 1 }}>
        {/* Hero accent */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="m-eyebrow">Accent</span>
          <Swatch big varName="--m-accent" label="Accent · core" hexLight="#2A6FDB" hexDark="#6FB088" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Swatch varName="--m-accent-soft" label="Soft" hexLight="#E6EEFB" hexDark="#1A2A22" />
            <Swatch varName="--m-accent-deep" label="Deep" hexLight="#14387A" hexDark="#B8DBC4" />
          </div>
        </div>

        {/* Right column: ink + surface */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="m-eyebrow">Ink</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Swatch varName="--m-ink"   label="Ink"   hexLight="#0B0D10" hexDark="#E8E5DD" />
            <Swatch varName="--m-ink-3" label="Ink 60" hexLight="#4A4F58" hexDark="#8B8779" />
          </div>
          <span className="m-eyebrow">Surface</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Swatch varName="--m-bg"       label="Page"   hexLight="#FBFAF7" hexDark="#0B0D10" />
            <Swatch varName="--m-bg-raised" label="Raised" hexLight="#FFFFFF" hexDark="#14171C" />
          </div>
        </div>
      </div>

      {/* Signal row */}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--m-line)", display: "flex", gap: 32 }}>
        <span className="m-eyebrow">Signals · used sparingly</span>
        {[
          ["--m-signal-pos", "Positive"],
          ["--m-signal-warn", "Caution"],
          ["--m-signal-stop", "Block"],
        ].map(([v, l]) => (
          <div key={v} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, borderRadius: 999, background: `var(${v})` }} />
            <span className="m-mono" style={{ fontSize: 12 }}>{l}</span>
          </div>
        ))}
      </div>
    </MArtboardShell>
  );
}

/* ─── Typography ────────────────────────────────────────── */
function ABType() {
  return (
    <MArtboardShell tag="01 · Foundations" kicker="Typography">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
        <h2 style={{ fontSize: 56 }}>An <em style={{ fontStyle: "italic" }}>editorial</em> voice, a <em style={{ fontStyle: "italic" }}>technical</em> spine.</h2>
        <div style={{ textAlign: "right" }}>
          <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>display / sans / mono</div>
          <div style={{ marginTop: 6, fontWeight: 500 }}>3 families · 1 system</div>
        </div>
      </div>

      {/* Specimen */}
      <div style={{ borderTop: "1px solid var(--m-line-strong)", borderBottom: "1px solid var(--m-line)", padding: "32px 0", marginBottom: 32 }}>
        <span className="m-display" style={{ fontSize: 220, lineHeight: 0.85, letterSpacing: "-0.045em" }}>
          Aa
        </span>
        <span style={{ marginLeft: 32, fontSize: 220, lineHeight: 0.85, letterSpacing: "-0.04em", fontFamily: "var(--m-sans)", fontWeight: 500 }}>
          Aa
        </span>
        <span style={{ marginLeft: 32, fontSize: 200, lineHeight: 0.85, letterSpacing: "-0.04em", fontFamily: "var(--m-mono)" }}>
          Aa
        </span>
      </div>

      {/* Scale */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, flex: 1 }}>
        <div>
          <span className="m-eyebrow">Display · Editorial serif</span>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 18 }}>
            {[
              ["H1 · 72", 72, "Quiet systems"],
              ["H2 · 48", 48, "outperform"],
              ["H3 · 32", 32, "loud features"],
              ["H4 · 24", 24, "Every layer earns its place"],
            ].map(([l, sz, t]) => (
              <div key={l} style={{ display: "flex", alignItems: "baseline", gap: 24, borderBottom: "1px solid var(--m-line)", paddingBottom: 14 }}>
                <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", width: 70 }}>{l}</span>
                <span className="m-display" style={{ fontSize: sz, lineHeight: 1, letterSpacing: "-0.025em" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="m-eyebrow">Sans · Body</span>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
            <p style={{ fontSize: 20, lineHeight: 1.45, maxWidth: 480 }}>
              Lead — Mettle is a systems-focused consulting firm that optimizes and automates how businesses operate.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--m-ink-2)", maxWidth: 480 }}>
              Body — We don&apos;t sell features. We solve operational problems through three services: system design,
              custom software, and automation. Every project starts with mapping how your business actually runs.
            </p>
            <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--m-ink-3)", maxWidth: 480 }}>
              Small — Captions, metadata, and supporting copy. Used for fine print and timeline labels.
            </p>
          </div>

          <div style={{ marginTop: 32 }}>
            <span className="m-eyebrow">Mono · Labels & numerics</span>
            <div className="m-mono" style={{ marginTop: 12, fontSize: 13, color: "var(--m-ink-2)", display: "flex", flexDirection: "column", gap: 4 }}>
              <div>01 · SYSTEM DESIGN &amp; SETUP</div>
              <div>02 · CUSTOM SOFTWARE &amp; TOOLS</div>
              <div>03 · AUTOMATION &amp; AI</div>
              <div style={{ color: "var(--m-ink-4)", marginTop: 6 }}>+70 hrs/wk · 6 case studies · 03 services</div>
            </div>
          </div>
        </div>
      </div>
    </MArtboardShell>
  );
}

/* ─── Space & Grid ──────────────────────────────────────── */
function ABSpace() {
  return (
    <MArtboardShell tag="01 · Foundations" kicker="Space &amp; Grid" title="A 12-column grid, an 8pt rhythm.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, flex: 1 }}>
        {/* 12-column grid */}
        <div>
          <span className="m-eyebrow">12 columns · 24px gutter</span>
          <div style={{ marginTop: 16, height: 280, border: "1px solid var(--m-line)", padding: 24, background: "var(--m-bg-raised)", position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 12, height: "100%" }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{ background: "var(--m-accent-soft)", borderTop: "1px solid var(--m-accent)" }} />
              ))}
            </div>
          </div>
          <p style={{ fontSize: 14, color: "var(--m-ink-3)", marginTop: 12, maxWidth: 420 }}>
            Marketing layouts use 12-column grids with generous outer margins. Editorial blocks
            span 6–8 columns; metadata columns span 2.
          </p>
        </div>

        {/* Spacing scale */}
        <div>
          <span className="m-eyebrow">Space scale · 4, 8, 16, 24, 32, 48, 64, 96</span>
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {[4, 8, 16, 24, 32, 48, 64, 96].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span className="m-mono" style={{ fontSize: 11, width: 32, color: "var(--m-ink-4)" }}>{s}</span>
                <div style={{ height: 8, width: s * 3, background: "var(--m-ink)" }} />
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <span className="m-eyebrow">Radius</span>
            <div style={{ marginTop: 12, display: "flex", gap: 12, alignItems: "flex-end" }}>
              {[
                ["0", 0, "card / panel"],
                ["4", 4, "tag / chip"],
                ["999", 999, "button / dot"],
              ].map(([l, r, n]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ width: 64, height: 64, background: "var(--m-bg-raised)", border: "1px solid var(--m-line)", borderRadius: r }} />
                  <div className="m-mono" style={{ fontSize: 11, marginTop: 6, color: "var(--m-ink-3)" }}>{l}</div>
                  <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)" }}>{n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MArtboardShell>
  );
}

/* ─── Principles ───────────────────────────────────────── */
function ABPrinciples() {
  const principles = [
    ["Restraint outperforms volume.", "We add when removing isn't an option. Hierarchy comes from typography, not decoration."],
    ["Every diagram is honest.", "Schematic illustrations describe real workflows. No abstract gradients masquerading as data."],
    ["Motion explains, never performs.", "Animation reveals structure or progresses time. If it doesn't earn its place, it doesn't ship."],
    ["The accent is a verb.", "Color directs action. Used on one element per viewport, never decorating itself."],
    ["Numerics in mono, voice in serif.", "Quantitative thinking gets a fixed-width spine. Editorial voice gets the serif. Body work happens in clean sans."],
    ["Whitespace is a load-bearing material.", "Density signals confidence; rest signals certainty. The reader should never feel rushed."],
  ];
  return (
    <MArtboardShell tag="01 · Foundations" kicker="Principles" title="Six rules we don't break.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 48px", flex: 1 }}>
        {principles.map(([t, d], i) => (
          <div key={t} style={{ display: "flex", gap: 20, borderTop: "1px solid var(--m-line-strong)", paddingTop: 20 }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", marginTop: 4 }}>
              0{i + 1}
            </span>
            <div>
              <h4 className="m-display" style={{ fontSize: 24, marginBottom: 10, letterSpacing: "-0.02em" }}>{t}</h4>
              <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </MArtboardShell>
  );
}

Object.assign(window, { ABCover, ABColor, ABType, ABSpace, ABPrinciples, MArtboardShell });
