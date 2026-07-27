"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import QuantitySelector from "@/components/QuantitySelector";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, mounted } = useCart();

  if (!mounted) {
    return (
      <div className="cart-page">
        <h1 className="cart-page-title" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
          Your Cart
        </h1>
        <div style={{ textAlign: "center", padding: "4rem" }}>
          <div className="skeleton" style={{ width: 200, height: 20, margin: "0 auto" }} />
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <h1
            className="cart-empty-title"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Your cart is empty
          </h1>
          <p className="cart-empty-text">
            Discover our collection of premium Indian spices, hand-sourced and
            packed in sustainable glass jars.
          </p>
          <Link href="/shop" className="btn btn-primary" id="empty-cart-shop">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Cart</span>
      </nav>

      <h1
        className="cart-page-title"
        style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
      >
        Your Cart
      </h1>

      <div className="cart-page-layout">
        {/* Cart Items */}
        <div>
          <div className="cart-table-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span></span>
          </div>

          {items.map((item) => (
            <div key={item.key} className="cart-table-row">
              <div className="cart-table-product">
                <div className="cart-table-product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div>
                  <p className="cart-table-product-name">{item.name}</p>
                  <p className="cart-table-product-variant">
                    {item.subtitle} · {item.variant}
                  </p>
                </div>
              </div>
              <div style={{ fontSize: "0.9rem" }}>{formatPrice(item.price)}</div>
              <div>
                <QuantitySelector
                  value={item.quantity}
                  onChange={(qty) => updateQuantity(item.key, qty)}
                />
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                {formatPrice(item.price * item.quantity)}
              </div>
              <button
                className="cart-table-remove"
                onClick={() => removeItem(item.key)}
                aria-label={`Remove ${item.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h3 className="cart-summary-title">Order Summary</h3>

          <div className="cart-summary-row">
            <span style={{ color: "var(--color-text-muted)" }}>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="cart-summary-row">
            <span style={{ color: "var(--color-text-muted)" }}>Shipping</span>
            <span>
              {shipping === 0 ? (
                <span style={{ color: "var(--color-accent)" }}>Free</span>
              ) : (
                formatPrice(shipping)
              )}
            </span>
          </div>
          {shipping > 0 && (
            <p
              style={{
                fontSize: "0.7rem",
                color: "var(--color-text-muted)",
                marginTop: 4,
              }}
            >
              Free shipping on orders above ₹999
            </p>
          )}

          <div className="cart-summary-row total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <button className="btn btn-primary btn-full" id="checkout-btn">
            Proceed to Checkout
          </button>

          <Link
            href="/shop"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "var(--color-text-muted)",
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
