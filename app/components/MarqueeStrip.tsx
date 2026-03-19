"use client";
const items = ["Desert Breeze","Saffron Royale","Golden Tobacco","Royal Legend","Velvet Candy","Coco Silk","Amber Flame","Amber Majesty","Golden Majesty","Pure Patchouli","Midnight Desire","Velvet Leather","Oud Passion"];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(212,175,55,0.18)", borderBottom: "1px solid rgba(212,175,55,0.18)", background: "rgba(212,175,55,0.03)", padding: "14px 0" }}>
      <div style={{ display: "flex", gap: 48, whiteSpace: "nowrap", animation: "marquee 30s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 20, flexShrink: 0 }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(212,175,55,0.5)", display: "inline-block" }}/>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9.5, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(212,175,55,0.65)" }}>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
