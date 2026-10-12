import Reveal from "./Reveal";

const HIGHLIGHTS = [
  "Certified, experienced instructor",
  "Traditional yoga, taught with care",
  "Small batches, individual attention",
  "A warm, judgement-free community",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 md:py-36 bg-warmwhite dark:bg-[#0f1a14]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Reveal className="relative order-2 md:order-1">
          <div className="relative rounded-4xl overflow-hidden shadow-soft aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
              alt="Founder guiding a student through a seated posture inside the studio"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 md:-right-10 glass rounded-3xl px-6 py-5 shadow-card border border-white/40 max-w-[220px]">
            <p className="font-display text-3xl text-forest dark:text-ivory">10+</p>
            <p className="text-xs text-forest/70 dark:text-ivory/70 tracking-wide">
              Years guiding students toward balance
            </p>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal as="p" className="text-sand font-medium tracking-[0.2em] text-xs uppercase mb-4">
            Our Story
          </Reveal>
          <Reveal as="h2" className="font-display text-3xl md:text-5xl text-forest dark:text-ivory leading-tight">
            Rooted in tradition, <span className="italic text-sage-dark dark:text-sage-light">taught for modern life</span>
          </Reveal>
          <Reveal className="arc-divider my-6">{null}</Reveal>
          <Reveal as="p" className="text-charcoal/80 dark:text-ivory/75 leading-relaxed">
            Vishwa Bhaavni Yoga Centre began as a small morning class on a terrace in Shanti Nagar and has grown, one referral at a time,
            into one of Bengaluru&apos;s most trusted yoga studios. Nothing about that growth was accidental — every class is still led
            personally by a certified instructor who believes yoga is taught one body at a time, not one batch at a time.
          </Reveal>
          <Reveal as="p" delay={1} className="mt-4 text-charcoal/80 dark:text-ivory/75 leading-relaxed">
            We hold closely to traditional Hatha and pranayama methods passed down through years of study, while shaping how we teach
            around the realities of modern life — stiff desks, short mornings, anxious minds, ageing joints. The result is a practice
            that feels authentic, not performative, and a community that shows up for each other as much as for the mat.
          </Reveal>

          <Reveal as="ul" delay={2} className="mt-8 grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((text) => (
              <li key={text} className="flex items-start gap-3">
                <span className="mt-1 text-sand">◆</span>
                <span className="text-sm text-charcoal/85 dark:text-ivory/80">{text}</span>
              </li>
            ))}
          </Reveal>

          <Reveal
            as="a"
            href="#programs"
            delay={3}
            className="inline-flex items-center gap-2 mt-10 text-forest dark:text-sand font-medium border-b border-sand pb-1 hover:gap-3 transition-all"
          >
            Explore our programs →
          </Reveal>
        </div>
      </div>
    </section>
  );
}
