"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart, Product } from "../context/CartContext";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addToCart, items } = useCart();
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const qty = items.find(i => i.id === product.id)?.quantity ?? 0;

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#161616" : "#111111",
        border: `1px solid ${hovered ? "rgba(212,175,55,0.28)" : "rgba(255,255,255,0.05)"}`,
        overflow: "hidden", position: "relative",
        transition: "all 0.4s ease",
        boxShadow: hovered ? "0 8px 40px rgba(212,175,55,0.1)" : "none",
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Offer badge */}
      <div style={{
        position: "absolute", top: 12, left: 12, zIndex: 10,
        background: "#D4AF37", color: "#000",
        fontFamily: "'Raleway', sans-serif", fontSize: 9, letterSpacing: "0.15em",
        textTransform: "uppercase", fontWeight: 700, padding: "4px 10px",
      }}>2 for AED 100</div>

      {/* Qty badge */}
      {qty > 0 && (
        <div style={{
          position: "absolute", top: 12, right: 12, zIndex: 10,
          background: "#000", border: "1px solid #D4AF37", color: "#D4AF37",
          fontSize: 10, fontWeight: 700, width: 24, height: 24, borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>{qty}</div>
      )}

      {/* Image */}
      <div style={{
        position: "relative", aspectRatio: "3/4",
        background: "linear-gradient(180deg, #1A1A1A 0%, #0D0D0D 100%)",
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)", zIndex: 1,
        }}/>
        {hovered && <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(212,175,55,0.1) 0%, transparent 60%)", zIndex: 1,
        }}/>}
        <div style={{
          position: "relative", width: "62%", height: "62%",
          transform: hovered ? "scale(1.06) translateY(-4px)" : "scale(1)",
          transition: "transform 0.6s ease",
          zIndex: 2,
        }}>
          <Image src="/perfume.jpg" alt={product.name} fill style={{ objectFit: "contain" }} sizes="(max-width: 768px) 50vw, 25vw"/>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "18px 18px 20px" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 400, color: "#FAF7F0", marginBottom: 5, letterSpacing: "0.04em", lineHeight: 1.2 }}>
          {product.name}
        </h3>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(250,247,240,0.32)", marginBottom: 16 }}>
          {product.notes}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#D4AF37", fontWeight: 300 }}>AED 69</span>
          <button onClick={handleAdd} style={{
            flex: 1, padding: "9px 0", cursor: "pointer",
            fontFamily: "'Raleway', sans-serif", fontSize: 9.5, letterSpacing: "0.2em",
            textTransform: "uppercase", fontWeight: 600, transition: "all 0.3s",
            background: added ? "#D4AF37" : "transparent",
            color: added ? "#000" : "#D4AF37",
            border: added ? "1px solid #D4AF37" : "1px solid rgba(212,175,55,0.38)",
          }}
            onMouseOver={e => { if (!added) { (e.currentTarget as HTMLElement).style.background = "#D4AF37"; (e.currentTarget as HTMLElement).style.color = "#000"; }}}
            onMouseOut={e => { if (!added) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}}
          >
            {added ? "✓ Added" : "Add to Collection"}
          </button>
        </div>
      </div>
    </div>
  );
}
