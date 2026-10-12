import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { whyChooseData } from "@/data/content";

const DELAYS = [0, 1, 2, 3] as const;

export default function WhyChooseSection() {
  return (
    <section className="py-28 md:py-36 bg-ivory dark:bg-[#132018]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="What makes practice here different"
          description="Eight quiet reasons our students stay for years, not weeks."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseData.map((card, i) => (
            <Reveal
              key={card.title}
              delay={DELAYS[i % 4]}
              className="lift bg-warmwhite dark:bg-white/5 border border-forest/8 dark:border-white/10 rounded-3xl p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-forest/8 dark:bg-sand/10 text-forest dark:text-sand grid place-items-center mb-5">
                <Icon name={card.icon} />
              </div>
              <h3 className="font-display text-lg text-forest dark:text-ivory mb-2">{card.title}</h3>
              <p className="text-sm text-charcoal/70 dark:text-ivory/65 leading-relaxed">{card.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
