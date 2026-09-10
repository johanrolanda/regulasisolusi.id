"use client";

import { BRAND_INFO } from "@/data/servicesData";
import { ShieldCheck, ArrowRight, MessageCircle, CheckCircle2, Sparkles, Building, FileCheck, Award, Zap } from "lucide-react";

export default function Hero() {
  const waLink = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    "Halo regulasisolusi.id, saya ingin konsultasi mengenai perizinan usaha dan legalitas bisnis saya."
  )}`;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: "150px",
        paddingBottom: "85px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        backgroundImage: "radial-gradient(#E2E8F0 1.2px, transparent 1.2px)",
        backgroundSize: "32px 32px",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      {/* Subtle Blue Glow in background */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition */}
          <div>
            {/* Top Pill Badge */}
            <div
              className="badge badge-blue"
              style={{
                padding: "8px 18px",
                fontSize: "0.85rem",
                marginBottom: "24px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Zap size={16} color="var(--primary)" />
              <span>Konsultan Legalitas & Perizinan Usaha Resmi</span>
            </div>

            {/* Main Headline */}
            <h1 style={{ marginBottom: "22px", lineHeight: 1.18 }}>
              Percepat Bisnis Anda, <br />
              <span className="tech-gradient-text">Pasti Berbadan Hukum</span> & Patuh Regulasi
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: "1.12rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "600px",
              }}
            >
              Pendampingan kepatuhan hukum modern untuk startup, UMKM, dan korporasi: mulai dari{" "}
              <strong style={{ color: "var(--text-title)" }}>Pendirian PT/CV</strong>, penerbitan{" "}
              <strong style={{ color: "var(--text-title)" }}>NIB OSS RBA</strong>, perlindungan{" "}
              <strong style={{ color: "var(--text-title)" }}>Merek DJKI</strong>, hingga registrasi{" "}
              <strong style={{ color: "var(--text-title)" }}>Izin BPOM & Halal</strong>.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "42px",
              }}
            >
              <a href="#cek-izin" className="btn btn-primary" style={{ fontSize: "1rem" }}>
                <span>Cek Kebutuhan Izin Usaha</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "1rem" }}
              >
                <MessageCircle size={18} color="var(--primary)" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>

            {/* Reassurance Micro Features */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "24px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-light)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span>100% Sah Kemenkumham & BKPM</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span>Transparan Tanpa Biaya Tersembunyi</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <span>Didampingi Ahli Regulasi KBLI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Tech Compliance Dashboard Card */}
          <div style={{ position: "relative" }}>
            <div
              className="tech-card animate-float"
              style={{
                padding: "36px",
                background: "#FFFFFF",
                border: "1px solid var(--border-light)",
                boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.1), 0 0 20px rgba(37, 99, 235, 0.06)",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "20px",
                  borderBottom: "1px solid var(--border-light)",
                  marginBottom: "24px",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "var(--primary)", fontWeight: 700, letterSpacing: "0.08em" }}>
                    Status Kepatuhan Terintegrasi
                  </div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-title)", marginTop: "2px" }}>
                    Profil Legalitas Usaha
                  </div>
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    background: "var(--emerald-bg)",
                    border: "1px solid var(--emerald-border)",
                    color: "var(--emerald)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>Siap Bersaing</span>
                </div>
              </div>

              {/* Compliance Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "var(--bg-subtle)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ padding: "8px", borderRadius: "8px", background: "var(--primary-light)" }}>
                      <Building size={20} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--text-title)", fontSize: "0.95rem" }}>Badan Usaha Resmi</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Akta Notaris & SK Kemenkumham</div>
                    </div>
                  </div>
                  <span className="badge badge-emerald">Verified</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "var(--bg-subtle)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ padding: "8px", borderRadius: "8px", background: "var(--primary-light)" }}>
                      <FileCheck size={20} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--text-title)", fontSize: "0.95rem" }}>NIB OSS RBA</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>KBLI 2020 Terpetakan Akurat</div>
                    </div>
                  </div>
                  <span className="badge badge-emerald">Aktif Operasional</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: "var(--bg-subtle)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ padding: "8px", borderRadius: "8px", background: "var(--primary-light)" }}>
                      <Award size={20} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--text-title)", fontSize: "0.95rem" }}>Perlindungan Merek DJKI</div>
                      <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Sertifikat Hak Eksklusif 10 Thn</div>
                    </div>
                  </div>
                  <span className="badge badge-blue">Aset Terlindungi</span>
                </div>
              </div>

              {/* Bottom Action Note */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "14px 18px",
                  borderRadius: "var(--radius-md)",
                  background: "#F8FAFC",
                  border: "1px dashed #CBD5E1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-title)" }}>Belum tahu izin yang wajib?</div>
                  <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>Gunakan kalkulator regulasi instan kami</div>
                </div>
                <a href="#cek-izin" style={{ color: "var(--primary)", fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                  <span>Mulai Cek</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
