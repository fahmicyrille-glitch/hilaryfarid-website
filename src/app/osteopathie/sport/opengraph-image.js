import { ImageResponse } from "next/server";
import { buildOgImageElement, ogImageSize, ogImageContentType, getOgFonts } from "@/lib/ogImage";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Ostéopathie du sport — Hilary Farid, Paris 15 & Sèvres";

export default async function Image() {
  return new ImageResponse(
    buildOgImageElement({
      eyebrow: "Ostéopathie du sport",
      title: "Ostéopathie du Sport à Paris 15 & Sèvres",
    }),
    { ...size, fonts: await getOgFonts() }
  );
}
