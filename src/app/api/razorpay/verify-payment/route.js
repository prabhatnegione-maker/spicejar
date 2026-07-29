import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, isMock } =
      await request.json();

    // If in mock mode during initial testing without live keys
    if (isMock || razorpay_order_id?.startsWith("order_mock_")) {
      return NextResponse.json({
        success: true,
        message: "Payment verified successfully (Mock Mode)",
        paymentId: razorpay_payment_id || `pay_mock_${Date.now()}`,
      });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keySecret) {
      return NextResponse.json(
        { error: "Server missing Razorpay secret key" },
        { status: 500 }
      );
    }

    // Verify HMAC signature: SHA256(order_id + "|" + payment_id, secret)
    const generatedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature === razorpay_signature) {
      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid payment signature" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying payment signature:", error);
    return NextResponse.json(
      { error: error.message || "Failed to verify payment" },
      { status: 500 }
    );
  }
}
