import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { benefitsData } from "@/data/content";

const DELAYS = [0, 1, 2, 3] as const;

export default function BenefitsSection() {
  return (
    <section className="py-28 md:py-36 bg-warmwhite dark:bg-[#0f1a14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Benefits" title="What steady practice gives back" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefitsData.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={DELAYS[i % 4]}
              className="group relative bg-ivory dark:bg-white/5 border border-forest/8 dark:border-white/10 rounded-3xl p-7 overflow-hidden lift"
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-sand/10 group-hover:scale-150 transition-transform duration-700"></div>
              <p className="relative text-sand font-display text-3xl mb-3">0{i + 1}</p>
              <h3 className="relative font-display text-lg text-forest dark:text-ivory mb-2">{benefit.title}</h3>
              <p className="relative text-sm text-charcoal/70 dark:text-ivory/65 leading-relaxed">{benefit.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
