import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RequisitosSection from "@/components/RequisitosSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoForm from "@/components/DemoForm";
import TrustSection from "@/components/TrustSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <div className="noise-overlay" />
      <Navbar />
      <HeroSection />
      <RequisitosSection />
      <BenefitsSection />
      <HowItWorksSection />
      <DemoForm />
      <PlansSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
