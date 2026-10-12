import { footerQuickLinks, siteConfig, socialLinks } from "@/data/site";

const SOCIAL_ICONS = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="1" />
    </>
  ),
  facebook: <path d="M14 9h3V6h-3a3 3 0 00-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9a1 1 0 011-1Z" />,
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
} as const;

export default function Footer() {
  return (
    <footer className="bg-forest dark:bg-[#0a1310] text-ivory pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="18.5" stroke="#C9A15C" strokeWidth="1" />
              <path d="M20 8C20 8 12 16 12 23a8 8 0 0016 0c0-7-8-15-8-15Z" stroke="#F4EFE6" strokeWidth="1.4" />
            </svg>
            <span className="font-display text-lg">{siteConfig.shortName}</span>
          </div>
          <p className="text-ivory/60 text-sm leading-relaxed">
            A quiet home for traditional yoga and modern wellness in the heart of Bengaluru.
          </p>
          <a
            href={siteConfig.googleMapsHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 mt-5 text-sand text-sm border border-sand/40 rounded-full px-4 py-2 hover:bg-sand/10 transition-colors"
          >
            ★ Leave a Google Review
          </a>
        </div>

        <div>
          <h5 className="font-display text-lg mb-5">Quick Links</h5>
          <ul className="space-y-3 text-sm text-ivory/70">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-sand transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-display text-lg mb-5">Contact</h5>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li>52, 3rd Cross Road, Bangiyappa Garden, Shanti Nagar, Bengaluru 560027</li>
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-sand transition-colors">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sand transition-colors">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-display text-lg mb-5">Opening Hours</h5>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li>{siteConfig.hours.weekdays}</li>
            <li>{siteConfig.hours.sunday}</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-white/15 grid place-items-center hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {SOCIAL_ICONS[social.id]}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/50">
        <p>© 2026 Vishwa Bhaavni Yoga Centre. All rights reserved.</p>
        <p>
          Designed with care in Bengaluru ·{" "}
          <a href="#" className="hover:text-sand">
            Privacy Policy
          </a>{" "}
          ·{" "}
          <a href="#" className="hover:text-sand">
            Terms
          </a>
        </p>
      </div>
    </footer>
  );
}
