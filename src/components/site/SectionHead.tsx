import type { ReactNode } from "react";

interface SectionHeadProps {
  kicker: string;
  title: ReactNode;
  lead?: string;
  action?: ReactNode;
  dark?: boolean;
}

export function SectionHead({ kicker, title, lead, action, dark = false }: SectionHeadProps) {
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
