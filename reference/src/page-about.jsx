// Page mockup: About

function PageAbout() {
  return (
    <MPageFrame active="about">
      {/* Editorial split */}
      <section style={{ padding: "72px 64px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <span className="m-eyebrow">About · The studio</span>
          <h1 className="m-display" style={{ fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.9, marginTop: 24 }}>
            A small studio<br/>
            of operators,<br/>
            engineers and <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>strategists.</em>
          </h1>
        </div>

        <div style={{ paddingTop: 60, display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: 19, color: "var(--m-ink)", lineHeight: 1.55, maxWidth: 460 }}>
            Mettle started in 2023 with a stubborn premise: <em style={{ fontStyle: "italic" }}>most business
            problems are operating problems wearing a software costume.</em>
          </p>
          <p style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 460 }}>
            We work across three disciplines because operating problems rarely respect
            org charts. A pharma brand, a renewables CRM, a SaaS license flow — same method,
            same care for the team that lives in the system after we&apos;re gone.
          </p>

          <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
            <button className="m-btn m-btn-primary">Meet the team <MIcon name="arrowUpRight" size={14} /></button>
            <button className="m-btn m-btn-ghost">Open roles · 2</button>
          </div>
        </div>
      </section>

      {/* Numbers row */}
      <section style={{ borderTop: "1px solid var(--m-line-strong)", borderBottom: "1px solid var(--m-line)", padding: "28px 64px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, background: "var(--m-bg-raised)" }}>
        {[
          ["2023", "Founded · Singapore"],
          ["4", "Industries shipped"],
          ["6", "Live operating systems"],
          ["3", "Continents · 7 timezones"],
        ].map(([n, l]) => (
          <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div className="m-display" style={{ fontSize: 48, letterSpacing: "-0.03em" }}>{n}</div>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </section>

      {/* Team grid */}
      <section style={{ padding: "32px 64px", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
          <span className="m-eyebrow">The team · Four operators</span>
          <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>plus 3 collaborators · 2 advisors</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[
            ["Avery K.", "Partner · Systems", "AK"],
            ["Devansh M.", "Partner · Engineering", "DM"],
            ["Lin S.", "Lead · Automation", "LS"],
            ["Naomi T.", "Lead · Operations", "NT"],
          ].map(([name, role, initials]) => (
            <article key={name} style={{ border: "1px solid var(--m-line)", padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
              {/* Portrait placeholder — schematic */}
              <div style={{
                aspectRatio: "4 / 5",
                background: "var(--m-bg-sunken)",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--m-line)",
              }}>
                <div style={{ position: "absolute", inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(135deg, transparent 0, transparent 6px, var(--m-line) 6px, var(--m-line) 7px)",
                  opacity: 0.5,
                }} />
                <div className="m-display" style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 80, color: "var(--m-ink-4)", letterSpacing: "-0.04em",
                }}>{initials}</div>
                <div className="m-mono" style={{ position: "absolute", bottom: 6, left: 8, fontSize: 9, color: "var(--m-ink-4)" }}>portrait · b&amp;w</div>
              </div>
              <div>
                <div className="m-display" style={{ fontSize: 22, letterSpacing: "-0.015em" }}>{name}</div>
                <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 4, letterSpacing: "0.06em" }}>{role.toUpperCase()}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </MPageFrame>
  );
}

Object.assign(window, { PageAbout });
