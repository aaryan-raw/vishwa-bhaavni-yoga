import FaqAccordion from "./FaqAccordion";
import SectionHeader from "./SectionHeader";
import { faqData } from "@/data/content";

export default function FaqSection() {
  return (
    <section id="faq" className="py-28 md:py-36 bg-ivory dark:bg-[#132018]">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions before your first class"
          className="text-center mb-14"
        />
        <FaqAccordion items={faqData} />
      </div>
    </section>
  );
}
