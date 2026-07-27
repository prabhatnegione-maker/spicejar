"use client";

import Link from "next/link";
import ProductCarousel from "@/components/ProductCarousel";
import { products, getProductsByTag, uspItems, testimonials, formatPrice } from "@/lib/data";

export default function HomePage() {
  const newArrivals = getProductsByTag("new");
  const bestsellers = getProductsByTag("bestseller");

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        {/* Animated gradient background */}
        <div className="hero-gradient" />
        
        {/* Decorative floating spice elements */}
        <div className="hero-spice-float hero-spice-1" aria-hidden="true">🌶️</div>
        <div className="hero-spice-float hero-spice-2" aria-hidden="true">⭐</div>
        <div className="hero-spice-float hero-spice-3" aria-hidden="true">🫚</div>
        <div className="hero-spice-float hero-spice-4" aria-hidden="true">🌿</div>
        <div className="hero-spice-float hero-spice-5" aria-hidden="true">🧄</div>

        <div className="hero-inner">
          {/* Left: Text content */}
          <div className="hero-content">
            <div className="hero-badge fade-in-up">
              <span className="hero-badge-dot" />
              Farm Fresh · Stone Ground
            </div>
            <h1 className="hero-title fade-in-up fade-in-up-delay-1">
              Pure Spices,<br />
              <em>Honest Origins,</em><br />
              No Gimmicks!
            </h1>
            <p className="hero-description fade-in-up fade-in-up-delay-2">
              Hand-sourced from Kashmir's saffron fields to Malabar's pepper vines. 
              Lab-tested, stone-ground, and packed in sustainable glass jars.
            </p>
            <div className="hero-cta-group fade-in-up fade-in-up-delay-3">
              <Link href="/shop" className="btn btn-hero-primary" id="hero-shop-now">
                Shop Collection
                <span className="btn-hero-arrow">→</span>
              </Link>
              <Link href="/about" className="btn btn-hero-secondary" id="hero-learn-more">
                Our Story
              </Link>
            </div>
            <div className="hero-trust fade-in-up fade-in-up-delay-4">
              <div className="hero-trust-item">
                <span>✓</span> Lab Tested
              </div>
              <div className="hero-trust-item">
                <span>✓</span> Glass Jars
              </div>
              <div className="hero-trust-item">
                <span>✓</span> Free Shipping ₹999+
              </div>
            </div>
          </div>

          {/* Right: Product showcase */}
          <div className="hero-showcase fade-in-up fade-in-up-delay-2">
            <div className="hero-product-grid">
              <Link href="/shop/kesar-dhaga" className="hero-product-card hero-product-featured">
                <img src="/images/products/kesar-dhaga.png" alt="Kesar Dhaga — Pure Kashmiri Saffron" />
                <div className="hero-product-label">
                  <span className="hero-product-tag">Premium</span>
                  <span className="hero-product-name">Kesar Dhaga</span>
                </div>
              </Link>
              <Link href="/shop/haldi-gold" className="hero-product-card hero-product-sm-1">
                <img src="/images/products/haldi-gold.png" alt="Haldi Gold — Lakadong Turmeric" />
                <div className="hero-product-label">
                  <span className="hero-product-name">Haldi Gold</span>
                </div>
              </Link>
              <Link href="/shop/laal-ras" className="hero-product-card hero-product-sm-2">
                <img src="/images/products/laal-ras.png" alt="Laal Ras — Kashmiri Red Chilli" />
                <div className="hero-product-label">
                  <span className="hero-product-tag">Bestseller</span>
                  <span className="hero-product-name">Laal Ras</span>
                </div>
              </Link>
              <Link href="/shop/elaichi" className="hero-product-card hero-product-sm-3">
                <img src="/images/products/elaichi.png" alt="Elaichi — Kerala Green Cardamom" />
                <div className="hero-product-label">
                  <span className="hero-product-name">Elaichi</span>
                </div>
              </Link>
            </div>
            <div className="hero-offer-badge">
              <span className="hero-offer-text">New Arrivals</span>
              <span className="hero-offer-subtext">Explore Collection →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USP STRIP ===== */}
      <section
        style={{
          backgroundColor: "var(--color-bg-warm)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            padding: "2.5rem 2rem",
          }}
        >
          {uspItems.map((item, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
              }}
              className="fade-in-up"
            >
              <span style={{ fontSize: "1.75rem" }}>{item.icon}</span>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-text-muted)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NEW ARRIVALS CAROUSEL ===== */}
      <ProductCarousel
        title="New Arrivals"
        products={newArrivals.length > 0 ? newArrivals : products.slice(0, 4)}
        viewAllHref="/shop"
      />

      {/* ===== BESTSELLERS CAROUSEL ===== */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <ProductCarousel
          title="Bestsellers"
          products={bestsellers.length > 0 ? bestsellers : products.slice(2, 6)}
          viewAllHref="/shop"
        />
      </div>

      {/* ===== EDITORIAL SECTION ===== */}
      <section
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "4rem 2rem",
        }}
      >
        <div className="section-header" style={{ marginBottom: "2.5rem" }}>
          <p className="section-header-tag">The spicejar Way</p>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
            Crafted with Intention
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {[
            {
              image: "/images/editorial.png",
              title: "Kitchen to Soul",
              text: "Every meal tells a story. Our spices are the opening line.",
            },
            {
              image: "/images/products/haldi-gold.png",
              title: "Glass, Not Plastic",
              text: "Sustainable glass jars that preserve freshness and look beautiful on your shelf.",
            },
            {
              image: "/images/products/kesar-dhaga.png",
              title: "Origin Matters",
              text: "Sourced directly from the farms where each spice grows best.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="category-card fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, aspectRatio: "3/4" }}
            >
              <img src={card.image} alt={card.title} />
              <div className="category-card-overlay" style={{ padding: "1.5rem" }}>
                <h3
                  className="category-card-name"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="category-card-count"
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "0.5rem",
                    letterSpacing: "0",
                    textTransform: "none",
                  }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BRAND STORY ===== */}
      <section style={{ backgroundColor: "var(--color-bg-warm)" }}>
        <div
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "5rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--color-accent)",
                fontWeight: 500,
                marginBottom: "1rem",
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Born From A Love For{" "}
              <em style={{ color: "var(--color-accent)" }}>Honest Spices</em>
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                marginBottom: "1rem",
                fontSize: "0.95rem",
              }}
            >
              In a world of adulterated spices, we went back to the source.
              We travel to Kashmir for saffron, to Meghalaya for turmeric, to
              Kerala for cardamom and pepper — building relationships with
              farmers who share our obsession with purity.
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontSize: "0.95rem",
              }}
            >
              Every jar is stone-ground in small batches, lab-tested for purity,
              and packed in glass — because great spices deserve better than plastic.
            </p>
            <Link href="/about" className="btn btn-primary" id="brand-story-cta">
              Read Our Story
            </Link>
          </div>
          <div
            style={{
              aspectRatio: "4/3",
              overflow: "hidden",
              borderRadius: "var(--border-radius)",
              border: "1px solid var(--color-border)",
            }}
          >
            <img
              src="/images/hero.png"
              alt="spicejar collection"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "5rem 2rem",
        }}
      >
        <div className="section-header" style={{ marginBottom: "2.5rem" }}>
          <p className="section-header-tag">Happy Kitchens</p>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
            What Our Community Says
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="card fade-in-up"
              style={{
                padding: "2rem",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: "1rem" }}>
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: "var(--color-accent)", fontSize: "0.9rem" }}>
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "var(--color-text)",
                  marginBottom: "1.5rem",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <p
            style={{
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-accent)",
              fontWeight: 500,
              marginBottom: "0.75rem",
            }}
          >
            Stay Connected
          </p>
          <h2
            className="newsletter-title"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Join the spicejar Family
          </h2>
          <p className="newsletter-text">
            Recipes, spice tips, and early access to new arrivals — delivered to your inbox.
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="input"
              placeholder="your@email.com"
              aria-label="Email for newsletter"
              id="newsletter-email"
            />
            <button type="submit" className="btn btn-primary" id="newsletter-submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
