import Link from "next/link";
import { SiteFrame } from "@/components/site/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame>
      <section style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "96px 56px",
        textAlign: "center",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
          backgroundImage: "linear-gradient(var(--m-grid) 1px, transparent 1px), linear-gradient(90deg, var(--m-grid) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div style={{ position: "relative" }}>
          <span className="m-mono" style={{ fontSize: 11, color: "var(--m-ink-4)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Error · 404
          </span>
          <h1 className="m-display" style={{ fontSize: 160, letterSpacing: "-0.05em", lineHeight: 0.88, marginTop: 16, color: "var(--m-ink)" }}>
            404
          </h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "var(--m-ink-2)", lineHeight: 1.5, maxWidth: 480 }}>
            This page doesn&apos;t exist — or was moved.<br />
            The system is otherwise <em style={{ fontStyle: "italic" }}>fully operational.</em>
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center" }}>
            <Link href="/" className="m-btn m-btn-primary">Back to home</Link>
            <Link href="/contact" className="m-btn m-btn-ghost">Contact us</Link>
          </div>
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--m-line)", display: "flex", gap: 32, justifyContent: "center" }}>
            {[
              ["Work", "/work"],
              ["Services", "/services"],
              ["How we work", "/how-we-work"],
              ["About", "/about"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{ fontSize: 14, color: "var(--m-ink-3)", textDecoration: "none" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
