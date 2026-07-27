"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import Link from "next/link";
import QuantitySelector from "./QuantitySelector";

export default function CartDrawer() {
  const { items, subtotal, isDrawerOpen, closeDrawer, removeItem, updateQuantity } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <>
      <div
        className="cart-drawer-overlay overlay-fade-in"
        onClick={closeDrawer}
        id="cart-drawer-overlay"
      />
      <div className="cart-drawer slide-in-right">
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">Your Cart ({items.length})</h2>
          <button
            className="cart-drawer-close"
            onClick={closeDrawer}
            aria-label="Close cart"
            id="cart-drawer-close"
          >
            ✕
          </button>
        </div>

        <div className="cart-drawer-items">
          {items.length === 0 ? (
            <div className="cart-drawer-empty">
              <p style={{ marginBottom: 8 }}>Your cart is empty</p>
              <p style={{ fontSize: "0.75rem" }}>
                Discover our collection of premium Indian spices.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.key} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-variant">
                      {item.subtitle} · {item.variant}
                    </p>
                  </div>
                  <div className="cart-item-bottom">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(qty) => updateQuantity(item.key, qty)}
                    />
                    <span className="cart-item-price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeItem(item.key)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-drawer-subtotal">
              <span className="cart-drawer-subtotal-label">Subtotal</span>
              <span className="cart-drawer-subtotal-value">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                color: "var(--color-text-muted)",
                marginBottom: 16,
              }}
            >
              Shipping & taxes calculated at checkout
            </p>
            <Link
              href="/cart"
              className="btn btn-primary btn-full"
              onClick={closeDrawer}
              id="view-cart-btn"
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
