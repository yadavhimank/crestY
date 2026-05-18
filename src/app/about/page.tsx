import type { Metadata } from "next";
import Link from "next/link";
import { SiteFrame } from "@/components/site/SiteFrame";
import { CTAStrip } from "@/components/site/CTAStrip";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { SectionHead } from "@/components/site/SectionHead";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "A small studio of operators, engineers and strategists. Founded Singapore 2023. Four industries, six live systems, one method. We take 4–5 new partners per year.",
  openGraph: {
    title: "About · Mettle",
    description: "Small studio. Long engagements. Quiet portfolio. Meet the team behind the systems.",
    url: "https://mettle.co/about",
  },
  twitter: { title: "About · Mettle" },
  alternates: { canonical: "https://mettle.co/about" },
};

const TEAM = [
  { name: "Avery Khoo",    role: "Partner · Systems",     initials: "AK", bio: "Ex-operations at a Series C marketplace. Maps before code.", icon: "compass" as IconName },
  { name: "Devansh Mehta", role: "Partner · Engineering", initials: "DM", bio: "Built CRMs and ops platforms for B2B teams since 2014.",     icon: "brackets" as IconName },
  { name: "Lin Suo",       role: "Lead · Automation",     initials: "LS", bio: "Voice & language agents in pharma and customer support.",     icon: "orbit" as IconName },
  { name: "Naomi Tahir",   role: "Lead · Operations",     initials: "NT", bio: "Embeds with client teams. Owns handover and on-call.",        icon: "deploy" as IconName },
];

const VALUES: [IconName, string, string][] = [
  ["spark",   "Quiet over loud",       "Real systems are unglamorous. We'd rather ship something that hums than something that shines."],
  ["network", "Long over wide",        "We work with fewer clients, longer. A studio of five can't run twenty engagements — and shouldn't pretend."],
  ["beam",    "Honest over polished",  "The diagnostic tells you what's broken, even if that means we get hired for less. We'd rather be right."],
  ["team",    "Operators over architects", "We build alongside the team that will own the system. They're in the room from day one, not month six."],
];

const CLIENTS: [string, IconName][] = [
  ["K2 Renewals",     "compass"],
  ["Barnshenn",       "grid"],
  ["Solivia Pharma",  "shield"],
  ["Northbound SaaS", "cpu"],
  ["Halcyon Care",    "shield"],
  ["Mercer & Pine",   "document"],
  ["Stellate Studio", "spark"],
  ["Field Bureau",    "globe"],
];

const ROLES = [
  { t: "Senior Engineer · Full-stack",  loc: "Remote · UK / SG · IN", tag: "Engineering", ic: "brackets" as IconName },
  { t: "Operations Designer",           loc: "Singapore · Hybrid",    tag: "Systems",     ic: "compass" as IconName },
];

