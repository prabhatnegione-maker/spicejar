"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/ayurveda", label: "Ayurveda" },
  { href: "/about", label: "Our Story" },
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems, openDrawer, mounted } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-brand">
          <img
            src="/images/logo.png"
            alt="spicejar — Premium Indian Spices"
            style={{ height: 80, width: "auto", maxWidth: "250px", objectFit: "contain", display: "block" }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "inline";
            }}
          />
          <span style={{ display: "none", fontFamily: "'DM Serif Display', serif", fontSize: "1.25rem", fontWeight: 400, color: "var(--color-text)" }}>spicejar</span>
        </Link>

        <nav className={`header-nav ${mobileOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="cart-button"
            onClick={openDrawer}
            aria-label="Open cart"
            id="cart-toggle"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {mounted && totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
