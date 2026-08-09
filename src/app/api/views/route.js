import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const shouldIncrement = searchParams.get("increment") === "true";
  const action = shouldIncrement ? "hit" : "get";

  const targetUrl = `https://countapi.mileshilliard.com/api/v1/${action}/aslambeg-portfolio-2026`;

  try {
    const res = await fetch(targetUrl, {
      cache: "no-store",
      headers: {
        "User-Agent": "Nextjs-Server-Fetcher",
      },
    });

    if (!res.ok) {
      return NextResponse.json({ views: 0 }, { status: 200 });
    }

    const data = await res.json();
    const count =
      typeof data.value === "number"
        ? data.value
        : typeof data.count === "number"
        ? data.count
        : 0;

    return NextResponse.json(
      { views: count },
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
    return NextResponse.json({ views: 0 }, { status: 200 });
  }
}

