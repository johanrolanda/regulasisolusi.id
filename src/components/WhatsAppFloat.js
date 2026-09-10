"use client";

import { useState } from "react";
import { BRAND_INFO } from "@/data/servicesData";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  const waLink = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    "Halo Admin regulasisolusi.id, saya ingin konsultasi legalitas dan izin usaha saya."
  )}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 998,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
      }}
    >
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--border-subtle)",
            padding: "10px 14px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px -3px rgba(15, 23, 42, 0.15)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            maxWidth: "240px",
            fontSize: "0.82rem",
            color: "var(--text-title)",
            fontWeight: 500,
            animation: "floatAnimation 3s ease-in-out infinite",
          }}
        >
          <span>👋 Butuh bantuan izin usaha & legalitas? Chat kami sekarang!</span>
          <button
            onClick={() => setShowTooltip(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              padding: "2px",
            }}
            aria-label="Tutup pesan"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Konsultan via WhatsApp"
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "var(--wa-green)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          boxShadow: "0 6px 20px rgba(22, 163, 74, 0.35)",
          cursor: "pointer",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          position: "relative",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(22, 163, 74, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(22, 163, 74, 0.35)";
        }}
      >
        <MessageCircle size={30} />
        {/* Active Indicator */}
        <span
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#22C55E",
            border: "2px solid #FFFFFF",
          }}
        />
      </a>
    </div>
  );
}
