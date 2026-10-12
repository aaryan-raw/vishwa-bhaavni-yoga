"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import type { Review } from "@/data/content";
import { classNames } from "@/lib/utilities";

const AUTOPLAY_MS = 6000;

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = reviews.length;

  const goTo = (target: number) => setIndex((target + count) % count);

  // Auto-advance every 6s; pauses while the pointer is over the slides.
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, count]);

  return (
    <Reveal className="relative max-w-3xl mx-auto">
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.name} className="w-full shrink-0 px-2">
              <div className="bg-warmwhite dark:bg-white/5 border border-forest/10 dark:border-white/10 rounded-4xl p-8 md:p-10 text-center shadow-card">
                <p className="text-sand text-lg mb-4">★★★★★</p>
                <p className="font-display text-lg md:text-xl text-forest dark:text-ivory leading-relaxed">
                  {`"${review.text}"`}
                </p>
                <p className="mt-6 text-sm text-charcoal/60 dark:text-ivory/60">
                  — {review.name}, Google Review
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous review"
          className="w-11 h-11 rounded-full border border-forest/20 dark:border-ivory/20 grid place-items-center text-forest dark:text-ivory hover:bg-forest hover:text-ivory dark:hover:bg-sand dark:hover:text-forest transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex gap-2">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to review ${i + 1}`}
              className={classNames(
                "w-2.5 h-2.5 rounded-full transition-colors",
                i === index ? "bg-sand" : "bg-forest/20 dark:bg-ivory/20",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next review"
          className="w-11 h-11 rounded-full border border-forest/20 dark:border-ivory/20 grid place-items-center text-forest dark:text-ivory hover:bg-forest hover:text-ivory dark:hover:bg-sand dark:hover:text-forest transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </Reveal>
  );
}
