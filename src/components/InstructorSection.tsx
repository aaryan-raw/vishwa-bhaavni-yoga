import Reveal from "./Reveal";

const CREDENTIALS = [
  { value: "10+ yrs", label: "Teaching Experience" },
  { value: "Certified", label: "Yoga Alliance & AYUSH" },
  { value: "1000+", label: "Classes Conducted" },
  { value: "All Ages", label: "From Kids to Seniors" },
];

export default function InstructorSection() {
  return (
    <section id="instructor" className="py-28 md:py-36 bg-forest dark:bg-[#0c1610] relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sand/10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <Reveal className="relative">
          <div className="rounded-4xl overflow-hidden shadow-soft aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=900&q=80"
              alt="Portrait of the lead instructor in a calm studio setting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-3xl px-6 py-4 border border-white/30">
            <p className="text-sand text-sm">★★★★★</p>
            <p className="text-ivory text-xs mt-1">&quot;Patient, precise, deeply knowledgeable&quot;</p>
          </div>
        </Reveal>

        <div>
          <Reveal as="p" className="text-sand font-medium tracking-[0.2em] text-xs uppercase mb-4">
            Meet the Instructor
          </Reveal>
          <Reveal as="h2" className="font-display text-3xl md:text-5xl text-ivory leading-tight">
            Guided by discipline, taught with warmth
          </Reveal>
          <Reveal className="arc-divider my-6">{null}</Reveal>
          <Reveal as="p" className="text-ivory/80 leading-relaxed">
            With over a decade of teaching experience and training in traditional Hatha yoga, pranayama and meditation,
            our lead instructor has guided students from their first downward dog to confident, independent practice.
            Classes are built around correct alignment, breath awareness and patience — never speed, and never comparison.
          </Reveal>
          <Reveal as="p" delay={1} className="mt-4 text-ivory/80 leading-relaxed">
            &quot;Yoga isn&apos;t a performance,&quot; is a philosophy repeated in every batch. &quot;It&apos;s a conversation with your own body,
            and my role is simply to help you listen to it better.&quot;
          </Reveal>

          <Reveal delay={2} className="grid sm:grid-cols-2 gap-4 mt-8">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="glass-dark border border-white/10 rounded-2xl p-5">
                <p className="text-sand font-display text-2xl">{item.value}</p>
                <p className="text-ivory/70 text-xs mt-1 tracking-wide">{item.label}</p>
              </div>
            ))}
          </Reveal>

          <Reveal
            as="a"
            href="#contact"
            delay={3}
            className="inline-flex items-center gap-2 mt-10 bg-sand text-forest px-7 py-3.5 rounded-full font-semibold hover:bg-sand-light transition-colors"
          >
            Learn Under Expert Guidance
          </Reveal>
        </div>
      </div>
    </section>
  );
}
