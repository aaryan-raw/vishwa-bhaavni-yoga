import Counter from "./Counter";
import Reveal from "./Reveal";
import { heroStats } from "@/data/site";

export default function StatsBar() {
  return (
    <section className="relative -mt-1 bg-forest dark:bg-[#0c1610] py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {heroStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i === 0 ? undefined : (i as 1 | 2 | 3)}>
            <p className="font-display text-4xl md:text-5xl text-sand num-serif">
              <Counter target={stat.target} decimals={stat.decimals} />
              {stat.suffix}
            </p>
            <p className="mt-2 text-ivory/70 text-sm tracking-wide">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
