// Data Katalog Layanan & Regulasi regulasisolusi.id
// Berdasarkan data produk resmi perizinan usaha di Indonesia

export const BRAND_INFO = {
  name: "regulasisolusi.id",
  tagline: "Partner Strategis Regulasi, Legalitas Usaha & Sertifikasi",
  description: "Membantu pelaku usaha mulai dari UMKM hingga korporasi dalam perizinan berusaha OSS RBA, registrasi izin edar BPOM RI, izin edar alat kesehatan Kemenkes RI, pendaftaran merek DJKI, dan sertifikasi halal.",
  whatsapp: "6287786865704",
  email: "halo@regulasisolusi.id",
  phone: "+62 877-8686-5704",
  address: "Graha Mandiri Building, Lt. 12, Jl. Jend. Sudirman, Jakarta Selatan",
  operationalHours: "Senin - Jumat: 08.30 - 17.30 WIB",
};

export const SERVICE_CATEGORIES = [
  {
    id: "legalitas-perusahaan",
    title: "Legalitas Perusahaan",
    shortDesc: "Pendirian badan usaha, perizinan berusaha OSS-RBA, sertifikat standar, dan pembaruan data akta.",
    icon: "Building2",
    badge: "Pondasi Usaha",
    services: [
      {
        id: "pendirian-pt",
        name: "Pendirian Perseroan Terbatas (PT)",
        idealFor: "Badan usaha resmi berbadan hukum untuk skala mikro, kecil, menengah, hingga besar.",
        duration: "2 - 5 Hari Kerja",
        features: [
          "Pengecekan dan pemesanan nama PT resmi",
          "Akta notaris pendirian dan SK Kemenkumham RI",
          "Nomor Pokok Wajib Pajak (NPWP) Badan",
          "Nomor Induk Berusaha (NIB) berbasis risiko",
          "Draft Anggaran Dasar & pendaftaran akun OSS-RBA"
        ],
        highlight: "Bisa untuk PT Perorangan (UMK) atau PT Persekutuan Modal biasa"
      },
      {
        id: "pendirian-cv",
        name: "Pendirian Commanditaire Vennootschap (CV)",
        idealFor: "Kemitraan bisnis perdagangan atau jasa dengan kepengurusan sekutu aktif dan pasif.",
        duration: "2 - 3 Hari Kerja",
        features: [
          "Pengecekan nama CV di SABU Kemenkumham",
          "Akta pendirian notaris resmi",
          "Surat Keterangan Terdaftar (SKT) Kemenkumham",
          "NPWP Badan CV",
          "NIB OSS-RBA & hak akses usaha"
        ],
        highlight: "Modal fleksibel dengan prosedur pendirian lebih ringkas"
      },
      {
        id: "nib-oss",
        name: "Pengurusan NIB & Perizinan Berusaha (OSS-RBA)",
        idealFor: "Seluruh pelaku usaha yang memerlukan legalitas izin operasional dan komersial.",
        duration: "1 - 3 Hari Kerja",
        features: [
          "Analisis KBLI 5 digit sesuai klasifikasi KBLI 2020",
          "Penetapan tingkat risiko (Rendah, Menengah Rendah, Menengah Tinggi, Tinggi)",
          "Penerbitan NIB resmi Kementerian Investasi/BKPM",
          "Pengurusan Sertifikat Standar & verifikasi komitmen kementerian teknis",
          "Izin operasional sesuai sektor kegiatan usaha"
        ],
        highlight: "Identitas tunggal wajib berusaha di seluruh wilayah Indonesia"
      },
      {
        id: "perubahan-akta",
        name: "Perubahan Akta & Penyesuaian KBLI Perusahaan",
        idealFor: "Perusahaan yang melakukan pergantian direksi, pemegang saham, penambahan modal, atau domisili.",
        duration: "2 - 4 Hari Kerja",
        features: [
          "Penyusunan risalah RUPS / Keputusan Sirkuler",
          "Akta perubahan notaris resmi",
          "Persetujuan / Penerimaan Pemberitahuan Kemenkumham",
          "Sinkronisasi data pada sistem OSS-RBA dan perpajakan"
        ],
        highlight: "Menjaga kepatuhan legalitas saat struktur bisnis berkembang"
      }
    ]
  },
  {
    id: "registrasi-bpom",
    title: "Registrasi BPOM RI",
    shortDesc: "Konsultasi dan pendampingan registrasi BPOM untuk memperoleh Izin Edar resmi pangan dan kosmetik.",
    icon: "ShieldCheck",
    badge: "Izin Edar Resmi",
    services: [
      {
        id: "kosmetik-lokal",
        name: "Kosmetik Lokal (Sertifikasi CPKB & BPOM NA)",
        idealFor: "Produsen dan pemilik brand kosmetik atau skincare produksi dalam negeri.",
        duration: "Pendampingan Hingga Terbit",
        features: [
          "Pendampingan Sertifikasi CPKB (Cara Pembuatan Kosmetik yang Baik)",
          "Pengurusan Izin Produksi Kosmetik",
          "Penyusunan Dokumen Informasi Produk (DIP)",
          "Pendaftaran Akun Perusahaan di Notifikasi Kosmetik BPOM",
          "Penerbitan Nomor Notifikasi Izin Edar BPOM NA"
        ],
        requirements: [
          "Nomor Induk Berusaha (NIB)",
          "Akta Perusahaan dan SK Kemenkumham",
          "NPWP Perusahaan",
          "KTP Direktur / Penanggung Jawab",
          "Sertifikat CPKB & Izin Produksi Kosmetik",
          "Dokumen Informasi Produk (DIP)",
          "Apoteker sebagai Penanggung Jawab Teknis"
        ],
        highlight: "Syarat mutlak produk kosmetik beredar resmi di pasaran"
      },
      {
        id: "kosmetik-impor",
        name: "Kosmetik Impor (Audit Sarana & Registrasi BPOM)",
        idealFor: "Importir dan distributor resmi produk kosmetik dan skincare dari luar negeri.",
        duration: "Pendampingan Hingga Terbit",
        features: [
          "Pendampingan Audit Sarana Distribusi BPOM",
          "Review Dokumen GMP/ISO dari negara asal",
          "Pemeriksaan Certificate of Free Sale (CFS)",
          "Penyusunan Dokumen Informasi Produk (DIP)",
          "Penerbitan Nomor Notifikasi BPOM NA Impor"
        ],
        requirements: [
          "Nomor Induk Berusaha (NIB)",
          "Akta Perusahaan dan SK Kemenkumham",
          "NPWP Perusahaan",
          "KTP/KITAS Direktur",
          "Sertifikat GMP / ISO pabrik asal",
          "Certificate of Free Sale (CFS)",
          "Dokumen Informasi Produk (DIP)",
          "Apoteker sebagai Penanggung Jawab Teknis"
        ],
        highlight: "Legalitas resmi jalur impor kosmetik masuk Indonesia"
      },
      {
        id: "pangan-lokal",
        name: "Pangan Olahan Lokal (Izin Edar BPOM MD)",
        idealFor: "Pabrik dan produsen makanan/minuman olahan dalam negeri untuk skala ritel modern.",
        duration: "Pendampingan Hingga Terbit",
        features: [
          "Pendampingan Sertifikasi CPPOB (Cara Produksi Pangan Olahan yang Baik)",
          "Pemeriksaan sarana & layout fasilitas produksi",
          "Review dokumen formula, spesifikasi, dan desain label",
          "Pendampingan uji analisis laboratorium",
          "Penerbitan Izin Edar BPOM MD (Makanan Dalam Negeri)"
        ],
        requirements: [
          "Nomor Induk Berusaha (NIB) sesuai KBLI",
          "Akta Perusahaan dan SK Kemenkumham",
          "NPWP Perusahaan",
          "KTP Direktur / Penanggung Jawab",
          "Sarana produksi memenuhi ketentuan CPPOB & layout fasilitas",
          "Dokumen produk (formula, spesifikasi, desain label)",
          "Hasil analisis laboratorium terakreditasi"
        ],
        highlight: "Izin wajib untuk masuk ke jaringan supermarket, minimarket, dan mall"
      },
      {
        id: "pangan-impor",
        name: "Pangan Olahan Impor (Izin Edar BPOM ML)",
        idealFor: "Importir produk makanan dan minuman kemasan dari luar negeri.",
        duration: "Pendampingan Hingga Terbit",
        features: [
          "Pendampingan Sertifikasi SMKPO sarana gudang",
          "Verifikasi Dokumen GMP dan Certificate of Free Sale (CFS)",
          "Pengecekan Letter of Authorization (LoA) & Health Certificate (HC)",
          "Review formula, spesifikasi, dan label terjemahan bahasa Indonesia",
          "Penerbitan Izin Edar BPOM ML (Makanan Luar Negeri)"
        ],
        requirements: [
          "Nomor Induk Berusaha (NIB)",
          "NPWP Perusahaan & KTP/KITAS Direktur",
          "Dokumen Good Manufacturing Practice (GMP)",
          "Certificate of Free Sale (CFS)",
          "Letter of Authorization (LoA)",
          "Health Certificate (HC)",
          "Dokumen Produk (formula, spesifikasi, desain label)",
          "Hasil Analisis Laboratorium"
        ],
        highlight: "Aman dari penyitaan bea cukai dan razia produk impor"
      }
    ]
  },
  {
    id: "registrasi-kemenkes",
    title: "Registrasi KEMENKES RI",
    shortDesc: "Pendampingan sertifikasi CDAKB dan izin edar alat kesehatan Kemenkes RI AKL / AKD.",
    icon: "HeartPulse",
    badge: "Izin Edar Alkes",
    services: [
      {
        id: "alkes-impor",
        name: "Alat Kesehatan Impor (Sertifikasi CDAKB & Izin Edar AKL)",
        idealFor: "Distributor alat kesehatan impor resmi di wilayah Indonesia.",
        duration: "Pendampingan Hingga Terbit",
        features: [
          "Pendampingan Sertifikasi CDAKB (Cara Distribusi Alat Kesehatan yang Baik)",
          "Penyusunan layout kantor dan gudang distribusi berstandar Kemenkes",
          "Review Dokumen Teknis (Spesifikasi, Katalog, CoA, Label)",
          "Pengajuan akun e-Regulasi Alkes Kemenkes RI",
          "Penerbitan Izin Edar Kemenkes RI AKL (Alat Kesehatan Luar Negeri)"
        ],
        requirements: [
          "Nomor Induk Berusaha (NIB)",
          "Akta Perusahaan dan SK Kemenkumham",
          "NPWP Perusahaan & KTP/KITAS Direktur",
          "Sertifikat ISO pabrikan",
          "Letter of Authorization (LoA) resmi",
          "Layout kantor dan gudang distribusi",
          "Perjanjian Kerja Sama (PKS) dinotariskan",
          "Daftar kategori alat kesehatan yang didistribusikan",
          "Dokumen produk (spesifikasi teknis, katalog, CoA, label)"
        ],
        highlight: "Izin resmi wajib untuk distribusi alat kesehatan dan tender RS pemerintah/swasta"
      }
    ]
  },
  {
    id: "pendaftaran-merek",
    title: "Pendaftaran Merek & HAKI",
    shortDesc: "Perlindungan nama brand, logo usaha, dan karya cipta dari pembajakan di DJKI Kemenkumham.",
    icon: "Award",
    badge: "Aset Intelektual",
    services: [
      {
        id: "daftar-merek-djki",
        name: "Pendaftaran Merek Dagang & Jasa (DJKI)",
        idealFor: "Pemilik nama brand produk atau jasa yang ingin mengamankan hak eksklusif 10 tahun.",
        duration: "Submit 24 Jam",
        features: [
          "Penelusuran mendalam kemiripan fonetik dan visual di basis data DJKI",
          "Analisis klasifikasi kelas merek (Nice Classification)",
          "Penyusunan etiket merek dan deskripsi barang/jasa",
          "Penerbitan Bukti Penerimaan Pendaftaran (BPP) resmi",
          "Monitoring masa pengumuman (sanggah) hingga Sertifikat Merek terbit"
        ],
        requirements: [
          "Etiket / logo merek dalam format digital",
          "KTP Pemohon (Perorangan) atau NIB & Akta (Badan Usaha)",
          "NPWP Pemohon",
          "Surat Pernyataan Kepemilikan Merek"
        ],
        highlight: "Mencegah nama brand Anda didaftarkan atau dibajak oleh pihak lain"
      },
      {
        id: "pencatatan-hak-cipta",
        name: "Pencatatan Hak Cipta",
        idealFor: "Desain kemasan, karya tulis, aplikasi/software, modul, logo, dan karya visual.",
        duration: "1 - 2 Hari Kerja",
        features: [
          "Surat Pencatatan Hak Cipta resmi dari DJKI",
          "Perlindungan seumur hidup pencipta + 70 tahun",
          "Berlaku sebagai alat bukti kepemilikan mutlak di pengadilan"
        ],
        requirements: [
          "Contoh ciptaan fisik / file digital",
          "KTP Pencipta dan Pemegang Hak Cipta",
          "Surat Pengalihan Hak Cipta (jika atas nama perusahaan)"
        ],
        highlight: "Proses cepat dengan perlindungan hukum yang berkekuatan tetap"
      }
    ]
  },
  {
    id: "sertifikasi-halal",
    title: "Sertifikasi Halal",
    shortDesc: "Pendampingan sertifikasi halal BPJPH & MUI untuk kepatuhan wajib produk konsumsi di Indonesia.",
    icon: "CheckCircle2",
    badge: "Wajib Nasional",
    services: [
      {
        id: "halal-bpjph",
        name: "Sertifikasi Halal Resmi (BPJPH & MUI)",
        idealFor: "Produsen makanan, minuman, kosmetik, obat herbal, dan jasa boga (catering/resto).",
        duration: "14 - 25 Hari Kerja",
        features: [
          "Pendampingan Skema Self-Declare (Mikro) atau Skema Reguler",
          "Penyusunan Dokumen Manual SJPH (Sistem Jaminan Produk Halal)",
          "Pelatihan dan penetapan Penyelia Halal (PPH)",
          "Pendampingan Audit Lembaga Pemeriksa Halal (LPH)",
          "Sidang Komisi Fatwa MUI hingga Sertifikat Halal BPJPH terbit"
        ],
        requirements: [
          "Nomor Induk Berusaha (NIB) sesuai KBLI terkait",
          "Data produk dan daftar bahan baku / ingredien",
          "Alur proses produksi (matrix bahan vs produk)",
          "KTP Penyelia Halal dan SK Penetapan Internal"
        ],
        highlight: "Meningkatkan kepercayaan konsumen muslim dan memenuhi ketentuan UU JPH"
      }
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Konsultasi & Pemeriksaan Berkas",
    desc: "Diskusikan model bisnis Anda. Tim konsultan kami menganalisis KBLI, kelengkapan berkas, serta jalur regulasi yang tepat tanpa biaya tersembunyi."
  },
  {
    step: "02",
    title: "Verifikasi & Penyiapan Dokumen",
    desc: "Kami membantu menyusun draft akta, permohonan pendaftaran, form teknis, layout sarana, atau etiket merek agar memenuhi standar instansi terkait."
  },
  {
    step: "03",
    title: "Proses Pengurusan ke Sistem Resmi",
    desc: "Pendaftaran langsung diproses ke sistem pemerintah (OSS-RBA, AHU Kemenkumham, e-BPOM, e-Regulasi Kemenkes, DJKI, SIHALAL). Status proses dilaporkan berkala."
  },
  {
    step: "04",
    title: "Izin & Sertifikat Resmi Terbit",
    desc: "Dokumen legalitas, SK menteri, nomor izin edar, dan sertifikat resmi diterima lengkap dalam format digital dan fisik siap pakai untuk operasional usaha Anda."
  }
];

export const TRUST_STATS = [
  { value: "1,250+", label: "Legalitas & Izin Terbit", sub: "PT, CV, NIB, BPOM & Merek", icon: "FileCheck" },
  { value: "99.4%", label: "Tingkat Approval", sub: "Verifikasi cepat tanpa penolakan", icon: "CheckCircle" },
  { value: "10+ Thn", label: "Pengalaman Ahli Regulasi", sub: "Praktisi hukum berpengalaman", icon: "Scale" },
  { value: "100%", label: "Dokumen Resmi Pemerintah", sub: "Garansi keaslian SK & Sertifikat", icon: "ShieldCheck" }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Pengurusan PT dan NIB usaha kami selesai sangat cepat. Penjelasan KBLI-nya sangat jelas dan praktis bagi kami yang baru memulai bisnis.",
    client: "Rendy Pratama",
    role: "Founder Kopi Senja Nusantara",
    service: "Pendirian PT & NIB OSS",
  },
  {
    quote: "Izin edar BPOM kosmetik lokal kami berhasil terbit dengan pendampingan CPKB yang terarah. Seluruh dokumen DIP dan uji lab dipandu dengan rapi.",
    client: "dr. Sabrina Andini",
    role: "Owner GlowDerm Clinic & Beauty",
    service: "BPOM Kosmetik Lokal & Merek DJKI",
  },
  {
    quote: "Registrasi izin edar alat kesehatan AKL Kemenkes RI impor kami selesai tepat waktu. Tim sangat menguasai audit CDAKB dan teknis dokumen LoA pabrikan.",
    client: "Hendrik Wijaya",
    role: "Direktur PT Medika Indo Distribusi",
    service: "Registrasi Alkes Kemenkes RI (AKL)",
  }
];

