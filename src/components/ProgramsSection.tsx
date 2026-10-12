import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { programsData } from "@/data/content";

const DELAYS = [0, 1, 2] as const;

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-28 md:py-36 bg-ivory dark:bg-[#132018]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Programs"
          title="A practice for every stage of life"
          description="Every program is capped in size and led in person — choose the one that matches where you are today."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {programsData.map((program, i) => (
            <Reveal
              key={program.name}
              delay={DELAYS[i % 3]}
              className="lift bg-warmwhite dark:bg-white/5 border border-forest/8 dark:border-white/10 rounded-4xl p-8 flex flex-col"
            >
              <h3 className="font-display text-xl text-forest dark:text-ivory">{program.name}</h3>
              <p className="text-xs text-sand tracking-wide mt-1 uppercase">{program.level}</p>
              <p className="text-sm text-charcoal/60 dark:text-ivory/60 mt-3">{program.duration}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {program.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-charcoal/80 dark:text-ivory/75"
                  >
                    <span className="text-sand mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-forest/10 dark:border-white/10">
                <span className="font-display text-xl text-forest dark:text-sand">{program.price}</span>
                <a
                  href="#contact"
                  className="text-sm font-medium text-forest dark:text-ivory border-b border-sand pb-0.5 hover:gap-2 transition-all"
                >
                  Enquire →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
