"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="header-brand" style={{ display: "inline-block" }}>
            <img
              src="/images/logo.png"
              alt="spicejar — Premium Indian Spices"
              style={{ height: 60, width: "auto", maxWidth: "250px", objectFit: "contain", display: "block", mixBlendMode: "darken" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "inline";
              }}
            />
            <span style={{ display: "none", fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem", fontWeight: 400, color: "var(--color-text-muted)" }}>spicejar</span>
          </Link>
          <p className="footer-brand-description">
            Bringing the purest Indian spices from farm to your kitchen — 
            hand-sourced, stone-ground, and packed in sustainable glass jars. 
            Every jar tells a story of origin, tradition, and integrity.
          </p>
        </div>

        <div>
          <h4 className="footer-heading">Shop</h4>
          <nav className="footer-links">
            <Link href="/shop">All Products</Link>
            <Link href="/shop?category=whole-spices">Whole Spices</Link>
            <Link href="/shop?category=ground-spices">Ground Spices</Link>
            <Link href="/shop?category=spice-blends">Spice Blends</Link>
            <Link href="/shop?category=wellness-herbs">Wellness Herbs</Link>
          </nav>
        </div>

        <div>
          <h4 className="footer-heading">Company</h4>
          <nav className="footer-links">
            <Link href="/about">Our Story</Link>
            <a href="#">Sourcing</a>
            <a href="#">Sustainability</a>
            <Link href="/contact">Contact</Link>
            <a href="#">FAQ</a>
          </nav>
        </div>

        <div>
          <h4 className="footer-heading">Stay Connected</h4>
          <p className="footer-newsletter-text">
            Get recipes, spice tips, and early access to new arrivals.
          </p>
          <form
            className="footer-join-form"
            onSubmit={async (e) => {
              e.preventDefault();
              const emailInput = e.target.querySelector("input[type='email']");
              const email = emailInput?.value;
              if (!email) return;
              const submitBtn = e.target.querySelector("button");
              if (submitBtn) submitBtn.disabled = true;
              const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source: "footer" }),
              });
              const data = await res.json();
              alert(data.message || "Thank you for joining!");
              if (emailInput) emailInput.value = "";
              if (submitBtn) submitBtn.disabled = false;
            }}
          >
            <input
              type="email"
              className="input"
              placeholder="your@email.com"
              aria-label="Email for newsletter"
              id="footer-join-email"
              required
            />
            <button type="submit" className="btn btn-primary btn-sm" id="footer-join-submit">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright" suppressHydrationWarning>
          © {new Date().getFullYear()} spicejar. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Shipping</a>
        </div>
      </div>
    </footer>
  );
}
