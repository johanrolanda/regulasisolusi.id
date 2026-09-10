"use client";

import { useState } from "react";
import { FAQ_LIST, BRAND_INFO } from "@/data/servicesData";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const waLink = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    "Halo Admin regulasisolusi.id, saya ada pertanyaan teknis terkait legalitas usaha saya yang belum terjawab di website."
  )}`;

  return (
    <section id="faq" className="section-padding" style={{ position: "relative", backgroundColor: "#FFFFFF", borderTop: "1px solid var(--border-light)" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={15} />
            <span>Pertanyaan Umum (FAQ)</span>
          </div>
          <h2 className="section-title">
            Hal yang Sering Ditanyakan <br />
            <span className="tech-gradient-text">Seputar Regulasi & Perizinan</span>
          </h2>
          <p className="section-subtitle">
            Pelajari jawaban dari pertanyaan mendasar seputar legalitas perusahaan, HAKI merek, dan perizinan OSS RBA.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="tech-card"
                style={{
                  borderRadius: "var(--radius-md)",
                  border: isOpen
                    ? "1.5px solid var(--primary)"
                    : "1px solid var(--border-light)",
                  background: "#FFFFFF",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "var(--text-title)",
                  }}
                >
                  <span style={{ fontSize: "1.02rem", fontWeight: 700, lineHeight: 1.4 }}>
                    {item.q}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen ? "var(--primary-light)" : "var(--bg-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <ChevronDown size={18} color={isOpen ? "var(--primary)" : "var(--text-muted)"} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      fontSize: "0.94rem",
                      color: "var(--text-main)",
                      lineHeight: 1.7,
                      borderTop: "1px solid var(--border-light)",
                      paddingTop: "16px",
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div
          style={{
            marginTop: "44px",
            textAlign: "center",
            padding: "32px 28px",
            background: "var(--bg-subtle)",
            border: "1px dashed var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <h4 style={{ fontSize: "1.15rem", color: "var(--text-title)", marginBottom: "8px" }}>
            Punya Pertanyaan Spesifik Tentang Kasus Bisnis Anda?
          </h4>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>
            Konsultasikan gratis bersama legal officer kami melalui WhatsApp. Kami siap memberikan panduan regulasi terbaik.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ display: "inline-flex" }}
          >
            <MessageCircle size={18} />
            <span>Tanyakan Langsung ke Tim Legal</span>
          </a>
        </div>
      </div>
    </section>
  );
}
