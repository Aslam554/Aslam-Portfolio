import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shouldIncrement = searchParams.get("increment") === "true";

  const targetUrl = shouldIncrement
    ? "https://api.counterapi.dev/v1/aslambeg-portfolio-2026/views/up"
    : "https://api.counterapi.dev/v1/aslambeg-portfolio-2026/views";

  try {
    const res = await fetch(targetUrl, {
      cache: "no-store",
      headers: {
        "User-Agent": "Nextjs-Server-Fetcher",
      },
    });

    if (!res.ok) {
      // Fallback response if external API is unreachable
      return NextResponse.json({ views: 24185 }, { status: 200 });
    }

    const data = await res.json();
    const count = typeof data.count === "number" ? data.count : 1;
    const totalViews = 24185 + count;

    return NextResponse.json(
      { views: totalViews },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Server API views fetch error:", error);
    return NextResponse.json({ views: 24185 }, { status: 200 });
  }
}
