// src/app/api/google-reviews/route.js
// Avis Google des deux cabinets (Sèvres + Paris 15) — voir src/lib/googleReviews.js
import { NextResponse } from "next/server";
import { fetchGoogleReviews } from "@/lib/googleReviews";

export const revalidate = 21600; // 6h

export async function GET() {
  try {
    const { reviews, stats } = await fetchGoogleReviews();
    if (!stats) {
      return NextResponse.json(
        { reviews: [], stats: null, error: "Configuration manquante" },
        { status: 200 }
      );
    }
    return NextResponse.json({ reviews, stats });
  } catch (error) {
    return NextResponse.json({ reviews: [], stats: null }, { status: 500 });
  }
}
