import { ImageResponse } from "next/server";
import { buildOgImageElement, ogImageSize, ogImageContentType, getOgFonts } from "@/lib/ogImage";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Freins restrictifs chez le nourrisson — Hilary Farid, Paris 15 & Sèvres";

export default async function Image() {
  return new ImageResponse(
    buildOgImageElement({
      eyebrow: "Ostéopathie nourrisson",
      title: "Freins restrictifs chez le nourrisson",
    }),
    { ...size, fonts: await getOgFonts() }
  );
}
