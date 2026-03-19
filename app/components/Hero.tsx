"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #120F00 100%)",
    }}>
      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 79px,#D4AF37 79px,#D4AF37 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,#D4AF37 79px,#D4AF37 80px)",
      }}/>
      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }}/>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 900, margin: "0 auto" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ height: 1, width: 48, background: "#D4AF37" }}/>
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", color: "#D4AF37" }}>
            Luxury Perfumery · Est. 2020
          </span>
          <div style={{ height: 1, width: 48, background: "#D4AF37" }}/>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, lineHeight: 1.0,
          fontSize: "clamp(56px, 9vw, 110px)", color: "#FAF7F0",
          marginBottom: 20, letterSpacing: "-0.01em",
        }}>
          Luxury in{" "}
          <span style={{ fontStyle: "italic", color: "#D4AF37" }}>Every Drop</span>
        </h1>

        {/* Offer badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 12,
          border: "1px solid rgba(212,175,55,0.35)", padding: "12px 28px",
          marginBottom: 28, background: "rgba(212,175,55,0.05)",
        }}>
          <span style={{ color: "#D4AF37", fontSize: 12 }}>✦</span>
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#D4AF37" }}>
            Curated Pair Offer — Any 2 for AED 100
          </span>
          <span style={{ color: "#D4AF37", fontSize: 12 }}>✦</span>
        </div>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic",
          color: "rgba(250,247,240,0.5)", marginBottom: 48, lineHeight: 1.7,
          maxWidth: 480, margin: "0 auto 48px",
        }}>
          Where ancient botanicals meet modern alchemy — each bottle a story of seduction and memory.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#collection" style={{
            fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.28em",
            textTransform: "uppercase", fontWeight: 600,
            background: "#D4AF37", color: "#000", padding: "16px 40px",
            textDecoration: "none", transition: "all 0.3s",
            display: "inline-flex", alignItems: "center", gap: 10,
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#E8C97A"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(212,175,55,0.4)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "#D4AF37"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >
            Explore Collection
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#about" style={{
            fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.28em",
            textTransform: "uppercase", fontWeight: 500,
            background: "transparent", color: "#D4AF37",
            border: "1px solid rgba(212,175,55,0.4)", padding: "16px 40px",
            textDecoration: "none", transition: "all 0.3s",
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37"; (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.06)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.4)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            Our Story
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: 72, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.35 }}>
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, letterSpacing: "0.38em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #FAF7F0, transparent)" }}/>
        </div>
      </div>
    </section>
  );
}
