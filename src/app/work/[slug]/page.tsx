import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFrame } from "@/components/site/SiteFrame";
import { CTAStrip } from "@/components/site/CTAStrip";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { CASES, getCaseBySlug } from "./data";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseBySlug(params.slug);
  if (!cs) return {};
  return {
    title: cs.client,
    description: cs.description.slice(0, 158),
    openGraph: {
      title: `${cs.client} · Mettle`,
      description: cs.headline,
      url: `https://mettle.co/work/${cs.slug}`,
    },
    twitter: { title: `${cs.client} · Mettle` },
    alternates: { canonical: `https://mettle.co/work/${cs.slug}` },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseBySlug(params.slug);
  if (!cs) notFound();

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.headline,
    description: cs.description,
    publisher: { "@type": "Organization", name: "Mettle", url: "https://mettle.co" },
    url: `https://mettle.co/work/${cs.slug}`,
  };

  const idx = CASES.findIndex((c) => c.slug === cs.slug);
  const prev = CASES[idx - 1];
  const next = CASES[idx + 1];

  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }}
      />

      {/* Header */}
      <section style={{ padding: "84px 56px 64px", position: "relative" }}>
        <HeroBackdrop />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <Link
              href="/work"
              style={{ fontSize: 13, color: "var(--m-ink-4)", textDecoration: "none" }}
            >
              ← Work
            </Link>
            <span style={{ width: 1, height: 14, background: "var(--m-line-2)" }} />
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {cs.sector}
            </span>
          </div>
          <h1 className="m-display" style={{ fontSize: 80, letterSpacing: "-0.04em", lineHeight: 0.92, maxWidth: 960 }}>
            {cs.headline}
          </h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--m-ink-2)", lineHeight: 1.5, maxWidth: 640 }}>
            {cs.subheadline}
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 32 }}>
            <div>
              <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Client</span>
              <div style={{ marginTop: 4, fontSize: 15, fontWeight: 500 }}>{cs.client}</div>
            </div>
            <div>
              <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Duration</span>
              <div style={{ marginTop: 4, fontSize: 15, fontWeight: 500 }}>{cs.duration}</div>
            </div>
            <div>
              <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Year</span>
              <div style={{ marginTop: 4, fontSize: 15, fontWeight: 500 }}>{cs.year}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--m-line-strong)", borderBottom: "1px solid var(--m-line)", background: "var(--m-bg-raised)" }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cs.stats.length}, 1fr)` }}>
          {cs.stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "32px 40px",
                borderRight: i < cs.stats.length - 1 ? "1px solid var(--m-line)" : "none",
              }}
            >
              <div className="m-display" style={{ fontSize: 56, letterSpacing: "-0.04em", lineHeight: 1, color: "var(--m-accent)" }}>
                {s.value}
              </div>
              <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", marginTop: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "80px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <div>
            <span className="m-eyebrow">The problem</span>
            <p style={{ marginTop: 16, fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.7 }}>{cs.problem}</p>
          </div>
          <div>
            <span className="m-eyebrow">Our approach</span>
            <p style={{ marginTop: 16, fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.7 }}>{cs.approach}</p>
          </div>
          <div>
            <span className="m-eyebrow">The outcome</span>
            <p style={{ marginTop: 16, fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.7 }}>{cs.outcome}</p>
          </div>
        </div>
        <div style={{ paddingTop: 8 }}>
          <div style={{ border: "1px solid var(--m-line)", padding: "32px", background: "var(--m-bg-raised)", position: "sticky", top: 32 }}>
            <span className="m-eyebrow">Stack</span>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cs.stack.map((t) => (
                <span
                  key={t}
                  className="m-mono"
                  style={{
                    fontSize: 12, padding: "6px 12px",
                    border: "1px solid var(--m-line)", color: "var(--m-ink-2)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--m-line)" }}>
              <span className="m-eyebrow">Want this for your business?</span>
              <p style={{ marginTop: 12, fontSize: 14, color: "var(--m-ink-3)", lineHeight: 1.6 }}>
                We take 4–5 new operating partners a year. Start with a conversation.
              </p>
              <Link href="/contact" className="m-btn m-btn-primary" style={{ marginTop: 16 }}>
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section style={{ borderTop: "1px solid var(--m-line)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            style={{ padding: "40px 56px", borderRight: "1px solid var(--m-line)", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 8 }}
          >
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>← PREV</span>
            <span className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>{prev.client}</span>
            <span style={{ fontSize: 13, color: "var(--m-ink-3)" }}>{prev.sector}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            style={{ padding: "40px 56px", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end", textAlign: "right" }}
          >
            <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.1em" }}>NEXT →</span>
            <span className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em" }}>{next.client}</span>
            <span style={{ fontSize: 13, color: "var(--m-ink-3)" }}>{next.sector}</span>
          </Link>
        ) : <div />}
      </section>

      <CTAStrip
        eyebrow="Selected work · 06"
        heading={<>Your business is the next <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>case study.</em></>}
        body="We take 4–5 new operating partners a year. The next slot opens August."
      />
    </SiteFrame>
  );
}
