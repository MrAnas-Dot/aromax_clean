"use client";

import { useState, useEffect } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
      setIsTablet(window.innerWidth >= 480 && window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive grid columns
  const gridColumns = isMobile
    ? "repeat(2, 1fr)"          // 2 columns on phones
    : isTablet
    ? "repeat(2, 1fr)"          // 2 columns on tablets
    : "repeat(auto-fill, minmax(240px, 1fr))"; // desktop: auto

  return (
    <section
      id="collection"
      style={{
        padding: isMobile ? "60px 16px" : isTablet ? "70px 24px" : "90px 40px",
        background: "#0A0A0A",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          textAlign: "center",
          marginBottom: isMobile ? 36 : 56,
        }}>

          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: isMobile ? 10 : 16,
            marginBottom: isMobile ? 14 : 18,
          }}>
            <div style={{ height: 1, width: isMobile ? 24 : 40, background: "#D4AF37" }} />
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: isMobile ? 8 : 10,
              letterSpacing: isMobile ? "0.28em" : "0.42em",
              textTransform: "uppercase",
              color: "#D4AF37",
            }}>
              Signature Collection
            </span>
            <div style={{ height: 1, width: isMobile ? 24 : 40, background: "#D4AF37" }} />
          </div>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: isMobile ? "clamp(28px, 8vw, 36px)" : "clamp(36px, 5vw, 58px)",
            fontWeight: 300,
            color: "#FAF7F0",
            marginBottom: isMobile ? 12 : 16,
            letterSpacing: "0.04em",
            lineHeight: 1.15,
          }}>
            Crafted with{" "}
            <span style={{ fontStyle: "italic", color: "#D4AF37" }}>Intention</span>
          </h2>

          {/* Subtext */}
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: isMobile ? 12 : 13,
            color: "rgba(250,247,240,0.38)",
            maxWidth: 340,
            margin: isMobile ? "0 auto 16px" : "0 auto 20px",
            lineHeight: 1.7,
          }}>
            Thirteen exclusive fragrances. Each one a universe.
          </p>

          {/* Offer pill */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: 50,
            padding: isMobile ? "7px 16px" : "8px 24px",
          }}>
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: isMobile ? 8 : 10,
              letterSpacing: isMobile ? "0.12em" : "0.2em",
              textTransform: "uppercase",
              color: "#D4AF37",
              fontWeight: 500,
            }}>
              ✦ Pick Any 2 — Pay Only AED 100 ✦
            </span>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gap: isMobile ? 1 : 2,
          background: "rgba(255,255,255,0.04)",
        }}>
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}