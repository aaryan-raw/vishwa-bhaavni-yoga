import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Render the golden divider under the title (default true). */
  divider?: boolean;
  className?: string;
}

/** Centered eyebrow + heading (+ divider + intro) block shared by most sections. */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  divider = true,
  className = "text-center max-w-2xl mx-auto mb-16",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <Reveal
        as="p"
        className="text-sand font-medium tracking-[0.2em] text-xs uppercase mb-4"
      >
        {eyebrow}
      </Reveal>
      <Reveal
        as="h2"
        className="font-display text-3xl md:text-5xl text-forest dark:text-ivory"
      >
        {title}
      </Reveal>
      {divider && <Reveal className="arc-divider mx-auto my-6">{null}</Reveal>}
      {description && (
        <Reveal as="p" className="text-charcoal/70 dark:text-ivory/70">
          {description}
        </Reveal>
      )}
    </div>
  );
}
