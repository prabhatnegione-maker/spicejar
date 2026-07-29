import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { cartItems, cartValue, customerEmail } = await request.json();

    if (!cartItems || cartItems.length === 0) {
      return NextResponse.json({ success: false, error: "Cart is empty" }, { status: 400 });
    }

    const { error } = await supabase
      .from("abandoned_carts")
      .insert([
        {
          user_email: customerEmail || null,
          cart_items: cartItems,
          cart_value: Math.round(cartValue * 100),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.warn("Supabase abandoned_carts insert notice:", error.message);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error logging cart snapshot:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}