export const FAQ_LIST = [
  {
    q: "Apa perbedaan antara PT Perorangan dengan PT Biasa?",
    a: "PT Perorangan dapat didirikan oleh 1 orang WNI khusus untuk kriteria Usaha Mikro dan Kecil (UMK) tanpa akta notaris, sehingga prosesnya lebih cepat (1-2 hari). Sedangkan PT Biasa (Persekutuan Modal) memerlukan minimal 2 orang pemegang saham, akta notaris resmi, dan ditujukan untuk skala usaha yang lebih luas atau persiapan kemitraan korporasi."
  },
  {
    q: "Apa saja syarat utama untuk mendaftarkan izin edar kosmetik di BPOM?",
    a: "Untuk kosmetik lokal, syarat utamanya adalah NIB, NPWP, sertifikat pemenuhan CPKB (atau rekomendasi sarana), Izin Produksi Kosmetik, Dokumen Informasi Produk (DIP), serta penanggung jawab teknis Apoteker. Untuk kosmetik impor diperlukan sertifikat GMP/ISO dari pabrik negara asal, CFS (Certificate of Free Sale), serta audit sarana gudang."
  },
  {
    q: "Bagaimana alur izin edar alat kesehatan impor di Kemenkes RI?",
    a: "Alur utamanya meliputi pemenuhan NIB izin edar distributor alkes, sertifikasi CDAKB (Cara Distribusi Alat Kesehatan yang Baik), penyusunan layout gudang berstandar, serta kelengkapan dokumen pabrikan luar negeri seperti ISO 13485, Letter of Authorization (LoA), dan dokumen teknis produk untuk penerbitan izin AKL."
  },
  {
    q: "Apakah nama merek saya dijamin bisa terbit di DJKI?",
    a: "Sebelum diajukan, tim kami melakukan penelusuran mendalam atas kesamaan fonetik, visual, dan konseptual pada basis data resmi DJKI. Apabila ditemukan potensi kemiripan dengan merek yang telah terdaftar, kami akan memberikan saran penyesuaian untuk meminimalisasi risiko penolakan hingga mendekati nol."
  }
];

