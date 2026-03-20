"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";


export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const textMuted = "rgba(255,255,255,0.55)";
  const iconStroke = "rgba(255,255,255,0.65)";
  const navBg = scrolled
    ? "rgba(8,8,8,0.97)"
    : "linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)";

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        // Tight padding for 360px — fits everything in one row
        padding: isMobile ? "11px 16px" : "18px 48px",
        height: isMobile ? 58 : "auto",
        background: menuOpen ? "rgba(8,8,8,0.99)" : navBg,
        borderBottom: scrolled || menuOpen ? "1px solid rgba(212,175,55,0.2)" : "none",
        backdropFilter: scrolled || menuOpen ? "blur(10px)" : "none",
        transition: "all 0.4s ease",
        boxSizing: "border-box",
      }}>

        {/* LOGO */}
        <a href="/" style={{
          textDecoration: "none", display: "flex",
          alignItems: "center",
          gap: isMobile ? 8 : 12,
          flexShrink: 0,
        }}>
          <Image
            src="/picture.png"
            alt="AROMYX Logo"
            width={isMobile ? 30 : 40}
            height={isMobile ? 30 : 40}
            priority
          />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? 16 : 20,
              fontWeight: 600,
              letterSpacing: isMobile ? "0.19em" : "0.25em",
              color: "#D4AF37",
            }}>
              AROMYX
            </span>
            {/* Show tagline on 390px+ */}
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 7, letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginTop: 3,
            }}>
              Define Your Presence
            </span>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 40 }}>
            {["Collection", "About", "Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                fontFamily: "'Raleway', sans-serif", fontSize: 10,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: textMuted, textDecoration: "none", transition: "color 0.3s",
              }}
                onMouseOver={e => (e.currentTarget.style.color = "#D4AF37")}
                onMouseOut={e => (e.currentTarget.style.color = textMuted)}
              >
                {l}
              </a>
            ))}
          </div>
        )}

        {/* RIGHT SIDE — compact row for 360px */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: isMobile ? 8 : 16,
          flexShrink: 0,
        }}>

          {/* CART ICON */}
          <button onClick={onCartClick} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center",
            padding: isMobile ? "6px" : "0",
            position: "relative",
          }}>
            <div style={{ position: "relative" }}>
              <svg
                width={isMobile ? 19 : 22}
                height={isMobile ? 19 : 22}
                viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {totalItems > 0 && (
                <span style={{
                  position: "absolute", top: -6, right: -6,
                  background: "#D4AF37", color: "#000",
                  fontSize: 8, fontWeight: 700,
                  width: 14, height: 14, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {totalItems}
                </span>
              )}
            </div>
          </button>

          {/* HAMBURGER — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none", border: "none", cursor: "pointer",
                display: "flex", flexDirection: "column",
                justifyContent: "center", alignItems: "center",
                gap: 5, width: 30, height: 30, padding: 0, flexShrink: 0,
              }}
            >
              <span style={{
                display: "block", width: 20, height: 1.5, background: "#D4AF37",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                transition: "all 0.3s ease",
              }} />
              <span style={{
                display: "block", width: 20, height: 1.5, background: "#D4AF37",
                opacity: menuOpen ? 0 : 1,
                transition: "all 0.3s ease",
              }} />
              <span style={{
                display: "block", width: 20, height: 1.5, background: "#D4AF37",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                transition: "all 0.3s ease",
              }} />
            </button>
          )}
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN MENU OVERLAY ── */}
      {isMobile && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(8,8,8,0.98)",
          backdropFilter: "blur(16px)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 32,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}>

          <div style={{ width: 36, height: 1, background: "linear-gradient(to right, transparent, #D4AF37, transparent)" }} />

          {["Collection", "About", "Contact"].map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transition: `color 0.3s ease, opacity 0.4s ease ${i * 80 + 120}ms, transform 0.4s ease ${i * 80 + 120}ms`,
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#D4AF37")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              {l}
            </a>
          ))}

          <div style={{ width: 36, height: 1, background: "linear-gradient(to right, transparent, #D4AF37, transparent)" }} />

          <span style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 8, letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(212,175,55,0.45)",
          }}>
            Define Your Presence
          </span>

        </div>
      )}
    </>
  );
}