import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/SiteFrame";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the Mettle website and engagement of our services.",
  alternates: { canonical: "https://mettle.co/terms" },
  robots: { index: false, follow: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--m-line)" }}>
      <h2 className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 16 }}>{title}</h2>
      <div style={{ fontSize: 15, color: "var(--m-ink-2)", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <SiteFrame>
      <div className="px-5 py-12 md:px-8 md:py-16 lg:px-14 lg:pt-21 lg:pb-28" style={{ maxWidth: 760, margin: "0 auto" }}>
        <span className="m-eyebrow">Legal · Terms</span>
        <h1 className="m-display text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px]" style={{ letterSpacing: "-0.035em", lineHeight: 0.95, marginTop: 18 }}>
          Terms of Service
        </h1>
        <p style={{ marginTop: 20, fontSize: 15, color: "var(--m-ink-3)" }}>
          Last updated: <span className="m-mono">May 2026</span>
        </p>
        <p style={{ marginTop: 16, fontSize: 16, color: "var(--m-ink-2)", lineHeight: 1.7 }}>
          These terms govern your use of the Mettle website (mettle.co) and any engagement of Mettle
          Studio Pte. Ltd.&rsquo;s services. By using this site you accept these terms.
        </p>

        <Section title="Website use">
          <p>
            The content on this site is provided for information only. Nothing on this site constitutes
            professional advice. Mettle reserves the right to modify or withdraw content at any time
            without notice.
          </p>
          <p>
            You may not reproduce, redistribute, or republish any content from this site without our
            written permission.
          </p>
        </Section>

        <Section title="Intellectual property">
          <p>
            All content, design, graphics and code on this site are the property of Mettle Studio Pte. Ltd.
            or its licensors, protected by copyright and other intellectual property laws.
          </p>
          <p>
            Work product delivered to clients under a signed Statement of Work is governed by the IP
            terms in that agreement. In the absence of a specific agreement, Mettle retains all IP in
            tools, frameworks and methodologies; clients receive a perpetual licence to the deliverables.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the maximum extent permitted by law, Mettle is not liable for any indirect, incidental,
            special or consequential loss arising from use of this site or our services. Our total
            liability to any client shall not exceed the fees paid by that client in the 3 months
            preceding the claim.
          </p>
        </Section>

        <Section title="Engagements">
          <p>
            Each client engagement is governed by a separately executed Statement of Work and, where
            applicable, a Master Services Agreement. In the event of conflict, those documents take
            precedence over these terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>
            These terms are governed by the laws of Singapore. Any dispute shall be subject to the
            exclusive jurisdiction of the Singapore courts, unless both parties agree to alternative
            dispute resolution.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            We may update these terms at any time. Continued use of this site after an update constitutes
            acceptance of the revised terms.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about these terms:{" "}
            <a href="mailto:legal@mettle.co" style={{ color: "var(--m-accent)" }}>legal@mettle.co</a>
          </p>
        </Section>
      </div>
    </SiteFrame>
  );
}
