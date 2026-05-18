import type { MetadataRoute } from "next";
import { CASES } from "./work/[slug]/data";

const BASE = "https://mettle.co";

const STATIC_ROUTES = [
  { url: BASE,                     priority: 1.0, changeFrequency: "monthly" as const },
  { url: `${BASE}/services`,       priority: 0.9, changeFrequency: "monthly" as const },
  { url: `${BASE}/work`,           priority: 0.9, changeFrequency: "weekly"  as const },
  { url: `${BASE}/how-we-work`,    priority: 0.8, changeFrequency: "monthly" as const },
  { url: `${BASE}/about`,          priority: 0.7, changeFrequency: "monthly" as const },
  { url: `${BASE}/contact`,        priority: 0.8, changeFrequency: "yearly"  as const },
  { url: `${BASE}/privacy`,        priority: 0.3, changeFrequency: "yearly"  as const },
  { url: `${BASE}/terms`,          priority: 0.3, changeFrequency: "yearly"  as const },
  { url: `${BASE}/accessibility`,  priority: 0.4, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const workEntries: MetadataRoute.Sitemap = CASES.map((cs) => ({
    url: `${BASE}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...STATIC_ROUTES.map((r) => ({ ...r, lastModified: new Date() })),
    ...workEntries,
  ];
}
