"use client";

import { siteConfig } from "@/data/site";
import { useScrolledPast } from "@/lib/hooks";
import { classNames } from "@/lib/utilities";

/** WhatsApp chat button, back-to-top button and the desktop "Book Free Trial" pill. */
export default function FloatingActions() {
  const showBackToTop = useScrolledPast(500);

  return (
    <>
      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-soft hover:scale-105 transition-transform"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2Zm5.8 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-1-.3-1.6-.6-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5.2.6.7 1.9.8 2 .1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.2.8.2.4.9 1.5 2 2.4 1.3 1.2 2.4 1.5 2.8 1.7.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.5-.3.8-.2.3.1 2 1 2.4 1.1.4.2.6.3.7.4.1.3.1.9-.1 1.5Z" />
        </svg>
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={classNames(
          "fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-forest dark:bg-sand text-ivory dark:text-forest grid place-items-center shadow-soft transition-all duration-300 hover:-translate-y-1",
          !showBackToTop && "opacity-0 pointer-events-none",
        )}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      <a
        href="#contact"
        className="fixed bottom-24 right-6 z-40 hidden xl:flex items-center gap-2 bg-sand text-forest px-5 py-3 rounded-full font-semibold text-sm shadow-soft hover:bg-sand-light transition-colors"
      >
        Book Free Trial
      </a>
    </>
  );
}