export default function AboutPage() {
  return (
    <SiteFrame>
      {/* Hero */}
      <section style={{ padding: "84px 56px 56px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "start", position: "relative" }}>
        <HeroBackdrop />
        <div style={{ position: "relative" }}>
          <span className="m-eyebrow">About · The studio</span>
          <h1 className="m-display" style={{ fontSize: 108, letterSpacing: "-0.045em", lineHeight: 0.9, marginTop: 22 }}>
            A small studio<br />
            of operators,<br />
            engineers, and<br />
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>strategists.</em>
          </h1>
        </div>
        <div style={{ position: "relative", paddingTop: 80, display: "flex", flexDirection: "column", gap: 22 }}>
          <p style={{ fontSize: 20, color: "var(--m-ink)", lineHeight: 1.55, maxWidth: 460 }}>
            Mettle started in 2023 with a stubborn premise:{" "}
            <em style={{ fontStyle: "italic" }}>most business problems are operating problems wearing a software costume.</em>
          </p>
          <p style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.65, maxWidth: 460 }}>
            We work across three disciplines because operating problems rarely respect org charts.
            A pharma brand, a renewables CRM, a SaaS license flow — same method, same care for the team
            that lives in the system after we&apos;re gone.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <Link href="/contact" className="m-btn m-btn-primary">Meet the team <Icon name="arrowUpRight" size={14} /></Link>
            <button className="m-btn m-btn-ghost">Open roles · 2</button>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section style={{ borderTop: "1px solid var(--m-line-strong)", borderBottom: "1px solid var(--m-line)", padding: "32px 56px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 24, background: "var(--m-bg-raised)" }}>
        {([
          ["2023", "Founded · Singapore",    "clock"],
          ["4",    "Industries shipped",     "grid"],
          ["6",    "Live operating systems", "database"],
          ["3",    "Continents · 7 TZs",     "globe"],
          ["4+3",  "Operators + advisors",   "team"],
        ] as [string, string, IconName][]).map(([n, l, ic]) => (
          <div key={l} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ color: "var(--m-ink-4)" }}><Icon name={ic} size={18} /></div>
            <div className="m-display" style={{ fontSize: 52, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </section>

      {/* Origin */}
      <section style={{ padding: "96px 56px", borderTop: "1px solid var(--m-line)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
          <div>
            <span className="m-eyebrow">Origin · 2023 → today</span>
            <h2 className="m-display" style={{ fontSize: 60, letterSpacing: "-0.03em", lineHeight: 0.95, marginTop: 18 }}>
              We started where most consultancies <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>stop.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <p style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.7 }}>
              Three of us came from product, engineering and operations roles where the strategy decks were
              beautiful and the systems were broken. We kept watching teams hire a McKinsey for the diagnosis
              and a separate dev shop to build &mdash; and we kept watching them not talk to each other.
            </p>
            <p style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.7 }}>
              Mettle was built to do both jobs, in the same room, by the same people. Three years and six
              live systems later, that&apos;s still the operating premise. We don&apos;t do strategy without code,
              and we don&apos;t write code without strategy.
            </p>
          </div>
        </div>
        {/* Timeline */}
        <div style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid var(--m-line)" }}>
          <span className="m-eyebrow">Timeline</span>
          <div style={{ marginTop: 32, position: "relative" }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: 16, height: 1, background: "var(--m-line)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
              {([
                ["Q1 '23", "compass",  "Founded · Singapore"],
                ["Q3 '23", "build",    "First system shipped"],
                ["Q1 '24", "team",     "Studio of four"],
                ["Q3 '24", "grid",     "Three industries"],
                ["Q2 '25", "orbit",    "Voice automation"],
                ["Q1 '26", "globe",    "Six live systems"],
              ] as [string, IconName, string][]).map(([d, ic, t], i) => (
                <div key={t} style={{ position: "relative", paddingTop: 36 }}>
                  <span style={{
                    position: "absolute", top: 12, left: 0,
                    width: 8, height: 8, borderRadius: 999,
                    background: i === 5 ? "var(--m-accent)" : "var(--m-ink)",
                    boxShadow: i === 5 ? "0 0 0 6px color-mix(in oklab, var(--m-accent), transparent 80%)" : "none",
                  }} />
                  <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.08em" }}>{d}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8, color: "var(--m-ink-3)" }}>
                    <Icon name={ic} size={16} />
                    <span style={{ fontSize: 14, color: "var(--m-ink)", fontWeight: 500 }}>{t}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
        <SectionHead
          kicker="The team · Four operators"
          title={<>People who&apos;ve <em style={{ fontStyle: "italic" }}>run</em> the kind of system we&rsquo;ll build for you.</>}
          action={<span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>plus 3 collaborators · 2 advisors</span>}
        />
        <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {TEAM.map((m) => (
            <article key={m.name} style={{ border: "1px solid var(--m-line)", padding: 18, background: "var(--m-bg-raised)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ aspectRatio: "4 / 5", background: "var(--m-bg-sunken)", position: "relative", overflow: "hidden", border: "1px solid var(--m-line)" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(135deg, transparent 0, transparent 6px, var(--m-line) 6px, var(--m-line) 7px)",
                  opacity: 0.5,
                }} />
                <div className="m-display" style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 96, color: "var(--m-ink-4)", letterSpacing: "-0.04em",
                }}>{m.initials}</div>
                <div style={{ position: "absolute", top: 10, left: 10, display: "flex", alignItems: "center", gap: 6, color: "var(--m-ink-3)" }}>
                  <Icon name={m.icon} size={14} />
                  <span className="m-mono" style={{ fontSize: 9, color: "var(--m-ink-4)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.role.split(" · ")[1]}</span>
                </div>
                <div className="m-mono" style={{ position: "absolute", bottom: 6, left: 8, fontSize: 9, color: "var(--m-ink-4)" }}>portrait · b&amp;w</div>
              </div>
              <div>
                <div className="m-display" style={{ fontSize: 22, letterSpacing: "-0.015em" }}>{m.name}</div>
                <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>{m.role}</div>
                <p style={{ fontSize: 13, color: "var(--m-ink-2)", marginTop: 10, lineHeight: 1.5 }}>{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--m-bg-sunken)", padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
        <SectionHead
          kicker="Values · The studio's working code"
          title={<>Four habits we&rsquo;d rather <em style={{ fontStyle: "italic" }}>not break.</em></>}
        />
        <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)" }}>
          {VALUES.map(([ic, t, d], i) => (
            <div key={t} style={{
              padding: "36px 32px",
              borderRight: "1px solid var(--m-line)",
              borderBottom: "1px solid var(--m-line)",
              background: "var(--m-bg-raised)",
              display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start",
            }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>0{i + 1}</span>
                <Icon name={ic} size={32} />
              </div>
              <div>
                <h3 className="m-display" style={{ fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{t}</h3>
                <p style={{ marginTop: 14, fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.65, maxWidth: 460 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section style={{ padding: "72px 0", borderTop: "1px solid var(--m-line)" }}>
        <SectionHead kicker="Operating partners · selected" title={<>People who&rsquo;ve <em style={{ fontStyle: "italic" }}>handed</em> us the keys.</>} />
        <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)" }}>
          {CLIENTS.map(([n, ic]) => (
            <div key={n} style={{
              padding: "28px 24px",
              borderRight: "1px solid var(--m-line)",
              borderBottom: "1px solid var(--m-line)",
              display: "flex", alignItems: "center", gap: 14,
              background: "var(--m-bg-raised)",
            }}>
              <span style={{ color: "var(--m-ink-3)" }}><Icon name={ic} size={22} /></span>
              <span className="m-display" style={{ fontSize: 22, letterSpacing: "-0.015em" }}>{n}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Careers */}
      <section style={{ padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
        <SectionHead
          kicker="Open roles · 2"
          title={<>We hire <em style={{ fontStyle: "italic" }}>slowly</em>, and rarely.</>}
          lead="If the way we work resonates, the door is open. No throwaway recruiter screens — every conversation is with a partner."
          action={<button className="m-btn m-btn-bare">All openings <Icon name="arrowRight" size={13} /></button>}
        />
        <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {ROLES.map((r) => (
            <article key={r.t} style={{ border: "1px solid var(--m-line)", padding: 28, background: "var(--m-bg-raised)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
              <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <span style={{ width: 48, height: 48, border: "1px solid var(--m-line)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--m-ink-3)" }}>
                  <Icon name={r.ic} size={22} />
                </span>
                <div>
                  <h3 className="m-display" style={{ fontSize: 24, letterSpacing: "-0.015em" }}>{r.t}</h3>
                  <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", marginTop: 6, letterSpacing: "0.06em" }}>
                    {r.loc.toUpperCase()} · {r.tag.toUpperCase()}
                  </div>
                </div>
              </div>
              <button className="m-btn m-btn-ghost">Read role <Icon name="arrowUpRight" size={14} /></button>
            </article>
          ))}
        </div>
      </section>

      <CTAStrip
        eyebrow="Studio"
        heading={<>Small team. <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>Quiet</em> portfolio. Long engagements.</>}
        body="We take 4–5 new operating partners a year. If that's the shape of conversation you want, let's start one."
      />
    </SiteFrame>
  );
}
