import { ImageResponse } from "next/og";

// Generated at build time — the card LinkedIn/WhatsApp shows when the link is shared.
export const alt = "Akrevia — Custom Software, Web & Mobile Apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: 80,
          borderTop: "16px solid #1d4ed8",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 600 }}>
          Akrevia<span style={{ color: "#1d4ed8" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: -2,
            color: "#0a0a0a",
            maxWidth: 900,
          }}
        >
          Software that does exactly what your business needs.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#52525b" }}>
          Custom software · Web & mobile apps · Backends — Delhi, India
        </div>
      </div>
    ),
    size,
  );
}
