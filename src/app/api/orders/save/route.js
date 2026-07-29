import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const { orderId, paymentId, customer, items, subtotal, shipping, total, date } = await request.json();

    if (!orderId || !customer || !items) {
      return NextResponse.json(
        { success: false, error: "Missing required order payload details." },
        { status: 400 }
      );
    }

    // Insert order record into Supabase `orders` table
    const { data: orderRecord, error: orderError } = await supabase
      .from("orders")
      .insert([
        {
          user_email: customer.email,
          customer_name: customer.name,
          customer_phone: customer.phone,
          shipping_address: customer.address,
          shipping_city: customer.city,
          shipping_pincode: customer.pincode,
          subtotal: Math.round(subtotal * 100),
          shipping_cost: Math.round(shipping * 100),
          total: Math.round(total * 100),
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentId,
          payment_status: "paid",
          order_status: "confirmed",
          created_at: date || new Date().toISOString(),
        },
      ])
      .select();

    if (orderError) {
      console.warn("Supabase order insert notice:", orderError.message);
    }

    // Insert line items into `order_items` table
    const dbOrderId = orderRecord && orderRecord[0] ? orderRecord[0].id : null;

    if (dbOrderId && items.length > 0) {
      const lineItems = items.map((item) => ({
        order_id: dbOrderId,
        product_handle: item.handle || item.productId,
        product_name: item.name,
        variant_label: item.variant,
        quantity: item.quantity,
        unit_price: Math.round(item.price * 100),
        image_url: item.image,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(lineItems);

      if (itemsError) {
        console.warn("Supabase order_items insert notice:", itemsError.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Order successfully saved to database.",
      orderId,
    });
  } catch (err) {
    console.error("Error saving order to database:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error saving order" },
      { status: 500 }
    );
  }
}
