import type { Metadata } from "next";
import { SiteFrame } from "@/components/site/SiteFrame";
import { CTAStrip } from "@/components/site/CTAStrip";
import { WorkHeader } from "@/components/work/WorkHeader";
import { WorkFilter } from "@/components/work/WorkFilter";
import { WorkIndex } from "@/components/work/WorkIndex";
import { WorkSelected } from "@/components/work/WorkSelected";
import { WorkSectors } from "@/components/work/WorkSectors";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Six live operating systems shipped across renewable energy, e-commerce, pharma, B2B SaaS, healthcare and legal. Built to last, owned by the teams that run them.",
  openGraph: {
    title: "Work · Mettle",
    description: "Six live systems. Four industries. Systems we've shipped, not slides we've drawn.",
    url: "https://mettle.co/work",
  },
  twitter: { title: "Work · Mettle" },
  alternates: { canonical: "https://mettle.co/work" },
};

// When /work/[slug] is built, add per-case Article schema:
// {
//   "@context": "https://schema.org",
//   "@type": "Article",
//   "headline": caseTitle,
//   "description": caseSummary,
//   "publisher": { "@type": "Organization", "name": "Mettle", "url": "https://mettle.co" },
//   "url": `https://mettle.co/work/${slug}`,
// }

export default function WorkPage() {
  return (
    <SiteFrame>
      <WorkHeader />
      <WorkFilter />
      <WorkIndex />
      <WorkSelected />
      <WorkSectors />
      <CTAStrip
        eyebrow="Selected work · 06"
        heading={<>Your business is the next <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>case study.</em></>}
        body="We take 4–5 new operating partners a year. The next slot opens August."
      />
    </SiteFrame>
  );
}
