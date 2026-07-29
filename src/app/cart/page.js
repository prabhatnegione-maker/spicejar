"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import QuantitySelector from "@/components/QuantitySelector";
import { loadRazorpayScript } from "@/lib/razorpay";

export default function CartPage() {
  const router = useRouter();
  const { items, subtotal, updateQuantity, removeItem, clearCart, mounted } = useCart();

  // Checkout modal & customer form state
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

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

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrorMessage("");

    try {
      // 1. Create Razorpay order via server API
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          currency: "INR",
          notes: {
            customerName: customer.name,
            phone: customer.phone,
            address: `${customer.address}, ${customer.city} - ${customer.pincode}`,
          },
        }),
      });

      const orderData = await res.json();

      if (!res.ok || orderData.error) {
        throw new Error(orderData.error || "Failed to create payment order");
      }

      // Handle Mock Mode for testing without keys
      if (orderData.isMock) {
        const verifyRes = await fetch("/api/razorpay/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: orderData.id,
            isMock: true,
          }),
        });

        const verifyData = await verifyRes.json();

        // Save order receipt to localStorage & redirect
        localStorage.setItem(
          "spicejar_last_order",
          JSON.stringify({
            orderId: orderData.id,
            paymentId: verifyData.paymentId,
            customer,
            items,
            subtotal,
            shipping,
            total,
            date: new Date().toISOString(),
          })
        );

        clearCart();
        router.push("/order-confirmation");
        return;
      }

      // 2. Load Razorpay Client SDK Script
      const isLoaded = await loadRazorpayScript();

      if (!isLoaded) {
        throw new Error("Razorpay SDK failed to load. Please check your internet connection.");
      }

      // 3. Configure Razorpay SDK Options
      const options = {
        key: orderData.key || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Spicejar",
        description: "Farm Fresh Premium Spices Order",
        order_id: orderData.id,
        prefill: {
          name: customer.name,
          email: customer.email,
          contact: customer.phone,
        },
        theme: {
          color: "#2C1810", // Spicejar Mahogany theme color
        },
        handler: async function (response) {
          try {
            // Verify HMAC payment signature on server
            const verifyRes = await fetch("/api/razorpay/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              // Save order details for receipt
              localStorage.setItem(
                "spicejar_last_order",
                JSON.stringify({
                  orderId: response.razorpay_order_id,
                  paymentId: response.razorpay_payment_id,
                  customer,
                  items,
                  subtotal,
                  shipping,
                  total,
                  date: new Date().toISOString(),
                })
              );

              clearCart();
              router.push("/order-confirmation");
            } else {
              setErrorMessage("Payment verification failed. Please contact support.");
              setIsProcessing(false);
            }
          } catch (err) {
            setErrorMessage("Error verifying payment signature.");
            setIsProcessing(false);
          }
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          },
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong initiating payment.");
      setIsProcessing(false);
    }
  };

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

          <button
            className="btn btn-primary btn-full"
            id="checkout-btn"
            onClick={() => setShowCheckoutModal(true)}
          >
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

      {/* Customer Details & Shipping Address Modal */}
      {showCheckoutModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "1rem",
          }}
        >
          <div
            style={{
              background: "#FFF",
              borderRadius: 20,
              maxWidth: 520,
              width: "100%",
              padding: "2rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowCheckoutModal(false)}
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                border: "none",
                background: "none",
                fontSize: "1.25rem",
                cursor: "pointer",
                color: "#777",
              }}
            >
              ✕
            </button>

            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "1.65rem",
                marginBottom: "0.5rem",
              }}
            >
              Shipping & Payment
            </h2>
            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
              Enter your shipping address to pay securely via Razorpay ({formatPrice(total)})
            </p>

            {errorMessage && (
              <div
                style={{
                  backgroundColor: "#FDF2F2",
                  color: "#9B1C1C",
                  padding: "0.75rem 1rem",
                  borderRadius: 8,
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                  border: "1px solid #F8B4B4",
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handlePayment}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={customer.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Ananya Sharma"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: 8,
                      border: "1px solid #CCC",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={customer.email}
                      onChange={handleInputChange}
                      placeholder="ananya@example.com"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 8,
                        border: "1px solid #CCC",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={customer.phone}
                      onChange={handleInputChange}
                      placeholder="9876543210"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 8,
                        border: "1px solid #CCC",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={customer.address}
                    onChange={handleInputChange}
                    placeholder="Flat / Street / Area"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      borderRadius: 8,
                      border: "1px solid #CCC",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={customer.city}
                      onChange={handleInputChange}
                      placeholder="Mumbai / Delhi"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 8,
                        border: "1px solid #CCC",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: 4 }}>
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={customer.pincode}
                      onChange={handleInputChange}
                      placeholder="400001"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: 8,
                        border: "1px solid #CCC",
                        fontSize: "0.9rem",
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn btn-primary btn-full"
                  style={{
                    marginTop: "1rem",
                    padding: "0.9rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {isProcessing ? "Connecting to Razorpay..." : `Pay ${formatPrice(total)} with Razorpay`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
