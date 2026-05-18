import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

interface WorkCase {
  id: string;
  n: string;
  title: string;
  sector: string;
  region: string;
  year: string;
  icon: IconName;
  disciplines: string[];
  summary: string;
  metric: [string, string];
  cover: string;
}

const WORK_CASES: WorkCase[] = [
  {
    id: "k2", n: "01", title: "K2 Renewals", sector: "Renewable energy", region: "Scotland · UK", year: "2024",
    icon: "compass", disciplines: ["System design", "Custom software"],
    summary: "A 5-tool sales stack collapsed into one operating system tuned to how the team actually closes.",
    metric: ["+70hrs", "saved / week"], cover: "k2",
  },
  {
    id: "barnshenn", n: "02", title: "Barnshenn", sector: "E-commerce", region: "London · UK", year: "2024",
    icon: "grid", disciplines: ["Software", "Operations"],
    summary: "Unified ops platform rebuilt around the team's real sales-to-fulfilment sequence.",
    metric: ["3.2×", "throughput"], cover: "barn",
  },
  {
    id: "solivia", n: "03", title: "Solivia Pharma", sector: "Pharma · Voice agent", region: "Mumbai · IN", year: "2025",
    icon: "orbit", disciplines: ["Automation", "AI"],
    summary: "Always-on voice agent handling refill coordination across 1,200 patients without escalation.",
    metric: ["94%", "auto-resolved"], cover: "solivia",
  },
  {
    id: "northbound", n: "04", title: "Northbound SaaS", sector: "B2B SaaS · License flow", region: "Toronto · CA", year: "2025",
    icon: "cpu", disciplines: ["System design", "Software"],
    summary: "Rebuilt the trial-to-paid pipeline as a single state machine — replacing 3 stitched-together vendor tools.",
    metric: ["+38%", "conversion"], cover: "north",
  },
  {
    id: "halcyon", n: "05", title: "Halcyon Care", sector: "Healthcare · Triage", region: "Singapore · SG", year: "2025",
    icon: "shield", disciplines: ["Automation", "Data"],
    summary: "Clinical triage assistant routing intake messages to the right specialist queue, with audit log.",
    metric: ["-62%", "intake time"], cover: "halcyon",
  },
  {
    id: "mercer", n: "06", title: "Mercer & Pine", sector: "Legal · Practice management", region: "London · UK", year: "2026",
    icon: "document", disciplines: ["System design"],
    summary: "Written operating diagnostic and matter-management blueprint for a 14-partner litigation practice.",
    metric: ["1 doc", "12 weeks runway"], cover: "mercer",
  },
];

