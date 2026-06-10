import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0b07",
          border: "2px solid #ffb000",
          color: "#ffb000",
          fontSize: 16,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        L
      </div>
    ),
    { ...size },
  );
}
