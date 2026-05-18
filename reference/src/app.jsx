// Main composition — Mettle Design Language canvas
// Wraps all artboards in a DesignCanvas and exposes Tweaks for theme + type.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme":     "light",
  "typePair":  "instrument"
}/*EDITMODE-END*/;

function MettleApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply theme + type to the document root so all artboards inherit
  React.useEffect(() => {
    document.documentElement.setAttribute("data-mettle-theme", t.theme);
    document.documentElement.setAttribute("data-mettle-type",  t.typePair);
  }, [t.theme, t.typePair]);

  return (
    <>
      <DesignCanvas>
        <DCSection id="cover" title="Mettle · Design Language" subtitle="A handcrafted operating system for the brand">
          <DCArtboard id="cover"  label="Cover · 00"           width={1200} height={900}><ABCover /></DCArtboard>
          <DCArtboard id="signature" label="Signature · Operational Map (interactive)" width={1200} height={800}><ABSignature /></DCArtboard>
        </DCSection>

        <DCSection id="foundations" title="01 · Foundations" subtitle="Color · Typography · Space · Principles">
          <DCArtboard id="color"      label="Color"        width={1200} height={900}><ABColor /></DCArtboard>
          <DCArtboard id="type"       label="Typography"   width={1300} height={900}><ABType /></DCArtboard>
          <DCArtboard id="space"      label="Space & Grid" width={1100} height={760}><ABSpace /></DCArtboard>
          <DCArtboard id="principles" label="Principles"   width={1200} height={760}><ABPrinciples /></DCArtboard>
        </DCSection>

        <DCSection id="icons" title="02 · Iconography" subtitle="24 thin-line marks, one hand">
          <DCArtboard id="icon-set" label="Icon set · drawn for Mettle" width={1200} height={920}><ABIcons /></DCArtboard>
        </DCSection>

        <DCSection id="components" title="03 · Components" subtitle="Buttons, tags, cards, inputs">
          <DCArtboard id="comp-buttons" label="Action surface"  width={1200} height={820}><ABComponentsButtons /></DCArtboard>
          <DCArtboard id="comp-cards"   label="Content surface" width={1300} height={820}><ABComponentsCards /></DCArtboard>
        </DCSection>

        <DCSection id="pages" title="04 · Pages" subtitle="Five hero surfaces, one voice">
          <DCArtboard id="page-home"     label="Home"          width={1280} height={840}><PageHome /></DCArtboard>
          <DCArtboard id="page-services" label="Services"      width={1280} height={840}><PageServices /></DCArtboard>
          <DCArtboard id="page-how"      label="How we work"   width={1280} height={840}><PageHowWeWork /></DCArtboard>
          <DCArtboard id="page-about"    label="About"         width={1280} height={840}><PageAbout /></DCArtboard>
          <DCArtboard id="page-contact"  label="Contact"       width={1280} height={840}><PageContact /></DCArtboard>
        </DCSection>
      </DesignCanvas>

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
            Light = white + ink + electric blue.<br/>
            Dark = charcoal + cream + signal green.
          </p>
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

        <TweakSection label="Jump to">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            {[
              ["#cover", "Cover"],
              ["#foundations", "Foundations"],
              ["#icons", "Icons"],
              ["#components", "Components"],
              ["#pages", "Pages"],
            ].map(([h, l]) => (
              <a key={h} href={h} style={{
                fontSize: 12, padding: "8px 10px", textDecoration: "none",
                color: "#0B0D10",
                background: "#fff", border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 4, textAlign: "center",
              }}>{l}</a>
            ))}
          </div>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MettleApp />);
