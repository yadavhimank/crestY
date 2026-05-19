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
  { name: "Himank Yadav",  role: "Co-founder · CEO",      initials: "HY", bio: "Deep experience in distributed systems, AI, and operational design. Founded Mettle to bridge the gap between strategy and working systems.", icon: "compass" as IconName },
  { name: "Devansh Mehta", role: "Partner · Engineering", initials: "DM", bio: "Built CRMs and ops platforms for B2B teams since 2014.",                                                                                      icon: "brackets" as IconName },
  { name: "Lin Suo",       role: "Lead · Automation",     initials: "LS", bio: "Voice & language agents in pharma and customer support.",                                                                                      icon: "orbit" as IconName },
  { name: "Naomi Tahir",   role: "Lead · Operations",     initials: "NT", bio: "Embeds with client teams. Owns handover and on-call.",                                                                                         icon: "deploy" as IconName },
];

const VALUES: [IconName, string, string][] = [
  ["spark",   "Process first, AI second",    "Adding AI to a broken process just makes mistakes happen faster. Mettle audits business workflows to fix the logic before applying any technology."],
  ["network", "Systems over decks",          "No strategy PDFs. Instead: production-grade code, custom CRMs, and automation pipelines that live in the business and drive real output."],
  ["beam",    "Execution is the strategy",   "Most consulting fails because of the gap between advice and action. Mettle bridges that gap by owning the implementation from architecture to iteration."],
  ["team",    "Technology as leverage",      "Tools are chosen because they provide the best leverage for your business constraints — not because they're trending."],
];

const CLIENTS: [string, IconName][] = [
  ["K2 CRM",      "compass"],
  ["Barnshenn",   "grid"],
  ["Mirexa",      "shield"],
  ["The Medcare", "cpu"],
  ["MyCleanOne",  "database"],
  ["Bichance",    "spark"],
];

const ROLES = [
  { t: "Senior Engineer · Full-stack",  loc: "Remote · UK / SG · IN", tag: "Engineering", ic: "brackets" as IconName },
  { t: "Operations Designer",           loc: "Singapore · Hybrid",    tag: "Systems",     ic: "compass" as IconName },
];

export default function AboutPage() {
  return (
    <SiteFrame>
      {/* Hero */}
      <section className="px-5 py-12 md:px-8 md:py-16 lg:px-14 lg:py-20 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-start" style={{ position: "relative" }}>
        <HeroBackdrop />
        <div style={{ position: "relative" }}>
          <span className="m-eyebrow">About · The studio</span>
          <h1 className="m-display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[108px] xl:text-[124px]" style={{ letterSpacing: "-0.045em", lineHeight: 0.9, marginTop: 22 }}>
            A small studio<br />
            of operators,<br />
            engineers, and<br />
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>strategists.</em>
          </h1>
        </div>
        <div style={{ position: "relative", paddingTop: 80, display: "flex", flexDirection: "column", gap: 22 }}>
          <p className="text-[15px] lg:text-[20px]" style={{ color: "var(--m-ink)", lineHeight: 1.55, maxWidth: 460 }}>
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
      <section className="px-5 py-8 md:px-8 lg:px-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6" style={{ borderTop: "1px solid var(--m-line-strong)", borderBottom: "1px solid var(--m-line)", background: "var(--m-bg-raised)" }}>
        {([
          ["2023", "Founded · Singapore",    "clock"],
          ["4",    "Industries shipped",     "grid"],
          ["6",    "Live operating systems", "database"],
          ["3",    "Continents · 7 TZs",     "globe"],
          ["4+3",  "Operators + advisors",   "team"],
        ] as [string, string, IconName][]).map(([n, l, ic]) => (
          <div key={l} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ color: "var(--m-ink-4)" }}><Icon name={ic} size={18} /></div>
            <div className="m-display text-[32px] md:text-[44px] lg:text-[52px]" style={{ letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
            <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </section>

      {/* Origin */}
      <section className="px-5 py-16 md:px-8 md:py-20 lg:px-14 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-20">
          <div>
            <span className="m-eyebrow">Origin · 2023 → today</span>
            <h2 className="m-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px]" style={{ letterSpacing: "-0.03em", lineHeight: 0.95, marginTop: 18 }}>
              We started where most consultancies <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>stop.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
      <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
        <SectionHead
          kicker="The team · Four operators"
          title={<>People who&apos;ve <em style={{ fontStyle: "italic" }}>run</em> the kind of system we&rsquo;ll build for you.</>}
          action={<span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)" }}>plus 3 collaborators · 2 advisors</span>}
        />
        <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((m) => (
            <article key={m.name} style={{ border: "1px solid var(--m-line)", padding: 18, background: "var(--m-bg-raised)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ aspectRatio: "4 / 5", background: "var(--m-bg-sunken)", position: "relative", overflow: "hidden", border: "1px solid var(--m-line)" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "repeating-linear-gradient(135deg, transparent 0, transparent 6px, var(--m-line) 6px, var(--m-line) 7px)",
                  opacity: 0.5,
                }} />
                <div className="m-display text-[48px] lg:text-[96px]" style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--m-ink-4)", letterSpacing: "-0.04em",
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
                <p style={{ fontSize: 14, color: "var(--m-ink-2)", marginTop: 10, lineHeight: 1.5 }}>{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 lg:py-24" style={{ background: "var(--m-bg-sunken)", borderTop: "1px solid var(--m-line)" }}>
        <SectionHead
          kicker="Values · The studio's working code"
          title={<>Four habits we&rsquo;d rather <em style={{ fontStyle: "italic" }}>not break.</em></>}
        />
        <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 md:grid-cols-2" style={{ borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)" }}>
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
                <h3 className="m-display text-xl md:text-2xl lg:text-3xl" style={{ letterSpacing: "-0.02em", lineHeight: 1.05 }}>{t}</h3>
                <p style={{ marginTop: 14, fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.65, maxWidth: 460 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
        <SectionHead kicker="Operating partners · selected" title={<>People who&rsquo;ve <em style={{ fontStyle: "italic" }}>handed</em> us the keys.</>} />
        <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid var(--m-line)", borderLeft: "1px solid var(--m-line)" }}>
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
      <section className="py-16 md:py-20 lg:py-24" style={{ borderTop: "1px solid var(--m-line)" }}>
        <SectionHead
          kicker="Open roles · 2"
          title={<>We hire <em style={{ fontStyle: "italic" }}>slowly</em>, and rarely.</>}
          lead="If the way we work resonates, the door is open. No throwaway recruiter screens — every conversation is with a partner."
          action={<button className="m-btn m-btn-bare">All openings <Icon name="arrowRight" size={13} /></button>}
        />
        <div className="mx-5 md:mx-8 lg:mx-14 grid grid-cols-1 md:grid-cols-2 gap-4">
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
