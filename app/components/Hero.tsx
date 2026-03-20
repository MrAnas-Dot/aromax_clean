"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{
      minHeight: "100svh",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #120F00 100%)",
    }}>

      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.035, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 79px,#D4AF37 79px,#D4AF37 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,#D4AF37 79px,#D4AF37 80px)",
      }} />

      {/* Glow orb */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: isMobile ? 340 : 700,
        height: isMobile ? 340 : 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        textAlign: "center",
        padding: isMobile ? "100px 24px 60px" : "0 24px",
        maxWidth: 900,
        margin: "0 auto",
        width: "100%",
      }}>

        {/* Eyebrow */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: isMobile ? 10 : 16,
          marginBottom: isMobile ? 24 : 32,
        }}>
          <div style={{ height: 1, width: isMobile ? 28 : 48, background: "#D4AF37" }} />
          <span style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: isMobile ? 8 : 10,
            letterSpacing: isMobile ? "0.3em" : "0.45em",
            textTransform: "uppercase",
            color: "#D4AF37",
          }}>
            {isMobile ? "Luxury Perfumery" : "Luxury Perfumery · Est. 2020"}
          </span>
          <div style={{ height: 1, width: isMobile ? 28 : 48, background: "#D4AF37" }} />
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          lineHeight: isMobile ? 1.1 : 1.0,
          fontSize: isMobile ? "clamp(44px, 13vw, 64px)" : "clamp(56px, 9vw, 110px)",
          color: "#FAF7F0",
          marginBottom: isMobile ? 16 : 20,
          letterSpacing: "-0.01em",
        }}>
          Luxury in{" "}
          <span style={{ fontStyle: "italic", color: "#D4AF37" }}>Every Drop</span>
        </h1>

        {/* Offer badge */}
        <div style={{
          display: "inline-flex", alignItems: "center",
          gap: isMobile ? 8 : 12,
          border: "1px solid rgba(212,175,55,0.35)",
          padding: isMobile ? "10px 18px" : "12px 28px",
          marginBottom: isMobile ? 20 : 28,
          background: "rgba(212,175,55,0.05)",
        }}>
          <span style={{ color: "#D4AF37", fontSize: isMobile ? 10 : 12 }}>✦</span>
          <span style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: isMobile ? 9 : 11,
            letterSpacing: isMobile ? "0.18em" : "0.28em",
            textTransform: "uppercase",
            color: "#D4AF37",
          }}>
            Any 2 for AED 100
          </span>
          <span style={{ color: "#D4AF37", fontSize: isMobile ? 10 : 12 }}>✦</span>
        </div>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: isMobile ? 17 : 20,
          fontStyle: "italic",
          color: "rgba(250,247,240,0.5)",
          lineHeight: 1.7,
          maxWidth: isMobile ? "100%" : 480,
          margin: isMobile ? "0 auto 36px" : "0 auto 48px",
          padding: isMobile ? "0 8px" : "0",
        }}>
          Where ancient botanicals meet modern alchemy — each bottle a story of seduction and memory.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 12 : 16,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <a href="#collection" style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 600,
            background: "#D4AF37",
            color: "#000",
            padding: isMobile ? "15px 32px" : "16px 40px",
            textDecoration: "none",
            transition: "all 0.3s",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            width: isMobile ? "100%" : "auto",
            justifyContent: "center",
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.background = "#E8C97A";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(212,175,55,0.4)";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.background = "#D4AF37";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Explore Collection
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a href="#about" style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 11,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 500,
            background: "transparent",
            color: "#D4AF37",
            border: "1px solid rgba(212,175,55,0.4)",
            padding: isMobile ? "15px 32px" : "16px 40px",
            textDecoration: "none",
            transition: "all 0.3s",
            width: isMobile ? "100%" : "auto",
            textAlign: "center",
            display: "inline-block",
          }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37";
              (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.06)";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.4)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            Our Story
          </a>
        </div>

        {/* Scroll hint — hidden on mobile to save space */}
        {!isMobile && (
          <div style={{
            marginTop: 72,
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 8, opacity: 0.35,
          }}>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 9, letterSpacing: "0.38em", textTransform: "uppercase",
            }}>
              Scroll
            </span>
            <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #FAF7F0, transparent)" }} />
          </div>
        )}
      </div>
    </section>
  );
}