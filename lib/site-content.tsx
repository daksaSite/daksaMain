import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Globe,
  LineChart,
  Megaphone,
  Palette,
  PenLine,
  Search,
  Share2,
  Users,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES: { title: string; icon: LucideIcon; blurb: string }[] = [
  {
    title: "Digital Marketing",
    icon: Megaphone,
    blurb: "Campaigns and channels aligned to measurable outcomes.",
  },
  {
    title: "Influencer Marketing",
    icon: Users,
    blurb: "Authentic partnerships that extend reach and trust.",
  },
  {
    title: "Content Writing",
    icon: PenLine,
    blurb: "Clear, on-brand messaging for every touchpoint.",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    blurb: "Consistent presence, community, and creative cadence.",
  },
  {
    title: "Website Development",
    icon: Globe,
    blurb: "Fast, accessible sites built to convert.",
  },
  {
    title: "SEO Services",
    icon: Search,
    blurb: "Technical and content foundations for discoverability.",
  },
  {
    title: "Branding & Creative Design",
    icon: Palette,
    blurb: "Identity systems that feel cohesive across channels.",
  },
  {
    title: "Lead Generation",
    icon: LineChart,
    blurb: "Pipelines and nurture paths tuned to your ICP.",
  },
  {
    title: "Business Promotion Solutions",
    icon: BarChart3,
    blurb: "Integrated promotion plans for launches and scale-ups.",
  },
];

export const INQUIRY_SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  "Other / Multiple",
] as const;

export const PROCESS_STEPS = [
  {
    step: "Understand",
    detail: "Your business, goals, and target audience",
  },
  { step: "Strategize", detail: "Build a customized digital roadmap" },
  { step: "Execute", detail: "Deliver with creativity and precision" },
  {
    step: "Support",
    detail: "Continuous optimization and growth assistance",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Daksa Digital provided us with professional and timely digital support. Their team is creative, responsive, and easy to work with.",
  },
  {
    quote:
      "We had a great experience working with Daksa Digital. Their content and digital marketing services significantly improved our brand presence.",
  },
  {
    quote:
      "The team understands business requirements well and delivers quality work with dedication.",
  },
  {
    quote:
      "Highly recommended for businesses looking for reliable digital services and professional support.",
  },
] as const;

export const ABOUT_PARAGRAPHS = [
  "At Daksa Digital Pvt. Ltd., we empower businesses to grow through strategic digital solutions, creative excellence, and performance-driven execution.",
  "We partner with brands to build a strong digital presence, enhance visibility, and drive meaningful business outcomes through smart, scalable, and future-ready strategies.",
  "We believe every business deserves a digital identity that is professional, impactful, and growth-oriented. Our focus goes beyond aesthetics — we create solutions that deliver measurable value, strengthen brand positioning, and support long-term success.",
  "With a client-first approach, we ensure quality, consistency, and results across every project we undertake.",
] as const;

export const MISSION =
  "To create scalable digital solutions that empower businesses to grow with clarity, consistency, and confidence.";

export const VISION =
  "To become a trusted digital growth partner for businesses seeking innovation, performance, and long-term impact.";

export const WHY_POINTS = [
  "Practical and result-oriented",
  "Professionally executed",
  "Aligned with business objectives",
] as const;

export const PRIORITIES = [
  "Deep understanding of client goals",
  "Strategic planning and execution",
  "Timely delivery and clear communication",
  "Long-term client relationships",
] as const;

export const WHO_WE_WORK_WITH =
  "Whether you are a startup, growing business, or established brand, we provide digital solutions that help you scale with confidence.";

export const CONTACT = {
  address: "184, G Block, Sector 63, Noida, Uttar Pradesh",
  phone: "9278132874",
  phoneHref: "tel:+919278132874",
  email: "daksadigitalprivatelimited@gmail.com",
  website: "https://daksadigital.in",
  websiteLabel: "daksadigital.in",
  social: {
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
  },
} as const;
