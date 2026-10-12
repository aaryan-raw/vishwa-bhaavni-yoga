"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import type { FaqItem } from "@/data/content";
import { classNames } from "@/lib/utilities";

/** Single-open accordion: opening one question closes the others. */
export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal
            key={item.q}
            className="bg-warmwhite dark:bg-white/5 border border-forest/10 dark:border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              aria-expanded={isOpen}
              aria-controls={`faqPanel${i}`}
            >
              <span className="font-medium text-forest dark:text-ivory">{item.q}</span>
              <svg
                className="shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : undefined }}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div id={`faqPanel${i}`} className={classNames("accordion-panel", isOpen && "open")}>
              <div>
                <p className="px-6 pb-5 text-sm text-charcoal/70 dark:text-ivory/65 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
