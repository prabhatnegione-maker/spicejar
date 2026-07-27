"use client";

import Link from "next/link";

const ayurvedicHerbs = [
  {
    name: "Haldi (Turmeric)",
    sanskrit: "Haridra",
    focus: "Liver Detox & Skin Glow",
    description: "A powerful anti-inflammatory and antioxidant. Haldi supports liver detoxification and digestion. By clearing Ama (toxins) from the gut, it soothes systemic inflammation, resulting in a natural, radiant skin glow.",
    shopLink: "/shop/haldi-gold",
    image: "/images/products/haldi-gold.png"
  },
  {
    name: "Saunf (Fennel)",
    sanskrit: "Shatapushpa",
    focus: "Cooling Digestion",
    description: "A cooling herb that enhances Agni (digestive fire) without aggravating Pitta (heat). Chewing fennel after meals gently soothes the gut lining, reduces bloating, and prevents heat-related skin breakouts.",
    shopLink: "/shop/saunf",
    image: "/images/products/saunf.png"
  },
  {
    name: "Amla",
    sanskrit: "Amalaki",
    focus: "Gut Immunity & Anti-Aging",
    description: "One of the richest natural sources of Vitamin C. Amla boosts gut immunity, supports healthy digestive enzyme function, and protects the skin from oxidative stress and premature aging.",
    shopLink: null,
    image: null
  },
  {
    name: "Triphala",
    sanskrit: "Triphala",
    focus: "Gentle Cleansing",
    description: "A foundational blend of three fruits (Amla, Bibhitaki, Haritaki). Triphala acts as a gentle digestive cleanser, promoting regular bowel movements and eliminating toxins that cause dull, congested skin.",
    shopLink: null,
    image: null
  },
  {
    name: "Neem",
    sanskrit: "Nimba",
    focus: "Blood Purification",
    description: "Highly regarded for its cooling and detoxifying properties. Neem is traditionally used to address skin conditions like acne and rashes from the inside out by deeply purifying the blood.",
    shopLink: null,
    image: null
  }
];

export default function AyurvedaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundColor: "var(--color-bg-warm)", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--color-accent)",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
          className="fade-in-up"
        >
          Ancient Wisdom · Modern Vitality
        </p>
        <h1
          className="about-hero-title fade-in-up fade-in-up-delay-1"
          style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, maxWidth: "800px", margin: "0 auto" }}
        >
          The Gut-Skin Connection
        </h1>
        <p className="about-hero-text fade-in-up fade-in-up-delay-2" style={{ maxWidth: "650px", margin: "1.5rem auto 0" }}>
          In Ayurveda, the health of your skin is a direct reflection of your gut. 
          A strong <em>Agni</em> (digestive fire) ensures nourishment, while sluggish digestion creates <em>Ama</em> (toxins) that manifest as skin inflammation and dullness. 
          Discover the herbs that heal from within.
        </p>
      </section>

      {/* Herbs Grid Section */}
      <section style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
          {ayurvedicHerbs.map((herb, i) => (
            <div 
              key={herb.name} 
              className="fade-in-up" 
              style={{ 
                animationDelay: `${i * 0.1}s`, 
                backgroundColor: "var(--color-bg)", 
                border: "1px solid var(--color-border)", 
                borderRadius: "16px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Herb Header */}
              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-text-muted)" }}>
                  {herb.sanskrit}
                </span>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2rem", marginTop: "0.25rem", color: "var(--color-accent)" }}>
                  {herb.name}
                </h3>
                <p style={{ display: "inline-block", backgroundColor: "var(--color-bg-warm)", padding: "4px 12px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 500, marginTop: "0.75rem" }}>
                  {herb.focus}
                </p>
              </div>

              {/* Herb Description */}
              <p style={{ lineHeight: 1.6, color: "var(--color-text)", flexGrow: 1 }}>
                {herb.description}
              </p>

              {/* Optional Image & Shop Link */}
              {herb.shopLink && (
                <div style={{ marginTop: "2rem", borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {herb.image && (
                    <img 
                      src={herb.image} 
                      alt={herb.name} 
                      style={{ width: "60px", height: "60px", objectFit: "contain", borderRadius: "8px", border: "1px solid var(--color-border)" }}
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  )}
                  <Link href={herb.shopLink} className="btn btn-secondary" style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                    Shop {herb.name.split(" ")[0]} →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy & Disclaimer Section */}
      <section style={{ backgroundColor: "var(--color-bg-warm)", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "2.25rem", marginBottom: "1.5rem" }}>
            A Blissful Life
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem", color: "var(--color-text)" }}>
            Our exploration of the Vedas is not meant to challenge modern science, but rather to complement it. We believe in creating a blissful, balanced life by remembering the traditional wisdom of our ancestors. Holistic well-being involves eating whole foods, staying hydrated, managing stress, and tuning into what your body needs.
          </p>
          <div style={{ padding: "1.5rem", border: "1px dashed var(--color-border)", borderRadius: "8px", fontSize: "0.85rem", color: "var(--color-text-muted)", textAlign: "left" }}>
            <strong>Disclaimer:</strong> The information on this page is rooted in traditional Ayurvedic philosophy and is provided for educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider or Ayurvedic practitioner before starting any new herbal regimen, especially if you have existing health conditions.
          </div>
        </div>
      </section>
    </div>
  );
}
