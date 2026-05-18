import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div
      data-site-scroll
      className="mettle"
      style={{
        width: "100%",
        height: "100%",
        overflow: "auto",
        background: "var(--m-bg)",
      }}
    >
      <div>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
