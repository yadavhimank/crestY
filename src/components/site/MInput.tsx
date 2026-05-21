interface MInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}

export function MInput({ label, placeholder, value, onChange, type = "text", required }: MInputProps) {
  return (
    <label style={{ display: "block" }}>
      <div className="m-eyebrow" style={{ marginBottom: 6 }}>{label}</div>
      <div style={{ position: "relative" }}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
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
