"use client";
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import StickyCartBar from "./components/StickyCartBar";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <MarqueeStrip />
        <ProductGrid />
        <About />
        <Footer />
      </main>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <StickyCartBar onCartClick={() => setCartOpen(true)} />
    </CartProvider>
  );
}
