import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import ServicesCatalog from "@/components/ServicesCatalog";
import LegalQuiz from "@/components/LegalQuiz";
import ProcessSteps from "@/components/ProcessSteps";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTAContact from "@/components/CTAContact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <Hero />
      <TrustStats />
      <ServicesCatalog />
      <LegalQuiz />
      <ProcessSteps />
      <WhyUs />
      <Testimonials />
      <FAQSection />
      <CTAContact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
