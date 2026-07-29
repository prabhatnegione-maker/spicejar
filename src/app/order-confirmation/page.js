"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/data";

export default function OrderConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    try {
      const savedOrder = localStorage.getItem("spicejar_last_order");
      if (savedOrder) {
        setOrderDetails(JSON.parse(savedOrder));
      }
    } catch (e) {
      console.error("Failed to parse saved order", e);
    }
  }, []);

  if (!orderDetails) {
    return (
      <div style={{ maxWidth: 800, margin: "4rem auto", padding: "0 2rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", marginBottom: "1rem" }}>
          Order Confirmation
        </h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          No recent order details found.
        </p>
        <Link href="/shop" className="btn btn-primary">
          Explore Shop
        </Link>
      </div>
    );
  }

  const { paymentId, orderId, customer, items, total, date } = orderDetails;

  return (
    <div style={{ maxWidth: 760, margin: "3rem auto", padding: "0 1.5rem" }}>
      {/* Success Badge */}
      <div
        style={{
          backgroundColor: "#F4F8F3",
          border: "1px solid #C3E2C2",
          borderRadius: 16,
          padding: "2.5rem 2rem",
          textAlign: "center",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            backgroundColor: "#2E7D32",
            color: "#FFF",
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem",
          }}
        >
          ✓
        </div>
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2.25rem",
            fontWeight: 400,
            color: "var(--color-text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Order Confirmed!
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
          Thank you, <strong>{customer.name}</strong>. Your order has been placed successfully.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "1rem", fontSize: "0.85rem", color: "#555" }}>
          <span><strong>Payment ID:</strong> {paymentId}</span>
          <span>•</span>
          <span><strong>Date:</strong> {new Date(date).toLocaleDateString("en-IN")}</span>
        </div>
      </div>

      {/* Order Details Grid */}
      <div
        style={{
          background: "var(--color-bg-warm, #FAF8F5)",
          borderRadius: 16,
          border: "1px solid var(--color-border, #E5E0D8)",
          padding: "2rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.35rem", marginBottom: "1.25rem" }}>
          Order Items
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items?.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "1rem",
                borderBottom: idx === items.length - 1 ? "none" : "1px solid #EBE5DC",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 52, height: 52, borderRadius: 8, objectFit: "cover" }}
                />
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>{item.name}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: "2px 0 0" }}>
                    Qty: {item.quantity} · {item.variant}
                  </p>
                </div>
              </div>
              <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "2px solid #E5E0D8", display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: 600 }}>
          <span>Total Paid</span>
          <span style={{ color: "var(--color-accent, #2C1810)" }}>{formatPrice(total)}</span>
        </div>
      </div>

      {/* Shipping Address Summary */}
      <div
        style={{
          background: "#FFF",
          borderRadius: 16,
          border: "1px solid var(--color-border, #E5E0D8)",
          padding: "1.75rem 2rem",
          marginBottom: "2.5rem",
        }}
      >
        <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
          Shipping Destination
        </h4>
        <p style={{ fontWeight: 600, margin: 0 }}>{customer.name}</p>
        <p style={{ margin: "4px 0", color: "#555", fontSize: "0.9rem" }}>{customer.address}, {customer.city} - {customer.pincode}</p>
        <p style={{ margin: 0, color: "#555", fontSize: "0.85rem" }}>📞 {customer.phone} | ✉️ {customer.email}</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link href="/shop" className="btn btn-primary" style={{ padding: "0.85rem 2.5rem" }}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
