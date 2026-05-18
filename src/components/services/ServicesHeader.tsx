import Link from "next/link";
import { Icon } from "@/components/icons";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";

export function ServicesHeader() {
  return (
    <section style={{ padding: "84px 56px 56px", position: "relative" }}>
      <HeroBackdrop />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "end" }}>
        <div>
          <span className="m-eyebrow">Services · Three disciplines</span>
          <h1 className="m-display" style={{ fontSize: 108, letterSpacing: "-0.045em", lineHeight: 0.9, marginTop: 22 }}>
            We don&apos;t sell<br />
            features. We solve<br />
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>operational</em><br />
            problems.
          </h1>
        </div>
        <div style={{ paddingBottom: 16 }}>
          <p style={{ fontSize: 18, color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 460, marginBottom: 24 }}>
            Each engagement begins with understanding. We diagnose the operating problem,
            then deploy the smallest combination of design, software and automation that fixes it for good.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/contact" className="m-btn m-btn-primary">Brief us <Icon name="arrowUpRight" size={14} /></Link>
            <Link href="/how-we-work" className="m-btn m-btn-ghost">The method</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
