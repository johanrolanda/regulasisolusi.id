import { WORKFLOW_STEPS } from "@/data/servicesData";
import { CheckCircle2 } from "lucide-react";

export default function ProcessSteps() {
  return (
    <section id="alur-kerja" className="section-padding" style={{ position: "relative", backgroundColor: "var(--bg-body)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">Alur Kerja Praktis & Terstruktur</div>
          <h2 className="section-title">
            4 Langkah Mudah Mengurus <br />
            <span className="tech-gradient-text">Legalitas Usaha Anda Sampai Terbit</span>
          </h2>
          <p className="section-subtitle">
            Kami menyederhanakan birokrasi yang rumit menjadi proses 4 langkah yang transparan,
            cepat, dan tanpa perlu Anda bolak-balik ke kantor dinas pemerintah.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid-4" style={{ position: "relative" }}>
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="tech-card"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Step Number Top */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: "#E2E8F0",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {step.step}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: "var(--primary-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--primary)" />
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 style={{ fontSize: "1.18rem", color: "var(--text-title)", marginBottom: "12px", lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator */}
              <div
                style={{
                  marginTop: "24px",
                  height: "3px",
                  width: "100%",
                  background: "#E2E8F0",
                  borderRadius: "2px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(idx + 1) * 25}%`,
                    background: "var(--primary)",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
