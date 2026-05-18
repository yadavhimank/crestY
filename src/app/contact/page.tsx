import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/SiteFrame";
import { SectionHead } from "@/components/site/SectionHead";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send us the messy version. Most engagements start with a two-week fixed-fee diagnostic. We diagnose first, propose second — and tell you honestly if we're the right fit.",
  openGraph: {
    title: "Contact · Mettle",
    description: "Tell us what's operationally broken. Reply within one business day.",
    url: "https://mettle.co/contact",
  },
  twitter: { title: "Contact · Mettle" },
  alternates: { canonical: "https://mettle.co/contact" },
};

const META: [IconName, string, string][] = [
  ["mail",  "team@mettle.co",                                  "Direct line · partners only"],
  ["clock", "Reply within 1 business day · Singapore time",    "Mon–Fri · 09:00–18:00 SGT"],
  ["globe", "Working remotely with teams in SG · IN · UK · CA", "Async-friendly · 7 timezones"],
];

const REASSURANCE: [IconName, string, string][] = [
  ["spark",  "No automated pitch",  "A human partner reads every note and replies personally."],
  ["shield", "No data resale",      "Your note stays inside our team. We don't run an ad business."],
  ["clock",  "No long sales cycle", "30 minutes to listen. Yes-or-no within the week."],
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <section style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", borderBottom: "1px solid var(--m-line-strong)" }}>
        {/* Left — editorial */}
        <div style={{ padding: "84px 56px 64px", borderRight: "1px solid var(--m-line)", position: "relative", overflow: "hidden" }}>
          <HeroBackdrop />
          <div style={{ position: "relative" }}>
            <span className="m-eyebrow">Contact · Start a conversation</span>
            <h1 className="m-display" style={{ fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.92, marginTop: 22 }}>
              Tell us what&apos;s<br />
              <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>operationally</em><br />
              broken.
            </h1>
            <p style={{ marginTop: 24, fontSize: 17, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 480 }}>
              We don&apos;t start with proposals or pitches. We start with understanding
              your situation — then figure out together if and how we can help.
            </p>
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
              {META.map(([ic, t, sub]) => (
                <div key={t} style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div style={{
                    width: 44, height: 44, border: "1px solid var(--m-line)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--m-ink-3)", background: "var(--m-bg-raised)",
                  }}>
                    <Icon name={ic} size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 16, color: "var(--m-ink)" }}>{t}</div>
                    <div className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--m-line)" }}>
              <span className="m-eyebrow">What happens next</span>
              <ol style={{ marginTop: 16, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {([
                  ["01", "We read your note and reply with a short discovery call."],
                  ["02", "30 minutes to listen. We tell you honestly if we're the right fit."],
                  ["03", "If yes — a written diagnostic and scope, fixed-fee."],
                ] as [string, string][]).map(([n, s]) => (
                  <li key={n} style={{ display: "flex", gap: 16, fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.5 }}>
                    <span className="m-mono" style={{ color: "var(--m-ink-4)", minWidth: 28 }}>{n}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div style={{ padding: "84px 56px 64px", background: "var(--m-bg-raised)" }}>
          <ContactForm />
        </div>
      </section>

      {/* Reassurance */}
      <section style={{ padding: "96px 0", borderTop: "1px solid var(--m-line)" }}>
        <SectionHead
          kicker="Reassurance · For first conversations"
          title={<>What we <em style={{ fontStyle: "italic" }}>won&rsquo;t</em> do with your note.</>}
          lead="Sending a contact form to a consultancy can feel like signing up for a mailing list. Here's the floor we hold ourselves to."
        />
        <div style={{ margin: "0 56px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {REASSURANCE.map(([ic, t, d]) => (
            <article key={t} style={{ border: "1px solid var(--m-line)", padding: 28, background: "var(--m-bg-raised)", display: "flex", flexDirection: "column", gap: 14, minHeight: 180 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Icon name={ic} size={26} />
                <span style={{ color: "var(--m-accent)" }}><Icon name="check" size={18} /></span>
              </div>
              <h3 className="m-display" style={{ fontSize: 26, letterSpacing: "-0.02em" }}>{t}</h3>
              <p style={{ fontSize: 14, color: "var(--m-ink-2)", lineHeight: 1.55 }}>{d}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
