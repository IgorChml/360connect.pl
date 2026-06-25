import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS nakłada własne zaokrąglenie — pełne białe tło daje czytelną,
// zaokrągloną ikonę z sygnetem marki.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", width: 120, height: 120, display: "flex" }}>
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 4,
              width: 112,
              height: 112,
              borderRadius: 9999,
              border: "18px solid #1a1a1a",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 6,
              width: 34,
              height: 34,
              borderRadius: 9999,
              background: "#E8461C",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
