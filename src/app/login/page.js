"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-section">
          <div className="login-header">
            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", marginBottom: "0.5rem", fontWeight: 400 }}>
              Welcome back
            </h1>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
              Sign in to manage your orders, save your favorite spices, and get early access to new harvests.
            </p>
          </div>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" className="input" placeholder="your@email.com" required />
            </div>
            
            <div className="form-group">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
              <input type="password" id="password" className="input" placeholder="••••••••" required />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              Sign in
            </button>
          </form>

          <p className="login-footer">
            Don't have an account? <Link href="/register">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
