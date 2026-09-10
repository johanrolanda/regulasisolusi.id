import { FileCheck, CheckCircle, Scale, ShieldCheck } from "lucide-react";

export default function TrustStats() {
  const stats = [
    { value: "1,250+", label: "Legalitas & Izin Terbit", sub: "PT, CV, NIB, Merek & BPOM", icon: FileCheck },
    { value: "99.4%", label: "Tingkat Approval", sub: "Verifikasi cepat tanpa penolakan", icon: CheckCircle },
    { value: "10+ Thn", label: "Pengalaman Ahli Regulasi", sub: "Praktisi hukum berpengalaman", icon: Scale },
    { value: "100%", label: "Dokumen Resmi Pemerintah", sub: "Garansi keaslian SK & Sertifikat", icon: ShieldCheck }
  ];

  return (
    <section
      style={{
        position: "relative",
        zIndex: 2,
        marginTop: "-36px",
        marginBottom: "30px",
      }}
    >
      <div className="container">
        <div
          className="tech-card"
          style={{
            padding: "36px 32px",
            background: "#FFFFFF",
            border: "1px solid var(--border-light)",
            boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.08)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
            className="stats-grid"
          >
            {stats.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    paddingRight: idx !== stats.length - 1 ? "20px" : "0",
                    borderRight: idx !== stats.length - 1 ? "1px solid var(--border-light)" : "none",
                  }}
                  className="stat-item"
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "12px",
                      background: "var(--primary-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={26} color="var(--primary)" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1.9rem",
                        fontWeight: 800,
                        color: "var(--text-title)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-title)", marginTop: "4px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      {item.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
