// Mettle — Home page (full)
// Sections: hero · services strip · featured work · operating principles · process preview · numbers · CTA

function SiteHome() {
  return (
    <SiteFrame active="home">
      <HomeHero />
      <HomeServicesStrip />
      <HomeFeaturedWork />
      <HomeMethodSplit />
      <HomePrinciples />
      <HomeNumbers />
      <HomeTestimonials />
      <CTAStrip
        eyebrow="Next step · 1 minute"
        heading={<>Tell us what&rsquo;s operationally <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>broken.</em></>}
        body="A 30-minute discovery call. We listen first, then tell you honestly whether we're the right fit."
      />
    </SiteFrame>
  );
}

/* ─── Hero — reuse of design-system version, expanded ─── */
function HomeHero() {
  return (
    <section style={{ position: "relative", padding: "84px 56px 72px" }}>
      <MHeroBackdrop />

      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
            <span className="m-eyebrow">Systems consulting · Est. 2023</span>
          </div>

          <h1 className="m-display" style={{ fontSize: 124, lineHeight: 0.86, letterSpacing: "-0.045em", marginBottom: 28 }}>
            We design<br/>
            and automate<br/>
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>how</em> your<br/>
            business <em style={{ fontStyle: "italic" }}>runs.</em>
          </h1>

          <p style={{ fontSize: 19, color: "var(--m-ink-2)", maxWidth: 480, lineHeight: 1.55, marginBottom: 32 }}>
            From messy workflows to fully automated systems — we help businesses
            run faster, cleaner, and more efficiently. Three disciplines, one operating method.
          </p>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button className="m-btn m-btn-primary" onClick={() => navTo("contact")}>
              Start a conversation <MIcon name="arrowUpRight" size={14} />
            </button>
            <button className="m-btn m-btn-ghost" onClick={() => navTo("work")}>See our work</button>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em", marginLeft: 8 }}>
              · 6 systems shipped · 4 industries
            </span>
          </div>
        </div>

        <HeroSchematic />
      </div>

      {/* Quiet client strip beneath hero */}
      <div style={{ marginTop: 72, paddingTop: 28, borderTop: "1px solid var(--m-line)", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <span className="m-eyebrow" style={{ color: "var(--m-ink-4)" }}>Operating partners</span>
        {[
          ["K2 Renewals", "compass"],
          ["Barnshenn", "grid"],
          ["Solivia Pharma", "shield"],
          ["Northbound SaaS", "cpu"],
          ["Halcyon Care", "team"],
          ["Mercer & Pine", "document"],
        ].map(([n, ic]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--m-ink-3)" }}>
            <MIcon name={ic} size={16} />
            <span className="m-display" style={{ fontSize: 18, letterSpacing: "-0.01em" }}>{n}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Services strip · three disciplines ──────────────── */
function HomeServicesStrip() {
  const services = [
    { n: "01", ic: "compass",  t: "System Design & Setup",   d: "Map messy operations and design a cleaner way to run.", tags: ["Workflow", "Audit", "Logic"] },
    { n: "02", ic: "brackets", t: "Custom Software & Tools", d: "Build internal tools that match how your business works.", tags: ["CRM", "Dashboards", "Tools"] },
    { n: "03", ic: "orbit",    t: "Automation & AI",         d: "Automate repetitive work and customer communication.", tags: ["Agents", "Pipelines", "Bots"] },
  ];
  return (
    <section style={{ background: "var(--m-bg-raised)", borderTop: "1px solid var(--m-line)", padding: "56px 0 64px" }}>
      <SectionHead
        kicker="Three problems · Three disciplines"
        title={<>One operating <em style={{ fontStyle: "italic" }}>method.</em></>}
        lead="Operating problems rarely respect org charts. Each discipline can be hired alone, but they were designed to work together."
        action={<button className="m-btn m-btn-bare" onClick={() => navTo("services")}>All services <MIcon name="arrowRight" size={13} /></button>}
      />

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        margin: "0 56px",
        borderTop: "1px solid var(--m-line)", borderBottom: "1px solid var(--m-line)",
      }}>
        {services.map((s, i) => (
          <article key={s.n} style={{
            padding: "32px 28px",
            borderRight: i < 2 ? "1px solid var(--m-line)" : "none",
            display: "flex", flexDirection: "column", gap: 16,
            cursor: "pointer",
            transition: "background 140ms var(--ease-out-fine)",
          }}
            onClick={() => navTo("services")}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--m-bg)"}
            onMouseLeave={(e) => e.currentTarget.style.background = ""}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>{s.n} / 03</span>
              <MIcon name={s.ic} size={28} />
            </div>
            <h3 className="m-display" style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{s.t}</h3>
            <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55, maxWidth: 320 }}>{s.d}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
              {s.tags.map((t) => (<span key={t} className="m-tag">{t}</span>))}
            </div>
            <div style={{ marginTop: "auto", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)" }}>Read service</span>
              <MIcon name="arrowUpRight" size={14} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured work — 3 case studies ──────────────────── */
function HomeFeaturedWork() {
  const cases = [
    {
      n: "01", icon: "compass", tag: "Renewable energy · CRM",
      title: "K2 Renewals",
      metric: ["+70hrs", "saved per week"],
      body: "Replaced a 5-tool sales stack with a single operating system, tuned to how the team actually closes.",
    },
    {
      n: "02", icon: "grid", tag: "E-commerce · UK",
      title: "Barnshenn",
      metric: ["3.2×", "throughput"],
      body: "Unified ops platform rebuilt around the team's real sales-to-fulfilment sequence.",
    },
    {
      n: "03", icon: "orbit", tag: "Pharma · Voice agent",
      title: "Solivia Pharma",
      metric: ["94%", "auto-resolved"],
      body: "An always-on voice agent that handles refill coordination across 1,200 patients without escalation.",
    },
  ];

  return (
    <section style={{ padding: "80px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Featured work · 03 of 06 live systems"
        title={<>Shipped systems, <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>not</em> decks.</>}
        lead="Each engagement ends with software a team owns. These three give the flavour."
        action={<button className="m-btn m-btn-bare" onClick={() => navTo("work")}>See all work <MIcon name="arrowRight" size={13} /></button>}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, margin: "0 56px" }}>
        {cases.map((c) => (<FeaturedCaseCard key={c.n} {...c} />))}
      </div>
    </section>
  );
}

function FeaturedCaseCard({ n, icon, tag, title, metric, body }) {
  return (
    <article
      onClick={() => navTo("work")}
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
      {/* Schematic preview */}
      <div style={{ height: 220, position: "relative", borderBottom: "1px solid var(--m-line)", background: "var(--m-bg-sunken)", overflow: "hidden" }}>
        <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
        <CaseSchematic kind={icon} />
        <div style={{ position: "absolute", top: 14, left: 14, display: "flex", alignItems: "center", gap: 8 }}>
          <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>CASE · {n}</span>
        </div>
        <div style={{ position: "absolute", top: 14, right: 14, color: "var(--m-ink-3)" }}>
          <MIcon name={icon} size={20} />
        </div>
      </div>

      <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{tag}</span>
        <h3 className="m-display" style={{ fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{title}</h3>
        <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{body}</p>
        <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <div className="m-display" style={{ fontSize: 28, letterSpacing: "-0.025em" }}>
              {metric[0]}
            </div>
            <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>
              {metric[1]}
            </div>
          </div>
          <MIcon name="arrowUpRight" size={14} />
        </div>
      </div>
    </article>
  );
}

function CaseSchematic({ kind }) {
  // 3 little visual variants so the case cards don't all look the same
  if (kind === "compass") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <path d="M30 60 H 110 V 110 H 190 V 60 H 270" />
          <path d="M30 130 H 90 V 180 H 230 V 130 H 290" className="m-flow-line" />
        </g>
        {[[30,60],[110,60],[110,110],[190,110],[190,60],[270,60],[30,130],[90,130],[90,180],[230,180],[230,130],[290,130]].map(([x,y],i)=>(
          <rect key={i} x={x-4} y={y-4} width="8" height="8" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
        ))}
      </svg>
    );
  }
  if (kind === "grid") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1" fill="none" opacity="0.9">
          {[60, 100, 140].map(y => (
            <line key={y} x1="40" y1={y} x2="280" y2={y} />
          ))}
          {[80, 140, 200, 240].map(x => (
            <line key={x} x1={x} y1="40" x2={x} y2="180" />
          ))}
        </g>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="var(--m-accent)">
          <rect x="76" y="56" width="8" height="8" />
          <rect x="136" y="96" width="8" height="8" />
          <rect x="196" y="136" width="8" height="8" />
          <rect x="236" y="96" width="8" height="8" />
        </g>
      </svg>
    );
  }
  // orbit
  return (
    <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <g stroke="var(--m-accent)" strokeWidth="1" fill="none">
        <ellipse cx="160" cy="110" rx="120" ry="40" />
        <ellipse cx="160" cy="110" rx="80" ry="60" transform="rotate(-25 160 110)" />
        <ellipse cx="160" cy="110" rx="50" ry="80" transform="rotate(40 160 110)" />
      </g>
      <circle cx="160" cy="110" r="8" fill="var(--m-accent)" />
      <circle cx="240" cy="78" r="3" fill="var(--m-accent)" />
      <circle cx="84" cy="146" r="3" fill="var(--m-accent)" />
      <circle cx="200" cy="170" r="3" fill="var(--m-accent)" />
    </svg>
  );
}

/* ─── Method preview · diagonal split ─────────────────── */
function HomeMethodSplit() {
  const phases = [
    ["01", "observe",  "Observe",  "Map how work actually moves through the business today."],
    ["02", "simplify", "Simplify", "Strip the workflow to its load-bearing parts."],
    ["03", "build",    "Build",    "Ship the system in focused, reversible modules."],
    ["04", "deploy",   "Deploy",   "Launch with the team in the room — refine in the open."],
  ];
  return (
    <section style={{ background: "var(--m-ink)", color: "var(--m-bg)", padding: "96px 0", borderTop: "1px solid var(--m-line-strong)" }}>
      <SectionHead
        dark
        kicker="The method · 4 phases"
        title={<>Diagnose before <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>you build.</em></>}
        lead="A repeatable four-phase method. Every Mettle engagement runs this loop. Outputs at each phase are human-readable, not engineering-only."
        action={<button className="m-btn m-btn-ghost" onClick={() => navTo("how")} style={{ color: "var(--m-bg)", borderColor: "rgba(255,255,255,0.3)" }}>Full method <MIcon name="arrowRight" size={13} /></button>}
      />

      <div style={{
        margin: "0 56px", position: "relative",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        borderTop: "1px solid rgba(255,255,255,0.18)",
      }}>
        {/* Phase rail */}
        <div style={{ position: "absolute", left: 0, right: 0, top: 28, height: 1, background: "rgba(255,255,255,0.18)" }} />
        {phases.map(([n, ic, t, d], i) => (
          <div key={n} style={{
            padding: "44px 24px 28px",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
            position: "relative",
          }}>
            <span style={{
              position: "absolute", top: 24, left: 24,
              width: 8, height: 8, borderRadius: 999,
              background: i === 1 ? "var(--m-accent)" : "var(--m-bg)",
              boxShadow: i === 1 ? "0 0 0 6px rgba(111,176,136,0.18)" : "none",
            }} />
            <span className="m-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em" }}>PHASE {n}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14, color: "var(--m-bg)" }}>
              <MIcon name={ic} size={22} />
              <h3 className="m-display" style={{ fontSize: 30, letterSpacing: "-0.02em" }}>{t}</h3>
            </div>
            <p style={{ marginTop: 14, fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Principles ──────────────────────────────────────── */
function HomePrinciples() {
  const principles = [
    ["spark",   "Operate, then automate", "We don't automate broken processes. We map, simplify, then write code."],
    ["beam",    "Software that fits",     "Internal tools sized for the business that uses them — not the one that funded a SaaS."],
    ["network", "Reversible decisions",   "Every module is testable, deployable, and removable. The system gets stronger as it grows."],
    ["team",    "Operators in the room",  "The people who'll run the system after we leave help build it while we're there."],
  ];
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="Principles · How we think"
        title={<>Four rules that shape every <em style={{ fontStyle: "italic" }}>line of code.</em></>}
        lead="No proprietary frameworks. Just four habits we'd rather not break."
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, margin: "0 56px", borderTop: "1px solid var(--m-line)" }}>
        {principles.map(([ic, t, d], i) => (
          <div key={t} style={{
            padding: "32px 24px",
            borderRight: i < 3 ? "1px solid var(--m-line)" : "none",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
              <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>0{i+1}</span>
              <MIcon name={ic} size={22} />
            </div>
            <h4 className="m-display" style={{ fontSize: 22, letterSpacing: "-0.015em", lineHeight: 1.15 }}>{t}</h4>
            <p style={{ marginTop: 12, fontSize: 13, color: "var(--m-ink-3)", lineHeight: 1.55 }}>{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Big stat strip ──────────────────────────────────── */
function HomeNumbers() {
  return (
    <section style={{ background: "var(--m-bg-sunken)", padding: "80px 56px", borderTop: "1px solid var(--m-line)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
        <h2 className="m-display" style={{ fontSize: 72, letterSpacing: "-0.035em", lineHeight: 0.95 }}>
          Numbers we
          <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}> stand behind.</em>
        </h2>
        <p style={{ fontSize: 16, color: "var(--m-ink-2)", lineHeight: 1.55, maxWidth: 420 }}>
          Reported by clients, measured the quarter after launch. No projections, no &lsquo;up to&rsquo;.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, borderTop: "1px solid var(--m-line-strong)", paddingTop: 32 }}>
        {[
          ["+70hrs", "Saved / week · K2 Renewals", "compass"],
          ["3.2×",   "Order throughput · Barnshenn", "grid"],
          ["94%",    "Auto-resolved calls · Solivia", "orbit"],
          ["6",      "Live operating systems · 4 industries", "database"],
        ].map(([n, l, ic]) => (
          <div key={l}>
            <div style={{ color: "var(--m-ink-4)", marginBottom: 18 }}><MIcon name={ic} size={20} /></div>
            <div className="m-display" style={{ fontSize: 64, letterSpacing: "-0.035em", lineHeight: 0.95 }}>{n}</div>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 10, letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────── */
function HomeTestimonials() {
  const quotes = [
    {
      q: "Mettle rebuilt the spine of our operations. Same team, twice the throughput.",
      name: "Anya R.",
      role: "Founder, K2 Renewals",
      initials: "AR",
    },
    {
      q: "They wrote less software than I expected, and the team adopted all of it.",
      name: "Idris O.",
      role: "COO, Barnshenn",
      initials: "IO",
    },
    {
      q: "The diagnostic alone was worth the engagement. The system we got was the bonus.",
      name: "Marta E.",
      role: "Ops Director, Solivia Pharma",
      initials: "ME",
    },
  ];
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="What partners say"
        title={<>Trusted by the people who <em style={{ fontStyle: "italic" }}>run things.</em></>}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, margin: "0 56px" }}>
        {quotes.map((q) => (
          <figure key={q.name} style={{ margin: 0, border: "1px solid var(--m-line)", background: "var(--m-bg-raised)", padding: 28, display: "flex", flexDirection: "column", gap: 24 }}>
            <span style={{ color: "var(--m-accent)" }}><MIcon name="spark" size={24} /></span>
            <blockquote className="m-display" style={{ fontSize: 22, lineHeight: 1.25, letterSpacing: "-0.01em", margin: 0 }}>
              &ldquo;{q.q}&rdquo;
            </blockquote>
            <figcaption style={{ marginTop: "auto", paddingTop: 20, borderTop: "1px solid var(--m-line)", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 40, height: 40, border: "1px solid var(--m-line)", background: "var(--m-bg-sunken)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span className="m-display" style={{ fontSize: 16, color: "var(--m-ink-3)" }}>{q.initials}</span>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{q.name}</div>
                <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>{q.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { SiteHome });
