"use client";

import { useEffect } from "react";

export default function NotificationToast({ message, type = "success", onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  const isSuccess = type === "success";

  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
        backgroundColor: isSuccess ? "#1E3A1E" : "#4A1212",
        color: "#FFFFFF",
        padding: "1rem 1.35rem",
        borderRadius: 14,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: `1px solid ${isSuccess ? "rgba(74, 222, 128, 0.4)" : "rgba(248, 113, 113, 0.4)"}`,
        backdropFilter: "blur(8px)",
        maxWidth: 420,
        animation: "fadeInDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          backgroundColor: isSuccess ? "#22C55E" : "#EF4444",
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.9rem",
          fontWeight: "bold",
          flexShrink: 0,
        }}
      >
        {isSuccess ? "✓" : "✕"}
      </div>
      <span style={{ fontSize: "0.9rem", fontWeight: 500, flexGrow: 1, lineHeight: 1.4 }}>
        {message}
      </span>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "1.1rem",
          cursor: "pointer",
          padding: 0,
          lineHeight: 1,
        }}
      >
        ✕
      </button>
    </div>
  );
}
