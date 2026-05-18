import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#0B0D10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="16" height="16" stroke="#F5F0E8" strokeWidth="1.5" />
          <line x1="2" y1="10" x2="18" y2="10" stroke="#2A6FDB" strokeWidth="1.5" />
          <rect x="7" y="7" width="6" height="6" fill="#2A6FDB" />
        </svg>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
