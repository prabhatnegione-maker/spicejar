"use client";

import { useRef, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ title, products, viewAllHref = "/shop" }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(".product-card")?.offsetWidth || 300;
    el.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2 className="featured-title">{title}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href={viewAllHref} className="btn-text" style={{ textDecoration: "none" }}>
            View All →
          </a>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => scroll(-1)}
              className="btn btn-secondary btn-sm"
              style={{
                width: 40,
                height: 40,
                padding: 0,
                opacity: canScrollLeft ? 1 : 0.3,
                borderRadius: "50%",
              }}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              className="btn btn-secondary btn-sm"
              style={{
                width: 40,
                height: 40,
                padding: 0,
                opacity: canScrollRight ? 1 : 0.3,
                borderRadius: "50%",
              }}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingBottom: 8,
        }}
      >
        <style>{`
          .carousel-scroll::-webkit-scrollbar { display: none; }
        `}</style>
        {products.map((product, i) => (
          <div
            key={product.id}
            style={{
              minWidth: "calc(25% - 18px)",
              maxWidth: 300,
              scrollSnapAlign: "start",
              flexShrink: 0,
            }}
          >
            <ProductCard product={product} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
