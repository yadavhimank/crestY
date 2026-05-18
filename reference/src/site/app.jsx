// Mettle — site bootstrap. Hash-routed pages + tweaks panel for theme & type.

const SITE_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme":    "light",
  "typePair": "instrument",
  "accent":   "blue"
}/*EDITMODE-END*/;

const ACCENT_PRESETS = {
  blue:    { name: "Electric blue · default", l: { a:"#2A6FDB", soft:"#E6EEFB", deep:"#14387A", ink:"#FFFFFF" }, d: { a:"#6FB088", soft:"#1A2A22", deep:"#B8DBC4", ink:"#0B0D10" } },
  signal:  { name: "Signal green",           l: { a:"#2F8559", soft:"#E2F1E9", deep:"#16432C", ink:"#FFFFFF" }, d: { a:"#6FB088", soft:"#1A2A22", deep:"#B8DBC4", ink:"#0B0D10" } },
  ember:   { name: "Ember",                  l: { a:"#B8362B", soft:"#F7E6E4", deep:"#5E1812", ink:"#FFFFFF" }, d: { a:"#C97366", soft:"#2A1A18", deep:"#E3B7B1", ink:"#0B0D10" } },
  amber:   { name: "Amber sovereign",        l: { a:"#C58A1F", soft:"#F6ECD6", deep:"#5F3F0B", ink:"#FFFFFF" }, d: { a:"#D4A65A", soft:"#2A2418", deep:"#EFD79B", ink:"#0B0D10" } },
};

function applyAccent(themeMode, accentKey) {
  const preset = ACCENT_PRESETS[accentKey] || ACCENT_PRESETS.blue;
  const cfg = themeMode === "dark" ? preset.d : preset.l;
  const r = document.documentElement;
  r.style.setProperty("--m-accent",      cfg.a);
  r.style.setProperty("--m-accent-soft", cfg.soft);
  r.style.setProperty("--m-accent-deep", cfg.deep);
  r.style.setProperty("--m-accent-ink",  cfg.ink);
}

function SiteApp() {
  const [t, setTweak] = useTweaks(SITE_TWEAK_DEFAULTS);
  const route = useRoute();

  React.useEffect(() => {
    document.documentElement.setAttribute("data-mettle-theme", t.theme);
    document.documentElement.setAttribute("data-mettle-type",  t.typePair);
    applyAccent(t.theme, t.accent);
  }, [t.theme, t.typePair, t.accent]);

  let Page;
  switch (route) {
    case "services": Page = SiteServices; break;
    case "work":     Page = SiteWork;     break;
    case "how":      Page = SiteHow;      break;
    case "about":    Page = SiteAbout;    break;
    case "contact":  Page = SiteContact;  break;
    default:         Page = SiteHome;
  }

  return (
    <>
      <Page />

      <TweaksPanel title="Mettle · Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Mode"
            value={t.theme}
            options={[
              { value: "light", label: "Light · ink" },
              { value: "dark",  label: "Dark sovereign" },
            ]}
            onChange={(v) => setTweak("theme", v)}
          />
          <p style={{ fontSize: 11, color: "rgba(0,0,0,0.55)", margin: "8px 0 0", lineHeight: 1.4 }}>
            Light = warm white + ink + accent.<br/>
            Dark = charcoal + cream + signal green.
          </p>
        </TweakSection>

        <TweakSection label="Accent">
          <TweakSelect
            label="Accent colour"
            value={t.accent}
            options={Object.entries(ACCENT_PRESETS).map(([k, v]) => ({ value: k, label: v.name }))}
            onChange={(v) => setTweak("accent", v)}
          />
          <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
            {Object.entries(ACCENT_PRESETS).map(([k, v]) => (
              <button key={k}
                onClick={() => setTweak("accent", k)}
                style={{
                  width: 24, height: 24,
                  background: (t.theme === "dark" ? v.d.a : v.l.a),
                  border: "1px solid " + (t.accent === k ? "#000" : "rgba(0,0,0,0.18)"),
                  outline: t.accent === k ? "2px solid #000" : "none",
                  outlineOffset: 1,
                  cursor: "pointer",
                }}
                aria-label={v.name}
              />
            ))}
          </div>
        </TweakSection>

        <TweakSection label="Type pairing">
          <TweakSelect
            label="Display serif"
            value={t.typePair}
            options={[
              { value: "instrument", label: "Instrument Serif · editorial" },
              { value: "newsreader", label: "Newsreader · classical" },
              { value: "dm-serif",   label: "DM Serif Display · chunky" },
            ]}
            onChange={(v) => setTweak("typePair", v)}
          />
          <p style={{ fontSize: 11, color: "rgba(0,0,0,0.55)", margin: "8px 0 0", lineHeight: 1.4 }}>
            Body sans (Geist) and mono (JetBrains Mono) are constants. Only the editorial display family changes.
          </p>
        </TweakSection>

        <TweakSection label="Jump to page">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              ["home",     "Home"],
              ["services", "Services"],
              ["work",     "Work"],
              ["how",      "How we work"],
              ["about",    "About"],
              ["contact",  "Contact"],
            ].map(([id, l]) => (
              <button key={id} onClick={() => navTo(id)} style={{
                fontSize: 12, padding: "8px 10px",
                background: route === id ? "#0B0D10" : "#fff",
                color: route === id ? "#fff" : "#0B0D10",
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 4, cursor: "pointer",
                fontFamily: "inherit",
              }}>{l}</button>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SiteApp />);
