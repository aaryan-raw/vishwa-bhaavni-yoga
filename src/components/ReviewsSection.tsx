import Reveal from "./Reveal";
import ReviewsCarousel from "./ReviewsCarousel";
import { reviewsData } from "@/data/content";
import { siteConfig } from "@/data/site";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-28 md:py-36 bg-ivory dark:bg-[#132018]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal as="p" className="text-sand font-medium tracking-[0.2em] text-xs uppercase mb-4">
            Google Reviews
          </Reveal>
          <Reveal as="h2" className="font-display text-3xl md:text-5xl text-forest dark:text-ivory">
            Loved by our students
          </Reveal>
          <Reveal className="mt-6 flex items-center justify-center gap-3">
            <span className="text-sand text-2xl">★★★★★</span>
            <span className="font-display text-2xl text-forest dark:text-ivory">{siteConfig.rating.value}</span>
            <span className="text-charcoal/60 dark:text-ivory/60 text-sm">
              ({siteConfig.rating.count} Google reviews)
            </span>
          </Reveal>
        </div>

        <ReviewsCarousel reviews={reviewsData} />

        <Reveal className="text-center mt-12">
          <a
            href={siteConfig.googleMapsHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-forest dark:text-sand font-medium border-b border-sand pb-1"
          >
            Read all reviews on Google →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
