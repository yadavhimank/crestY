import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/SiteFrame";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Mettle's commitment to WCAG 2.2 AA accessibility and how to report issues.",
  alternates: { canonical: "https://mettle.co/accessibility" },
};

const COMMITMENTS = [
  {
    title: "Colour contrast",
    status: "pass" as const,
    detail: "All text meets WCAG 2.2 AA minimum contrast ratios (4.5:1 for body, 3:1 for large text). Accent colours are tested in both light and dark themes.",
  },
  {
    title: "Keyboard navigation",
    status: "pass" as const,
    detail: "All interactive elements are reachable and operable by keyboard alone. Focus indicators are visible and meet the enhanced 2px / 3:1 contrast requirement.",
  },
  {
    title: "Screen reader support",
    status: "pass" as const,
    detail: "Pages use semantic HTML landmarks (nav, main, footer). All icons have aria-label or are marked aria-hidden. Form fields have associated labels.",
  },
  {
    title: "Reduced motion",
    status: "pass" as const,
    detail: "Animations respect the prefers-reduced-motion media query. No content flashes more than 3 times per second.",
  },
  {
    title: "Text resizing",
    status: "pass" as const,
    detail: "All text can be resized up to 200% without loss of content or functionality.",
  },
  {
    title: "Images and icons",
    status: "partial" as const,
    detail: "Decorative images are hidden from assistive technology. Informational SVG icons carry text equivalents. We are auditing inline SVG diagrams on the How We Work page.",
  },
];

export default function AccessibilityPage() {
  return (
    <SiteFrame>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "84px 56px 120px" }}>
        <span className="m-eyebrow">Legal · Accessibility</span>
        <h1 className="m-display" style={{ fontSize: 64, letterSpacing: "-0.035em", lineHeight: 0.95, marginTop: 18 }}>
          Accessibility Statement
        </h1>
        <p style={{ marginTop: 20, fontSize: 15, color: "var(--m-ink-3)" }}>
          Last reviewed: <span className="m-mono">May 2026</span>
        </p>
        <p style={{ marginTop: 16, fontSize: 16, color: "var(--m-ink-2)", lineHeight: 1.7 }}>
          Mettle is committed to making mettle.co accessible to everyone, including people who use
          assistive technologies. We target conformance with{" "}
          <strong>WCAG 2.2 Level AA</strong> across all pages.
        </p>

        <section style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--m-line)" }}>
          <h2 className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 24 }}>
            Compliance status
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid var(--m-line)" }}>
            {COMMITMENTS.map((c, i) => (
              <div
                key={c.title}
                style={{
                  display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 20, alignItems: "start",
                  padding: "20px 24px",
                  borderBottom: i < COMMITMENTS.length - 1 ? "1px solid var(--m-line)" : "none",
                  background: "var(--m-bg-raised)",
                }}
              >
                <span style={{ color: c.status === "pass" ? "var(--m-signal-pos)" : "var(--m-signal-warn)", marginTop: 2 }}>
                  <Icon name={c.status === "pass" ? "check" : "clock"} size={18} />
                </span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "var(--m-ink)" }}>{c.title}</div>
                  <p style={{ fontSize: 13, color: "var(--m-ink-3)", lineHeight: 1.6, marginTop: 4 }}>{c.detail}</p>
                </div>
                <span
                  className="m-mono"
                  style={{
                    fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
                    color: c.status === "pass" ? "var(--m-signal-pos)" : "var(--m-signal-warn)",
                    paddingTop: 3,
                  }}
                >
                  {c.status === "pass" ? "AA ✓" : "Partial"}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--m-line)" }}>
          <h2 className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Known limitations
          </h2>
          <div style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.75 }}>
            <p>
              Inline SVG diagrams on the <a href="/how-we-work" style={{ color: "var(--m-accent)" }}>How We Work</a> page
              are not yet fully described for screen reader users. We are adding long descriptions
              and ARIA roles in the next iteration.
            </p>
          </div>
        </section>

        <section style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--m-line)" }}>
          <h2 className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Report an issue
          </h2>
          <div style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: 12 }}>
            <p>
              If you experience any accessibility barrier on this site, please tell us. We aim to
              respond within 5 business days and resolve issues within 30 days where technically feasible.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:accessibility@mettle.co" style={{ color: "var(--m-accent)" }}>
                accessibility@mettle.co
              </a>
            </p>
            <p>
              If you are not satisfied with our response, you may contact the{" "}
              <a href="https://www.pdpc.gov.sg" style={{ color: "var(--m-accent)" }} target="_blank" rel="noopener noreferrer">
                Personal Data Protection Commission (Singapore)
              </a>{" "}
              or the relevant supervisory authority in your jurisdiction.
            </p>
          </div>
        </section>

        <section style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--m-line)" }}>
          <h2 className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Technical approach
          </h2>
          <div style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: 12 }}>
            <p>
              This site is built with Next.js and outputs semantic HTML5. We use the WAI-ARIA
              specification where native HTML semantics are insufficient. Pages are tested with
              VoiceOver (macOS/iOS), NVDA (Windows), and automated tooling (axe-core).
            </p>
            <p>
              This statement was last reviewed in May 2026. We conduct accessibility reviews with
              every significant release.
            </p>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
