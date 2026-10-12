import ContactForm from "./ContactForm";
import NewsletterForm from "./NewsletterForm";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-warmwhite dark:bg-[#0f1a14]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Visit Us" title="Come practice with us" />

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal className="bg-forest text-ivory rounded-4xl p-8 md:p-10 shadow-soft flex flex-col">
            <h3 className="font-display text-2xl mb-6">{siteConfig.name}</h3>

            <div className="space-y-5 text-sm">
              <div className="flex gap-4">
                <svg className="shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A15C" strokeWidth="1.6">
                  <path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <p className="text-ivory/85 leading-relaxed">
                  52, 3rd Cross Road, Bangiyappa Garden,<br />Shanti Nagar, Bengaluru, Karnataka 560027
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <svg className="shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A15C" strokeWidth="1.6">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.9.5 2.9.6a2 2 0 011.7 2Z" />
                </svg>
                <a href={siteConfig.phoneHref} className="text-ivory/85 hover:text-sand transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <svg className="shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A15C" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <a href={`mailto:${siteConfig.email}`} className="text-ivory/85 hover:text-sand transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex gap-4">
                <svg className="shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A15C" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <div className="text-ivory/85 leading-relaxed">
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={siteConfig.phoneHref}
                className="flex-1 text-center bg-sand text-forest px-5 py-3 rounded-full font-semibold hover:bg-sand-light transition-colors"
              >
                Call Now
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener"
                className="flex-1 text-center bg-white/10 border border-white/20 text-ivory px-5 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 rounded-3xl overflow-hidden border border-white/10">
              <iframe
                title="Map to Vishwa Bhaavni Yoga Centre"
                src={siteConfig.mapEmbedSrc}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Reveal>

          <ContactForm />
        </div>

        {/* Newsletter */}
        <Reveal className="mt-10 bg-sage/15 dark:bg-white/5 border border-sage/25 dark:border-white/10 rounded-4xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl text-forest dark:text-ivory">Monthly notes on practice</h4>
            <p className="text-sm text-charcoal/60 dark:text-ivory/65 mt-1">
              One short email a month — seasonal class updates, breathing techniques, and studio news. No spam.
            </p>
          </div>
          <NewsletterForm />
        </Reveal>
      </div>
    </section>
  );
}