function CaseCoverArt({ kind }: { kind: string }) {
  if (kind === "k2") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <path d="M30 60 H 90 V 110 H 150 V 60 H 220 V 160 H 290" />
          <path d="M30 130 H 70 V 180 H 200 V 130 H 250 V 180 H 290" className="m-flow-line" />
        </g>
        {([[30,60],[90,60],[90,110],[150,110],[150,60],[220,60],[220,160],[290,160],[30,130],[70,130],[70,180],[200,180],[200,130],[250,130],[250,180],[290,180]] as [number,number][]).map(([x,y],i)=>(
          <rect key={i} x={x-3} y={y-3} width="6" height="6" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
        ))}
      </svg>
    );
  }
  if (kind === "barn") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="0.75" opacity="0.6">
          {[40, 80, 120, 160].map(y => <line key={y} x1="30" y1={y} x2="290" y2={y} />)}
          {[40, 90, 140, 190, 240, 290].map(x => <line key={x} x1={x} y1="40" x2={x} y2="180" />)}
        </g>
        {([[90,40],[140,80],[190,120],[240,80],[290,160],[40,120],[40,160]] as [number,number][]).map(([x,y],i) => (
          <rect key={i} x={x-6} y={y-6} width="12" height="12" stroke="var(--m-accent)" strokeWidth="1.25" fill="var(--m-bg-raised)" />
        ))}
        <rect x="284" y="154" width="12" height="12" stroke="var(--m-accent)" strokeWidth="1.5" fill="var(--m-accent)" />
      </svg>
    );
  }
  if (kind === "solivia") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1" fill="none">
          <ellipse cx="160" cy="110" rx="120" ry="40" />
          <ellipse cx="160" cy="110" rx="80" ry="60" transform="rotate(-25 160 110)" />
          <ellipse cx="160" cy="110" rx="50" ry="80" transform="rotate(40 160 110)" />
        </g>
        <circle cx="160" cy="110" r="10" fill="var(--m-accent)" />
        <circle cx="160" cy="110" r="16" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
        {([[240,78],[84,146],[200,170],[110,68]] as [number,number][]).map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="3" fill="var(--m-accent)" />
        ))}
      </svg>
    );
  }
  if (kind === "north") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <rect x="30" y="70" width="50" height="50" />
          <rect x="120" y="70" width="50" height="50" />
          <rect x="210" y="70" width="50" height="50" />
          <line x1="80" y1="95" x2="120" y2="95" />
          <line x1="170" y1="95" x2="210" y2="95" />
        </g>
        <g fontFamily="var(--m-mono)" fontSize="8" fill="currentColor" opacity="0.5" textAnchor="middle">
          <text x="55" y="98">TRIAL</text>
          <text x="145" y="98">ACTIVE</text>
          <text x="235" y="98">PAID</text>
        </g>
        <circle cx="55" cy="160" r="4" fill="var(--m-accent)" />
        <circle cx="145" cy="160" r="4" fill="var(--m-accent)" />
        <circle cx="235" cy="160" r="6" fill="var(--m-accent)" />
        <circle cx="235" cy="160" r="12" fill="none" stroke="var(--m-accent)" opacity="0.4" className="m-flow-pulse" />
      </svg>
    );
  }
  if (kind === "halcyon") {
    return (
      <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
          <circle cx="160" cy="60" r="6" />
          <line x1="160" y1="66" x2="160" y2="100" />
          <line x1="60" y1="160" x2="160" y2="100" />
          <line x1="160" y1="100" x2="260" y2="160" />
          <line x1="160" y1="100" x2="160" y2="160" />
        </g>
        {([[60,160],[160,160],[260,160]] as [number,number][]).map(([x,y],i)=>(
          <g key={i}>
            <rect x={x-12} y={y-8} width="24" height="20" stroke="var(--m-accent)" fill="var(--m-bg-raised)" strokeWidth="1.25" />
            <text x={x} y={y+5} fontFamily="var(--m-mono)" fontSize="8" textAnchor="middle" fill="currentColor" opacity="0.6">{(["GP","RX","ER"] as string[])[i]}</text>
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 320 220" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <g stroke="var(--m-accent)" strokeWidth="1.25" fill="none">
        <path d="M100 40 H 200 L 220 60 V 180 H 100 Z" />
        <polyline points="200,40 200,60 220,60" />
        <line x1="120" y1="90" x2="200" y2="90" />
        <line x1="120" y1="110" x2="200" y2="110" />
        <line x1="120" y1="130" x2="180" y2="130" />
        <line x1="120" y1="150" x2="160" y2="150" />
      </g>
      <rect x="106" y="166" width="10" height="6" fill="var(--m-accent)" />
    </svg>
  );
}

function CaseCover({ cover, icon, n }: { cover: string; icon: IconName; n: string }) {
  return (
    <div style={{ height: 220, position: "relative", borderBottom: "1px solid var(--m-line)", background: "var(--m-bg-sunken)", overflow: "hidden" }}>
      <div className="m-grid-bg-fine" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
      <CaseCoverArt kind={cover} />
      <div style={{ position: "absolute", top: 14, left: 14 }}>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>CASE · {n}</span>
      </div>
      <div style={{ position: "absolute", top: 14, right: 14, color: "var(--m-ink-3)" }}>
        <Icon name={icon} size={20} />
      </div>
    </div>
  );
}

function CaseCard({ c }: { c: WorkCase }) {
  return (
    <Link href="/work" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}>
      <article style={{
        border: "1px solid var(--m-line)",
        background: "var(--m-bg-raised)",
        display: "flex", flexDirection: "column", flex: 1,
        transition: "transform 240ms var(--ease-out-fine), border-color 140ms var(--ease-out-fine)",
      }} className="hover:-translate-y-0.5 hover:border-m-ink">
        <CaseCover cover={c.cover} icon={c.icon} n={c.n} />
        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{c.sector}</span>
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>{c.year}</span>
          </div>
          <h3 className="m-display" style={{ fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{c.summary}</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
            {c.disciplines.map((d) => <span key={d} className="m-tag">{d}</span>)}
          </div>
          <div style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--m-line)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <div className="m-display" style={{ fontSize: 28, letterSpacing: "-0.025em", lineHeight: 1 }}>{c.metric[0]}</div>
              <div className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>{c.metric[1]}</div>
            </div>
            <span style={{ color: "var(--m-ink-3)" }}><Icon name="arrowUpRight" size={16} /></span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export function WorkIndex() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WORK_CASES.map((c) => <CaseCard key={c.id} c={c} />)}
      </div>
    </section>
  );
}
