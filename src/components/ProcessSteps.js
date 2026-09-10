import { WORKFLOW_STEPS } from "@/data/servicesData";
import { CheckCircle2 } from "lucide-react";

export default function ProcessSteps() {
  return (
    <section id="alur-kerja" className="section-padding" style={{ position: "relative", backgroundColor: "var(--bg-body)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">Alur Pengurusan Izin</div>
          <h2 className="section-title">
            4 Langkah Mudah Mengurus <br />
            <span className="tech-gradient-text">Legalitas Usaha Anda Sampai Terbit</span>
          </h2>
          <p className="section-subtitle">
            Kami menyederhanakan birokrasi menjadi 4 langkah terarah yang transparan,
            cepat, dan tanpa perlu Anda bolak-balik ke kantor dinas pemerintah.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid-4" style={{ position: "relative" }}>
          {WORKFLOW_STEPS.map((step, idx) => {
            const targetWidth = `${(idx + 1) * 25}%`; // 1/4 (25%), 2/4 (50%), 3/4 (75%), 4/4 (100%)

            return (
              <div
                key={idx}
                className="tech-card workflow-card"
                style={{
                  "--target-progress": targetWidth,
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <div>
                  {/* Step Number & Icon Top */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span className="step-number">
                      {step.step}
                    </span>
                    <div className="step-icon-box">
                      <CheckCircle2 size={16} className="step-icon" />
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

                {/* Progress Indicator (Neutral when idle, fills to 1/4, 2/4, 3/4, 4/4 on hover) */}
                <div className="step-progress-track">
                  <div className="step-progress-fill" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
