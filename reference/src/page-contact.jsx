// Page mockup: Contact

function PageContact() {
  return (
    <MPageFrame active="contact">
      <section style={{ flex: 1, display: "grid", gridTemplateColumns: "1.05fr 1fr", minHeight: 0 }}>
        {/* Left: editorial side */}
        <div style={{ padding: "60px 56px 56px", borderRight: "1px solid var(--m-line)", position: "relative", overflow: "hidden" }}>
          <MHeroBackdrop />
          <div style={{ position: "relative" }}>
            <span className="m-eyebrow">Contact · Start a conversation</span>
            <h1 className="m-display" style={{ fontSize: 84, letterSpacing: "-0.035em", lineHeight: 0.92, marginTop: 22 }}>
              Tell us what&apos;s<br/>
              <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>operationally</em><br/>
              broken.
            </h1>
            <p style={{ marginTop: 24, fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.55, maxWidth: 440 }}>
              We don&apos;t start with proposals or pitches. We start with understanding
              your situation — then figure out together if and how we can help.
            </p>

            {/* Inline meta */}
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                ["mail", "team@mettle.co"],
                ["clock", "Reply within 1 business day · Singapore time"],
                ["globe", "Working remotely with teams in SG · IN · UK · CA"],
              ].map(([ic, t]) => (
                <div key={t} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div style={{
                    width: 36, height: 36, border: "1px solid var(--m-line)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--m-ink-3)",
                    background: "var(--m-bg-raised)",
                  }}>
                    <MIcon name={ic} size={18} />
                  </div>
                  <span style={{ fontSize: 15, color: "var(--m-ink)" }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--m-line)" }}>
              <span className="m-eyebrow">What happens next</span>
              <ol style={{ marginTop: 12, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "We read your note and reply with a short discovery call.",
                  "30 minutes to listen. We tell you honestly if we&apos;re the right fit.",
                  "If yes — a written diagnostic and scope, fixed-fee.",
                ].map((s, i) => (
                  <li key={i} style={{ display: "flex", gap: 14, fontSize: 14, color: "var(--m-ink-2)" }}>
                    <span className="m-mono" style={{ color: "var(--m-ink-4)", width: 24 }}>0{i+1}</span>
                    <span dangerouslySetInnerHTML={{ __html: s }} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div style={{ padding: "60px 56px 56px", background: "var(--m-bg-raised)" }}>
          <form style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 480 }}>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>
              FORM · A
            </div>
            <MInput label="Name" placeholder="Your name" />
            <MInput label="Company" placeholder="Where you work" />
            <MInput label="Work email" placeholder="you@company.com" />

            <div>
              <div className="m-eyebrow" style={{ marginBottom: 10 }}>What are you working on?</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["System design", "Custom software", "Automation & AI", "Not sure yet"].map((c) => (
                  <button key={c} type="button" className="m-tag" style={{
                    background: c === "Automation & AI" ? "var(--m-ink)" : "var(--m-bg-raised)",
                    color: c === "Automation & AI" ? "var(--m-bg)" : "var(--m-ink-3)",
                    border: c === "Automation & AI" ? "1px solid var(--m-ink)" : "1px solid var(--m-line)",
                    cursor: "pointer",
                  }}>{c}</button>
                ))}
              </div>
            </div>

            <div>
              <div className="m-eyebrow" style={{ marginBottom: 6 }}>Briefly · what&apos;s broken?</div>
              <textarea
                placeholder="Sales orders live across email, sheets, and our CRM. Daily ops bottleneck…"
                rows={5}
                style={{
                  width: "100%", padding: "12px 0", fontSize: 15, color: "var(--m-ink)",
                  background: "transparent", border: 0,
                  borderBottom: "1px solid var(--m-line-2)",
                  resize: "none", outline: "none", fontFamily: "var(--m-sans)",
                }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>4 fields · 1 minute</span>
              <button type="submit" className="m-btn m-btn-primary">
                Send to Mettle <MIcon name="arrowUpRight" size={14} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </MPageFrame>
  );
}

Object.assign(window, { PageContact });
