export function WorkHeader() {
  return (
    <section style={{ padding: "84px 56px 32px", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "end" }}>
        <div>
          <span className="m-eyebrow">Work · Six live systems</span>
          <h1 className="m-display" style={{ fontSize: 108, letterSpacing: "-0.045em", lineHeight: 0.9, marginTop: 22 }}>
            Systems we&apos;ve<br />
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>shipped</em>, not<br />
            slides we&apos;ve drawn.
          </h1>
        </div>
        <div style={{ paddingBottom: 12 }}>
          <p style={{ fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 440 }}>
            Six engagements across four industries. Each one is a working operating system —
            owned by the team that runs it.
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 28 }}>
            {([["6", "Live systems"], ["4", "Industries"], ["3.2yr", "Avg. lifespan"]] as [string, string][]).map(([n, l]) => (
              <div key={l}>
                <div className="m-display" style={{ fontSize: 36, letterSpacing: "-0.025em" }}>{n}</div>
                <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
