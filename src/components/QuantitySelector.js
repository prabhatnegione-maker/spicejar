"use client";

export default function QuantitySelector({ value, onChange }) {
  return (
    <div className="qty-selector">
      <button
        className="qty-btn"
        onClick={() => onChange(Math.max(0, value - 1))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="qty-value">{value}</span>
      <button
        className="qty-btn"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
