import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/SiteFrame";
import { CTAStrip } from "@/components/site/CTAStrip";
import { ServicesHeader } from "@/components/services/ServicesHeader";
import { ServicesEditorialRows } from "@/components/services/ServicesEditorialRows";
import { ServicesStack } from "@/components/services/ServicesStack";
import { ServicesEngagement } from "@/components/services/ServicesEngagement";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three disciplines — system design, custom software and automation — deployed in sequence or together to fix your operating problems at their root, not their symptoms.",
  openGraph: {
    title: "Services · Mettle",
    description: "System Design & Setup, Custom Software & Tools, Automation & AI. Start with the diagnostic.",
    url: "https://mettle.co/services",
  },
  twitter: { title: "Services · Mettle" },
  alternates: { canonical: "https://mettle.co/services" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Operational Systems Design",
  description:
    "System design, custom software and intelligent automation for complex business operations.",
  provider: {
    "@type": "Organization",
    name: "Mettle",
    url: "https://mettle.co",
  },
  serviceType: ["System Design & Setup", "Custom Software & Tools", "Automation & AI"],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Engagement tiers",
    itemListElement: [
      { "@type": "Offer", name: "Diagnostic", description: "Fixed-fee operating diagnostic, 2 weeks." },
      { "@type": "Offer", name: "Design & Build", description: "Retainer, 8–14 weeks." },
      { "@type": "Offer", name: "Operate & Automate", description: "Quarterly, ongoing." },
    ],
  },
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesHeader />
      <ServicesEditorialRows />
      <ServicesStack />
      <ServicesEngagement />
      <ServicesFAQ />
      <CTAStrip
        eyebrow="Engagement"
        heading={<>Not sure which discipline you need? <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>We&rsquo;ll tell you.</em></>}
        body="Send a short note. We diagnose first, propose second. Most engagements start with a fixed-fee written diagnostic."
      />
    </SiteFrame>
  );
}
