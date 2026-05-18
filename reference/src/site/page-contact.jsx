// Mettle — Contact page

function SiteContact() {
  return (
    <SiteFrame active="contact">
      <ContactTop />
      <ContactReassurance />
    </SiteFrame>
  );
}

function ContactTop() {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", borderBottom: "1px solid var(--m-line-strong)" }}>
      {/* Left — editorial */}
      <div style={{ padding: "84px 56px 64px", borderRight: "1px solid var(--m-line)", position: "relative", overflow: "hidden" }}>
        <MHeroBackdrop />
        <div style={{ position: "relative" }}>
          <span className="m-eyebrow">Contact · Start a conversation</span>
          <h1 className="m-display" style={{ fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.92, marginTop: 22 }}>
            Tell us what&apos;s<br/>
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>operationally</em><br/>
            broken.
          </h1>
          <p style={{ marginTop: 24, fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 480 }}>
            We don&apos;t start with proposals or pitches. We start with understanding
            your situation — then figure out together if and how we can help.
          </p>

          {/* Inline meta */}
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              ["mail",  "team@mettle.co",                                 "Direct line · partners only"],
              ["clock", "Reply within 1 business day · Singapore time",   "Mon–Fri · 09:00–18:00 SGT"],
              ["globe", "Working remotely with teams in SG · IN · UK · CA","Async-friendly · 7 timezones"],
            ].map(([ic, t, sub]) => (
              <div key={t} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{
                  width: 44, height: 44, border: "1px solid var(--m-line)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--m-ink-3)", background: "var(--m-bg-raised)",
                }}>
                  <MIcon name={ic} size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 16, color: "var(--m-ink)" }}>{t}</div>
                  <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--m-line)" }}>
            <span className="m-eyebrow">What happens next</span>
            <ol style={{ marginTop: 16, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                ["01", "We read your note and reply with a short discovery call."],
                ["02", "30 minutes to listen. We tell you honestly if we’re the right fit."],
                ["03", "If yes — a written diagnostic and scope, fixed-fee."],
              ].map(([n, s]) => (
                <li key={n} style={{ display: "flex", gap: 16, fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.5 }}>
                  <span className="m-mono" style={{ color: "var(--m-ink-4)", minWidth: 28 }}>{n}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div style={{ padding: "84px 56px 64px", background: "var(--m-bg-raised)" }}>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [picked, setPicked] = React.useState("Custom software");
  const [budget, setBudget] = React.useState("£50–100k");
  const choices = ["System design", "Custom software", "Automation & AI", "Not sure yet"];
  const budgets = ["< £25k", "£25–50k", "£50–100k", "£100k +"];

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 520 }} onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>
          FORM · A · v3
        </div>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-accent)" }}>● 5 fields · 2 min</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <MInput label="Name" placeholder="Your name" />
        <MInput label="Company" placeholder="Where you work" />
      </div>
      <MInput label="Work email" placeholder="you@company.com" />

      <div>
        <div className="m-eyebrow" style={{ marginBottom: 10 }}>What are you working on?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {choices.map((c) => (
            <button key={c} type="button"
              onClick={() => setPicked(c)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--m-mono)", fontSize: 11, letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "8px 12px",
                border: "1px solid " + (picked === c ? "var(--m-ink)" : "var(--m-line)"),
                background: picked === c ? "var(--m-ink)" : "var(--m-bg-raised)",
                color: picked === c ? "var(--m-bg)" : "var(--m-ink-3)",
                cursor: "pointer",
              }}>
              {picked === c && <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-accent)" }} />}
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="m-eyebrow" style={{ marginBottom: 10 }}>Rough budget · indicative only</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid var(--m-line)" }}>
          {budgets.map((b, i) => (
            <button key={b} type="button"
              onClick={() => setBudget(b)}
              style={{
                padding: "12px 8px",
                background: budget === b ? "var(--m-ink)" : "transparent",
                color: budget === b ? "var(--m-bg)" : "var(--m-ink-2)",
                fontFamily: "var(--m-mono)", fontSize: 11, letterSpacing: "0.08em",
                cursor: "pointer",
                border: 0,
                borderRight: i < budgets.length - 1 ? "1px solid var(--m-line)" : "0",
              }}>
              {b}
            </button>
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

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, gap: 16 }}>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>
          By sending, you agree to our short privacy note.
        </span>
        <button type="submit" className="m-btn m-btn-primary">
          Send to Mettle <MIcon name="arrowUpRight" size={14} />
        </button>
      </div>
    </form>
  );
}

function ContactReassurance() {
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Reassurance · For first conversations"
        title={<>What we <em style={{ fontStyle: "italic" }}>won&rsquo;t</em> do with your note.</>}
        lead="Sending a contact form to a consultancy can feel like signing up for a mailing list. Here's the floor we hold ourselves to."
      />
      <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          ["spark",  "No automated pitch",     "A human partner reads every note and replies personally."],
          ["shield", "No data resale",         "Your note stays inside our team. We don't run an ad business."],
          ["clock",  "No long sales cycle",    "30 minutes to listen. Yes-or-no within the week."],
        ].map(([ic, t, d]) => (
          <article key={t} style={{ border: "1px solid var(--m-line)", padding: 28, background: "var(--m-bg-raised)", display: "flex", flexDirection: "column", gap: 14, minHeight: 180 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <MIcon name={ic} size={26} />
              <span style={{ color: "var(--m-accent)" }}><MIcon name="check" size={18} /></span>
            </div>
            <h3 className="m-display" style={{ fontSize: 26, letterSpacing: "-0.02em" }}>{t}</h3>
            <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { SiteContact });
