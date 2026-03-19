const igIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const waIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const locIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>;

export default function Footer() {
  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/aromyxperfume?igsh=aHd6cGxueXg3M2E4&utm_source=qr", icon: igIcon },
    { name: "WhatsApp", href: "https://wa.me/971547447047", icon: waIcon },
    { name: "Maps", href: "https://maps.google.com/?q=Sharjah+Expo+Centre", icon: locIcon },
  ];

  return (
    <footer id="contact" style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* CTA strip */}
      <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.09), rgba(212,175,55,0.04), rgba(212,175,55,0.09))", borderBottom: "1px solid rgba(212,175,55,0.18)", padding: "56px 40px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 10, letterSpacing: "0.1em" }}>Ready to define your presence?</p>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#FAF7F0", marginBottom: 28 }}>
          Any 2 Fragrances — <span style={{ color: "#D4AF37", fontStyle: "italic" }}>AED 100</span>
        </h3>
        <a href="#collection" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase", fontWeight: 700,
          background: "#D4AF37", color: "#000", padding: "16px 44px", textDecoration: "none", transition: "background 0.3s",
        }}
          onMouseOver={e => ((e.currentTarget as HTMLElement).style.background = "#E8C97A")}
          onMouseOut={e => ((e.currentTarget as HTMLElement).style.background = "#D4AF37")}
        >Shop Now</a>
      </div>

      {/* Main */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 56 }}>
        {/* Brand */}
        <div>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 600, color: "#D4AF37", letterSpacing: "0.26em" }}>AROMAX</span>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginTop: 4, marginBottom: 16 }}>Define Your Presence</p>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, color: "rgba(250,247,240,0.38)", lineHeight: 1.8, maxWidth: 260 }}>Premium luxury fragrances handcrafted for those who dare to leave a mark on every room they enter.</p>
          <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
            {socials.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" title={s.name} style={{
                width: 40, height: 40, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "all 0.3s",
              }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)"; (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)"; }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9.5, letterSpacing: "0.36em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20 }}>Navigate</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {["Collection", "About Us", "Contact", "WhatsApp Order"].map(l => (
              <a key={l} href="#" style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, color: "rgba(250,247,240,0.38)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseOver={e => ((e.currentTarget as HTMLElement).style.color = "#D4AF37")}
                onMouseOut={e => ((e.currentTarget as HTMLElement).style.color = "rgba(250,247,240,0.38)")}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9.5, letterSpacing: "0.36em", textTransform: "uppercase", color: "#D4AF37", marginBottom: 20 }}>Our Boutiques</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { city: "Chennai, India", addr: "Azhwarpet, Chennai\nTamil Nadu, India" },
              { city: "Sharjah, UAE", addr: "Sharjah Expo Centre\nSharjah, United Arab Emirates" },
            ].map((loc, i) => (
              <div key={i} style={{ borderLeft: "2px solid rgba(212,175,55,0.28)", paddingLeft: 14 }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, color: "rgba(250,247,240,0.65)", marginBottom: 4 }}>{loc.city}</p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 12, color: "rgba(250,247,240,0.3)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{loc.addr}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "18px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em" }}>© 2024 AROMAX. All rights reserved.</p>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.08em" }}>Chennai · Sharjah</p>
      </div>
    </footer>
  );
}
