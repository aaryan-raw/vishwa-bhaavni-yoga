"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import type { GalleryImage } from "@/data/content";

/** Masonry-style thumbnail grid that opens the lightbox on click / Enter. */
export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((image, i) => (
          <Reveal
            key={image.src}
            className="break-inside-avoid rounded-3xl overflow-hidden group cursor-pointer shadow-card"
            role="button"
            tabIndex={0}
            aria-label={`Open image: ${image.alt}`}
            onClick={() => setOpenIndex(i)}
            onKeyDown={(event) => {
              if (event.key === "Enter") setOpenIndex(i);
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
