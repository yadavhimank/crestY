import type React from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

interface CTAStripProps {
  eyebrow?: string;
  heading: ReactNode;
  body?: string;
  primary?: string;
}

export function CTAStrip({
  eyebrow = "Next step",
  heading,
  body,
  primary = "Start a conversation",
}: CTAStripProps) {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16 lg:px-14 lg:py-20" style={{
      "--m-ink": "#0B0D10",
      "--m-bg": "#FBFAF7",
      borderTop: "1px solid var(--m-line-strong)",
      borderBottom: "1px solid var(--m-line-strong)",
      background: "var(--m-ink)",
      color: "var(--m-bg)",
      position: "relative",
      overflow: "hidden",
    } as React.CSSProperties}>
      {/* Decorative schematic */}
      <svg viewBox="0 0 1400 400" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, pointerEvents: "none" }} aria-hidden="true">
        <g stroke="var(--m-accent)" strokeWidth="1" fill="none">
          <path d="M0 200 H 240 V 120 H 480 V 280 H 720 V 160 H 960 V 240 H 1400" />
          <path d="M0 280 H 160 V 360 H 400 V 220 H 640 V 320 H 880 V 200 H 1400" className="m-flow-line" />
        </g>
        {([[240,120],[480,120],[480,280],[720,280],[720,160],[960,160],[960,240],[160,280],[160,360],[400,360],[400,220],[640,220],[640,320],[880,320],[880,200]] as [number,number][]).map(([x,y],i)=>(
          <rect key={i} x={x-3} y={y-3} width="6" height="6" stroke="var(--m-accent)" fill="var(--m-ink)" strokeWidth="1" />
        ))}
      </svg>

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 items-end">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--m-accent)" }} className="m-flow-pulse" />
            <span className="m-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em", textTransform: "uppercase" }}>{eyebrow}</span>
          </div>
          <h2 className="m-display text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px]" style={{ lineHeight: 0.95, letterSpacing: "-0.035em" }}>
            {heading}
          </h2>
        </div>
        <div style={{ paddingBottom: 8 }}>
          {body && (
            <p className="text-[15px] lg:text-[17px]" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.55, marginBottom: 24, maxWidth: 380 }}>{body}</p>
          )}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="m-btn"
              style={{ background: "var(--m-bg)", color: "var(--m-ink)", border: "1px solid var(--m-bg)" }}
            >
              {primary} <Icon name="arrowUpRight" size={14} />
            </Link>
            <Link
              href="/how-we-work"
              className="m-btn m-btn-ghost"
              style={{ color: "var(--m-bg)", borderColor: "rgba(255,255,255,0.3)" }}
            >
              See the method
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
