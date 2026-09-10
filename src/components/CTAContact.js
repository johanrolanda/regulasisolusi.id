"use client";

import { useState } from "react";
import { BRAND_INFO } from "@/data/servicesData";
import { MessageCircle, Mail, Send, ShieldCheck, Clock } from "lucide-react";

export default function CTAContact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Pendirian Badan Usaha",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Tim regulasisolusi.id,

Saya ingin mengajukan permohonan konsultasi legalitas:
👤 *Nama:* ${formData.name}
📱 *Nomor Kontak:* ${formData.phone}
📂 *Kebutuhan Layanan:* ${formData.category}
📝 *Catatan Tambahan:* ${formData.message || "Mohon informasi syarat & estimasi biaya"}

Terima kasih!`;

    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="kontak" className="section-padding" style={{ position: "relative", backgroundColor: "var(--bg-body)" }}>
      <div className="container">
        <div
          style={{
            padding: "54px 48px",
            borderRadius: "var(--radius-xl)",
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
            color: "#FFFFFF",
            boxShadow: "0 20px 50px rgba(15, 23, 42, 0.15)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: "48px",
              alignItems: "center",
            }}
            className="contact-grid"
          >
            {/* Left Column: Information */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  background: "rgba(37, 99, 235, 0.2)",
                  color: "#93C5FD",
                  border: "1px solid rgba(147, 197, 253, 0.3)",
                  marginBottom: "18px",
                }}
              >
                <ShieldCheck size={16} />
                <span>Konsultasi Awal Bebas Biaya</span>
              </div>

              <h2 style={{ fontSize: "clamp(1.9rem, 3vw, 2.5rem)", marginBottom: "18px", lineHeight: 1.25, color: "#FFFFFF" }}>
                Siap Mengamankan Legalitas & <br />
                <span style={{ color: "#60A5FA" }}>Melejitkan Bisnis Anda?</span>
              </h2>

              <p style={{ fontSize: "1.02rem", color: "#94A3B8", lineHeight: 1.7, marginBottom: "36px" }}>
                Jangan biarkan kendala birokrasi menghambat pertumbuhan usaha Anda.
                Hubungi tim konsultan kami sekarang untuk mendapatkan analisa KBLI dan solusi perizinan terbaik.
              </p>

              {/* Direct Info List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(37, 99, 235, 0.2)",
                      border: "1px solid rgba(37, 99, 235, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={22} color="#60A5FA" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "#94A3B8", textTransform: "uppercase" }}>WhatsApp Hotline</div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#FFFFFF" }}>{BRAND_INFO.phone}</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "#94A3B8", textTransform: "uppercase" }}>Email Resmi</div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#FFFFFF" }}>{BRAND_INFO.email}</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(16, 185, 129, 0.15)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={22} color="#34D399" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.78rem", color: "#94A3B8", textTransform: "uppercase" }}>Jam Layanan Operasional</div>
                    <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#FFFFFF" }}>{BRAND_INFO.operationalHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Form */}
            <div
              style={{
                background: "#FFFFFF",
                padding: "36px",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", color: "var(--text-title)", marginBottom: "6px" }}>
                Formulir Konsultasi Cepat
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "24px" }}>
                Isi data singkat berikut untuk terhubung langsung dengan konsultan legal:
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-title)", marginBottom: "6px" }}>
                    Nama Lengkap / Nama Bisnis *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso (Kopi Nusantara)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "8px",
                      color: "var(--text-title)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-title)", marginBottom: "6px" }}>
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "8px",
                      color: "var(--text-title)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-title)", marginBottom: "6px" }}>
                    Kebutuhan Layanan
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "8px",
                      color: "var(--text-title)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  >
                    <option value="Pendirian Badan Usaha (PT / CV / PT Perorangan)">Pendirian Badan Usaha (PT / CV / PT Perorangan)</option>
                    <option value="Perizinan Berusaha OSS RBA & NIB">Perizinan Berusaha OSS RBA & NIB</option>
                    <option value="Pendaftaran Merek DJKI & HAKI">Pendaftaran Merek DJKI & HAKI</option>
                    <option value="Izin Edar BPOM & PIRT">Izin Edar BPOM & PIRT</option>
                    <option value="Sertifikasi Halal BPJPH & ISO">Sertifikasi Halal BPJPH & ISO</option>
                    <option value="Konsultasi KBLI & Regulasi Umum">Konsultasi KBLI & Regulasi Umum</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-title)", marginBottom: "6px" }}>
                    Catatan atau Pertanyaan (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tuliskan kendala atau target perizinan Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "8px",
                      color: "var(--text-title)",
                      fontSize: "0.92rem",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "14px", marginTop: "8px" }}
                >
                  <Send size={18} />
                  <span>Kirim & Mulai Konsultasi</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