export const QUIZ_CATEGORIES = [
  {
    id: "fnb",
    title: "Makanan & Minuman Olahan (Lokal / Impor)",
    desc: "Produk pangan kemasan, bumbu, camilan, minuman ritel, dan frozen food",
    permits: [
      { name: "NIB OSS-RBA (KBLI Industri Makanan/Minuman)", mandatory: true },
      { name: "Sertifikasi CPPOB & Izin Edar BPOM MD (Lokal)", mandatory: true },
      { name: "Izin Edar BPOM ML & SMKPO (Khusus Impor)", mandatory: false },
      { name: "Sertifikasi Halal BPJPH", mandatory: true },
      { name: "Pendaftaran Merek DJKI (Kelas 29, 30)", mandatory: false }
    ],
    recommendation: "Untuk produk pangan kemasan yang masuk ritel modern, prioritaskan Sertifikasi CPPOB pabrik dan Izin Edar BPOM MD, serta Sertifikasi Halal wajib."
  },
  {
    id: "beauty",
    title: "Kosmetik & Skincare (Lokal / Impor)",
    desc: "Serum, krim wajah, sabun kosmetik, body care, makeup, dan parfum",
    permits: [
      { name: "Badan Usaha Resmi (PT / CV)", mandatory: true },
      { name: "NIB OSS-RBA KBLI Industri/Distribusi Kosmetik", mandatory: true },
      { name: "Sertifikasi CPKB / Izin Produksi Kosmetik", mandatory: true },
      { name: "Notifikasi Izin Edar BPOM NA", mandatory: true },
      { name: "Pendaftaran Merek DJKI (Kelas 3)", mandatory: true }
    ],
    recommendation: "Produk kosmetik wajib memiliki penanggung jawab teknis Apoteker dan memenuhi sarana CPKB sebelum nomor notifikasi BPOM NA diterbitkan."
  },
  {
    id: "alkes",
    title: "Alat Kesehatan & PKRT (Kemenkes RI)",
    desc: "Distribusi alat kesehatan, alat diagnostik, perbekalan kesehatan rumah tangga",
    permits: [
      { name: "Badan Usaha PT", mandatory: true },
      { name: "NIB KBLI Perdagangan Besar Alat Kesehatan", mandatory: true },
      { name: "Sertifikasi CDAKB (Cara Distribusi Alkes yang Baik)", mandatory: true },
      { name: "Izin Edar Kemenkes RI (AKL Impor / AKD Lokal)", mandatory: true }
    ],
    recommendation: "Pastikan ketersediaan layout kantor/gudang yang memenuhi standar CDAKB serta Letter of Authorization (LoA) dari pabrikan luar negeri."
  },
  {
    id: "corporate",
    title: "Badan Usaha & Perdagangan Umum",
    desc: "Jasa konsultan, perdagangan umum, ekspor-impor, dan kontraktor",
    permits: [
      { name: "Pendirian PT / CV Resmi Kemenkumham", mandatory: true },
      { name: "NIB OSS-RBA Sesuai KBLI 2020", mandatory: true },
      { name: "Pendaftaran Merek Dagang / Jasa DJKI", mandatory: true },
      { name: "Pengurusan Sertifikat Standar Terverifikasi", mandatory: false }
    ],
    recommendation: "Langkah awal adalah pemilahan KBLI yang tepat saat pendirian PT/CV agar operasional dan pembukaan rekening bank bisnis berjalan lancar."
  }
];
