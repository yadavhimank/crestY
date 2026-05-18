export function WorkHeader() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16 lg:px-14 lg:py-20" style={{ position: "relative" }}>
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-16 items-end">
        <div>
          <span className="m-eyebrow">Work · Six live systems</span>
          <h1 className="m-display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[108px] xl:text-[124px]" style={{ letterSpacing: "-0.045em", lineHeight: 0.9, marginTop: 22 }}>
            Systems we&apos;ve<br />
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>shipped</em>, not<br />
            slides we&apos;ve drawn.
          </h1>
        </div>
        <div style={{ paddingBottom: 12 }}>
          <p className="text-[15px] lg:text-[17px]" style={{ color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 440 }}>
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
