"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { classNames } from "@/lib/utilities";

type RevealTag = "div" | "p" | "h1" | "h2" | "ul" | "a" | "form";
type RevealDelay = 0 | 1 | 2 | 3 | 4;

/** Literal class names so Tailwind's content scan keeps the matching CSS rules. */
const DELAY_CLASS: Record<RevealDelay, string> = {
  0: "reveal-delay-0",
  1: "reveal-delay-1",
  2: "reveal-delay-2",
  3: "reveal-delay-3",
  4: "reveal-delay-4",
};

interface RevealProps extends Omit<HTMLAttributes<HTMLElement>, "className" | "children"> {
  as?: RevealTag;
  delay?: RevealDelay;
  /** Start in the visible state (used for above-the-fold hero content). */
  immediate?: boolean;
  className?: string;
  href?: string;
  children: ReactNode;
}

/** Fades/slides its content in the first time it scrolls into view. */
export default function Reveal({
  as = "div",
  delay,
  immediate = false,
  className,
  children,
  ...rest
}: RevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      className={classNames(
        "reveal",
        inView && "in-view",
        delay !== undefined && DELAY_CLASS[delay],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
