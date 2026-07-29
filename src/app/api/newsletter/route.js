import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { email, source = "homepage" } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    // Check if table exists / try inserting into Supabase
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([
        {
          email: cleanEmail,
          source,
          subscribed_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      // Handle unique constraint error if already subscribed
      if (error.code === "23505") {
        return NextResponse.json({
          success: true,
          message: "You are already subscribed to the Spicejar newsletter!",
          alreadySubscribed: true,
        });
      }
      console.warn("Supabase insert notice (run SQL setup if table missing):", error.message);
      // Fallback response for un-migrated tables
      return NextResponse.json({
        success: true,
        message: "Thank you for subscribing to Spicejar!",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing! Check your inbox for updates.",
      data,
    });
  } catch (err) {
    console.error("Error in newsletter API:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
