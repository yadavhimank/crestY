import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/SiteFrame";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Mettle collects, uses and protects the information you share with us.",
  alternates: { canonical: "https://mettle.co/privacy" },
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

export default function PrivacyPage() {
  return (
    <SiteFrame>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "84px 56px 120px" }}>
        <span className="m-eyebrow">Legal · Privacy</span>
        <h1 className="m-display" style={{ fontSize: 64, letterSpacing: "-0.035em", lineHeight: 0.95, marginTop: 18 }}>
          Privacy Policy
        </h1>
        <p style={{ marginTop: 20, fontSize: 15, color: "var(--m-ink-3)" }}>
          Last updated: <span className="m-mono">May 2026</span>
        </p>
        <p style={{ marginTop: 16, fontSize: 16, color: "var(--m-ink-2)", lineHeight: 1.7 }}>
          Mettle Studio Pte. Ltd. (&ldquo;Mettle&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is the data controller
          for the personal information described in this policy. We are incorporated in Singapore (UEN: [PENDING]).
        </p>

        <Section title="What we collect">
          <p>
            <strong>Contact enquiries.</strong> When you submit our contact form we collect your name, email address,
            company name, and the content of your message.
          </p>
          <p>
            <strong>Analytics.</strong> We do not use cookies or third-party tracking scripts. Server logs
            may capture anonymised request metadata (IP address, user agent, referrer) for security and
            performance purposes only. These logs are not used for advertising and are purged within 30 days.
          </p>
          <p>
            <strong>Engagement data.</strong> If you become a client, we process business contact details,
            project documentation, and communication records as necessary to deliver our services. A separate
            Data Processing Agreement (DPA) governs this processing.
          </p>
        </Section>

        <Section title="How we use it">
          <p>We use the information you provide solely to respond to your enquiry and assess whether we are
          a good fit. We do not sell, rent, or share your personal data with third parties for marketing
          purposes.</p>
          <p><strong>Processors we use:</strong> Resend (email delivery, US); Vercel (hosting, EU/US);
          Linear (project management, US). Each is bound by a Data Processing Agreement and provides
          adequate safeguards under PDPA / GDPR.</p>
        </Section>

        <Section title="Legal basis (GDPR / UK GDPR)">
          <p>Where EU or UK data protection law applies, we process your personal data on the basis of
          legitimate interests (responding to business enquiries) and, where required, consent.
          You may withdraw consent at any time.</p>
        </Section>

        <Section title="Your rights">
          <p>You have the right to access, correct, or delete your personal data; to restrict or object
          to processing; and to data portability. To exercise any right, email us at{" "}
          <a href="mailto:privacy@mettle.co" style={{ color: "var(--m-accent)" }}>privacy@mettle.co</a>.
          We will respond within 30 days.</p>
        </Section>

        <Section title="Retention">
          <p>Contact enquiries are retained for 24 months. If no engagement follows, all associated personal
          data is deleted. Client project data is retained for the duration of the engagement plus 3 years,
          unless a longer period is required by law.</p>
        </Section>

        <Section title="Security">
          <p>We apply industry-standard technical and organisational measures to protect your data. All data
          in transit is encrypted with TLS. Access to personal data is restricted to team members who need
          it to respond to your enquiry.</p>
        </Section>

        <Section title="Changes">
          <p>We may update this policy from time to time. Material changes will be communicated by posting
          the revised policy with an updated date. Continued use of our site after a change constitutes
          acceptance.</p>
        </Section>

        <Section title="Contact">
          <p>
            Mettle Studio Pte. Ltd.<br />
            [Address, Singapore — PENDING]<br />
            <a href="mailto:privacy@mettle.co" style={{ color: "var(--m-accent)" }}>privacy@mettle.co</a>
          </p>
        </Section>
      </div>
    </SiteFrame>
  );
}
