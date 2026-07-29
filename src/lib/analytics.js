// Analytics and Data Capture Helpers for Spicejar Storefront

// 1. Subscribe Email to Newsletter
export async function trackNewsletterSignup(email, source = "homepage") {
  try {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    });
    return await res.json();
  } catch (err) {
    console.error("Failed to track newsletter signup:", err);
    return { success: false, error: err.message };
  }
}

// 2. Log Product View
export async function trackProductView(productHandle, productName) {
  try {
    await fetch("/api/analytics/product-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productHandle, productName }),
    });
  } catch (err) {
    console.error("Failed to track product view:", err);
  }
}

// 3. Log Search Query
export async function trackSearchQuery(query, resultsCount, clickedProduct = null) {
  try {
    await fetch("/api/analytics/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, resultsCount, clickedProduct }),
    });
  } catch (err) {
    console.error("Failed to track search query:", err);
  }
}

// 4. Save Cart Abandonment Snapshot
export async function trackCartAbandonment(cartItems, cartValue, customerEmail = null) {
  try {
    if (!cartItems || cartItems.length === 0) return;
    await fetch("/api/analytics/cart-abandon", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems, cartValue, customerEmail }),
    });
  } catch (err) {
    console.error("Failed to track cart snapshot:", err);
  }
}

// 5. Submit Contact Form Message
export async function submitContactForm(data) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error("Failed to submit contact form:", err);
    return { success: false, error: err.message };
  }
}

// 6. Save Completed Order to Database
export async function saveOrderToDatabase(orderData) {
  try {
    const res = await fetch("/api/orders/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
    return await res.json();
  } catch (err) {
    console.error("Failed to save order to database:", err);
    return { success: false, error: err.message };
  }
}
