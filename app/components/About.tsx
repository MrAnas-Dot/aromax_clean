const milestones = [
  { year: "2015", event: "The Dream Begins", desc: "A group of college friends in Chennai shared a vision — to make luxury fragrance accessible to all." },
  { year: "2020", event: "Official Launch", desc: "AROMYX officially launched, bringing handcrafted scents to discerning customers across South India." },
  { year: "2021", event: "First Boutique", desc: "Our first physical home opened in Azhwarpet, Chennai — a space as refined as our fragrances." },
  { year: "2024", event: "Going Global", desc: "AROMYX expanded to Sharjah Expo Centre, UAE — bringing our signature luxury to the Gulf." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 40px", background: "#0D0D0D", position: "relative", overflow: "hidden" }}>
      {/* glow */}
      <div style={{ position: "absolute", top: "50%", left: -120, transform: "translateY(-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)", pointerEvents: "none" }}/>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ height: 1, width: 36, background: "#D4AF37" }}/>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#D4AF37" }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 300, color: "#FAF7F0", lineHeight: 1.15, marginBottom: 28 }}>
              Born from <span style={{ fontStyle: "italic", color: "#D4AF37" }}>Friendship,</span><br/>
              Built on <span style={{ fontStyle: "italic", color: "#D4AF37" }}>Passion.</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {[
                "AROMYX began not in a boardroom, but in a college hostel — where a group of dreamers sat late into the night, imagining a world where luxury perfumery wasn't a privilege of the few, but a language spoken by all who dared to define their presence.",
                "After years of learning the ancient art of fragrance, sourcing the rarest botanicals from across continents, and perfecting every note — AROMY X was officially born in 2020.",
                "Our first boutique opened in Azhwarpet, Chennai. Today, our scents drift through Sharjah Expo Centre, UAE — reaching those who know that a fragrance is not worn, it is lived.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'Raleway', sans-serif", fontSize: 14, color: "rgba(250,247,240,0.5)", lineHeight: 1.85 }}>{p}</p>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 12, border: "1px solid rgba(212,175,55,0.3)", padding: "12px 24px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37" }}/>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#D4AF37" }}>Define Your Presence</span>
            </div>
          </div>

          {/* Right - Timeline */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "linear-gradient(to bottom, rgba(212,175,55,0.6), rgba(212,175,55,0.1), transparent)" }}/>
            <div style={{ display: "flex", flexDirection: "column", gap: 36, paddingLeft: 56 }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: -44, top: 4, width: 14, height: 14, border: "2px solid #D4AF37", borderRadius: "50%", background: "#0D0D0D" }}/>
                  <div style={{ position: "absolute", left: -30, top: 10, width: 20, height: 1, background: "rgba(212,175,55,0.35)" }}/>
                  <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(212,175,55,0.5)", fontWeight: 500 }}>{m.year}</span>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: "#FAF7F0", margin: "4px 0 8px", letterSpacing: "0.04em" }}>{m.event}</h3>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, color: "rgba(250,247,240,0.38)", lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginTop: 80, background: "rgba(255,255,255,0.04)" }}>
          {[["13","Signature Fragrances"],["2","Global Locations"],["9+","Years of Passion"]].map(([num, lbl], i) => (
            <div key={i} style={{ background: "#0D0D0D", padding: "40px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 52, fontWeight: 300, color: "#D4AF37", lineHeight: 1, marginBottom: 8 }}>{num}</div>
              <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(250,247,240,0.38)" }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
