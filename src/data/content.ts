/** Page content: cards, programs, schedule, reviews, gallery and FAQs. */

export type IconName =
  | "target"
  | "award"
  | "leaf"
  | "circle"
  | "wind"
  | "heart"
  | "clock"
  | "users";

export interface WhyChooseItem {
  icon: IconName;
  title: string;
  desc: string;
}

export const whyChooseData: WhyChooseItem[] = [
  { icon: "target", title: "Personal Guidance", desc: "Small batches mean corrections and encouragement, never a lost face in the crowd." },
  { icon: "award", title: "Certified Instructor", desc: "Trained in traditional Hatha yoga, pranayama and anatomy-aware alignment." },
  { icon: "leaf", title: "Traditional Practices", desc: "Authentic sequences passed down through years of dedicated study." },
  { icon: "circle", title: "Meditation", desc: "Guided stillness sessions built into every batch, not offered as an afterthought." },
  { icon: "wind", title: "Breathing Exercises", desc: "Pranayama techniques that calm the nervous system as much as the mind." },
  { icon: "heart", title: "Stress Relief", desc: "A dedicated hour, away from notifications, to simply come back to yourself." },
  { icon: "clock", title: "Flexible Timings", desc: "Morning and evening batches designed around working hours, not against them." },
  { icon: "users", title: "Friendly Community", desc: "Students who started as strangers now practice, and celebrate milestones, together." },
];

export interface BenefitItem {
  title: string;
  desc: string;
}

export const benefitsData: BenefitItem[] = [
  { title: "Physical Health", desc: "Stronger muscles, better circulation and a more resilient body over time." },
  { title: "Mental Clarity", desc: "A calmer, more focused mind that carries into work and daily decisions." },
  { title: "Weight Management", desc: "Sustainable movement that supports a healthy metabolism." },
  { title: "Better Posture", desc: "Relief from the desk-slouch, one aligned session at a time." },
  { title: "Improved Flexibility", desc: "Gradual, safe range-of-motion gains — no forcing, ever." },
  { title: "Stress Reduction", desc: "Breath-led practice that lowers tension in body and mind alike." },
  { title: "Better Sleep", desc: "Evening practitioners routinely report deeper, more restful nights." },
  { title: "Lifestyle Improvement", desc: "Small daily discipline that quietly reshapes bigger habits." },
];

export interface Program {
  name: string;
  duration: string;
  level: string;
  features: string[];
  price: string;
}

export const programsData: Program[] = [
  { name: "Beginner Yoga", duration: "60 min · 5 days/week", level: "New to yoga", features: ["Foundational postures", "Breath awareness", "Personal correction"], price: "₹2,000/mo" },
  { name: "Intermediate Yoga", duration: "60 min · 5 days/week", level: "6+ months experience", features: ["Deeper asanas", "Strength building", "Sequencing focus"], price: "₹2,200/mo" },
  { name: "Advanced Yoga", duration: "75 min · 4 days/week", level: "Experienced practitioners", features: ["Advanced asanas", "Inversions & arm balances", "Personalised goals"], price: "₹2,500/mo" },
  { name: "Women's Wellness Yoga", duration: "60 min · 3 days/week", level: "All levels, women only", features: ["Hormonal balance focus", "Gentle strength work", "Supportive small group"], price: "₹2,000/mo" },
  { name: "Senior Citizen Yoga", duration: "45 min · 3 days/week", level: "Ages 60+", features: ["Joint-friendly movement", "Balance & mobility", "Seated modifications"], price: "₹1,500/mo" },
  { name: "Kids Yoga", duration: "45 min · 2 days/week", level: "Ages 7–14", features: ["Playful postures", "Focus & discipline", "Confidence building"], price: "₹1,500/mo" },
  { name: "Pranayama & Meditation", duration: "45 min · daily", level: "All levels", features: ["Breathing techniques", "Guided meditation", "Stress management"], price: "₹1,800/mo" },
  { name: "Online Classes", duration: "60 min · flexible", level: "Anywhere in the world", features: ["Live guided sessions", "Recorded library access", "1:1 support on chat"], price: "₹1,200/mo" },
];

export interface ScheduleRow {
  time: string;
  session: string;
}

