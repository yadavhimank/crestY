// Page mockup: Services (overview)

function PageServices() {
  const services = [
    {
      n: "01", icon: "compass",
      title: "System Design & Setup",
      lead: "Map messy operations and design a cleaner way to run.",
      body: "We map how your business actually runs, strip away the friction, and design a repeatable workflow before a single line of code is written.",
      includes: ["Workflow design", "Process mapping", "Business logic", "Operational audits"],
    },
    {
      n: "02", icon: "brackets",
      title: "Custom Software & Tools",
      lead: "Build internal tools that match how your business works.",
      body: "We build CRMs, admin panels, and dashboards tailored to your exact business rules — production-grade and built to evolve.",
      includes: ["CRMs", "Admin panels", "Dashboards", "Custom tools"],
    },
    {
      n: "03", icon: "orbit",
      title: "Automation & AI",
      lead: "Automate repetitive work and customer communication.",
      body: "Intelligent agents and rule-based pipelines that handle support, sales coordination, and operations autonomously.",
      includes: ["AI chatbots", "Voice bots", "Follow-ups", "Data pipelines"],
    },
  ];

  return (
    <MPageFrame active="services">
      {/* Header */}
      <section style={{ padding: "60px 64px 40px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "end" }}>
          <div>
            <span className="m-eyebrow" style={{ marginBottom: 20, display: "block" }}>Services · Three disciplines</span>
            <h1 className="m-display" style={{ fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.9 }}>
              We don&apos;t sell<br/>
              features. We solve<br/>
              <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>operational</em> problems.
            </h1>
          </div>
          <p style={{ fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 460, paddingBottom: 12 }}>
            Each engagement begins with understanding. We diagnose the operating problem,
            then deploy the smallest combination of design, software and automation that fixes it for good.
          </p>
        </div>
      </section>

      {/* Three editorial rows */}
      <section style={{ borderTop: "1px solid var(--m-line-strong)", flex: 1 }}>
        {services.map((s, i) => (
          <article key={s.n} style={{
            display: "grid",
            gridTemplateColumns: "80px 1fr 1fr 240px",
            gap: 32,
            padding: "36px 64px",
            borderBottom: i < 2 ? "1px solid var(--m-line)" : "none",
            alignItems: "start",
            position: "relative",
          }}>
            <div className="m-mono" style={{ fontSize: 13, color: "var(--m-ink-4)", paddingTop: 6 }}>
              {s.n} / 03
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <MIcon name={s.icon} size={28} />
                <h2 className="m-display" style={{ fontSize: 36, letterSpacing: "-0.02em" }}>{s.title}</h2>
              </div>
              <p style={{ fontSize: 18, color: "var(--m-ink-2)", lineHeight: 1.45, maxWidth: 380 }}>
                {s.lead}
              </p>
            </div>
            <p style={{ fontSize: 14, color: "var(--m-ink-3)", lineHeight: 1.6, paddingTop: 6 }}>
              {s.body}
            </p>
            <div>
              <span className="m-eyebrow">Includes</span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.includes.map((inc) => (
                  <li key={inc} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--m-ink-2)" }}>
                    <span style={{ width: 6, height: 1, background: "var(--m-ink-4)" }} />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </MPageFrame>
  );
}

Object.assign(window, { PageServices });
