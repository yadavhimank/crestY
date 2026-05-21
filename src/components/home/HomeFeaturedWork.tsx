import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { SectionHead } from "@/components/site/SectionHead";

type CaseKind = "compass" | "grid" | "orbit";

interface CaseData {
  n: string;
  icon: CaseKind;
  tag: string;
  title: string;
  metric: [string, string];
  body: string;
}

const CASES: CaseData[] = [
  {
    n: "01",
    icon: "compass",
    tag: "Renewable energy · CRM",
    title: "K2 Renewals",
    metric: ["+70hrs", "saved per week"],
    body: "Replaced a 5-tool sales stack with a single operating system, tuned to how the team actually closes.",
  },
  {
    n: "02",
    icon: "grid",
    tag: "E-commerce · UK",
    title: "Barnshenn",
    metric: ["3.2×", "throughput"],
    body: "Unified ops platform rebuilt around the team's real sales-to-fulfilment sequence.",
  },
  {
    n: "03",
    icon: "orbit",
    tag: "Pharma · Voice agent",
    title: "Medcare Pharma",
    metric: ["94%", "auto-resolved"],
    body: "An always-on voice agent that handles refill coordination across 1,200 patients without escalation.",
  },
];

export function HomeFeaturedWork() {
  return (
    <section
      className="py-12 md:py-16 lg:py-20"
      style={{ borderTop: "1px solid var(--m-line)" }}
    >
      <SectionHead
        kicker="Featured work · 03 of 06 live systems"
        title={
          <>
            Shipped systems,{" "}
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>
              not
            </em>{" "}
            decks.
          </>
        }
        lead="Each engagement ends with software a team owns. These three give the flavour."
        action={
          <Link href="/work" className="m-btn m-btn-bare">
            See all work <Icon name="arrowRight" size={13} />
          </Link>
        }
      />

      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASES.map((c) => (
          <FeaturedCaseCard key={c.n} {...c} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCaseCard({ n, icon, tag, title, metric, body }: CaseData) {
  return (
    <Link
      href="/work"
      style={{
        border: "1px solid var(--m-line)",
        background: "var(--m-bg-raised)",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition:
          "transform 240ms var(--ease-out-fine), border-color 140ms var(--ease-out-fine)",
        textDecoration: "none",
        color: "inherit",
      }}
      className="hover:-translate-y-0.5 hover:border-m-ink"
    >
      <div
        style={{
          height: 220,
          position: "relative",
          borderBottom: "1px solid var(--m-line)",
          background: "var(--m-bg-sunken)",
          overflow: "hidden",
        }}
      >
        <div
          className="m-grid-bg-fine"
          style={{ position: "absolute", inset: 0, opacity: 0.6 }}
        />
        <CaseSchematic kind={icon} />
        <div style={{ position: "absolute", top: 14, left: 14 }}>
          <span
            className="m-mono"
            style={{
              fontSize: 10,
              color: "var(--m-ink-4)",
              letterSpacing: "0.1em",
            }}
          >
            CASE · {n}
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            color: "var(--m-ink-3)",
          }}
        >
          <Icon name={icon as IconName} size={20} />
        </div>
      </div>

      <div
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          flex: 1,
        }}
      >
        <span
          className="m-mono"
          style={{
            fontSize: 11,
            color: "var(--m-ink-4)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {tag}
        </span>
        <h3
          className="m-display"
          style={{ fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.05 }}
        >
          {title}
        </h3>
        <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>
          {body}
        </p>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 18,
            borderTop: "1px solid var(--m-line)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div>
            <div
              className="m-display"
              style={{ fontSize: 28, letterSpacing: "-0.025em" }}
            >
              {metric[0]}
            </div>
            <div
              className="m-mono"
              style={{
                fontSize: 10,
                color: "var(--m-ink-4)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              {metric[1]}
            </div>
          </div>
          <Icon name="arrowUpRight" size={14} />
        </div>
      </div>
    </Link>
  );
}

function CaseSchematic({ kind }: { kind: CaseKind }) {
  if (kind === "compass") {
    return (
      <svg
        viewBox="0 0 320 220"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <path d="M30 60 H 110 V 110 H 190 V 60 H 270" />
          <path
            d="M30 130 H 90 V 180 H 230 V 130 H 290"
            className="m-flow-line"
          />
        </g>
        {(
          [
            [30, 60],
            [110, 60],
            [110, 110],
            [190, 110],
            [190, 60],
            [270, 60],
            [30, 130],
            [90, 130],
            [90, 180],
            [230, 180],
            [230, 130],
            [290, 130],
          ] as [number, number][]
        ).map(([x, y], i) => (
          <rect
            key={i}
            x={x - 4}
            y={y - 4}
            width="8"
            height="8"
            stroke="var(--m-accent)"
            fill="var(--m-bg-raised)"
            strokeWidth="1.25"
          />
        ))}
      </svg>
    );
  }
  if (kind === "grid") {
    return (
      <svg
        viewBox="0 0 320 220"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <g stroke="var(--m-accent)" strokeWidth="1" fill="none" opacity="0.9">
          {[60, 100, 140].map((y) => (
            <line key={y} x1="40" y1={y} x2="280" y2={y} />
          ))}
          {[80, 140, 200, 240].map((x) => (
            <line key={x} x1={x} y1="40" x2={x} y2="180" />
          ))}
        </g>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="var(--m-accent)">
          <rect x="76" y="56" width="8" height="8" />
          <rect x="136" y="96" width="8" height="8" />
          <rect x="196" y="136" width="8" height="8" />
          <rect x="236" y="96" width="8" height="8" />
        </g>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 320 220"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <g stroke="var(--m-accent)" strokeWidth="1" fill="none">
        <ellipse cx="160" cy="110" rx="120" ry="40" />
        <ellipse
          cx="160"
          cy="110"
          rx="80"
          ry="60"
          transform="rotate(-25 160 110)"
        />
        <ellipse
          cx="160"
          cy="110"
          rx="50"
          ry="80"
          transform="rotate(40 160 110)"
        />
      </g>
      <circle cx="160" cy="110" r="8" fill="var(--m-accent)" />
      <circle cx="240" cy="78" r="3" fill="var(--m-accent)" />
      <circle cx="84" cy="146" r="3" fill="var(--m-accent)" />
      <circle cx="200" cy="170" r="3" fill="var(--m-accent)" />
    </svg>
  );
}
