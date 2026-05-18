"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";

const SITE_PAGES = [
  { id: "home",     label: "Home",        href: "/" },
  { id: "services", label: "Services",    href: "/services" },
  { id: "work",     label: "Work",        href: "/work" },
  { id: "how",      label: "How we work", href: "/how-we-work" },
  { id: "about",    label: "About",       href: "/about" },
];

function pathnameToActive(pathname: string): string {
  if (pathname === "/")                    return "home";
  if (pathname.startsWith("/services"))   return "services";
  if (pathname.startsWith("/work"))       return "work";
  if (pathname.startsWith("/how-we-work")) return "how";
  if (pathname.startsWith("/about"))      return "about";
  if (pathname.startsWith("/contact"))    return "contact";
  return "home";
}

export function SiteNav() {
  const pathname = usePathname();
  const active = pathnameToActive(pathname);

  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 40px",
      gap: 24,
      borderBottom: "1px solid var(--m-line)",
      background: "color-mix(in oklab, var(--m-bg), transparent 6%)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "var(--m-ink)", whiteSpace: "nowrap", flexShrink: 0 }}
      >
        <Icon name="mark" size={22} />
        <span className="m-mono" style={{ fontSize: 13, letterSpacing: "0.02em", fontWeight: 500 }}>Mettle</span>
        <span className="m-mono" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.08em", marginLeft: 4 }}>
          / SYSTEMS · SOFTWARE · AUTOMATION
        </span>
      </Link>

      <ul style={{ display: "flex", gap: 28, listStyle: "none", padding: 0, margin: 0, flexShrink: 0 }}>
        {SITE_PAGES.map((p) => (
          <li key={p.id} style={{ whiteSpace: "nowrap" }}>
            <Link
              href={p.href}
              style={{
                fontSize: 14, fontWeight: 500, textDecoration: "none",
                color: p.id === active ? "var(--m-ink)" : "var(--m-ink-3)",
                paddingBottom: 4,
                borderBottom: p.id === active ? "1px solid var(--m-ink)" : "1px solid transparent",
                transition: "color 140ms var(--ease-out-fine)",
              }}
            >
              {p.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="m-btn m-btn-primary"
        style={{ padding: "10px 18px", fontSize: 13 }}
      >
        Start a conversation <Icon name="arrowUpRight" size={13} />
      </Link>
    </nav>
  );
}
