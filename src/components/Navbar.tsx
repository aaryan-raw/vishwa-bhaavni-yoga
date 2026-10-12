"use client";

import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { desktopNavLinks, mobileNavLinks, siteConfig } from "@/data/site";
import { useScrolledPast } from "@/lib/hooks";
import { classNames } from "@/lib/utilities";

export default function Navbar() {
  const scrolled = useScrolledPast(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={classNames(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled && "glass shadow-card",
      )}
    >
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Vishwa Bhaavni Yoga Centre — home"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="18.5" stroke="#C9A15C" strokeWidth="1" />
            <path
              d="M20 8C20 8 12 16 12 23a8 8 0 0016 0c0-7-8-15-8-15Z"
              stroke="#1F3D2E"
              strokeWidth="1.4"
              className="dark:stroke-ivory"
            />
            <circle cx="20" cy="24" r="2.4" fill="#C9A15C" />
          </svg>
          <span className="leading-tight">
            <span className="block font-display text-lg md:text-xl tracking-wide text-forest dark:text-ivory">
              {siteConfig.shortName}
            </span>
            <span className="block font-kannada text-[11px] md:text-xs text-sage dark:text-sage-light -mt-0.5">
              {siteConfig.nameKannada}
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-[15px] text-forest/90 dark:text-ivory/90">
          {desktopNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="tab-underline hover:text-forest dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-forest text-warmwhite dark:bg-sand dark:text-forest px-5 py-2.5 rounded-full text-sm font-medium hover:bg-forest-light dark:hover:bg-sand-light transition-colors shadow-card"
          >
            Book Free Trial
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden w-10 h-10 grid place-items-center text-forest dark:text-ivory"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        id="mobileMenu"
        className={classNames(
          "lg:hidden",
          !menuOpen && "hidden",
          "glass border-t border-forest/10 px-6 py-6 flex flex-col gap-4 text-forest dark:text-ivory font-medium",
        )}
      >
        {mobileNavLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-2 text-center bg-forest text-warmwhite px-5 py-3 rounded-full"
        >
          Book Free Trial
        </a>
      </div>
    </header>
  );
}
