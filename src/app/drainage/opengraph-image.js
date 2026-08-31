import { ImageResponse } from "next/server";
import { buildOgImageElement, ogImageSize, ogImageContentType, getOgFonts } from "@/lib/ogImage";

export const runtime = "edge";
export const size = ogImageSize;
export const contentType = ogImageContentType;
export const alt = "Drainage lymphatique Renata França — Hilary Farid, Sèvres & Paris 15";

export default async function Image() {
  return new ImageResponse(
    buildOgImageElement({
      eyebrow: "Drainage lymphatique · Méthode Renata França",
      title: "Légèreté, confort & silhouette affinée",
    }),
    { ...size, fonts: await getOgFonts() }
  );
}
