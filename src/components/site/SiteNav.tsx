"use client";

import { useState, useEffect } from "react";
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
  if (pathname === "/")                     return "home";
  if (pathname.startsWith("/services"))    return "services";
  if (pathname.startsWith("/work"))        return "work";
  if (pathname.startsWith("/how-we-work")) return "how";
  if (pathname.startsWith("/about"))       return "about";
  if (pathname.startsWith("/contact"))     return "contact";
  return "home";
}

export function SiteNav() {
  const pathname = usePathname();
  const active = pathnameToActive(pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setDrawerOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  const close = () => setDrawerOpen(false);

  return (
    <>
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
          <span className="m-mono hidden lg:inline" style={{ fontSize: 10, color: "var(--m-ink-4)", letterSpacing: "0.08em", marginLeft: 4 }}>
            / SYSTEMS · SOFTWARE · AUTOMATION
          </span>
        </Link>

        {/* Nav links — tablet (md) and above */}
        <ul className="hidden md:flex" style={{ gap: 28, listStyle: "none", padding: 0, margin: 0, flexShrink: 0 }}>
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

        {/* CTA — tablet (md) and above; wrapper avoids specificity fight with m-btn */}
        <div className="hidden md:block" style={{ flexShrink: 0 }}>
          <Link
            href="/contact"
            className="m-btn m-btn-primary"
            style={{ padding: "10px 18px", fontSize: 13 }}
          >
            Start a conversation <Icon name="arrowUpRight" size={13} />
          </Link>
        </div>

        {/* Hamburger — mobile only (below md) */}
        <button
          className="flex md:hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open navigation"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--m-ink)", padding: 4, flexShrink: 0 }}
        >
          <Icon name="menu" size={24} />
        </button>
      </nav>

      {/* Mobile drawer — full-screen, slides in from right */}
      <div
        aria-modal={drawerOpen}
        aria-hidden={!drawerOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          background: "var(--m-bg)",
          display: "flex",
          flexDirection: "column",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close navigation"
          style={{
            position: "absolute", top: 18, right: 40,
            background: "none", border: "none", cursor: "pointer",
            color: "var(--m-ink)", padding: 4,
          }}
        >
          <Icon name="cross" size={22} />
        </button>

        {/* Nav links */}
        <ul style={{
          listStyle: "none", margin: 0,
          padding: "80px 40px 0",
          display: "flex", flexDirection: "column", gap: 32,
          flex: 1,
        }}>
          {SITE_PAGES.map((p) => (
            <li key={p.id}>
              <Link
                href={p.href}
                onClick={close}
                className="m-display"
                style={{
                  fontSize: 32,
                  textDecoration: "none",
                  color: p.id === active ? "var(--m-ink)" : "var(--m-ink-3)",
                  display: "block",
                }}
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ padding: "40px" }}>
          <Link
            href="/contact"
            className="m-btn m-btn-primary"
            onClick={close}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Start a conversation <Icon name="arrowUpRight" size={13} />
          </Link>
        </div>
      </div>
    </>
  );
}
