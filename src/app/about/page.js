import Link from "next/link";

export const metadata = {
  title: "Our Story — spicejar",
  description: "From Indian farms to your kitchen. The story behind spicejar's commitment to pure, honest, sustainably-packaged spices.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="about-hero">
        <p
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-accent)",
            fontWeight: 500,
            marginBottom: "1.5rem",
          }}
        >
          Our Story
        </p>
        <h1
          className="about-hero-title"
          style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
        >
          Spices the Way They Were Meant to Be
        </h1>
        <p className="about-hero-text">
          We started spicejar with a simple conviction — that the spices reaching
          Indian kitchens had strayed too far from what they should be. Mixed with
          fillers, stripped of essential oils, and packed in plastic. We set out to
          change that, one glass jar at a time.
        </p>
      </section>

      {/* Sourcing Section */}
      <section className="about-section">
        <div
          className="about-image"
          style={{ backgroundColor: "var(--color-bg-warm)" }}
        >
          <img
            src="/images/editorial.png"
            alt="Spice sourcing from Indian farms"
          />
        </div>
        <div className="about-content">
          <span className="about-content-tag">Sourcing</span>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
            Direct From the Source
          </h3>
          <p>
            We don't buy from middlemen. Our team travels to the regions where
            each spice grows best — the saffron fields of Pampore, the turmeric
            hills of Meghalaya, the pepper vines of Malabar, the cardamom estates
            of Idukki. We build long-term relationships with farmers who share our
            obsession with purity and quality.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Every batch is hand-selected, and we pay fair prices that ensure
            sustainable farming practices for generations to come.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="about-section reverse">
        <div
          className="about-image"
          style={{ backgroundColor: "var(--color-bg-warm)" }}
        >
          <img
            src="/images/products/garam-masala.png"
            alt="Stone grinding spices"
          />
        </div>
        <div className="about-content">
          <span className="about-content-tag">Process</span>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
            Small Batch, Stone Ground
          </h3>
          <p>
            Industrial grinding generates heat that destroys the volatile oils
            that give spices their aroma and flavour. We use traditional stone
            chakki grinding in small batches — slower, gentler, and infinitely
            better. Every spice retains its essential character.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Each batch is lab-tested for purity, heavy metals, and
            adulterants. If it doesn't meet our standards, it doesn't go in a jar.
          </p>
        </div>
      </section>

      {/* Glass Jar Philosophy */}
      <section className="about-section">
        <div
          className="about-image"
          style={{ backgroundColor: "var(--color-bg-warm)" }}
        >
          <img
            src="/images/products/elaichi.png"
            alt="spicejar glass jars"
          />
        </div>
        <div className="about-content">
          <span className="about-content-tag">Packaging</span>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}>
            Glass, Not Plastic
          </h3>
          <p>
            Plastic packaging leaches chemicals and allows light and moisture to
            degrade spices. Our glass jars are non-reactive, airtight, and protect
            every spice's essential oils, colour, and potency for months longer
            than plastic alternatives.
          </p>
          <p style={{ marginTop: "1rem" }}>
            When the spice is gone, the jar stays. Use them for storage, as
            kitchen decor, or return them to us for a refill. Beautiful things
            shouldn't be disposable.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about-values" style={{ backgroundColor: "var(--color-bg-warm)", padding: "5rem 2rem" }}>
        <p
          style={{
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-accent)",
            fontWeight: 500,
            marginBottom: "1rem",
          }}
        >
          Our Values
        </p>
        <h2
          className="about-values-title"
          style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400, marginBottom: "3rem" }}
        >
          What We Stand For
        </h2>
        <div className="about-values-grid">
          {[
            {
              number: "01",
              title: "Purity",
              text: "Zero fillers, zero additives, zero artificial colours. Every jar contains one thing: the spice on the label.",
            },
            {
              number: "02",
              title: "Transparency",
              text: "We tell you exactly where each spice comes from, how it was processed, and what tests it passed. No secrets.",
            },
            {
              number: "03",
              title: "Sustainability",
              text: "Glass jars, recycled paper labels, carbon-offset shipping. We're building a brand that gives back more than it takes.",
            },
          ].map((value) => (
            <div key={value.number}>
              <p className="about-value-number">{value.number}</p>
              <h4 className="about-value-title">{value.title}</h4>
              <p className="about-value-text">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "5rem 2rem",
          maxWidth: "var(--max-width-text)",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            marginBottom: "1.5rem",
          }}
        >
          Ready to Taste the Difference?
        </h2>
        <p
          style={{
            color: "var(--color-text-muted)",
            marginBottom: "2rem",
            lineHeight: 1.7,
          }}
        >
          Experience spices the way nature intended — pure, potent, and packed
          with care.
        </p>
        <Link href="/shop" className="btn btn-primary btn-lg" id="about-shop-cta">
          Explore Our Collection
        </Link>
      </section>
    </div>
  );
}
