import Link from "next/link";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

type FooterItem = [IconName, string, string | null];

const ROUTE_HREFS: Record<string, string> = {
  home:     "/",
  services: "/services",
  work:     "/work",
  how:      "/how-we-work",
  about:    "/about",
  contact:  "/contact",
};

function FooterCol({ label, items }: { label: string; items: FooterItem[] }) {
  return (
    <div>
      <div className="m-eyebrow" style={{ marginBottom: 18 }}>{label}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(([icon, txt, target], i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "var(--m-ink-4)" }}><Icon name={icon} size={16} /></span>
            {target ? (
              <Link
                href={ROUTE_HREFS[target] ?? "/"}
                style={{ fontSize: 14, color: "var(--m-ink)", textDecoration: "none" }}
              >{txt}</Link>
            ) : (
              <span style={{ fontSize: 14, color: "var(--m-ink-2)" }}>{txt}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-5 pt-14 pb-7 md:px-8 lg:px-14" style={{
      borderTop: "1px solid var(--m-line-strong)",
      background: "var(--m-bg-sunken)",
      color: "var(--m-ink)",
    }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-14">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <Icon name="mark" size={24} />
            <span className="m-mono" style={{ fontSize: 14, letterSpacing: "0.02em", fontWeight: 500 }}>Mettle</span>
          </div>
          <p className="m-display" style={{ fontSize: 28, letterSpacing: "-0.02em", lineHeight: 1.1, maxWidth: 320 }}>
            We design and automate <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>how</em> your business runs.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
            <Link href="/contact" className="m-btn m-btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
              Start a conversation <Icon name="arrowUpRight" size={13} />
            </Link>
          </div>
        </div>

        <FooterCol label="Services" items={[
          ["compass",  "System Design",          "services"],
          ["brackets", "Custom Software",        "services"],
          ["orbit",    "Automation & AI",        "services"],
        ]} />
        <FooterCol label="Studio" items={[
          ["team",    "About",        "about"],
          ["grid",    "Work",         "work"],
          ["observe", "How we work",  "how"],
        ]} />
        <FooterCol label="Connect" items={[
          ["mail",  "team@mettle.co",            "contact"],
          ["clock", "Reply ≤ 1 business day",    null],
          ["globe", "SG · IN · UK · CA",         null],
        ]} />
      </div>

      <div style={{ borderTop: "1px solid var(--m-line)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>
          © 2023–2026 Mettle Operating Co · Singapore
        </span>
        <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.06em" }}>
          Built by hand · No template
        </span>
      </div>
    </footer>
  );
}
