// src/app/api/google-reviews/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { reviews: [], error: "Configuration manquante" },
      { status: 500 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,url,rating,user_ratings_total&language=fr&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    const googleUrl = data.result?.url ?? null;

    const reviews = (data.result?.reviews || []).map((r) => ({
      author: r.author_name,
      text: r.text,
      rating: r.rating,
      time: r.time,
      sourceUrl: googleUrl,
    }));

    return NextResponse.json({ reviews });
  } catch (error) {
    return NextResponse.json({ reviews: [] }, { status: 500 });
  }
}
