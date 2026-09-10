import { Shield, CheckCircle, Lock, Headphones, RefreshCw, Zap } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Praktisi Hukum & Regulasi Berlisensi",
      desc: "Bukan sekadar biro jasa biasa. Berkas Anda ditangani langsung oleh praktisi hukum yang memahami aturan KBLI 2020 dan regulasi kementerian secara presisi."
    },
    {
      icon: Zap,
      title: "Proses Cepat Berbasis Digital",
      desc: "Seluruh alur pendaftaran terintegrasi langsung dengan sistem OSS RBA, AHU Kemenkumham, dan DJKI. Cepat, efisien, dan dapat dipantau setiap saat."
    },
    {
      icon: Lock,
      title: "Jaminan Kerahasiaan Data (NDA)",
      desc: "Data pemegang saham, dokumen legalitas, dan formula/merek produk Anda dilindungi dengan standar privasi tinggi dan komitmen kerahasiaan."
    },
    {
      icon: RefreshCw,
      title: "Transparansi Biaya Tanpa Pungli",
      desc: "Struktur harga penawaran jelas sejak awal. Tidak ada biaya siluman, pungutan liar, atau tagihan mendadak di tengah proses pengurusan."
    },
    {
      icon: Headphones,
      title: "Pendampingan Pasca-Penerbitan Izin",
      desc: "Kami tidak berhenti setelah izin terbit. Kami siap membantu kepatuhan lanjutan seperti pelaporan LKPM dan update data berkala."
    },
    {
      icon: CheckCircle,
      title: "Garansi Dokumen Asli & Resmi",
      desc: "Semua dokumen hukum, sertifikat, dan SK yang Anda terima bergaransi 100% asli, terdaftar di basis data nasional, dan dapat divalidasi via barcode resmi."
    }
  ];

  return (
    <section id="keunggulan" className="section-padding" style={{ position: "relative", backgroundColor: "#FFFFFF", borderTop: "1px solid var(--border-light)" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">Keunggulan & Integritas</div>
          <h2 className="section-title">
            Mengapa Ratusan Pelaku Usaha <br />
            <span className="tech-gradient-text">Memilih regulasisolusi.id?</span>
          </h2>
          <p className="section-subtitle">
            Fondasi legalitas yang kokoh adalah investasi terpenting bagi kelangsungan bisnis Anda.
            Inilah standar keunggulan layanan yang kami hadirkan.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid-3">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="tech-card"
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={24} color="var(--primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.18rem", color: "var(--text-title)", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
