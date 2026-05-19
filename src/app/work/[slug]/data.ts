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
    slug: "k2-crm",
    client: "K2 CRM",
    sector: "Renewable Energy",
    headline: "A CRM built for the way energy brokers actually work.",
    subheadline: "Replacing three spreadsheets and a WhatsApp group with a single operating system.",
    description: "K2 CRM manages commercial renewable energy contracts for UK businesses. Their pipeline was split across three spreadsheets, an email inbox, and a WhatsApp group — with no audit trail and no clear owner at each stage.",
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
    year: "2024",
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
    slug: "mirexa",
    client: "Mirexa",
    sector: "Pharmaceuticals",
    headline: "Regulatory submission tracking that the whole team can read.",
    subheadline: "Replacing a 400-row Excel tracker with a purpose-built compliance system.",
    description: "Mirexa manages regulatory submissions across four markets. Their tracking process lived in a shared Excel workbook — version-controlled by date-stamped filenames, with no audit trail and no alerting.",
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
    year: "2025",
  },
  {
    slug: "the-medcare",
    client: "The Medcare",
    sector: "Pharmacy",
    headline: "Pharmacy operations rebuilt around how prescriptions actually move.",
    subheadline: "Replacing manual coordination with a single workflow engine from prescription to dispatch.",
    description: "The Medcare operates a pharmacy network processing high daily prescription volumes. Fulfilment coordination was split across manual queues, phone calls, and a legacy system with no unified status view.",
    problem: "Pharmacists were spending significant time on coordination tasks instead of dispensing. Prescription-to-dispatch time was inconsistent and customer follow-ups were entirely manual.",
    approach: "We mapped the end-to-end fulfilment flow and rebuilt it as a structured workflow engine. Built an operator dashboard surfacing queue status, exception flags, and automated customer notifications.",
    outcome: "Fulfilment speed increased by 38% and manual coordination overhead dropped substantially. The team now handles higher volume with the same headcount.",
    stats: [
      { value: "+38%", label: "Fulfilment speed" },
      { value: "~0", label: "Manual follow-up calls" },
      { value: "100%", label: "Order audit trail" },
      { value: "1", label: "System, replacing 3" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Inngest", "Resend"],
    duration: "2 + 10 weeks",
    year: "2025",
  },
  {
    slug: "mycleanone",
    client: "MyCleanOne",
    sector: "IT Services",
    headline: "IT service operations that run without manual chasing.",
    subheadline: "Automated ticket routing and client communication replacing a coordinator-heavy process.",
    description: "MyCleanOne delivers managed IT services to SMB clients. Ticket handling was coordinator-heavy — each request required manual triage, assignment, and follow-up communication across email and phone.",
    problem: "Coordinators were spending more time routing and chasing than resolving. Resolution time was inconsistent and clients lacked visibility into ticket status.",
    approach: "We mapped the full ticket lifecycle and rebuilt it around automated routing rules and SLA triggers. Built an operator dashboard surfacing only exceptions and a client-facing status portal.",
    outcome: "Resolution time dropped by 62% and coordinator overhead reduced substantially. Clients now get automated status updates throughout the lifecycle.",
    stats: [
      { value: "-62%", label: "Resolution time" },
      { value: "9→3", label: "Manual touchpoints" },
      { value: "100%", label: "Tickets with audit trail" },
      { value: "60%", label: "Coordinator capacity freed" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Inngest", "Resend"],
    duration: "2 + 12 weeks",
    year: "2025",
  },
  {
    slug: "bichance",
    client: "Bichance",
    sector: "Consumer Platform",
    headline: "A marketplace operating model rebuilt from the ground up.",
    subheadline: "Streamlining vendor onboarding and order workflows across a fragmented consumer platform.",
    description: "Bichance operates a consumer marketplace connecting buyers with service providers. As the platform scaled, vendor onboarding and order coordination became a manual bottleneck — split across email, spreadsheets, and disconnected tools.",
    problem: "Vendor onboarding took over a week and required multiple team touchpoints. Order workflows had no clear owner and status visibility was poor for both operators and customers.",
    approach: "We ran a two-week diagnostic across the marketplace workflow. Redesigned the operating model around a structured vendor portal and order management system — replacing three tools with one.",
    outcome: "Vendor onboarding time dropped from 7 days to under 24 hours. Order coordination is now fully tracked with automated status updates and clear ownership at each stage.",
    stats: [
      { value: "7d→1d", label: "Vendor onboarding" },
      { value: "3→1", label: "Tools replaced" },
      { value: "100%", label: "Order audit trail" },
      { value: "1 system", label: "Shared operating model" },
    ],
    stack: ["Next.js", "TypeScript", "Postgres", "Inngest", "Resend"],
    duration: "2 + 13 weeks",
    year: "2024",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
