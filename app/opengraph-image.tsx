import { ImageResponse } from "next/og";

export const alt = "Lefkos Papapetrou — Frontend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0d0b07",
          color: "#efe6d3",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "2px solid #5c4f30",
            paddingLeft: "32px",
            marginBottom: "48px",
            fontSize: 28,
            color: "#ffb000",
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: "#5c4f30" }}>{"/*"}</span>
          <span style={{ display: "flex" }}>
            INIT_SEQUENCE:&nbsp;
            <span style={{ color: "#efe6d3" }}>ONLINE</span>
          </span>
          <span style={{ display: "flex" }}>
            STATUS:&nbsp;
            <span style={{ color: "#efe6d3" }}>
              FRONTEND SYSTEMS. NO SHORTCUTS.
            </span>
          </span>
          <span style={{ color: "#5c4f30" }}>{"*/"}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
          }}
        >
          <span>LEFKOS</span>
          <span style={{ color: "#5c4f30" }}>PAPAPETROU</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "48px",
            fontSize: 32,
            color: "#ffb000",
          }}
        >
          <div style={{ width: "32px", height: "2px", background: "#ffb000" }} />
          FRONTEND_ENGINEER
        </div>
      </div>
    ),
    { ...size },
  );
}
