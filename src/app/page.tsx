import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CasesSection from "@/components/CasesSection";
import BenefitsSection from "@/components/BenefitsSection";
import DoctorsSection from "@/components/DoctorsSection";
import ProcessSection from "@/components/ProcessSection";
import AppliancesSection from "@/components/AppliancesSection";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
        <CasesSection />
        <BenefitsSection />
        <DoctorsSection />
        <ProcessSection />
        <AppliancesSection />
        <Testimonials />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}
