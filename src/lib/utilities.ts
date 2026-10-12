/** Join class names, skipping falsy values. */
export function classNames(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** The gallery thumbnails request w=800; the lightbox upgrades them to w=1600. */
export function getLightboxSrc(src: string): string {
  return src.replace("w=800", "w=1600");
}

/** Cubic ease-out used by the stat counters. */
export function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}
