"use client";
import { useCart } from "../context/CartContext";

export default function StickyCartBar({ onCartClick }: { onCartClick: () => void }) {
  const { totalItems, totalPrice, isOfferApplied } = useCart();
  if (totalItems === 0) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90,
      background: "#0D0D0D", borderTop: "1px solid rgba(212,175,55,0.3)",
      boxShadow: "0 -4px 30px rgba(212,175,55,0.12)",
      padding: "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{
          background: "#D4AF37", color: "#000",
          fontFamily: "'Raleway', sans-serif", fontSize: 10, fontWeight: 800,
          width: 26, height: 26, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
        }}>{totalItems}</span>
        <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
          {totalItems === 1 ? "item" : "items"} in collection
        </span>
        {isOfferApplied && (
          <span style={{
            fontFamily: "'Raleway', sans-serif", fontSize: 9, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#D4AF37",
            background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.22)",
            padding: "4px 12px",
          }}>✓ Pair offer</span>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: "#D4AF37", fontWeight: 300 }}>AED {totalPrice}</span>
        <button onClick={onCartClick} style={{
          background: "#D4AF37", color: "#000", border: "none", cursor: "pointer",
          fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.22em",
          textTransform: "uppercase", fontWeight: 700, padding: "12px 28px",
          transition: "background 0.25s",
        }}
          onMouseOver={e => (e.currentTarget.style.background = "#E8C97A")}
          onMouseOut={e => (e.currentTarget.style.background = "#D4AF37")}
        >View Cart & Checkout</button>
      </div>
    </div>
  );
}
