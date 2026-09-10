import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-family",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "regulasisolusi.id | Konsultan Legalitas Usaha, Perizinan OSS & Sertifikasi Resmi",
  description: "Layanan pendampingan legalitas usaha terpercaya di Indonesia: Pendirian PT/CV/PT Perorangan, NIB OSS RBA, Pendaftaran Merek DJKI, Izin Edar BPOM & Halal BPJPH, serta Sertifikasi ISO resmi.",
  keywords: [
    "konsultan legalitas",
    "jasa pendirian PT",
    "jasa PT perorangan",
    "jasa NIB OSS RBA",
    "pendaftaran merek DJKI",
    "izin edar BPOM",
    "sertifikasi halal BPJPH",
    "konsultan perizinan usaha",
    "regulasisolusi id"
  ],
  authors: [{ name: "regulasisolusi.id" }],
  creator: "regulasisolusi.id",
  openGraph: {
    title: "regulasisolusi.id | Partner Strategis Legalitas & Perizinan Bisnis",
    description: "Pendampingan kepatuhan hukum, izin berusaha OSS RBA, HAKI merek, izin produk BPOM & Halal untuk percepatan bisnis Anda di Indonesia.",
    url: "https://regulasisolusi.id",
    siteName: "regulasisolusi.id",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "regulasisolusi.id",
    "description": "Konsultan legalitas dan perizinan berusaha, pendaftaran merek HAKI, registrasi produk BPOM dan sertifikasi halal di Indonesia.",
    "url": "https://regulasisolusi.id",
    "telephone": "+6287786865704",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Graha Mandiri Building, Lt. 12, Jl. Jend. Sudirman",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID"
    },
    "openingHours": "Mo-Fr 08:30-17:30",
    "priceRange": "$$"
  };

  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
