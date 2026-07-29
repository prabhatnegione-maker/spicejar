"use client";

import { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getProduct, getRelatedProducts, getVariantsByPackaging, formatPrice } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import ProductCarousel from "@/components/ProductCarousel";

export default function ProductDetailPage() {
  const { handle } = useParams();
  const product = getProduct(handle);
  const relatedProducts = getRelatedProducts(handle, 4);
  const { addItem } = useCart();

  const hasPouch = product?.images?.pouch != null;
  const [activePack, setActivePack] = useState("jar");
  const [imgError, setImgError] = useState(false);

  const packVariants = useMemo(() => {
    if (!product) return [];
    return getVariantsByPackaging(product, activePack);
  }, [product, activePack]);

  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[1] || product?.variants[0]
  );
  // Track product view in database
  useEffect(() => {
    if (product) {
      fetch("/api/analytics/product-view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productHandle: product.handle,
          productName: product.name,
        }),
      }).catch((err) => console.error("Product view track error:", err));
    }
  }, [product]);

  // Reset variant selection when packaging type changes
  const handlePackChange = (pack) => {
    setActivePack(pack);
    const variants = getVariantsByPackaging(product, pack);
    if (variants.length > 0) {
      setSelectedVariant(variants[Math.floor(variants.length / 2)] || variants[0]);
    }
  };

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "6rem 2rem" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, marginBottom: "1rem" }}>
          Product Not Found
        </h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          The product you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link href="/shop" className="btn btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant);
  };

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const currentImage =
    activePack === "pouch" && product.images?.pouch
      ? product.images.pouch
      : product.images?.jar || product.image;

  useEffect(() => {
    setImgError(false);
  }, [currentImage]);

  const accordionItems = [
    { key: "origin", label: "Origin", content: product.origin },
    { key: "usage", label: "How to Use", content: product.usage },
    { key: "storage", label: "Storage", content: product.storage },
  ];

  return (
    <div style={{ paddingBottom: "var(--space-3xl)" }}>
      <div className="product-detail">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/shop">Shop</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>

        {/* Product Grid */}
        <div className="product-detail-grid">
          {/* Image */}
          <div 
            className={`product-detail-image fade-in ${imgError ? "product-card-placeholder" : ""}`}
            data-name={imgError ? product.name : undefined}
          >
            <img 
              src={currentImage} 
              alt={`${product.name} — ${product.subtitle}`} 
              style={{ display: imgError ? "none" : "block" }}
              onError={() => setImgError(true)}
            />
            {/* Badges */}
            <div className="pdp-badges">
              {product.tags?.includes("new") && (
                <span className="product-badge product-badge-new">New</span>
              )}
              {product.tags?.includes("bestseller") && (
                <span className="product-badge product-badge-best">Bestseller</span>
              )}
              {product.tags?.includes("premium") && (
                <span className="product-badge product-badge-premium">Premium</span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="product-detail-info fade-in-up">
            <span className="product-detail-category">{product.category}</span>
            <h1
              className="product-detail-title"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
            >
              {product.name}
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--color-text-muted)",
                marginBottom: "0.75rem",
                marginTop: "-0.5rem",
                letterSpacing: "0.01em",
              }}
            >
              {product.subtitle}
            </p>
            <div
              className="product-detail-price"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span>{formatPrice(selectedVariant.price)}</span>
              {product.comparePrice && activePack === "jar" && (
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    textDecoration: "line-through",
                    fontWeight: 400,
                  }}
                >
                  {formatPrice(product.comparePrice)}
                </span>
              )}
            </div>
            <p className="product-detail-description">{product.description}</p>

            {/* Packaging Type Toggle */}
            {hasPouch && (
              <div className="pdp-pack-toggle">
                <p className="product-detail-variant-label">Packaging</p>
                <div className="pdp-pack-options">
                  <button
                    className={`pdp-pack-btn ${activePack === "jar" ? "active" : ""}`}
                    onClick={() => handlePackChange("jar")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="3" width="12" height="4" rx="1" />
                      <path d="M6 7v13a2 2 0 002 2h8a2 2 0 002-2V7" />
                    </svg>
                    <span>Glass Jar</span>
                    <small>Premium</small>
                  </button>
                  <button
                    className={`pdp-pack-btn ${activePack === "pouch" ? "active" : ""}`}
                    onClick={() => handlePackChange("pouch")}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 2h8l2 4v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6l2-4z" />
                      <path d="M6 6h12" />
                    </svg>
                    <span>Pouch</span>
                    <small>Value Pack</small>
                  </button>
                </div>
              </div>
            )}

            {/* Variant Selector */}
            <div className="product-detail-variants">
              <p className="product-detail-variant-label">
                Select Size ({activePack === "jar" ? "Glass Jar" : "Pouch"})
              </p>
              <div className="product-detail-variant-options">
                {packVariants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`variant-option ${selectedVariant.id === variant.id ? "active" : ""}`}
                    onClick={() => setSelectedVariant(variant)}
                    id={`variant-${variant.id}`}
                  >
                    {variant.label.replace(/^(Jar|Pouch)\s·\s/, "")}
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        color: "var(--color-text-muted)",
                        marginTop: 2,
                      }}
                    >
                      {formatPrice(variant.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="product-detail-actions">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleAddToCart}
                style={{ flex: 1 }}
                id="product-add-to-cart"
              >
                Add to Cart — {formatPrice(selectedVariant.price)}
              </button>
            </div>

            {/* Trust badges */}
            <div className="pdp-trust-strip">
              <div className="pdp-trust-badge">
                <span>🌱</span> Farm to Jar
              </div>
              <div className="pdp-trust-badge">
                <span>🔬</span> Lab Tested
              </div>
              <div className="pdp-trust-badge">
                <span>✋</span> Stone Ground
              </div>
              <div className="pdp-trust-badge">
                <span>♻️</span> Sustainable
              </div>
            </div>

            {/* Accordion */}
            <div className="accordion">
              {accordionItems.map((item) => (
                <div
                  key={item.key}
                  className={`accordion-item ${openAccordion === item.key ? "open" : ""}`}
                >
                  <button
                    className="accordion-trigger"
                    onClick={() => toggleAccordion(item.key)}
                    id={`accordion-${item.key}`}
                  >
                    <span>{item.label}</span>
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <div className="accordion-body">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div style={{ borderTop: "1px solid var(--color-border)", marginTop: "3rem" }}>
          <ProductCarousel
            title="You May Also Like"
            products={relatedProducts}
            viewAllHref="/shop"
          />
        </div>
      )}
    </div>
  );
}