export const morningSchedule: ScheduleRow[] = [
  { time: "5:30 – 6:30 AM", session: "Pranayama & Meditation" },
  { time: "6:30 – 7:30 AM", session: "Beginner Yoga" },
  { time: "7:30 – 8:30 AM", session: "Intermediate Yoga" },
  { time: "8:30 – 9:30 AM", session: "Women's Wellness Yoga" },
  { time: "9:30 – 10:15 AM", session: "Senior Citizen Yoga" },
];

export const eveningSchedule: ScheduleRow[] = [
  { time: "5:00 – 6:00 PM", session: "Kids Yoga" },
  { time: "6:00 – 7:00 PM", session: "Beginner Yoga" },
  { time: "7:00 – 8:00 PM", session: "Advanced Yoga" },
  { time: "8:00 – 8:45 PM", session: "Pranayama & Meditation" },
  { time: "By appointment", session: "Online Classes" },
];

export const scheduleNote =
  "Sunday: Community practice, 6:00 – 7:30 AM. Batch timings may vary slightly by season — please confirm when booking.";

export interface Review {
  name: string;
  text: string;
}

export const reviewsData: Review[] = [
  { name: "Anitha R.", text: "I've tried three studios in Bangalore and this is the first place that actually corrected my posture instead of just counting reps. Six months in, my back pain is gone." },
  { name: "Rohan K.", text: "Started as a complete beginner, nervous about even attending. The instructor made it easy, and the small batch size means you actually get noticed and helped." },
  { name: "Deepa M.", text: "The women's wellness batch has been wonderful for my energy and mood. It never feels rushed, and the instructor genuinely remembers everyone's progress." },
  { name: "Suresh N.", text: "At 64, I was worried yoga would be too demanding. The senior batch is thoughtful, safe, and honestly the best hour of my day." },
  { name: "Priya S.", text: "Traditional teaching but never rigid — questions are welcomed, modifications are offered without judgement. This is what I was looking for." },
  { name: "Karthik V.", text: "Online classes kept me consistent while travelling for work. Same quality of attention as the in-person batch, which surprised me." },
];

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryData: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80", alt: "Group meditation session in the studio" },
  { src: "https://images.unsplash.com/photo-1599447292180-45fd84092ef4?auto=format&fit=crop&w=800&q=80", alt: "Students practicing a standing balance posture" },
  { src: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=800&q=80", alt: "Outdoor sunrise yoga session" },
  { src: "https://images.unsplash.com/photo-1573590330099-d6c7355ec595?auto=format&fit=crop&w=800&q=80", alt: "Instructor assisting a student with alignment" },
  { src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80", alt: "Close-up of hands in meditation mudra" },
  { src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80", alt: "Evening batch students in seated stretch" },
  { src: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=800&q=80", alt: "Community yoga event gathering" },
  { src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80", alt: "Full studio class in a seated pose" },
  { src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80", alt: "Student practicing outdoors surrounded by greenery" },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqData: FaqItem[] = [
  { q: "Can complete beginners join?", a: "Yes — most of our students started with zero yoga experience. Beginner batches are designed to build a foundation slowly and safely, with no prior flexibility or fitness required." },
  { q: "What should I wear to class?", a: "Comfortable, stretchable clothing that allows free movement — track pants or leggings with a fitted t-shirt work well. Avoid loose, baggy fabric that can get in the way during postures." },
  { q: "Do I need to bring my own yoga mat?", a: "We provide mats for trial classes. Regular students are encouraged to bring their own for hygiene, though studio mats remain available on request." },
  { q: "Is there an age limit to join?", a: "No. We teach dedicated batches for children (7+), adults, and senior citizens, each paced appropriately for the age group." },
  { q: "Do you offer a trial class?", a: "Yes, every new student is welcome to a free trial class before committing, so you can experience our teaching style firsthand." },
  { q: "What are your fees?", a: "Fees vary by program, starting from ₹1,200/month for online classes up to ₹2,500/month for advanced in-person batches. See the Programs section above for full details, or contact us for current offers." },
  { q: "Are online classes available?", a: "Yes, we run live guided online sessions with the same instructor-led attention as in-studio batches, plus access to a recorded class library." },
];

/** Options in the "Interested program" select of the trial form. */
export const trialProgramOptions: string[] = [
  "Beginner Yoga",
  "Intermediate / Advanced Yoga",
  "Women's Wellness Yoga",
  "Senior Citizen Yoga",
  "Kids Yoga",
  "Pranayama & Meditation",
  "Online Classes",
];
