"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/data";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase().replace(/\s+/g, "-") === activeCategory
      );
    }

    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [activeCategory, sortBy]);

  return (
    <div style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-3xl)" }}>
      {/* Breadcrumb */}
      <div className="container" style={{ marginBottom: "var(--space-md)" }}>
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Shop</span>
        </nav>
      </div>

      {/* Page Title */}
      <div className="container" style={{ marginBottom: "var(--space-2xl)" }}>
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: 400,
          }}
        >
          Our Collection
        </h1>
        <p style={{ color: "var(--color-text-muted)", marginTop: "0.5rem", fontSize: "0.95rem" }}>
          Pure spices, honestly sourced, beautifully jarred.
        </p>
      </div>

      {/* Shop Layout */}
      <div className="shop-layout">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <h3 className="shop-sidebar-title">Categories</h3>
          <div className="shop-filter-list">
            <button
              className={`shop-filter-item ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
              id="filter-all"
            >
              All Products
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`shop-filter-item ${activeCategory === cat.handle ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.handle)}
                id={`filter-${cat.handle}`}
              >
                {cat.name}
                <span style={{ color: "var(--color-text-muted)", marginLeft: 4, fontSize: "0.75rem" }}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Products */}
        <div>
          <div className="shop-header">
            <p className="shop-results-count">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
            <div className="shop-sort">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                id="sort-select"
              >
                <option value="default">Sort by: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
              <p style={{ color: "var(--color-text-muted)" }}>
                No products found in this category.
              </p>
              <button
                className="btn btn-secondary"
                style={{ marginTop: "1rem" }}
                onClick={() => setActiveCategory("all")}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
