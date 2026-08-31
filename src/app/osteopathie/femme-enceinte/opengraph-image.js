import { ImageResponse } from "next/server";
import { buildOgImageElement, ogImageSize, ogImageContentType, getOgFonts } from "@/lib/ogImage";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Ostéopathie grossesse & post-partum — Hilary Farid, Paris 15 & Sèvres";

export default async function Image() {
  return new ImageResponse(
    buildOgImageElement({
      eyebrow: "Ostéopathie femme enceinte",
      title: "Ostéopathie Grossesse & Post-partum à Paris 15 & Sèvres",
    }),
    { ...size, fonts: await getOgFonts() }
  );
}
