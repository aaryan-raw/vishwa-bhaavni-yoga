/** Business details, navigation and other site-wide constants. */

export const siteConfig = {
  name: "Vishwa Bhaavni Yoga Centre",
  shortName: "Vishwa Bhaavni",
  nameKannada: "ವಿಶ್ವ ಭಾವ್ನಿ ಯೋಗ ಸೆಂಟರ್",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vishwabhaavniyoga.com",
  title: "Vishwa Bhaavni Yoga Centre | Premium Yoga Studio in Shanti Nagar, Bengaluru",
  description:
    "Vishwa Bhaavni Yoga Centre — a 4.9★ rated yoga studio in Shanti Nagar, Bengaluru with 300+ happy students. Traditional yoga, pranayama and meditation taught with modern, individual attention. Book a free trial class today.",
  keywords:
    "yoga centre Bengaluru, yoga classes Shanti Nagar, best yoga studio Bangalore, pranayama, meditation classes, women's yoga, senior citizen yoga, kids yoga Bangalore",
  ogImage:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80",
  phoneDisplay: "+91 98454 04702",
  phoneHref: "tel:+919845404702",
  whatsappHref: "https://wa.me/919845404702",
  email: "hello@vishwabhaavniyoga.com",
  googleMapsHref: "https://www.google.com/maps",
  mapEmbedSrc:
    "https://www.google.com/maps?q=52,+3rd+Cross+Road,+Bangiyappa+Garden,+Shanti+Nagar,+Bengaluru,+Karnataka+560027&output=embed",
  address: {
    street: "52, 3rd Cross Road, Bangiyappa Garden, Shanti Nagar",
    locality: "Bengaluru",
    region: "Karnataka",
    postalCode: "560027",
    country: "IN",
  },
  geo: { latitude: 12.9591, longitude: 77.5981 },
  rating: { value: "4.9", count: "297" },
  hours: {
    weekdays: "Mon – Sat: 5:30 AM – 8:30 PM",
    sunday: "Sunday: 6:00 AM – 11:00 AM",
  },
  sameAs: ["https://www.instagram.com/", "https://www.facebook.com/"],
} as const;

export interface NavLink {
  href: string;
  label: string;
}

/** Desktop navigation (the original desktop bar does not include FAQs). */
export const desktopNavLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#schedule", label: "Schedule" },
  { href: "#instructor", label: "Instructor" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

/** Mobile navigation (adds FAQs). */
export const mobileNavLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#schedule", label: "Schedule" },
  { href: "#instructor", label: "Instructor" },
  { href: "#reviews", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

export const footerQuickLinks: NavLink[] = [
  { href: "#about", label: "About Us" },
  { href: "#programs", label: "Programs" },
  { href: "#schedule", label: "Schedule" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
];

export const socialLinks = [
  { id: "instagram", label: "Instagram", href: "#" },
  { id: "facebook", label: "Facebook", href: "#" },
  { id: "youtube", label: "YouTube", href: "#" },
] as const;

export const heroStats = [
  { target: 300, decimals: 0, suffix: "+", label: "Happy Students" },
  { target: 4.9, decimals: 1, suffix: "★", label: "Google Rating" },
  { target: 10, decimals: 0, suffix: "+", label: "Years Experience" },
  { target: 1000, decimals: 0, suffix: "+", label: "Classes Conducted" },
] as const;
