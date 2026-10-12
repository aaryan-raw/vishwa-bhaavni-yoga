import Reveal from "./Reveal";

const LEAVES = [
  { top: "18%", left: "8%", size: 34, delay: "0s" },
  { top: "65%", left: "14%", size: 26, delay: "3s" },
  { top: "24%", right: "10%", size: 30, delay: "1.5s" },
] as const;

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=2000&q=80"
          alt="Practitioner in a seated yoga pose at sunrise, hands in gyan mudra"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/55 to-forest/85"></div>
        <div
          className="absolute inset-0 gradient-shift"
          style={{
            background:
              "linear-gradient(120deg, rgba(31,61,46,0.25), rgba(201,161,92,0.12), rgba(31,61,46,0.35))",
          }}
        ></div>
      </div>

      {/* floating leaves */}
      {LEAVES.map((leaf, i) => {
        const { top, size, delay } = leaf;
        const side = "left" in leaf ? { left: leaf.left } : { right: leaf.right };
        return (
          <svg
            key={i}
            className="leaf hidden md:block"
            style={{ top, ...side, animationDelay: delay }}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E6CD98"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d="M4 20c8-1 14-7 15-15C10 6 5 12 4 20Z" />
          </svg>
        );
      })}

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-24">
        <Reveal
          immediate
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-ivory text-xs md:text-sm tracking-wide mb-8 border border-white/20"
        >
          <span className="text-sand">★★★★★</span> 4.9 rated · 300+ students in Bengaluru
        </Reveal>

        <Reveal
          as="h1"
          immediate
          className="font-display text-4xl sm:text-5xl md:text-7xl leading-[1.1] text-warmwhite font-medium"
        >
          Transform Your <span className="text-sand italic">Mind,</span><br className="hidden sm:block" /> Body &amp; Soul
        </Reveal>

        <Reveal
          as="p"
          immediate
          delay={1}
          className="mt-6 text-base md:text-lg text-ivory/90 max-w-2xl mx-auto leading-relaxed"
        >
          A quiet, welcoming space in Shanti Nagar where traditional yoga meets thoughtful, modern teaching —
          for absolute beginners, seasoned practitioners, and everyone finding their way back to stillness.
        </Reveal>

        <Reveal
          immediate
          delay={2}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-sand hover:bg-sand-light text-forest px-8 py-4 rounded-full font-semibold shadow-soft transition-all hover:-translate-y-0.5"
          >
            Book Free Trial Class
          </a>
          <a
            href="#programs"
            className="w-full sm:w-auto border border-ivory/40 text-ivory hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors"
          >
            Join Today
          </a>
        </Reveal>

        {/* signature breathing guide */}
        <Reveal
          immediate
          delay={3}
          className="mt-14 flex flex-col items-center gap-2 text-ivory/80"
        >
          <div className="breath-ring w-16 h-16 relative">
            <svg viewBox="0 0 64 64" className="w-16 h-16">
              <circle className="r1" cx="32" cy="32" r="30" stroke="#C9A15C" strokeWidth="1" fill="none" />
              <circle className="r2" cx="32" cy="32" r="21" stroke="#C9A15C" strokeWidth="1" fill="none" />
              <circle className="r3 breath-dot" cx="32" cy="32" r="4" fill="#C9A15C" />
            </svg>
          </div>
          <span className="text-[11px] tracking-[0.2em] uppercase">Breathe with the ring</span>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/80 hover:text-ivory transition-colors"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="11" cy="10" r="2.6" fill="currentColor" className="breath-dot" />
        </svg>
      </a>
    </section>
  );
}
