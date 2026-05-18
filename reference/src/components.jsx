// Iconography + Components artboards

/* ─── Icon set ──────────────────────────────────────────── */
function ABIcons() {
  const groups = [
    ["Brand & Flow", ["mark", "flow", "parallel", "network", "branch", "grid"]],
    ["Services", ["compass", "brackets", "orbit"]],
    ["Process", ["observe", "simplify", "build", "deploy"]],
    ["Systems", ["database", "dashboard", "shield", "cpu", "beam"]],
    ["Communication", ["speak", "document", "mail"]],
    ["Marks", ["arrowRight", "arrowUpRight", "arrowDown", "check", "cross", "plus", "spark"]],
    ["Meta", ["globe", "team", "clock"]],
  ];
  return (
    <MArtboardShell tag="02 · Iconography" kicker="24 marks" title="A hand-drawn line, the same hand.">
      <p style={{ fontSize: 17, color: "var(--m-ink-2)", maxWidth: 620, marginBottom: 32 }}>
        Custom thin-line set. 24×24 grid, 1.25px stroke, round caps. Drawn from geometric primitives
        so the family stays coherent across every page — never auto-generated, never inflated with
        unrelated marks.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px 56px" }}>
        {groups.map(([label, names]) => (
          <div key={label}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid var(--m-line)" }}>
              <span className="m-eyebrow">{label}</span>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>{names.length} marks</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
              {names.map((n) => (
                <div key={n} style={{
                  aspectRatio: "1 / 1",
                  border: "1px solid var(--m-line)",
                  background: "var(--m-bg-raised)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                  color: "var(--m-ink)",
                }}>
                  <MIcon name={n} size={28} />
                  <span className="m-mono" style={{
                    position: "absolute", bottom: 4, right: 6,
                    fontSize: 9, color: "var(--m-ink-4)",
                  }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Construction grid */}
      <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--m-line)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, alignItems: "center" }}>
        <div style={{ background: "var(--m-bg-raised)", border: "1px solid var(--m-line)", aspectRatio: "1 / 1", maxWidth: 160, position: "relative" }}>
          <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--m-accent)" }}>
            <MIcon name="flow" size={88} stroke={1} />
          </div>
        </div>
        <div>
          <span className="m-eyebrow">Construction</span>
          <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55, marginTop: 10, maxWidth: 520 }}>
            Every glyph is built on a shared 24-unit grid with 2-unit padding.
            Strokes are 1.25u with round terminals. No filled shapes except for
            small data points (1u radius) used to indicate active state on flow diagrams.
          </p>
        </div>
      </div>
    </MArtboardShell>
  );
}

/* ─── Components: buttons + tags ───────────────────────── */
function ABComponentsButtons() {
  return (
    <MArtboardShell tag="03 · Components" kicker="Action surface" title="Buttons, tags, links.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, flex: 1 }}>
        <div>
          <span className="m-eyebrow">Buttons · 4 variants</span>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 18 }}>
            <Row label="Primary">
              <button className="m-btn m-btn-primary">Start a conversation <MIcon name="arrowUpRight" size={14} /></button>
              <button className="m-btn m-btn-primary" disabled style={{ opacity: 0.4 }}>Loading…</button>
            </Row>
            <Row label="Accent">
              <button className="m-btn m-btn-accent">Get the audit <MIcon name="arrowRight" size={14} /></button>
            </Row>
            <Row label="Ghost">
              <button className="m-btn m-btn-ghost">How we work</button>
              <button className="m-btn m-btn-ghost">View case studies</button>
            </Row>
            <Row label="Bare">
              <button className="m-btn m-btn-bare">Read the piece <MIcon name="arrowRight" size={14} /></button>
            </Row>
          </div>

          <div style={{ marginTop: 36 }}>
            <span className="m-eyebrow">Anatomy</span>
            <div style={{ marginTop: 16, padding: 24, border: "1px dashed var(--m-line-2)", background: "var(--m-bg-raised)", position: "relative" }}>
              <button className="m-btn m-btn-primary">Start a conversation <MIcon name="arrowUpRight" size={14} /></button>
              <div className="m-mono" style={{ marginTop: 16, fontSize: 11, color: "var(--m-ink-4)", display: "grid", gap: 4 }}>
                <div>· height 44px · padding 12 22 · radius 999</div>
                <div>· font 14/500 · gap 10 · transition 140ms ease-out</div>
                <div>· hover translateY(-1px)</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="m-eyebrow">Tags · metadata</span>
          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
            <span className="m-tag m-tag-dot">Systems</span>
            <span className="m-tag">Strategy</span>
            <span className="m-tag">CRM</span>
            <span className="m-tag">Automation</span>
            <span className="m-tag">Healthcare</span>
            <span className="m-tag">Pharmaceutical</span>
          </div>

          <div style={{ marginTop: 36 }}>
            <span className="m-eyebrow">Eyebrow labels</span>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              <div className="m-eyebrow">01 · System Design &amp; Setup</div>
              <div className="m-eyebrow">02 · Custom Software &amp; Tools</div>
              <div className="m-eyebrow" style={{ color: "var(--m-accent)" }}>03 · Automation &amp; AI</div>
            </div>
          </div>

          <div style={{ marginTop: 36 }}>
            <span className="m-eyebrow">Inline links</span>
            <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.6, color: "var(--m-ink-2)", maxWidth: 380 }}>
              Three services solve three operational problems —
              {" "}<MLink>System design</MLink>,{" "}<MLink>Custom software</MLink>, and{" "}<MLink>Automation</MLink> —
              see the breakdown at services.
            </p>
          </div>

          <div style={{ marginTop: 36 }}>
            <span className="m-eyebrow">Inputs</span>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
              <MInput label="Name" placeholder="Your name" />
              <MInput label="Work email" placeholder="you@company.com" />
            </div>
          </div>
        </div>
      </div>
    </MArtboardShell>
  );
}

