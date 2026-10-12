"use client";

import { useEffect } from "react";
import type { GalleryImage } from "@/data/content";
import { getLightboxSrc } from "@/lib/utilities";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/** Full-screen image viewer: Esc closes, ← / → navigate, backdrop click closes. */
export default function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const count = images.length;
  const step = (direction: number) => onIndexChange((index + direction + count) % count);

  // Lock page scroll while open.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onIndexChange((index - 1 + count) % count);
      if (event.key === "ArrowRight") onIndexChange((index + 1) % count);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, count, onClose, onIndexChange]);

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[80] flex bg-forest/95 backdrop-blur-sm items-center justify-center px-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-6 right-6 text-ivory w-11 h-11 grid place-items-center rounded-full hover:bg-white/10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 text-ivory w-12 h-12 grid place-items-center rounded-full hover:bg-white/10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <img
        src={getLightboxSrc(current.src)}
        alt={current.alt}
        className="max-h-[82vh] max-w-[88vw] rounded-2xl shadow-2xl object-contain"
      />
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next image"
        className="absolute right-4 md:right-8 text-ivory w-12 h-12 grid place-items-center rounded-full hover:bg-white/10"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
