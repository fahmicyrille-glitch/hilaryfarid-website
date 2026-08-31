import { ImageResponse } from "next/server";
import { buildOgImageElement, ogImageSize, ogImageContentType, getOgFonts } from "@/lib/ogImage";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Ostéopathie douce & globale — Hilary Farid, Sèvres & Paris 15";

export default async function Image() {
  return new ImageResponse(
    buildOgImageElement({
      eyebrow: "Ostéopathie douce & globale",
      title: "Soulager vos douleurs, retrouver mobilité & confort",
    }),
    { ...size, fonts: await getOgFonts() }
  );
}
