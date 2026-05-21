"use client";

import { useEffect, useRef, useState } from "react";
import { ACCENT_PRESETS, useTweaks } from "./TweaksProvider";
import type { Accent, Theme, TypePair } from "./TweaksProvider";

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--m-line)" }}>
      <div style={{ fontSize: 10, fontFamily: "var(--m-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--m-ink-4)", marginBottom: 12 }}>{label}</div>
      {children}
    </div>
  );
}

function RadioGroup<T extends string>({
  options, value, onChange,
}: { options: { value: T; label: string }[]; value: T; onChange: (v: T) => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button key={o.value} onClick={() => onChange(o.value)} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "11px 12px", minHeight: 44,
            border: "1px solid " + (active ? "var(--m-ink)" : "var(--m-line)"),
            background: active ? "var(--m-ink)" : "transparent",
            color: active ? "var(--m-bg)" : "var(--m-ink-2)",
            fontFamily: "var(--m-sans)", fontSize: 13, cursor: "pointer", textAlign: "left",
          }}>
            <span style={{
              width: 10, height: 10, borderRadius: 999,
              border: "1px solid " + (active ? "var(--m-bg)" : "var(--m-ink-3)"),
              background: active ? "var(--m-bg)" : "transparent",
              flexShrink: 0,
            }} />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

function PanelContent({
  tweaks, setTweak, isDark, onClose,
}: {
  tweaks: ReturnType<typeof useTweaks>["tweaks"];
  setTweak: ReturnType<typeof useTweaks>["setTweak"];
  isDark: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Header */}
      <div style={{
        padding: "12px 18px", borderBottom: "1px solid var(--m-line-strong)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "var(--m-bg-sunken)",
      }}>
        <div>
          <span style={{ fontFamily: "var(--m-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--m-ink-4)" }}>Mettle</span>
          <span style={{ fontFamily: "var(--m-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--m-accent)", marginLeft: 8 }}>· Tweaks</span>
        </div>
        <button onClick={onClose} style={{
          background: "transparent", border: "1px solid var(--m-line)", color: "var(--m-ink-3)",
          width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        }} aria-label="Close tweaks panel">
          <CloseIcon />
        </button>
      </div>

      {/* Theme */}
      <Section label="Theme">
        <RadioGroup<Theme>
          value={tweaks.theme}
          onChange={(v) => setTweak("theme", v)}
          options={[
            { value: "light", label: "Light · ink" },
            { value: "dark",  label: "Dark sovereign" },
          ]}
        />
      </Section>

      {/* Accent */}
      <Section label="Accent colour">
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          {(Object.entries(ACCENT_PRESETS) as [Accent, typeof ACCENT_PRESETS[Accent]][]).map(([k, v]) => {
            const swatch = isDark ? v.d.a : v.l.a;
            const active = tweaks.accent === k;
            return (
              <button key={k} onClick={() => setTweak("accent", k)} aria-label={v.name} style={{
                width: 44, height: 44,
                background: swatch, cursor: "pointer",
                border: "2px solid " + (active ? "var(--m-ink)" : "transparent"),
                outline: active ? "1px solid var(--m-ink)" : "1px solid var(--m-line)",
                outlineOffset: active ? 2 : 0,
              }} />
            );
          })}
        </div>
        <div style={{ fontFamily: "var(--m-mono)", fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>
          {ACCENT_PRESETS[tweaks.accent].name}
        </div>
      </Section>

      {/* Type pairing */}
      <Section label="Type pairing">
        <RadioGroup<TypePair>
          value={tweaks.typePair}
          onChange={(v) => setTweak("typePair", v)}
          options={[
            { value: "instrument", label: "Instrument Serif · editorial" },
            { value: "newsreader", label: "Newsreader · classical" },
            { value: "dm-serif",   label: "DM Serif Display · chunky" },
          ]}
        />
        <p style={{ fontFamily: "var(--m-mono)", fontSize: 10, color: "var(--m-ink-4)", lineHeight: 1.5, marginTop: 10 }}>
          Body (Geist) and mono (JetBrains) are constants. Only the display family changes.
        </p>
      </Section>

      {/* Footer */}
      <div style={{ padding: "10px 18px", background: "var(--m-bg-sunken)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--m-mono)", fontSize: 10, color: "var(--m-ink-5)" }}>Persisted · localStorage</span>
        <button onClick={() => {
          try { localStorage.removeItem("mettle.tweaks"); } catch {}
          window.location.reload();
        }} style={{
          fontFamily: "var(--m-mono)", fontSize: 10, letterSpacing: "0.06em",
          background: "transparent", border: 0, color: "var(--m-ink-4)", cursor: "pointer",
          minHeight: 44, padding: "0 4px",
        }}>Reset</button>
      </div>
    </>
  );
}

export function TweaksPanel() {
  const { tweaks, setTweak } = useTweaks();
  const [open, setOpen] = useState(false);
  const desktopRef = useRef<HTMLDivElement>(null);

  // Body scroll lock on mobile only
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    document.body.style.overflow = (open && mobile) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Esc + click-outside (desktop only — mobile uses backdrop)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onOutside(e: MouseEvent) {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (isDesktop && open && desktopRef.current && !desktopRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
    };
  }, [open]);

  const isDark = tweaks.theme === "dark";
  const panelProps = { tweaks, setTweak, isDark, onClose: () => setOpen(false) };

  return (
    <>
      {/* ── Mobile: backdrop ── */}
      {open && (
        <div
          className="md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 9998 }}
        />
      )}

      {/* ── Mobile: bottom sheet ── */}
      {open && (
        <div
          className="md:hidden flex flex-col"
          style={{
            position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
            maxHeight: "80vh", overflowY: "auto",
            background: "var(--m-bg-raised)",
            border: "1px solid var(--m-line-strong)",
            borderRadius: "12px 12px 0 0",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.2)",
            animation: "tweaks-sheet-up 280ms cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        >
          <PanelContent {...panelProps} />
        </div>
      )}

      {/* ── Desktop: floating panel + trigger ── */}
      <div
        ref={desktopRef}
        style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}
      >
        {open && (
          <div
            className="hidden md:flex flex-col"
            style={{
              width: 280,
              background: "var(--m-bg-raised)",
              border: "1px solid var(--m-line-strong)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
          >
            <PanelContent {...panelProps} />
          </div>
        )}

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Open site tweaks"
          aria-expanded={open}
          style={{
            width: 44, height: 44,
            background: open ? "var(--m-ink)" : "var(--m-bg-raised)",
            color: open ? "var(--m-bg)" : "var(--m-ink-3)",
            border: "1px solid " + (open ? "var(--m-ink)" : "var(--m-line-strong)"),
            boxShadow: "0 4px 16px rgba(0,0,0,0.14)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
            transition: "background 140ms, color 140ms, border-color 140ms",
          }}
        >
          <SettingsIcon />
        </button>
      </div>
    </>
  );
}
