"use client";

import { useEffect, useRef, useState } from "react";
import { easeOutCubic } from "@/lib/utilities";

interface CounterProps {
  target: number;
  decimals?: number;
  /** Animation length in ms. */
  duration?: number;
}

/** Counts up from 0 to `target` the first time it becomes visible. */
export default function Counter({ target, decimals = 0, duration = 1600 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const current = target * easeOutCubic(progress);
          if (progress < 1) {
            setDisplay(decimals ? current.toFixed(decimals) : String(Math.floor(current)));
            frame = requestAnimationFrame(step);
          } else {
            setDisplay(decimals ? target.toFixed(decimals) : String(target));
          }
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, decimals, duration]);

  return (
    <span ref={ref} className="counter">
      {display}
    </span>
  );
}
