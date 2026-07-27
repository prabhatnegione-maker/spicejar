"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { formatPrice, getVariantsByPackaging } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();
  const hasPouch = product.images?.pouch != null;
  const [activePack, setActivePack] = useState("jar");
  const [imgError, setImgError] = useState(false);

  const currentImage =
    activePack === "pouch" && product.images?.pouch
      ? product.images.pouch
      : product.images?.jar || product.image;

  useEffect(() => {
    setImgError(false);
  }, [currentImage]);

  const variants = getVariantsByPackaging(product, activePack);
  const displayPrice = variants.length > 0 ? variants[Math.floor(variants.length / 2)]?.price : product.price;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = variants[Math.floor(variants.length / 2)] || variants[0] || product.variants[1] || product.variants[0];
    addItem(product, defaultVariant);
  };

  return (
    <div
      className="product-card fade-in-up"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <Link
        href={`/shop/${product.handle}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div 
          className={`product-card-image ${imgError ? "product-card-placeholder" : ""}`}
          data-name={imgError ? product.name : undefined}
        >
          <img
            src={currentImage}
            alt={`${product.name} — ${product.subtitle}`}
            loading="lazy"
            style={{ display: imgError ? "none" : "block" }}
            onError={() => setImgError(true)}
          />

          {/* Badges */}
          <div className="product-card-badges">
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

          {/* Quick add overlay */}
          <div className="product-card-overlay-action">
            <button
              className="product-card-quick-add"
              onClick={handleAddToCart}
              aria-label={`Add ${product.name} to cart`}
            >
              + Add to Cart
            </button>
          </div>
        </div>

        <div className="product-card-info">
          <span className="product-card-category">{product.category}</span>
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-subtitle">{product.subtitle}</p>

          <div className="product-card-price-row">
            <span className="product-card-price">
              {formatPrice(displayPrice)}
            </span>
            {product.comparePrice && activePack === "jar" && (
              <span className="product-card-compare-price">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Packaging toggle */}
      {hasPouch && (
        <div className="product-card-pack-toggle">
          <button
            className={`pack-toggle-btn ${activePack === "jar" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActivePack("jar");
            }}
            title="Glass Jar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="3" width="12" height="4" rx="1" />
              <path d="M6 7v13a2 2 0 002 2h8a2 2 0 002-2V7" />
            </svg>
            Jar
          </button>
          <button
            className={`pack-toggle-btn ${activePack === "pouch" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActivePack("pouch");
            }}
            title="Pouch"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2h8l2 4v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6l2-4z" />
              <path d="M6 6h12" />
            </svg>
            Pouch
          </button>
        </div>
      )}
    </div>
  );
}
