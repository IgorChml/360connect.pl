import { ImageResponse } from "next/og";

export const alt = "360 Connect — Agencja Performance Marketingu";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0e1a 0%, #111a2e 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #0ea5ff, #6366f1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            360
          </div>
          <span style={{ fontSize: "34px", fontWeight: 700 }}>360 Connect</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Marketing 360°, który widać w przychodzie
          </div>
          <div style={{ fontSize: "32px", color: "#94a3b8" }}>
            SEO · Google Ads · Meta Ads · Content Marketing
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#0ea5ff",
          }}
        >
          <span>www.360connect.com.pl</span>
          <span style={{ color: "#475569" }}>·</span>
          <span style={{ color: "#94a3b8" }}>Agencja Performance Marketingu · Warszawa</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
