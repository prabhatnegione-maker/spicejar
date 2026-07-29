import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          subject: subject ? subject.trim() : "General Inquiry",
          message: message.trim(),
          submitted_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.warn("Supabase contact_submissions insert notice:", error.message);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. We will get back to you shortly.",
      data,
    });
  } catch (err) {
    console.error("Error submitting contact form:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
