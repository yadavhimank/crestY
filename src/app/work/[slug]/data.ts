export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  headline: string;
  subheadline: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  stats: { value: string; label: string }[];
  stack: string[];
  duration: string;
  year: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: "k2-renewals",
    client: "K2 Renewals",
    sector: "Renewable Energy",
    headline: "A CRM built for the way energy brokers actually work.",
    subheadline: "Replacing three spreadsheets and a WhatsApp group with a single operating system.",
    description: "K2 Renewals manages commercial renewable energy contracts for UK businesses. Their pipeline was split across three spreadsheets, an email inbox, and a WhatsApp group — with no audit trail and no clear owner at each stage.",
    problem: "Deals were falling through the cracks at handoff between origination and operations. No one could answer 'where is this contract right now?' without asking three people.",
    approach: "We mapped the full contract lifecycle in a two-week diagnostic, stripping it from 22 steps to 9. Then built a TypeScript / Postgres CRM with role-based views for originators, ops leads, and directors — shipping in four modules over 11 weeks.",
    outcome: "K2's team owns and maintains the system. They've onboarded two new originators since launch with no increase in ops overhead.",
    stats: [
      { value: "22→9", label: "Pipeline steps" },
      { value: "11 wk", label: "Build time" },
      { value: "0", label: "External SaaS dependencies" },
      { value: "2×", label: "Originator capacity" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Inngest", "Resend"],
    duration: "2 + 11 weeks",
    year: "2023",
  },
  {
    slug: "barnshenn",
    client: "Barnshenn",
    sector: "E-commerce",
    headline: "Order operations that scale without adding headcount.",
    subheadline: "From manual fulfilment coordination to a fully automated dispatch system.",
    description: "Barnshenn is a UK-based independent e-commerce brand selling premium homewares. As order volume grew, their fulfilment process — heavily manual, coordinator-dependent — became the ceiling on growth.",
    problem: "Every order required a coordinator to touch it at least three times. Peak-season volumes caused two-day dispatch delays and a spike in support tickets.",
    approach: "We diagnosed the fulfilment flow and redesigned it around automated routing rules. Built an operator dashboard that surfaces only exceptions — coordinators now intervene on roughly 4% of orders instead of 100%.",
    outcome: "Peak-season dispatch time dropped from 48 hours to same-day. The coordination team of three now handles 3× the volume.",
    stats: [
      { value: "48h→sd", label: "Dispatch time" },
      { value: "96%", label: "Orders auto-routed" },
      { value: "3×", label: "Volume, same team" },
      { value: "62%", label: "Support ticket reduction" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Inngest", "Shopify API"],
    duration: "2 + 9 weeks",
    year: "2024",
  },
  {
    slug: "solivia-pharma",
    client: "Solivia Pharma",
    sector: "Pharmaceuticals",
    headline: "Regulatory submission tracking that the whole team can read.",
    subheadline: "Replacing a 400-row Excel tracker with a purpose-built compliance system.",
    description: "Solivia Pharma manages regulatory submissions across four markets. Their tracking process lived in a shared Excel workbook — version-controlled by date-stamped filenames, with no audit trail and no alerting.",
    problem: "Submission deadlines were being missed because the tracker wasn't reliable. Regulatory affairs managers spent hours each week reconciling versions and chasing status updates.",
    approach: "We replaced the workbook with a structured submission database, deadline engine, and per-market operator views. Every status change is logged with user, timestamp, and rationale.",
    outcome: "Zero missed submission deadlines in the 12 months since launch. The regulatory team spends two fewer hours per person per week on status reconciliation.",
    stats: [
      { value: "0", label: "Missed deadlines (12 mo)" },
      { value: "2 hr/pw", label: "Time saved per person" },
      { value: "100%", label: "Audit trail coverage" },
      { value: "4", label: "Markets on one system" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Resend", "Linear"],
    duration: "2 + 14 weeks",
    year: "2024",
  },
  {
    slug: "northbound-saas",
    client: "Northbound SaaS",
    sector: "B2B SaaS",
    headline: "A licence management system the sales team actually uses.",
    subheadline: "Replacing manual licence provisioning with a self-serve operator tool.",
    description: "Northbound SaaS sells enterprise software licences to mid-market businesses. Licence provisioning was a manual process — sales reps sent requests to ops, ops updated a spreadsheet, then manually emailed credentials to customers.",
    problem: "Average time from closed deal to live customer was 4 days. Ops was spending 40% of their time on licence administration that should have been automated.",
    approach: "We built a licence management system with self-serve provisioning for sales reps, automated credential delivery, and an ops dashboard for exceptions and renewals. Integrated with their existing Stripe billing.",
    outcome: "Average provisioning time dropped from 4 days to 22 minutes. Ops licence admin time dropped to near zero.",
    stats: [
      { value: "4d→22m", label: "Provisioning time" },
      { value: "~0%", label: "Ops licence admin time" },
      { value: "100%", label: "Audit trail" },
      { value: "Stripe", label: "Billing integrated" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Stripe", "Resend"],
    duration: "2 + 10 weeks",
    year: "2024",
  },
  {
    slug: "halcyon-care",
    client: "Halcyon Care",
    sector: "Healthcare",
    headline: "Care coordination that keeps clinicians in the room.",
    subheadline: "Removing administrative overhead from a specialist referral pathway.",
    description: "Halcyon Care operates a network of specialist clinics in Singapore. Their referral pathway — from GP referral to specialist appointment to care plan — involved nine separate handoffs across email, phone, and a legacy system.",
    problem: "Coordinators spent more time chasing paperwork than coordinating care. Referral-to-appointment time averaged 11 days, with significant variation depending on which coordinator handled the case.",
    approach: "We mapped the referral pathway and rebuilt it around a structured handoff protocol. Built a coordinator dashboard that surfaces the next action on each case, with automated reminders and a patient-facing status page.",
    outcome: "Referral-to-appointment time dropped to 4 days average. Coordinator caseload capacity increased by 60% without additional headcount.",
    stats: [
      { value: "11→4d", label: "Referral-to-appointment" },
      { value: "60%", label: "Coordinator capacity increase" },
      { value: "9→3", label: "Handoff points" },
      { value: "100%", label: "Cases with audit trail" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Inngest", "Resend"],
    duration: "2 + 12 weeks",
    year: "2025",
  },
  {
    slug: "mercer-and-pine",
    client: "Mercer & Pine",
    sector: "Legal",
    headline: "Matter management for a boutique firm that moved faster than its software.",
    subheadline: "From a patchwork of tools to one matter dashboard the whole team trusts.",
    description: "Mercer & Pine is a boutique commercial law firm in Singapore. As the team grew from 4 to 12 lawyers, their matter management — split across a legacy system, Outlook folders, and a shared Notion — became unworkable.",
    problem: "Lawyers were maintaining their own shadow systems because the official tools didn't reflect how work actually moved. Partners couldn't get a reliable view of firm-wide matter status.",
    approach: "We ran a two-week diagnostic with all 12 lawyers and both partners. Designed a matter management system around the firm's actual workflow stages, with per-practice-area views and a partner dashboard for capacity and risk.",
    outcome: "The firm decommissioned three tools within 30 days of launch. Partner capacity review time dropped from half a day to 20 minutes per week.",
    stats: [
      { value: "3", label: "Tools decommissioned" },
      { value: "20 min", label: "Weekly partner review" },
      { value: "12", label: "Lawyers on one system" },
      { value: "100%", label: "Matter audit trail" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Linear", "Resend"],
    duration: "2 + 13 weeks",
    year: "2025",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
