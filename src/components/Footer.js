import { BRAND_INFO } from "@/data/servicesData";
import { Scale, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F172A",
        borderTop: "1px solid #1E293B",
        paddingTop: "72px",
        paddingBottom: "36px",
        color: "#94A3B8",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: "40px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "var(--primary-gradient)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px var(--primary-glow)",
                }}
              >
                <Scale size={22} color="#FFFFFF" />
              </div>
              <div>
                <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em" }}>
                  regulasi<span style={{ color: "#60A5FA" }}>solusi</span>
                </span>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary)" }}>.id</span>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "20px", color: "#94A3B8" }}>
              {BRAND_INFO.description}
            </p>

            <div style={{ fontSize: "0.82rem", color: "#64748B" }}>
              Platform konsultan kepatuhan & perizinan usaha berbasis teknologi terdepan di Indonesia.
            </div>
          </div>

          {/* Col 2: Legalitas & Pendirian */}
          <div>
            <h4 style={{ fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
              Entitas & Izin
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>PT Perorangan (UMKM)</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>PT Persekutuan Modal</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Pendirian CV & Firma</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Penerbitan NIB OSS RBA</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Sertifikat Standar KBLI</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Perubahan Akta Notaris</a></li>
            </ul>
          </div>

          {/* Col 3: HAKI & Sertifikasi */}
          <div>
            <h4 style={{ fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
              HAKI & Produk
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Pendaftaran Merek DJKI</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Pencatatan Hak Cipta</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Izin Edar BPOM MD & NA</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Izin Edar SPP-PIRT</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Sertifikasi Halal BPJPH</a></li>
              <li><a href="#layanan" style={{ color: "#94A3B8" }}>Sertifikasi Standar ISO</a></li>
            </ul>
          </div>

          {/* Col 4: Kantor & Kontak */}
          <div>
            <h4 style={{ fontSize: "0.95rem", color: "#FFFFFF", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700 }}>
              Kantor Operasional
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} color="#60A5FA" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MessageCircle size={18} color="var(--wa-green)" style={{ flexShrink: 0 }} />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                <span>{BRAND_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div
          style={{
            paddingTop: "28px",
            borderTop: "1px solid #1E293B",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "0.82rem",
          }}
        >
          <div>
            © {new Date().getFullYear()} <strong>regulasisolusi.id</strong>. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div style={{ color: "#64748B", maxWidth: "560px", textAlign: "right" }} className="disclaimer-text">
            Disclaimer: regulasisolusi.id adalah entitas konsultan independen yang membantu pendampingan kepatuhan perizinan usaha. Penerbitan izin resmi dilakukan oleh instansi pemerintah terkait (Kemenkumham, BKPM, BPOM, BPJPH, DJKI).
          </div>
        </div>
      </div>
    </footer>
  );
}
