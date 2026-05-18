import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Mettle · Operational design studio";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0B0D10",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Grid decoration */}
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.12 }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 60}
              y1="0"
              x2={i * 60}
              y2="630"
              stroke="#F5F0E8"
              strokeWidth="0.5"
            />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 63}
              x2="1200"
              y2={i * 63}
              stroke="#F5F0E8"
              strokeWidth="0.5"
            />
          ))}
          <path
            d="M80 315 H 300 V 200 H 520 V 430 H 740 V 260 H 1120"
            stroke="#2A6FDB"
            strokeWidth="2"
            fill="none"
          />
          {[[80,315],[300,315],[300,200],[520,200],[520,430],[740,430],[740,260],[1120,260]].map(([x,y], i) => (
            <rect key={i} x={x-5} y={y-5} width="10" height="10" stroke="#2A6FDB" fill="#0B0D10" strokeWidth="2" />
          ))}
        </svg>

        {/* Brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect x="2" y="2" width="32" height="32" stroke="#F5F0E8" strokeWidth="2" />
            <line x1="2" y1="18" x2="34" y2="18" stroke="#2A6FDB" strokeWidth="2" />
            <rect x="12" y="12" width="12" height="12" fill="#2A6FDB" />
          </svg>
          <span
            style={{
              fontFamily: "serif",
              fontSize: 28,
              fontWeight: 400,
              color: "#F5F0E8",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Mettle
          </span>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 88,
              fontWeight: 400,
              color: "#F5F0E8",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
            }}
          >
            Operational
          </div>
          <div
            style={{
              fontFamily: "serif",
              fontSize: 88,
              fontWeight: 400,
              color: "#2A6FDB",
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              fontStyle: "italic",
            }}
          >
            design studio.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              color: "rgba(245,240,232,0.45)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            mettle.co
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              color: "rgba(245,240,232,0.45)",
              letterSpacing: "0.08em",
            }}
          >
            System design · Custom software · Automation
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
