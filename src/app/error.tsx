"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" data-mettle-theme="light">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#FBFAF7", color: "#0B0D10" }}>
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "96px 20px",
          textAlign: "center",
        }}>
          <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#80868F", fontFamily: "ui-monospace, monospace" }}>
            Error · 500
          </span>
          <h1 style={{ fontSize: 120, letterSpacing: "-0.05em", lineHeight: 0.88, marginTop: 16, fontFamily: "Georgia, serif", fontWeight: 400 }}>
            500
          </h1>
          <p style={{ marginTop: 24, fontSize: 20, color: "#1B1F26", lineHeight: 1.5, maxWidth: 440 }}>
            Something went wrong on our end.<br />
            The team has been notified.
          </p>
          {error.digest && (
            <p style={{ marginTop: 12, fontSize: 12, color: "#80868F", fontFamily: "ui-monospace, monospace" }}>
              ref: {error.digest}
            </p>
          )}
          <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center" }}>
            <button
              onClick={reset}
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "system-ui, sans-serif", fontSize: 14, fontWeight: 500,
                padding: "12px 22px", borderRadius: 999, border: "1px solid #0B0D10",
                background: "#0B0D10", color: "#FBFAF7", cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "system-ui, sans-serif", fontSize: 14, fontWeight: 500,
                padding: "12px 22px", borderRadius: 999, border: "1px solid #E4DFD5",
                background: "transparent", color: "#0B0D10", textDecoration: "none",
              }}
            >
              Back to home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
