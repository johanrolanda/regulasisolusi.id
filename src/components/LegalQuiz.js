"use client";

import { useState } from "react";
import { QUIZ_CATEGORIES, BRAND_INFO } from "@/data/servicesData";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function LegalQuiz() {
  const [selectedCategory, setSelectedCategory] = useState(QUIZ_CATEGORIES[0].id);
  const [scale, setScale] = useState("micro");

  const currentCat = QUIZ_CATEGORIES.find((c) => c.id === selectedCategory) || QUIZ_CATEGORIES[0];

  const scaleOptions = [
    {
      id: "micro",
      label: "Skala Mikro & Kecil (Baru Mulai)",
      desc: "Founder tunggal atau modal awal di bawah Rp 1 Miliar, fokus validasi pasar.",
    },
    {
      id: "growth",
      label: "Berkembang (Target Kerjasama & B2B)",
      desc: "Memiliki tim, butuh rekening bank PT, siap menjalin kontrak kemitraan resmi.",
    },
    {
      id: "scaleup",
      label: "Ekspansi Nasional (Modern Retail & Ekspor)",
      desc: "Distribusi ke supermarket, pasar modern, dan persiapan audit standar tinggi.",
    },
  ];

  const getCustomRecommendation = () => {
    let entity = "PT Perorangan (UMKM)";
    if (scale === "growth") entity = "PT Persekutuan Modal (PT Standar)";
    if (scale === "scaleup") entity = "PT Penanaman Modal Dalam Negeri (PT PMDN) / Fasilitas Pabrik";

    return {
      entity,
      permits: currentCat.permits,
      advice: currentCat.recommendation,
    };
  };

  const rec = getCustomRecommendation();

  const handleSendToWhatsApp = () => {
    const scaleLabel = scaleOptions.find((s) => s.id === scale)?.label;
    const msg = `Halo Admin regulasisolusi.id, saya telah menggunakan tools *Cek Kebutuhan Izin* di website:

📂 *Kategori Usaha:* ${currentCat.title}
📈 *Tahap/Skala Usaha:* ${scaleLabel}
🏢 *Rekomendasi Entitas:* ${rec.entity}

Mohon konsultasi lebih lanjut terkait rincian biaya paket, persyaratan dokumen, dan estimasi waktu pengurusannya. Terima kasih!`;

    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="cek-izin" className="section-padding" style={{ position: "relative", backgroundColor: "#FFFFFF", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={15} />
            <span>Cek Kebutuhan Izin</span>
          </div>
          <h2 className="section-title">
            Cek Kebutuhan Izin Usaha Anda <br />
            <span className="tech-gradient-text">Dalam Waktu Kurang dari 1 Menit</span>
          </h2>
          <p className="section-subtitle">
            Bingung izin apa saja yang wajib dimiliki sektor bisnis Anda?
            Pilih kategori dan skala usaha di bawah ini untuk mendapatkan rekomendasi legalitas instan.
          </p>
        </div>

        {/* Interactive Quiz Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            gap: "36px",
            alignItems: "stretch",
          }}
          className="quiz-grid"
        >
          {/* Left Column: Form Controls */}
          <div
            className="tech-card"
            style={{
              padding: "36px",
              background: "#FFFFFF",
              border: "1px solid var(--border-light)",
            }}
          >
            {/* Step 1: Select Category */}
            <div style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1
                </div>
                <h4 style={{ fontSize: "1.1rem", color: "var(--text-title)" }}>Pilih Sektor / Kategori Usaha</h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {QUIZ_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        borderRadius: "var(--radius-md)",
                        border: isSelected
                          ? "1.5px solid var(--primary)"
                          : "1px solid var(--border-light)",
                        background: isSelected
                          ? "var(--primary-light)"
                          : "var(--bg-subtle)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ fontWeight: 700, color: isSelected ? "var(--primary)" : "var(--text-title)", fontSize: "0.95rem" }}>
                        {cat.title}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "3px" }}>
                        {cat.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Business Scale */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    color: "#FFFFFF",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  2
                </div>
                <h4 style={{ fontSize: "1.1rem", color: "var(--text-title)" }}>Pilih Skala / Tahap Usaha</h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {scaleOptions.map((opt) => {
                  const isSelected = scale === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setScale(opt.id)}
                      style={{
                        textAlign: "left",
                        padding: "14px 18px",
                        borderRadius: "var(--radius-md)",
                        border: isSelected
                          ? "1.5px solid var(--primary)"
                          : "1px solid var(--border-light)",
                        background: isSelected
                          ? "var(--primary-light)"
                          : "var(--bg-subtle)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ fontWeight: 700, color: isSelected ? "var(--primary)" : "var(--text-title)", fontSize: "0.92rem" }}>
                        {opt.label}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "3px" }}>
                        {opt.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Tech Output Display */}
          <div
            className="tech-card"
            style={{
              padding: "36px",
              background: "#FFFFFF",
              border: "1px solid var(--border-light)",
              boxShadow: "0 12px 32px -4px rgba(15, 23, 42, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {/* Output Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "18px",
                  borderBottom: "1px solid var(--border-light)",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "var(--primary)", fontWeight: 700, letterSpacing: "0.08em" }}>
                    Rekomendasi Izin Usaha
                  </div>
                  <h3 style={{ fontSize: "1.3rem", color: "var(--text-title)", marginTop: "3px" }}>
                    Daftar Izin yang Diperlukan
                  </h3>
                </div>
                <span className="badge badge-emerald">Rekomendasi Siap</span>
              </div>

              {/* Recommended Legal Entity Box */}
              <div
                style={{
                  background: "var(--primary-light)",
                  border: "1px solid var(--primary-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px 20px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ fontSize: "0.78rem", color: "var(--primary)", textTransform: "uppercase", fontWeight: 700 }}>
                  Rekomendasi Bentuk Entitas:
                </div>
                <div style={{ fontSize: "1.22rem", fontWeight: 800, color: "var(--text-title)", marginTop: "4px" }}>
                  {rec.entity}
                </div>
              </div>

              {/* Required Permits List */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-title)", marginBottom: "12px" }}>
                  Daftar Perizinan & Kepatuhan Terkait:
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {rec.permits.map((p, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "11px 16px",
                        background: "var(--bg-subtle)",
                        borderRadius: "8px",
                        border: "1px solid var(--border-light)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.88rem", color: "var(--text-title)", fontWeight: 500 }}>
                        <CheckCircle2 size={16} color="var(--primary)" />
                        <span>{p.name}</span>
                      </div>
                      <span className={p.mandatory ? "badge badge-blue" : "badge badge-gray"}>
                        {p.mandatory ? "Wajib" : "Sangat Dianjurkan"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Advice */}
              <div
                style={{
                  padding: "14px 18px",
                  background: "var(--emerald-bg)",
                  borderLeft: "3px solid var(--emerald)",
                  borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                  marginBottom: "28px",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--emerald)", fontWeight: 700, marginBottom: "4px" }}>
                  💡 Catatan Tim Ahli Regulasi:
                </div>
                <div style={{ fontSize: "0.86rem", color: "var(--text-main)", lineHeight: 1.6 }}>
                  {rec.advice}
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div>
              <button
                onClick={handleSendToWhatsApp}
                className="btn btn-primary"
                style={{
                  width: "100%",
                  padding: "14px 24px",
                  fontSize: "1rem",
                }}
              >
                <MessageCircle size={20} />
                <span>Konsultasikan Hasil Analisis Ini via WhatsApp</span>
                <ArrowRight size={18} />
              </button>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginTop: "10px",
                }}
              >
                ⚡ Tim konsultan kami akan membalas dengan rincian biaya & estimasi waktu dalam hitungan menit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
