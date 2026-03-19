"use client";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="collection" style={{ padding: "90px 40px", background: "#0A0A0A" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 18 }}>
            <div style={{ height: 1, width: 40, background: "#D4AF37" }}/>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#D4AF37" }}>
              Signature Collection
            </span>
            <div style={{ height: 1, width: 40, background: "#D4AF37" }}/>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 58px)", fontWeight: 300, color: "#FAF7F0", marginBottom: 16, letterSpacing: "0.04em" }}>
            Crafted with <span style={{ fontStyle: "italic", color: "#D4AF37" }}>Intention</span>
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, color: "rgba(250,247,240,0.38)", maxWidth: 380, margin: "0 auto 20px" }}>
            Thirteen exclusive fragrances. Each one a universe.
          </p>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: 50, padding: "8px 24px",
          }}>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 500 }}>
              ✦ Pick Any 2 — Pay Only AED 100 ✦
            </span>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 2,
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
