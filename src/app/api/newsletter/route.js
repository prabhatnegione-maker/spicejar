import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendWelcomeEmail } from "@/lib/email";

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

    // 1. Try inserting into Supabase database
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
        console.log(`Newsletter subscriber ${cleanEmail} already exists in database.`);
      } else {
        console.warn("Supabase newsletter insert warning:", error.message);
      }
    }

    // 2. Dispatch welcome email via Resend
    let emailSent = false;
    let emailError = null;
    let emailMessageId = null;

    try {
      const emailResult = await sendWelcomeEmail(cleanEmail);
      emailSent = emailResult.success;
      if (emailResult.success) {
        emailMessageId = emailResult.data?.id;
        console.log(`Welcome email successfully queued via Resend for ${cleanEmail} (ID: ${emailMessageId})`);
      } else {
        emailError = emailResult.error;
        console.warn(`Resend email dispatch notice for ${cleanEmail}:`, emailError);
      }
    } catch (emailErr) {
      emailError = emailErr.message;
      console.error("Welcome email unexpected error:", emailErr);
    }

    return NextResponse.json({
      success: true,
      message: emailSent
        ? "Thank you for subscribing! Check your inbox for your 10% welcome voucher."
        : "Thank you for subscribing! Subscriber recorded in database.",
      emailSent,
      emailMessageId,
      emailError,
      data,
    });
  } catch (err) {
    console.error("Error in newsletter API route:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
