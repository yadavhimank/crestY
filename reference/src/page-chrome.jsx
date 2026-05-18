// Shared page chrome + small page-level primitives

function MNav({ active = "home" }) {
  const items = [
    ["home", "Home", "/"],
    ["services", "Services", "/services"],
    ["work", "Work", "/work"],
    ["how", "How we work", "/how-we-work"],
    ["about", "About", "/about"],
  ];
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 64px",
      borderBottom: "1px solid var(--m-line)",
      background: "var(--m-bg)",
      position: "relative",
      zIndex: 2,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <MIcon name="mark" size={20} />
        <span className="m-mono" style={{ fontSize: 13, letterSpacing: "0.02em", fontWeight: 500 }}>Mettle</span>
      </div>
      <ul style={{ display: "flex", gap: 36, listStyle: "none", padding: 0, margin: 0 }}>
        {items.map(([k, l]) => (
          <li key={k} style={{
            fontSize: 14,
            fontWeight: 500,
            color: k === active ? "var(--m-ink)" : "var(--m-ink-3)",
            position: "relative",
            paddingBottom: 4,
            borderBottom: k === active ? "1px solid var(--m-ink)" : "1px solid transparent",
          }}>
            {l}
          </li>
        ))}
      </ul>
      <button className="m-btn m-btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
        Start a conversation
        <MIcon name="arrowUpRight" size={13} />
      </button>
    </nav>
  );
}

function MPageFrame({ active, children, dim = false }) {
  return (
    <div className="mettle" style={{
      width: "100%", height: "100%",
      background: "var(--m-bg)",
      display: "flex", flexDirection: "column",
      overflow: "hidden",
      position: "relative",
    }}>
      <MNav active={active} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        {children}
      </div>
    </div>
  );
}

/* ─── A subtle diagonal/grid backdrop for hero areas ─────── */
function MHeroBackdrop() {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div className="m-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(80% 60% at 70% 40%, color-mix(in oklab, var(--m-accent), transparent 92%) 0%, transparent 65%)",
      }} />
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: "30%",
        background: "var(--m-mask-fade)",
      }} />
    </div>
  );
}

Object.assign(window, { MNav, MPageFrame, MHeroBackdrop });
