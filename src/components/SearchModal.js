"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { performSearch } from "@/lib/search";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      if (inputRef.current) setTimeout(() => inputRef.current.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const searchResults = useMemo(() => performSearch(query), [query]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Log search query in background
      fetch("/api/analytics/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query.trim(),
          resultsCount: searchResults.length,
        }),
      }).catch((err) => console.error("Search tracking error:", err));

      onClose();
      router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="search-modal-form">
          <svg
            className="search-modal-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search spices, herbs, or blends..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="search-modal-close" onClick={onClose} aria-label="Close search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </form>

        {query.trim() !== "" && (
          <div className="search-results">
            {searchResults.length > 0 ? (
              <ul className="search-results-list">
                {searchResults.slice(0, 5).map((product) => (
                  <li key={product.id} className="search-result-item">
                    <Link
                      href={`/shop/${product.handle}`}
                      onClick={onClose}
                      className="search-result-link"
                    >
                      <div className="search-result-image">
                        <img src={product.image} alt={product.name} style={{ mixBlendMode: "darken" }} />
                      </div>
                      <div className="search-result-details">
                        <span className="search-result-name">{product.name}</span>
                        <span className="search-result-subtitle">{product.subtitle}</span>
                      </div>
                      <div className="search-result-price">
                        ₹{product.price}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="search-results-empty">
                <p>No products found for "{query}".</p>
                <Link href="/shop" onClick={onClose} className="btn btn-primary btn-sm" style={{ marginTop: "1rem" }}>
                  Browse Shop
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
