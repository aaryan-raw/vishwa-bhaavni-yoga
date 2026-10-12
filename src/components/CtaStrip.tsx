export default function CtaStrip() {
  return (
    <section className="bg-forest dark:bg-[#0c1610] py-14">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="font-display text-2xl md:text-3xl text-ivory">Curious what one class feels like?</p>
        <a
          href="#contact"
          className="bg-sand text-forest px-8 py-3.5 rounded-full font-semibold hover:bg-sand-light transition-colors shadow-soft whitespace-nowrap"
        >
          Book a Free Trial
        </a>
      </div>
    </section>
  );
}
