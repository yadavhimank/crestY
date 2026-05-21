"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { MInput } from "@/components/site/MInput";

const CHOICES = ["System design", "Custom software", "Automation & AI", "Not sure yet"];
const BUDGETS = ["< $25k", "$25–50k", "$50–100k", "$100k +"];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [name,    setName]    = useState("");
  const [company, setCompany] = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [picked,  setPicked]  = useState("Custom software");
  const [budget,  setBudget]  = useState("$50–100k");
  const [status,  setStatus]  = useState<Status>("idle");
  const [errMsg,  setErrMsg]  = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, service: picked, budget, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Submission failed.");
      setStatus("success");
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 520, padding: "48px 0" }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--m-accent)" }} />
        <h3 className="m-display" style={{ fontSize: 32, letterSpacing: "-0.025em" }}>Message received.</h3>
        <p style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.65, maxWidth: 400 }}>
          We read every message ourselves. You will hear back within one business day — usually sooner.
        </p>
      </div>
    );
  }

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 520 }}
      onSubmit={handleSubmit}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>FORM · A · v3</div>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-accent)" }}>● 5 fields · 2 min</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MInput label="Name"    placeholder="Your name"      value={name}    onChange={setName}    required />
        <MInput label="Company" placeholder="Where you work" value={company} onChange={setCompany} />
      </div>
      <MInput label="Work email" placeholder="you@company.com" value={email} onChange={setEmail} type="email" required />

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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "100%", padding: "12px 0", fontSize: 15, color: "var(--m-ink)",
            background: "transparent", border: 0,
            borderBottom: "1px solid var(--m-line-2)",
            resize: "none", outline: "none", fontFamily: "var(--m-sans)",
          }}
        />
      </div>

      {status === "error" && (
        <p className="m-mono" style={{ fontSize: 11, color: "var(--m-signal-stop)" }}>{errMsg}</p>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, gap: 16 }}>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>
          By sending, you agree to our short privacy note.
        </span>
        <button type="submit" className="m-btn m-btn-primary" disabled={status === "loading"} style={{ opacity: status === "loading" ? 0.6 : 1 }}>
          {status === "loading" ? "Sending…" : <><span>Send to Mettle</span> <Icon name="arrowUpRight" size={14} /></>}
        </button>
      </div>
    </form>
  );
}
