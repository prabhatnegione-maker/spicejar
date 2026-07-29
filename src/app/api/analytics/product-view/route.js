import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { productHandle, productName } = await request.json();

    if (!productHandle) {
      return NextResponse.json({ success: false, error: "Missing product handle" }, { status: 400 });
    }

    const { error } = await supabase
      .from("product_views")
      .insert([
        {
          product_handle: productHandle,
          product_name: productName || productHandle,
          viewed_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.warn("Supabase product_views insert notice:", error.message);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging product view:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
