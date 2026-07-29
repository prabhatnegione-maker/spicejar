"use client";

import { useState } from "react";
import Link from "next/link";
import { submitContactForm } from "@/lib/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, message: "" });

    const res = await submitContactForm(formData);

    if (res.success) {
      setStatus({
        loading: false,
        success: true,
        message: res.message || "Thank you for reaching out! We'll reply within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus({
        loading: false,
        success: false,
        message: res.error || "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "3rem auto", padding: "0 1.5rem" }}>
      <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
        <Link href="/">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Contact Us</span>
      </nav>

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2.5rem",
            fontWeight: 400,
            marginBottom: "0.5rem",
          }}
        >
          Get in Touch
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1rem", maxWidth: 540, margin: "0 auto" }}>
          Have questions about our single-origin spices, bulk orders, or custom blends? We&apos;d love to hear from you.
        </p>
      </div>

      <div
        style={{
          background: "var(--color-bg-warm, #FAF8F5)",
          borderRadius: 20,
          border: "1px solid var(--color-border, #E5E0D8)",
          padding: "2.5rem 2rem",
          boxShadow: "0 10px 30px rgba(44, 24, 16, 0.05)",
        }}
      >
        {status.message && (
          <div
            style={{
              padding: "1rem",
              borderRadius: 10,
              marginBottom: "1.5rem",
              fontSize: "0.9rem",
              backgroundColor: status.success ? "#F4F8F3" : "#FDF2F2",
              color: status.success ? "#2E7D32" : "#9B1C1C",
              border: `1px solid ${status.success ? "#C3E2C2" : "#F8B4B4"}`,
            }}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ananya Sharma"
                style={{
                  width: "100%",
                  padding: "0.8rem 1rem",
                  borderRadius: 10,
                  border: "1px solid #CCC",
                  fontSize: "0.95rem",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="ananya@example.com"
                style={{
                  width: "100%",
                  padding: "0.8rem 1rem",
                  borderRadius: 10,
                  border: "1px solid #CCC",
                  fontSize: "0.95rem",
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Sourcing Inquiry / Custom Spice Blend"
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: 10,
                border: "1px solid #CCC",
                fontSize: "0.95rem",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: 6 }}>
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              style={{
                width: "100%",
                padding: "0.8rem 1rem",
                borderRadius: 10,
                border: "1px solid #CCC",
                fontSize: "0.95rem",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="btn btn-primary"
            style={{
              padding: "0.9rem 2rem",
              fontSize: "1rem",
              fontWeight: 600,
              alignSelf: "flex-start",
              marginTop: "0.5rem",
            }}
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
