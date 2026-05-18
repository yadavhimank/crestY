// Mettle Icon Set — custom, thin-line, 24×24, stroke-based.
// All icons share: viewBox="0 0 24 24", stroke="currentColor",
// strokeWidth=1.25, strokeLinecap=round, strokeLinejoin=round.
// Built from primitives only (lines, rects, circles, polylines).

import React from "react";

export type IconName =
  | "arrowRight"
  | "arrowUpRight"
  | "arrowDown"
  | "flow"
  | "parallel"
  | "grid"
  | "network"
  | "branch"
  | "compass"
  | "brackets"
  | "orbit"
  | "observe"
  | "simplify"
  | "build"
  | "deploy"
  | "database"
  | "dashboard"
  | "shield"
  | "cpu"
  | "beam"
  | "speak"
  | "document"
  | "mail"
  | "check"
  | "cross"
  | "plus"
  | "spark"
  | "globe"
  | "team"
  | "clock"
  | "mark"
  | "menu";

const M_SVG_DEFAULTS = {
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const glyphs: Record<IconName, () => React.ReactElement> = {
  // ─── Mark / arrows ──────────────────────────────
  arrowRight: () => (
    <>
      <line x1="3" y1="12" x2="20" y2="12" />
      <polyline points="14,6 20,12 14,18" />
    </>
  ),
  arrowUpRight: () => (
    <>
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="9,6 18,6 18,15" />
    </>
  ),
  arrowDown: () => (
    <>
      <line x1="12" y1="3" x2="12" y2="20" />
      <polyline points="6,14 12,20 18,14" />
    </>
  ),

  // ─── Systems & flow ─────────────────────────────
  // Three nodes connected by lines, the Mettle motif
  flow: () => (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="12" r="2" />
      <circle cx="5" cy="18" r="2" />
      <line x1="7" y1="6" x2="17" y2="12" />
      <line x1="7" y1="18" x2="17" y2="12" />
    </>
  ),
  // Two-track parallel: messy vs clean
  parallel: () => (
    <>
      <path d="M3 8 q3 -3 6 0 t6 0 t6 0" />
      <line x1="3" y1="16" x2="21" y2="16" />
    </>
  ),
  // Workflow grid
  grid: () => (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" />
      <rect x="13.5" y="3.5" width="7" height="7" />
      <rect x="3.5" y="13.5" width="7" height="7" />
      <rect x="13.5" y="13.5" width="7" height="7" />
    </>
  ),
  // Connected nodes (network)
  network: () => (
    <>
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="4"  cy="14" r="1.6" />
      <circle cx="20" cy="14" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
      <line x1="12" y1="5.6" x2="12" y2="18.4" />
      <line x1="5.5"  y1="14" x2="18.5" y2="14" />
      <line x1="5" y1="13" x2="11" y2="5" />
      <line x1="19" y1="13" x2="13" y2="5" />
    </>
  ),
  // Branch (decision point)
  branch: () => (
    <>
      <circle cx="6" cy="6" r="1.6" />
      <circle cx="18" cy="6" r="1.6" />
      <circle cx="12" cy="18" r="1.6" />
      <path d="M6 7.6 V13 a3 3 0 0 0 3 3 H11" />
      <path d="M18 7.6 V13 a3 3 0 0 1 -3 3 H13" />
    </>
  ),

  // ─── Mettle services ─────────────────────────────
  // 01 Systems — compass
  compass: () => (
    <>
      <circle cx="12" cy="12" r="9" />
      <polygon points="12,6 14,12 12,18 10,12" />
    </>
  ),
  // 02 Software — brackets
  brackets: () => (
    <>
      <polyline points="9,5 4,12 9,19" />
      <polyline points="15,5 20,12 15,19" />
    </>
  ),
  // 03 Automation & AI — orbit
  orbit: () => (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
      <circle cx="20" cy="8" r="1" fill="currentColor" />
    </>
  ),

  // ─── How we work / process ───────────────────────
  observe: () => (
    <>
      <circle cx="11" cy="11" r="6" />
      <circle cx="11" cy="11" r="2" />
      <line x1="16" y1="16" x2="21" y2="21" />
    </>
  ),
  simplify: () => (
    <>
      <path d="M3 6 q4 4 8 0 t8 0" />
      <line x1="3" y1="14" x2="21" y2="14" />
    </>
  ),
  build: () => (
    <>
      <rect x="4" y="9" width="7" height="11" />
      <rect x="13" y="4" width="7" height="16" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </>
  ),
  deploy: () => (
    <>
      <path d="M12 3 L17 11 L12 9 L7 11 Z" />
      <path d="M12 9 V20" />
      <line x1="9" y1="20" x2="15" y2="20" />
    </>
  ),

  // ─── Data & ops ──────────────────────────────────
  database: () => (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6 V18 a7 2.5 0 0 0 14 0 V6" />
      <path d="M5 12 a7 2.5 0 0 0 14 0" />
    </>
  ),
  dashboard: () => (
    <>
      <rect x="3.5" y="4" width="17" height="16" />
      <line x1="3.5" y1="9" x2="20.5" y2="9" />
      <line x1="11" y1="9" x2="11" y2="20" />
    </>
  ),
  shield: () => (
    <>
      <path d="M12 3 L20 6 V12 a8 8 0 0 1 -8 9 a8 8 0 0 1 -8 -9 V6 Z" />
    </>
  ),
  cpu: () => (
    <>
      <rect x="6" y="6" width="12" height="12" />
      <rect x="9.5" y="9.5" width="5" height="5" />
      <line x1="10" y1="3" x2="10" y2="6" />
      <line x1="14" y1="3" x2="14" y2="6" />
      <line x1="10" y1="18" x2="10" y2="21" />
      <line x1="14" y1="18" x2="14" y2="21" />
      <line x1="3" y1="10" x2="6" y2="10" />
      <line x1="3" y1="14" x2="6" y2="14" />
      <line x1="18" y1="10" x2="21" y2="10" />
      <line x1="18" y1="14" x2="21" y2="14" />
    </>
  ),
  beam: () => (
    <>
      <line x1="3" y1="12" x2="21" y2="12" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </>
  ),

  // ─── Talk & write ────────────────────────────────
  speak: () => (
    <>
      <path d="M4 5 H20 V15 H13 L8 19 V15 H4 Z" />
    </>
  ),
  document: () => (
    <>
      <path d="M6 3 H14 L18 7 V21 H6 Z" />
      <polyline points="14,3 14,7 18,7" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </>
  ),
  mail: () => (
    <>
      <rect x="3.5" y="6" width="17" height="12" />
      <polyline points="3.5,8 12,13 20.5,8" />
    </>
  ),

  // ─── Marks ───────────────────────────────────────
  check: () => (
    <polyline points="4,12 10,18 20,6" />
  ),
  cross: () => (
    <>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </>
  ),
  plus: () => (
    <>
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="4" y1="12" x2="20" y2="12" />
    </>
  ),
  spark: () => (
    <>
      <path d="M12 3 L13.5 10.5 L21 12 L13.5 13.5 L12 21 L10.5 13.5 L3 12 L10.5 10.5 Z" />
    </>
  ),

  // ─── Meta ────────────────────────────────────────
  globe: () => (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  team: () => (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2 20 a6 6 0 0 1 12 0" />
      <path d="M10 20 a6 6 0 0 1 12 0" />
    </>
  ),
  clock: () => (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12,6 12,12 16,14" />
    </>
  ),

  menu: () => (
    <>
      <line x1="3" y1="7"  x2="21" y2="7"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </>
  ),

  // The Mettle mark — three nodes, one path through them
  mark: () => (
    <>
      <circle cx="4" cy="6" r="1.6" />
      <circle cx="12" cy="18" r="1.6" />
      <circle cx="20" cy="6" r="1.6" />
      <path d="M4 6 L12 18 L20 6" />
    </>
  ),
};

export function Icon({
  name,
  size = 24,
  strokeWidth = 1.25,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}): React.JSX.Element {
  const Glyph = glyphs[name];
  return (
    <svg
      {...M_SVG_DEFAULTS}
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <Glyph />
    </svg>
  );
}
