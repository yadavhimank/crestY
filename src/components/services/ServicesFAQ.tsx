"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

const QS: [string, string][] = [
  ["Do we have to start with the diagnostic?", "No, but we recommend it. Most teams know what they want built — not what's actually broken. The diagnostic answers that, often making the rest of the engagement smaller and cheaper."],
  ["Will you integrate with our existing software?", "Yes — most engagements involve at least one existing system. We treat your tools as part of the operating environment and design around what's worth keeping."],
  ["What does an AI engagement actually mean?", "It means a specific automation with measurable boundaries — a voice agent for refill scheduling, an LLM-assisted triage flow, a follow-up bot. Not a 'platform'."],
  ["Who owns the code?", "You do. Everything we write lives in your repo, on your infrastructure, under your team's control from day one."],
  ["How do you handle handover?", "We embed your operators in the build. Two weeks before launch, we hand over docs, runbooks and a short training session. The team owns the system before we leave."],
  ["Can we hire you just for advice?", "Yes — the diagnostic engagement is exactly that. A written assessment, a 30-minute readout, no commitment beyond."],
];

export function ServicesFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
      <SectionHead
        kicker="FAQ · Common questions"
        title={<>The questions we hear <em style={{ fontStyle: "italic" }}>most.</em></>}
        lead="If yours isn't here, send it over — short questions get short answers."
        action={<Link href="/contact" className="m-btn m-btn-bare">Ask a question <Icon name="arrowRight" size={13} /></Link>}
      />
      <div className="mx-5 md:mx-8 lg:mx-14" style={{ borderTop: "1px solid var(--m-line-strong)" }}>
        {QS.map(([q, a], i) => (
          <div key={i} style={{ borderBottom: "1px solid var(--m-line)" }}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              style={{
                width: "100%", padding: "24px 0",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
                background: "transparent", border: 0, cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="m-display" style={{ fontSize: 24, letterSpacing: "-0.015em", color: "var(--m-ink)" }}>{q}</span>
              </div>
              <span style={{ color: "var(--m-ink-3)", transition: "transform 240ms var(--ease-out-fine)", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>
                <Icon name="plus" size={20} />
              </span>
            </button>
            {open === i && (
              <div style={{ paddingLeft: 56, paddingRight: 24, paddingBottom: 24, maxWidth: 760 }}>
                <p style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.65 }}>{a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
