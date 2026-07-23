import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/seo"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#f8fafc",
          backgroundColor: "#0b0b0d",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 520,
            backgroundColor: "rgba(18,117,216,0.78)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -130,
            bottom: -170,
            width: 560,
            height: 560,
            borderRadius: 560,
            backgroundColor: "rgba(225,145,54,0.7)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.22)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18, position: "relative" }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 14,
              background: "rgba(255,255,255,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 30, fontWeight: 600 }}>{siteConfig.name}</div>
        </div>

        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 870, fontSize: 82, lineHeight: 0.96, letterSpacing: -3 }}>
            Reliable AI Workflows for Complex Operations
          </div>
          <div style={{ marginTop: 28, maxWidth: 760, fontSize: 30, lineHeight: 1.35, color: "rgba(248,250,252,0.82)" }}>
            Workflow diagnostics, operational intelligence, and controlled AI-enabled systems.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
