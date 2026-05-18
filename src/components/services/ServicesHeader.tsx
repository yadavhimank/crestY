import Link from "next/link";
import { Icon } from "@/components/icons";
import { HeroBackdrop } from "@/components/site/HeroBackdrop";

export function ServicesHeader() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-16 lg:px-14 lg:py-20" style={{ position: "relative" }}>
      <HeroBackdrop />
      <div className="relative grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-16 items-end">
        <div>
          <span className="m-eyebrow">Services · Three disciplines</span>
          <h1 className="m-display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[108px] xl:text-[124px]" style={{ letterSpacing: "-0.045em", lineHeight: 0.9, marginTop: 22 }}>
            We don&apos;t sell<br />
            features. We solve<br />
            <em style={{ fontStyle: "italic", color: "var(--m-accent)" }}>operational</em><br />
            problems.
          </h1>
        </div>
        <div style={{ paddingBottom: 16 }}>
          <p className="text-[15px] lg:text-[18px]" style={{ color: "var(--m-ink-2)", lineHeight: 1.6, maxWidth: 460, marginBottom: 24 }}>
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
