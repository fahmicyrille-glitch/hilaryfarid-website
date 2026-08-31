import { ImageResponse } from "next/server";
import { buildOgImageElement, ogImageSize, ogImageContentType, getOgFonts } from "@/lib/ogImage";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Plagiocéphalie : agir tôt, agir bien — Hilary Farid, Paris 15 & Sèvres";

export default async function Image() {
  return new ImageResponse(
    buildOgImageElement({
      eyebrow: "Ostéopathie nourrisson",
      title: "Plagiocéphalie : agir tôt, agir bien",
    }),
    { ...size, fonts: await getOgFonts() }
  );
}
