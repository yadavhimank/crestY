"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Theme    = "light" | "dark";
export type TypePair = "instrument" | "newsreader" | "dm-serif";
export type Accent   = "blue" | "signal" | "ember" | "amber";

export interface Tweaks {
  theme:    Theme;
  typePair: TypePair;
  accent:   Accent;
}

interface AccentCfg { a: string; soft: string; deep: string; ink: string }
interface AccentPreset { name: string; l: AccentCfg; d: AccentCfg }

export const ACCENT_PRESETS: Record<Accent, AccentPreset> = {
  blue:   { name: "Electric blue · default", l: { a:"#2A6FDB", soft:"#E6EEFB", deep:"#14387A", ink:"#FFFFFF" }, d: { a:"#6FB088", soft:"#1A2A22", deep:"#B8DBC4", ink:"#0B0D10" } },
  signal: { name: "Signal green",            l: { a:"#2F8559", soft:"#E2F1E9", deep:"#16432C", ink:"#FFFFFF" }, d: { a:"#6FB088", soft:"#1A2A22", deep:"#B8DBC4", ink:"#0B0D10" } },
  ember:  { name: "Ember",                   l: { a:"#B8362B", soft:"#F7E6E4", deep:"#5E1812", ink:"#FFFFFF" }, d: { a:"#C97366", soft:"#2A1A18", deep:"#E3B7B1", ink:"#0B0D10" } },
  amber:  { name: "Amber sovereign",         l: { a:"#C58A1F", soft:"#F6ECD6", deep:"#5F3F0B", ink:"#FFFFFF" }, d: { a:"#D4A65A", soft:"#2A2418", deep:"#EFD79B", ink:"#0B0D10" } },
};

export const DEFAULTS: Tweaks = { theme: "light", typePair: "newsreader", accent: "blue" };
const STORAGE_KEY = "mettle.tweaks";

function applyToDOM(t: Tweaks) {
  const root = document.documentElement;
  root.setAttribute("data-mettle-theme", t.theme);
  root.setAttribute("data-mettle-type",  t.typePair);
  const cfg = t.theme === "dark" ? ACCENT_PRESETS[t.accent].d : ACCENT_PRESETS[t.accent].l;
  root.style.setProperty("--m-accent",      cfg.a);
  root.style.setProperty("--m-accent-soft", cfg.soft);
  root.style.setProperty("--m-accent-deep", cfg.deep);
  root.style.setProperty("--m-accent-ink",  cfg.ink);
  const dark = t.theme === "dark";
  root.style.setProperty("--m-bg",          dark ? "#0B0D10" : "#FBFAF7");
  root.style.setProperty("--m-bg-sunken",   dark ? "#08090C" : "#F2EFEA");
  root.style.setProperty("--m-bg-raised",   dark ? "#14171C" : "#FFFFFF");
  root.style.setProperty("--m-paper",       dark ? "#1A1E24" : "#FFFFFF");
  root.style.setProperty("--m-ink",         dark ? "#E8E5DD" : "#0B0D10");
  root.style.setProperty("--m-ink-2",       dark ? "#C9C4B8" : "#1B1F26");
  root.style.setProperty("--m-ink-3",       dark ? "#8B8779" : "#4A4F58");
  root.style.setProperty("--m-ink-4",       dark ? "#65625A" : "#80868F");
  root.style.setProperty("--m-ink-5",       dark ? "#3E3C36" : "#B4B8BE");
  root.style.setProperty("--m-line",        dark ? "#22262E" : "#E4DFD5");
  root.style.setProperty("--m-line-2",      dark ? "#32363F" : "#D5CFC2");
  root.style.setProperty("--m-line-strong", dark ? "#E8E5DD" : "#0B0D10");
}

function safeRead(): Tweaks {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch { return DEFAULTS; }
}

function safeWrite(t: Tweaks) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(t)); } catch {}
}

interface TweaksCtx {
  tweaks: Tweaks;
  setTweak: <K extends keyof Tweaks>(key: K, val: Tweaks[K]) => void;
}

export const TweaksContext = createContext<TweaksCtx>({ tweaks: DEFAULTS, setTweak: () => {} });
export const useTweaks = () => useContext(TweaksContext);

export function TweaksProvider({ children }: { children: React.ReactNode }) {
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS);

  useEffect(() => {
    const saved = safeRead();
    setTweaks(saved);
    applyToDOM(saved);
  }, []);

  const setTweak = useCallback(<K extends keyof Tweaks>(key: K, val: Tweaks[K]) => {
    setTweaks(prev => {
      const next = { ...prev, [key]: val };
      safeWrite(next);
      applyToDOM(next);
      return next;
    });
  }, []);

  return (
    <TweaksContext.Provider value={{ tweaks, setTweak }}>
      {children}
    </TweaksContext.Provider>
  );
}
