import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { query, resultsCount, clickedProduct } = await request.json();

    if (!query) {
      return NextResponse.json({ success: false, error: "Missing query" }, { status: 400 });
    }

    const { error } = await supabase
      .from("search_queries")
      .insert([
        {
          query: query.trim().toLowerCase(),
          results_count: resultsCount || 0,
          clicked_product: clickedProduct || null,
          searched_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.warn("Supabase search_queries insert notice:", error.message);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging search query:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
