"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

const FILTERS: [IconName, string][] = [
  ["grid",     "All"],
  ["compass",  "System design"],
  ["brackets", "Software"],
  ["orbit",    "Automation"],
  ["database", "Data"],
  ["team",     "Operations"],
];

export function WorkFilter() {
  const [active, setActive] = useState("All");
  return (
    <div className="px-5 md:px-14 top-14 md:top-16.25" style={{
      paddingTop: 12, paddingBottom: 12,
      borderTop: "1px solid var(--m-line)",
      borderBottom: "1px solid var(--m-line)",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
      background: "var(--m-bg-raised)",
      position: "sticky", zIndex: 5,
    }}>
      <div className="no-scrollbar overflow-x-auto flex gap-1.5 shrink" style={{ flexShrink: 1, minWidth: 0 }}>
        {FILTERS.map(([ic, l]) => (
          <button key={l} onClick={() => setActive(l)} className="whitespace-nowrap" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 12px", flexShrink: 0, minHeight: 44,
            border: "1px solid " + (active === l ? "var(--m-ink)" : "var(--m-line)"),
            background: active === l ? "var(--m-ink)" : "var(--m-bg)",
            color: active === l ? "var(--m-bg)" : "var(--m-ink-2)",
            fontSize: 13, fontWeight: 500, cursor: "pointer",
            fontFamily: "var(--m-sans)",
          }}>
            <Icon name={ic} size={14} /> {l}
          </button>
        ))}
      </div>
      <span className="m-mono shrink-0 hidden sm:inline" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>06 results · most recent</span>
    </div>
  );
}
