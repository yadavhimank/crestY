import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#0B0D10",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="8" y="8" width="84" height="84" stroke="#F5F0E8" strokeWidth="6" />
          <line x1="8" y1="50" x2="92" y2="50" stroke="#2A6FDB" strokeWidth="6" />
          <rect x="32" y="32" width="36" height="36" fill="#2A6FDB" />
        </svg>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
