// Mettle site — shared frame: top nav, footer, big CTA, page router
// Uses a tiny hash-based router for navigability + persistence across refresh.

const SITE_PAGES = [
  { id: "home",     label: "Home",        path: "#/" },
  { id: "services", label: "Services",    path: "#/services" },
  { id: "work",     label: "Work",        path: "#/work" },
  { id: "how",      label: "How we work", path: "#/how-we-work" },
  { id: "about",    label: "About",       path: "#/about" },
];

function useRoute() {
  const [route, setRoute] = React.useState(() => parseRoute(window.location.hash));
  React.useEffect(() => {
    const onHash = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function parseRoute(hash) {
  const h = (hash || "").replace(/^#\/?/, "").split("?")[0].split("/")[0];
  if (!h) return "home";
  if (h === "services") return "services";
  if (h === "work")     return "work";
  if (h === "how-we-work") return "how";
  if (h === "about")    return "about";
  if (h === "contact")  return "contact";
  return "home";
}

function navTo(id) {
  const map = {
    home: "#/", services: "#/services", work: "#/work",
    how: "#/how-we-work", about: "#/about", contact: "#/contact",
  };
  window.location.hash = map[id] || "#/";
  // Reset scroll on the inner stage
  const stage = document.querySelector("[data-site-scroll]");
  if (stage) stage.scrollTo({ top: 0, behavior: "instant" });
}

/* ─── Top nav ──────────────────────────────────────────── */
function SiteNav({ active }) {
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 40px",
      gap: 24,
      borderBottom: "1px solid var(--m-line)",
      background: "color-mix(in oklab, var(--m-bg), transparent 6%)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <a
        href="#/"
        onClick={(e) => { e.preventDefault(); navTo("home"); }}
        style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--m-ink)", whiteSpace: "nowrap", flexShrink: 0 }}
      >
        <MIcon name="mark" size={22} />
        <span className="m-mono" style={{ fontSize: 13, letterSpacing: "0.02em", fontWeight: 500 }}>Mettle</span>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.08em", marginLeft: 4 }}>
          / SYSTEMS · SOFTWARE · AUTOMATION
        </span>
      </a>

      <ul style={{ display: "flex", gap: 28, listStyle: "none", padding: 0, margin: 0, flexShrink: 0 }}>
        {SITE_PAGES.map((p) => (
          <li key={p.id} style={{ whiteSpace: "nowrap" }}>
            <a
              href={p.path}
              onClick={(e) => { e.preventDefault(); navTo(p.id); }}
              style={{
                fontSize: 14, fontWeight: 500, textDecoration: "none",
                color: p.id === active ? "var(--m-ink)" : "var(--m-ink-3)",
                paddingBottom: 4,
                borderBottom: p.id === active ? "1px solid var(--m-ink)" : "1px solid transparent",
                transition: "color 140ms var(--ease-out-fine)",
              }}
            >
              {p.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="m-btn m-btn-primary"
        style={{ padding: "10px 18px", fontSize: 13 }}
        onClick={() => navTo("contact")}
      >
        Start a conversation <MIcon name="arrowUpRight" size={13} />
      </button>
    </nav>
  );
}

/* ─── Footer ───────────────────────────────────────────── */
function SiteFooter() {
  return (
    <footer style={{
      borderTop: "1px solid var(--m-line-strong)",
      background: "var(--m-bg-sunken)",
      padding: "56px 56px 28px",
      color: "var(--m-ink)",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <MIcon name="mark" size={24} />
            <span className="m-mono" style={{ fontSize: 14, letterSpacing: "0.02em", fontWeight: 500 }}>Mettle</span>
          </div>
          <p className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 320 }}>
            We design and automate <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>how</em> your business runs.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
            <button className="m-btn m-btn-primary" onClick={() => navTo("contact")} style={{ padding: "10px 18px", fontSize: 13 }}>
              Start a conversation <MIcon name="arrowUpRight" size={13} />
            </button>
          </div>
        </div>

        <FooterCol label="Services" items={[
          ["compass",  "System Design",      "services"],
          ["brackets", "Custom Software",    "services"],
          ["orbit",    "Automation & AI",    "services"],
        ]} />
        <FooterCol label="Studio" items={[
          ["team",     "About",              "about"],
          ["grid",     "Work",               "work"],
          ["observe",  "How we work",        "how"],
        ]} />
        <FooterCol label="Connect" items={[
          ["mail",     "team@mettle.co",     "contact"],
          ["clock",    "Reply ≤ 1 business day", null],
          ["globe",    "SG · IN · UK · CA",  null],
        ]} />
      </div>

      <div style={{ borderTop: "1px solid var(--m-line)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>
          © 2023–2026 Mettle Operating Co · Singapore
        </span>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>
          Built by hand · No template
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ label, items }) {
  return (
    <div>
      <div className="m-eyebrow" style={{ marginBottom: 18 }}>{label}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(([icon, txt, target], i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "var(--m-ink-4)" }}><MIcon name={icon} size={16} /></span>
            {target ? (
              <a
                href={`#/${target === "home" ? "" : target}`}
                onClick={(e) => { e.preventDefault(); navTo(target); }}
                style={{ fontSize: 14, color: "var(--m-ink)", textDecoration: "none" }}
              >{txt}</a>
            ) : (
              <span style={{ fontSize: 14, color: "var(--m-ink-2)" }}>{txt}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Big CTA strip — reusable bottom-of-page CTA ──────── */
function CTAStrip({ eyebrow = "Next step", heading, body, primary = "Start a conversation", onPrimary }) {
  return (
    <section style={{
      borderTop: "1px solid var(--m-line-strong)",
      borderBottom: "1px solid var(--m-line-strong)",
      background: "var(--m-ink)",
      color: "var(--m-bg)",
      padding: "80px 56px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative schematic */}
      <svg viewBox="0 0 1400 400" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, pointerEvents: "none" }} aria-hidden="true">
        <g stroke="var(--m-accent)" strokeWidth="1" fill="none">
          <path d="M0 200 H 240 V 120 H 480 V 280 H 720 V 160 H 960 V 240 H 1400" />
          <path d="M0 280 H 160 V 360 H 400 V 220 H 640 V 320 H 880 V 200 H 1400" className="m-flow-line" />
        </g>
        {[[240,120],[480,120],[480,280],[720,280],[720,160],[960,160],[960,240],[160,280],[160,360],[400,360],[400,220],[640,220],[640,320],[880,320],[880,200]].map(([x,y],i)=>(
          <rect key={i} x={x-3} y={y-3} width="6" height="6" stroke="var(--m-accent)" fill="var(--m-ink)" strokeWidth="1" />
        ))}
      </svg>

      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
            <span className="m-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em", textTransform: "uppercase" }}>{eyebrow}</span>
          </div>
          <h2 className="m-display" style={{ fontSize: 80, lineHeight: 0.95, letterSpacing: "-0.035em" }}>
            {heading}
          </h2>
        </div>
        <div style={{ paddingBottom: 8 }}>
          {body && <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.55, marginBottom: 24, maxWidth: 380 }}>{body}</p>}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="m-btn" onClick={onPrimary || (() => navTo("contact"))}
              style={{ background: "var(--m-bg)", color: "var(--m-ink)", border: "1px solid var(--m-bg)" }}>
              {primary} <MIcon name="arrowUpRight" size={14} />
            </button>
            <button className="m-btn m-btn-ghost"
              style={{ color: "var(--m-bg)", borderColor: "rgba(255,255,255,0.3)" }}
              onClick={() => navTo("how")}>
              See the method
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Section header — used everywhere ─────────────────── */
function SectionHead({ kicker, title, lead, action, dark = false }) {
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 32, alignItems: "end",
      padding: "0 56px", marginBottom: 36,
    }}>
      <div>
        <span className="m-eyebrow" style={{ color: dark ? "rgba(255,255,255,0.5)" : undefined }}>{kicker}</span>
        <h2 className="m-display" style={{ fontSize: 56, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 0.95, color: dark ? "var(--m-bg)" : "var(--m-ink)" }}>
          {title}
        </h2>
      </div>
      <div>
        {lead && (
          <p style={{ fontSize: 16, color: dark ? "rgba(255,255,255,0.7)" : "var(--m-ink-2)", lineHeight: 1.55, maxWidth: 420, paddingBottom: 8 }}>
            {lead}
          </p>
        )}
      </div>
      <div style={{ paddingBottom: 8 }}>{action}</div>
    </div>
  );
}

/* ─── Site frame ───────────────────────────────────────── */
function SiteFrame({ children, active }) {
  return (
    <div
      data-site-scroll
      className="mettle"
      style={{
        width: "100%", height: "100%",
        overflow: "auto",
        background: "var(--m-bg)",
      }}
    >
      <div style={{ minWidth: 1240 }}>
        <SiteNav active={active} />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}

Object.assign(window, {
  SITE_PAGES, useRoute, navTo,
  SiteNav, SiteFooter, SiteFrame, CTAStrip, SectionHead, FooterCol,
});
