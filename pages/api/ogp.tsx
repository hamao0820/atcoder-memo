import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has("title");
  const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "";
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_APP_URL}/hamao-log-square.png`}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(12px)",
          }}
        />
        <p
          style={{
            fontSize: 128,
            color: "white",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            fontFamily: "ヒラギノ丸ゴ Pro",
          }}
        >
          {title}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
