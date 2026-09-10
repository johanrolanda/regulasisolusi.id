import { CLIENT_TESTIMONIALS } from "@/data/servicesData";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ position: "relative", backgroundColor: "var(--bg-body)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">Bukti Kepuasan Klien</div>
          <h2 className="section-title">
            Dipercaya Pelaku Usaha dari <br />
            <span className="tech-gradient-text">Berbagai Sektor Industri</span>
          </h2>
          <p className="section-subtitle">
            Dari rintisan UMKM hingga korporasi manufaktur, kami telah mendampingi beragam sektor industri
            mencapai kepatuhan izin tanpa kendala.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3">
          {CLIENT_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
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
                {/* Stars & Quote */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px",
                  }}
                >
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={24} color="#CBD5E1" />
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--text-main)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingTop: "18px",
                  borderTop: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "var(--primary-light)",
                    border: "2px solid var(--primary-border)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "var(--primary)",
                    fontSize: "1.1rem",
                  }}
                >
                  {t.client.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--text-title)", fontSize: "0.95rem" }}>
                    {t.client}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {t.role}
                  </div>
                  <span
                    className="badge badge-blue"
                    style={{ fontSize: "0.7rem", marginTop: "4px" }}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
