import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/SiteFrame";
import { CTAStrip } from "@/components/site/CTAStrip";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServicesStrip } from "@/components/home/HomeServicesStrip";
import { HomeFeaturedWork } from "@/components/home/HomeFeaturedWork";
import { HomeMethodSplit } from "@/components/home/HomeMethodSplit";
import { HomePrinciples } from "@/components/home/HomePrinciples";
import { HomeNumbers } from "@/components/home/HomeNumbers";
import { HomeTestimonials } from "@/components/home/HomeTestimonials";

export const metadata: Metadata = {
  title: { absolute: "Mettle · Operational design studio" },
  description:
    "Mettle designs and builds operating systems for complex businesses. Diagnose first, then deploy the smallest combination of design, software and automation.",
  openGraph: {
    title: "Mettle · Operational design studio",
    description: "Diagnose first. Build second. Operating systems that last.",
    url: "https://mettle.co",
  },
  twitter: { title: "Mettle · Operational design studio" },
  alternates: { canonical: "https://mettle.co" },
};

export default function HomePage() {
  return (
    <SiteFrame>
      <HomeHero />
      <HomeServicesStrip />
      <HomeFeaturedWork />
      <HomeMethodSplit />
      <HomePrinciples />
      <HomeNumbers />
      <HomeTestimonials />
      <CTAStrip
        eyebrow="Next step · 1 minute"
        heading={<>Tell us what&rsquo;s operationally <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>broken.</em></>}
        body="A 30-minute discovery call. We listen first, then tell you honestly whether we're the right fit."
      />
    </SiteFrame>
  );
}
