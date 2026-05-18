export function HeroBackdrop() {
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
