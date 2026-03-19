"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 48px",
      background: scrolled 
        ? "rgba(8,8,8,0.97)" 
        : "linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)",
      borderBottom: scrolled ? "1px solid rgba(212,175,55,0.2)" : "none",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      transition: "all 0.4s ease",
    }}>

      {/* ✅ LOGO */}
      <a href="/" style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        lineHeight: 1
      }}>
        <Image
          src="/picture.png"   // your image
          alt="AROMAX Logo"
          width={50}
          height={50}
          priority
        />

        <span style={{
          fontSize: 9,
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgb(255, 255, 255)",
          marginTop: 4,
          fontFamily: "'Raleway', sans-serif"
          
          
        }}>
         <span className="logo-text">AROMAX</span>
          Define Your Presence
        </span>
      </a>

      {/* LINKS */}
      <div style={{ display: "flex", gap: 40 }}>
        {["Collection", "About", "Contact"].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            textDecoration: "none",
            transition: "color 0.3s",
          }}
            onMouseOver={e => (e.currentTarget.style.color = "#D4AF37")}
            onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            {l}
          </a>
        ))}
      </div>

      {/* CART */}
      <button onClick={onCartClick} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 8,
        position: "relative",
      }}>
        <div style={{ position: "relative" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>

          {totalItems > 0 && (
            <span style={{
              position: "absolute",
              top: -8,
              right: -8,
              background: "#D4AF37",
              color: "#000",
              fontSize: 9,
              fontWeight: 700,
              width: 17,
              height: 17,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {totalItems}
            </span>
          )}
        </div>

        <span style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)"
        }}>
          Cart
        </span>
      </button>

    </nav>
  );
}
