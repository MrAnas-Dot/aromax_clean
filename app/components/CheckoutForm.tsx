"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutForm({ onSuccess }: { onSuccess: () => void }) {
  const { items, totalItems, totalPrice, isOfferApplied } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.address.trim()) e.address = "Address is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    const pairs = Math.floor(totalItems / 2);
    const singles = totalItems % 2;
    const pricingNote = isOfferApplied
      ? `${pairs} pair(s) × AED 100${singles > 0 ? ` + ${singles} × AED 69` : ""}`
      : `${totalItems} × AED 69`;
    const lines = items.map(i => `• ${i.name} (x${i.quantity}) — ${i.notes}`).join("\n");
    const msg = encodeURIComponent(
      `🌸 *New AROMYX Order*\n\n*Customer Details*\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\n\n*Order Summary*\n${lines}\n\n*Pricing:* ${pricingNote}\n*Total: AED ${totalPrice}*\n\n📍 AROMYX — Define Your Presence`
    );
    window.open(`https://wa.me/971547447047?text=${msg}`, "_blank");
    onSuccess();
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%", background: "rgba(255,255,255,0.05)",
    border: `1px solid ${errors[field] ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.1)"}`,
    padding: "12px 16px", color: "#FAF7F0", fontSize: 13, outline: "none",
    fontFamily: "'Raleway', sans-serif", transition: "border-color 0.3s",
    marginBottom: 4,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 300, color: "#FAF7F0" }}>Complete Your Order</h3>

      <div>
        <input placeholder="Full Name" value={form.name} onChange={e => { setForm({...form, name: e.target.value}); setErrors({...errors, name: ""}); }} style={inputStyle("name")}/>
        {errors.name && <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "#f87171" }}>{errors.name}</p>}
      </div>
      <div>
        <input placeholder="Phone Number (with country code)" value={form.phone} onChange={e => { setForm({...form, phone: e.target.value}); setErrors({...errors, phone: ""}); }} style={inputStyle("phone")}/>
        {errors.phone && <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "#f87171" }}>{errors.phone}</p>}
      </div>
      <div>
        <textarea placeholder="Delivery Address" rows={3} value={form.address} onChange={e => { setForm({...form, address: e.target.value}); setErrors({...errors, address: ""}); }} style={{...inputStyle("address"), resize: "none"}}/>
        {errors.address && <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, color: "#f87171" }}>{errors.address}</p>}
      </div>

      <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)", padding: "14px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>{totalItems} {totalItems === 1 ? "item" : "items"}</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: "#D4AF37" }}>AED {totalPrice}</span>
        </div>
        {isOfferApplied && <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, color: "rgba(212,175,55,0.55)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>✓ Pair offer applied</p>}
      </div>

      <button onClick={handleSubmit} style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        background: "#25D366", color: "#fff", border: "none", cursor: "pointer",
        fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: "0.22em",
        textTransform: "uppercase", fontWeight: 700, padding: "15px",
        transition: "background 0.3s",
      }}
        onMouseOver={e => (e.currentTarget.style.background = "#1DAA56")}
        onMouseOut={e => (e.currentTarget.style.background = "#25D366")}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Order via WhatsApp
      </button>
    </div>
  );
}
