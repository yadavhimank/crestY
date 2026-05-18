export function MInput({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label style={{ display: "block" }}>
      <div className="m-eyebrow" style={{ marginBottom: 6 }}>{label}</div>
      <div style={{ position: "relative" }}>
        <input
          placeholder={placeholder}
          style={{
            width: "100%",
            background: "transparent",
            border: 0,
            borderBottom: "1px solid var(--m-line-2)",
            padding: "10px 0",
            fontSize: 16,
            color: "var(--m-ink)",
            fontFamily: "var(--m-sans)",
            outline: "none",
          }}
        />
      </div>
    </label>
  );
}
