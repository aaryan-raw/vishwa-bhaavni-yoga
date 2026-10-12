import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vishwa Bhaavni Yoga Centre | Traditional Yoga, Modern Wellness",
    description:
      "A 4.9★ rated yoga studio in Bengaluru. Traditional practice, individual attention, a community that stays. Book your free trial class.",
    url: "/",
    locale: "en_IN",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwa Bhaavni Yoga Centre | Bengaluru",
    description:
      "Traditional yoga & pranayama taught with modern, individual attention. 4.9★ · 300+ students. Book a free trial.",
    images: [siteConfig.ogImage],
  },
};

/** Same Google Fonts request as the original page (Fraunces, Inter, Noto Sans Kannada). */
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Kannada:wght@400;500;600&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* The original uses og:type "business.business", which Next's typed metadata API doesn't offer. */}
        <meta property="og:type" content="business.business" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={FONTS_URL} rel="stylesheet" />
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}`}</style>
        </noscript>
      </head>
      <body className="bg-warmwhite dark:bg-[#0f1a14] antialiased">{children}</body>
    </html>
  );
}
