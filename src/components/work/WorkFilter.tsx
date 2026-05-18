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
    <div style={{
      padding: "16px 56px",
      borderTop: "1px solid var(--m-line)",
      borderBottom: "1px solid var(--m-line)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "var(--m-bg-raised)",
      position: "sticky", top: 65, zIndex: 5,
    }}>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {FILTERS.map(([ic, l]) => (
          <button key={l} onClick={() => setActive(l)} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 12px",
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
      <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>06 results · sort by · most recent</span>
    </div>
  );
}
