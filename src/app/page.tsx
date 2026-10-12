import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import CtaStrip from "@/components/CtaStrip";
import FaqSection from "@/components/FaqSection";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import InstructorSection from "@/components/InstructorSection";
import Navbar from "@/components/Navbar";
import ProgramsSection from "@/components/ProgramsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ScrollProgress from "@/components/ScrollProgress";
import StatsBar from "@/components/StatsBar";
import WhyChooseSection from "@/components/WhyChooseSection";
import { buildLocalBusinessJsonLd } from "@/lib/seo";

export default function HomePage() {
  // "<" is escaped so the JSON can never close the <script> tag early.
  const jsonLd = JSON.stringify(buildLocalBusinessJsonLd()).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <WhyChooseSection />
        <BenefitsSection />
        <CtaStrip />
        <ProgramsSection />
        <ScheduleSection />
        <InstructorSection />
        <ReviewsSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