function Row({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span className="m-mono" style={{ width: 80, fontSize: 11, color: "var(--m-ink-4)" }}>{label}</span>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}

function MLink({ children }) {
  return (
    <span style={{ color: "var(--m-accent)", textDecoration: "underline", textUnderlineOffset: 4, textDecorationThickness: 1 }}>
      {children}
    </span>
  );
}

function MInput({ label, placeholder }) {
  return (
    <label style={{ display: "block" }}>
      <div className="m-eyebrow" style={{ marginBottom: 6 }}>{label}</div>
      <div style={{ position: "relative" }}>
        <input
          placeholder={placeholder}
          style={{
            width: "100%",
            background: "transparent",
            border: 0,
            borderBottom: "1px solid var(--m-line-2)",
            padding: "10px 0",
            fontSize: 16,
            color: "var(--m-ink)",
            fontFamily: "var(--m-sans)",
            outline: "none",
          }}
        />
      </div>
    </label>
  );
}

/* ─── Components: cards + numeric ──────────────────────── */
function ABComponentsCards() {
  return (
    <MArtboardShell tag="03 · Components" kicker="Content surface" title="Cards, indices, callouts.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, flex: 1 }}>
        {/* Service card */}
        <div className="m-card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>01</span>
            <MIcon name="compass" size={28} />
          </div>
          <h3 style={{ fontSize: 30, lineHeight: 1.05 }}>System Design &amp; Setup</h3>
          <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>
            Map messy operations and design a cleaner way to run before
            building a single line of code.
          </p>
          <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)" }}>4 deliverables</span>
            <MIcon name="arrowUpRight" size={14} />
          </div>
        </div>

        {/* Numeric card */}
        <div className="m-card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 8 }}>
          <span className="m-eyebrow">Impact · K2 Renewals</span>
          <div style={{ marginTop: "auto" }}>
            <div className="m-display" style={{ fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.045em" }}>
              70<span style={{ color: "var(--m-accent)" }}>hrs</span>
            </div>
            <div style={{ marginTop: 8, fontSize: 15, color: "var(--m-ink-2)" }}>
              Saved per week, every week, after the flow was optimised.
            </div>
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--m-line)" }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)" }}>2024 · CRM · Renewable sector</span>
          </div>
        </div>

        {/* Case card */}
        <div style={{
          background: "var(--m-ink)",
          color: "var(--m-bg-raised)",
          padding: 0,
          display: "flex", flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Schematic placeholder image area */}
          <div style={{
            height: 180,
            background: "linear-gradient(0deg, transparent 30%, color-mix(in oklab, var(--m-accent), transparent 88%) 100%)",
            position: "relative",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }} />
            <span className="m-mono" style={{ position: "absolute", top: 16, left: 16, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>case · 02</span>
          </div>
          <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
            <h3 style={{ fontSize: 28, color: "inherit", lineHeight: 1.05 }}>Barnshenn</h3>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(255,255,255,0.65)" }}>
              Unified operations platform rebuilt around the team&apos;s actual sales and fulfillment sequence.
            </p>
            <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="m-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>E-commerce · UK</span>
              <MIcon name="arrowUpRight" size={14} stroke={1} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: callouts */}
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
        <div style={{ padding: 24, borderLeft: "1px solid var(--m-accent)", background: "var(--m-accent-soft)" }}>
          <span className="m-eyebrow" style={{ color: "var(--m-accent-deep)" }}>Callout · Accent</span>
          <p style={{ fontSize: 16, marginTop: 8, color: "var(--m-ink)" }}>
            For the rare moment when a paragraph needs to sit forward. Used at most
            twice per page; never two in succession.
          </p>
        </div>
        <div style={{ padding: 24, border: "1px solid var(--m-line)" }}>
          <span className="m-eyebrow">Quote · neutral</span>
          <p className="m-display" style={{ fontSize: 22, marginTop: 8, lineHeight: 1.2, letterSpacing: "-0.015em" }}>
            &ldquo;Mettle rebuilt the spine of our operations.&rdquo;
          </p>
          <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", marginTop: 8 }}>— K2 Renewals · Founder</div>
        </div>
      </div>
    </MArtboardShell>
  );
}

Object.assign(window, { ABIcons, ABComponentsButtons, ABComponentsCards, MInput, MLink });
