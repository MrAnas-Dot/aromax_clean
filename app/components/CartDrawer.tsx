"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeFromCart, updateQty, totalItems, totalPrice, isOfferApplied, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const pairs = Math.floor(totalItems / 2);
  const singles = totalItems % 2;

  return (
    <>
      {/* Overlay */}
      <div onClick={onClose} style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(4px)",
        zIndex: 200, opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none",
        transition: "opacity 0.35s ease",
      }}/>

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, width: "100%", maxWidth: 440,
        background: "#0D0D0D", borderLeft: "1px solid rgba(255,255,255,0.08)",
        zIndex: 300, display: "flex", flexDirection: "column",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
      }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 28px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 300, color: "#FAF7F0", letterSpacing: "0.04em" }}>Your Collection</h2>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 3 }}>{totalItems} {totalItems === 1 ? "item" : "items"}</p>
          </div>
          <button onClick={onClose} style={{
            width: 36, height: 36, border: "1px solid rgba(255,255,255,0.1)", background: "none",
            color: "rgba(255,255,255,0.45)", cursor: "pointer", fontSize: 16, display: "flex",
            alignItems: "center", justifyContent: "center", transition: "all 0.2s",
          }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.4)"; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
          >✕</button>
        </div>

        {/* Offer banner */}
        {totalItems > 0 && (
          <div style={{
            margin: "16px 20px 0",
            padding: "10px 16px", textAlign: "center",
            fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase",
            background: isOfferApplied ? "rgba(212,175,55,0.09)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${isOfferApplied ? "rgba(212,175,55,0.3)" : "rgba(255,255,255,0.08)"}`,
            color: isOfferApplied ? "#D4AF37" : "rgba(255,255,255,0.4)",
          }}>
            {totalItems === 1
              ? "✦ Add 1 more for the 2-for-AED-100 offer"
              : `✦ ${pairs} pair${pairs > 1 ? "s" : ""} × AED 100${singles > 0 ? ` + ${singles} × AED 69` : " — Offer applied!"}`}
          </div>
        )}

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
          {items.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 16, textAlign: "center" }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "rgba(255,255,255,0.25)" }}>Your collection is empty</p>
              <button onClick={onClose} style={{
                fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)", padding: "10px 24px",
                background: "none", cursor: "pointer",
              }}>Explore Fragrances</button>
            </div>
          ) : items.map(item => (
            <div key={item.id} style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "12px", background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}>
              <div style={{ position: "relative", width: 52, height: 62, flexShrink: 0, background: "#1A1A1A" }}>
                <Image src={item.image} alt={item.name} fill style={{ objectFit: "contain", padding: 4 }} sizes="52px"/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "#FAF7F0", marginBottom: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(250,247,240,0.28)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.notes}</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "#D4AF37", marginTop: 3 }}>AED {item.price}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {[[-1,"−"],[1,"+"]].map(([d, lbl]) => (
                  <button key={String(lbl)} onClick={() => updateQty(item.id, item.quantity + Number(d))} style={{
                    width: 26, height: 26, border: "1px solid rgba(255,255,255,0.1)",
                    background: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 14,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{lbl}</button>
                ))}
                <span style={{ color: "#fff", fontSize: 13, width: 16, textAlign: "center" }}>{item.quantity}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.2)", cursor: "pointer", fontSize: 18, lineHeight: 1, padding: 4 }}
                onMouseOver={e => (e.currentTarget.style.color = "#f87171")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}
              >×</button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && !showCheckout && (
          <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Total</span>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: "#D4AF37", fontWeight: 300 }}>AED {totalPrice}</span>
                {isOfferApplied && <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, color: "rgba(212,175,55,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Offer applied ✓</p>}
              </div>
            </div>
            <button onClick={() => setShowCheckout(true)} style={{
              background: "#D4AF37", color: "#000", border: "none", cursor: "pointer",
              fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.26em",
              textTransform: "uppercase", fontWeight: 700, padding: "16px",
              transition: "background 0.3s",
            }}
              onMouseOver={e => (e.currentTarget.style.background = "#E8C97A")}
              onMouseOut={e => (e.currentTarget.style.background = "#D4AF37")}
            >Proceed to Checkout</button>
            <button onClick={clearCart} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>Clear Cart</button>
          </div>
        )}

        {showCheckout && (
          <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.08)", overflowY: "auto", maxHeight: "60vh" }}>
            <button onClick={() => setShowCheckout(false)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 16, display: "flex", alignItems: "center", gap: 6 }}>← Back to cart</button>
            <CheckoutForm onSuccess={() => { clearCart(); setShowCheckout(false); onClose(); }}/>
          </div>
        )}
      </div>
    </>
  );
}
