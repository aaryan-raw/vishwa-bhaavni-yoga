import GalleryGrid from "./GalleryGrid";
import SectionHeader from "./SectionHeader";
import { galleryData } from "@/data/content";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28 md:py-36 bg-warmwhite dark:bg-[#0f1a14]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments from the studio"
          className="text-center max-w-2xl mx-auto mb-14"
        />
        <GalleryGrid images={galleryData} />
      </div>
    </section>
  );
}
