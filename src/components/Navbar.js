"use client";

import { useState, useEffect } from "react";
import { BRAND_INFO } from "@/data/servicesData";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#layanan" },
    { label: "Cek Izin", href: "#cek-izin" },
    { label: "Alur Kerja", href: "#alur-kerja" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "FAQ", href: "#faq" },
  ];

  const waLink = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    "Halo Admin regulasisolusi.id, saya ingin konsultasi mengenai legalitas usaha saya."
  )}`;

  return (
    <header
      style={{
        position: "fixed",
        top: "18px",
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        padding: "0 18px",
        pointerEvents: "none",
      }}
    >
      {/* Floating Pill Capsule */}
      <div
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: "1020px",
          height: "58px",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.94)"
            : "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: "9999px",
          border: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: isScrolled
            ? "0 16px 36px -6px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(15, 23, 42, 0.04)"
            : "0 12px 30px -6px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(15, 23, 42, 0.04)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 8px 6px 22px",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative",
        }}
      >
        {/* Left: Minimalist Brand Logo */}
        <a
          href="#hero"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          {/* Geometric Retainable-style Minimalist Icon */}
          <div
            style={{
              width: "26px",
              height: "26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="4" r="2.2" fill="#0F172A" />
              <circle cx="12" cy="20" r="2.2" fill="#0F172A" />
              <circle cx="4" cy="12" r="2.2" fill="#0F172A" />
              <circle cx="20" cy="12" r="2.2" fill="#0F172A" />
              <circle cx="6.3" cy="6.3" r="2.2" fill="#2563EB" />
              <circle cx="17.7" cy="17.7" r="2.2" fill="#2563EB" />
              <circle cx="6.3" cy="17.7" r="2.2" fill="#2563EB" />
              <circle cx="17.7" cy="6.3" r="2.2" fill="#2563EB" />
            </svg>
          </div>

          <span
            style={{
              fontSize: "1.08rem",
              fontWeight: 700,
              color: "#0F172A",
              letterSpacing: "-0.03em",
            }}
          >
            regulasisolusi<span style={{ color: "#2563EB" }}>.id</span>
          </span>
        </a>

        {/* Center: Clean Minimalist Nav Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.88rem",
                fontWeight: 500,
                color: "#475569",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0F172A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Sleek Dark Capsule Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-btn"
            style={{
              background: "#0F172A",
              color: "#FFFFFF",
              borderRadius: "9999px",
              padding: "10px 22px",
              fontSize: "0.86rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2563EB";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0F172A";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Konsultasi Gratis
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "none",
              color: "#0F172A",
              cursor: "pointer",
              display: "none",
              padding: "8px",
              borderRadius: "50%",
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "68px",
              left: 0,
              right: 0,
              background: "#FFFFFF",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 16px 36px rgba(15, 23, 42, 0.12)",
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#0F172A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 4px",
                  borderBottom: "1px solid #F1F5F9",
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} color="#64748B" />
              </a>
            ))}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#0F172A",
                color: "#FFFFFF",
                borderRadius: "9999px",
                padding: "12px",
                textAlign: "center",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginTop: "6px",
              }}
            >
              Konsultasi WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
