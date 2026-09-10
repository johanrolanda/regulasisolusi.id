"use client";

import { useState } from "react";
import { SERVICE_CATEGORIES, BRAND_INFO } from "@/data/servicesData";
import {
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  HeartPulse,
  Clock,
  Check,
  MessageCircle,
  ArrowUpRight,
  FileText
} from "lucide-react";

export default function ServicesCatalog() {
  const [activeTab, setActiveTab] = useState("legalitas-perusahaan");

  const iconMap = {
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    HeartPulse: HeartPulse,
    Award: Award,
    CheckCircle2: CheckCircle2,
  };

  const currentCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[0];

  const getWaLink = (serviceName) => {
    const text = `Halo Admin regulasisolusi.id, saya ingin konsultasi mengenai layanan: *${serviceName}*. Boleh informasi mengenai persyaratan, rincian biaya, dan estimasi waktu pengurusannya?`;
    return `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="layanan" className="section-padding" style={{ position: "relative", backgroundColor: "var(--bg-body)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Katalog Layanan</div>
          <h2 className="section-title">
            Layanan Perizinan & Regulasi Usaha <br />
            <span className="tech-gradient-text">Terpadu di Indonesia</span>
          </h2>
          <p className="section-subtitle">
            Pendampingan menyeluruh dari legalitas pendirian badan usaha, izin edar BPOM dan Kemenkes RI,
            perlindungan merek DJKI, hingga sertifikasi halal resmi.
          </p>
        </div>

        {/* 5 Pillar Tab Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          {SERVICE_CATEGORIES.map((cat) => {
            const Icon = iconMap[cat.icon] || Building2;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  padding: "12px 20px",
                  borderRadius: "var(--radius-full)",
                  border: isActive
                    ? "1px solid var(--primary)"
                    : "1px solid var(--border-light)",
                  background: isActive
                    ? "var(--primary)"
                    : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "var(--text-main)",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: isActive ? "0 4px 14px var(--primary-glow)" : "var(--shadow-sm)",
                }}
              >
                <Icon size={18} color={isActive ? "#FFFFFF" : "var(--primary)"} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--border-light)",
            borderRadius: "var(--radius-md)",
            padding: "18px 24px",
            marginBottom: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <div>
            <span style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.84rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Fokus: {currentCategory.title}
            </span>
            <p style={{ fontSize: "0.95rem", color: "var(--text-main)", marginTop: "4px" }}>
              {currentCategory.shortDesc}
            </p>
          </div>
          <span className="badge badge-blue">{currentCategory.badge}</span>
        </div>

        {/* Services Cards Grid */}
        <div className="grid-2">
          {currentCategory.services.map((svc) => (
            <div
              key={svc.id}
              className="tech-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Header Card */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "14px",
                    marginBottom: "14px",
                  }}
                >
                  <h3 style={{ fontSize: "1.28rem", color: "var(--text-title)" }}>{svc.name}</h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "var(--bg-subtle)",
                      padding: "6px 12px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.78rem",
                      color: "var(--text-main)",
                      border: "1px solid var(--border-light)",
                      whiteSpace: "nowrap",
                      fontWeight: 600,
                    }}
                  >
                    <Clock size={14} color="var(--primary)" />
                    <span>{svc.duration}</span>
                  </div>
                </div>

                {/* Target Audience */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    marginBottom: "20px",
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: "var(--text-title)" }}>Cocok untuk:</strong> {svc.idealFor}
                </p>

                {/* Features / Deliverables */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--primary)",
                      marginBottom: "12px",
                    }}
                  >
                    Cakupan Pendampingan:
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
                    {svc.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "0.88rem",
                          color: "var(--text-main)",
                        }}
                      >
                        <div
                          style={{
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            background: "var(--emerald-bg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "2px",
                            flexShrink: 0,
                          }}
                        >
                          <Check size={12} color="var(--emerald)" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements / Persyaratan Umum (If Present) */}
                {svc.requirements && svc.requirements.length > 0 && (
                  <div
                    style={{
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "var(--radius-sm)",
                      padding: "16px",
                      marginBottom: "22px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "var(--text-title)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "10px",
                      }}
                    >
                      <FileText size={15} color="var(--primary)" />
                      <span>Persyaratan Umum Berkas:</span>
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {svc.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--text-muted)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                          }}
                        >
                          <span style={{ color: "var(--primary)", fontWeight: 700 }}>•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Highlight Tag */}
                {svc.highlight && (
                  <div
                    style={{
                      background: "var(--primary-light)",
                      borderLeft: "3px solid var(--primary)",
                      padding: "10px 14px",
                      borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                      fontSize: "0.85rem",
                      color: "#1E3A8A",
                      marginBottom: "26px",
                    }}
                  >
                    💡 <strong>Keunggulan:</strong> {svc.highlight}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <a
                href={getWaLink(svc.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", padding: "12px 20px", fontSize: "0.92rem" }}
              >
                <MessageCircle size={18} />
                <span>Konsultasikan Layanan Ini</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
