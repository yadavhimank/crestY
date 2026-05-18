"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { MInput } from "@/components/site/MInput";

const CHOICES = ["System design", "Custom software", "Automation & AI", "Not sure yet"];
const BUDGETS = ["< £25k", "£25–50k", "£50–100k", "£100k +"];

export function ContactForm() {
  const [picked, setPicked] = useState("Custom software");
  const [budget, setBudget] = useState("£50–100k");

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 520 }} onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>FORM · A · v3</div>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-accent)" }}>● 5 fields · 2 min</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MInput label="Name" placeholder="Your name" />
        <MInput label="Company" placeholder="Where you work" />
      </div>
      <MInput label="Work email" placeholder="you@company.com" />
      <div>
        <div className="m-eyebrow" style={{ marginBottom: 10 }}>What are you working on?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {CHOICES.map((c) => (
            <button key={c} type="button" onClick={() => setPicked(c)} style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--m-mono)", fontSize: 11, letterSpacing: "0.08em",
              textTransform: "uppercase", padding: "8px 12px",
              border: "1px solid " + (picked === c ? "var(--m-ink)" : "var(--m-line)"),
              background: picked === c ? "var(--m-ink)" : "var(--m-bg-raised)",
              color: picked === c ? "var(--m-bg)" : "var(--m-ink-3)",
              cursor: "pointer",
            }}>
              {picked === c && <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--m-accent)" }} />}
              {c}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="m-eyebrow" style={{ marginBottom: 10 }}>Rough budget · indicative only</div>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)" }}>
          {BUDGETS.map((b) => (
            <button key={b} type="button" onClick={() => setBudget(b)} style={{
              padding: "12px 8px", minHeight: 44,
              background: budget === b ? "var(--m-ink)" : "transparent",
              color: budget === b ? "var(--m-bg)" : "var(--m-ink-2)",
              fontFamily: "var(--m-mono)", fontSize: 11, letterSpacing: "0.08em",
              cursor: "pointer",
              borderRight: "1px solid var(--m-line)",
              borderBottom: "1px solid var(--m-line)",
            }}>{b}</button>
          ))}
        </div>
      </div>
      <div>
        <div className="m-eyebrow" style={{ marginBottom: 6 }}>Briefly · what&apos;s broken?</div>
        <textarea
          placeholder="Sales orders live across email, sheets, and our CRM. Daily ops bottleneck…"
          rows={5}
          style={{
            width: "100%", padding: "12px 0", fontSize: 15, color: "var(--m-ink)",
            background: "transparent", border: 0,
            borderBottom: "1px solid var(--m-line-2)",
            resize: "none", outline: "none", fontFamily: "var(--m-sans)",
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, gap: 16 }}>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>
          By sending, you agree to our short privacy note.
        </span>
        <button type="submit" className="m-btn m-btn-primary">
          Send to Mettle <Icon name="arrowUpRight" size={14} />
        </button>
      </div>
    </form>
  );
}
