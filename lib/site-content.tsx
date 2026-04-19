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

/** Footer and sitemap-style links (no Home—use logo for that). */
export const FOOTER_LINKS = [
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/our-work", label: "Our work" },
] as const;

/** Core digital marketing offerings (independent verticals—scoped per client). */
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

/**
 * Three services shown in the home About preview orbit (globe graphic).
 * Digital Marketing, SEO Services, Branding & Creative Design.
 */
export const ABOUT_PREVIEW_ORBIT_SERVICES = [
  SERVICES[0],
  SERVICES[5],
  SERVICES[6],
] as const;

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
    detail: "Continuous optimization and growth",
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

/** Home FAQ strip (also reusable on a dedicated FAQ page later). */
export const HOME_FAQ = [
  {
    q: "What digital services does Daksa Digital provide?",
    a: "We deliver strategy and execution across digital marketing, content, social, SEO, websites, branding, lead generation, and related growth work. We scope what you need and align to outcomes, not vanity metrics.",
  },
  {
    q: "Are you only in Noida, or do you work across India?",
    a: "We are headquartered in Noida, Uttar Pradesh, and work with clients on-site and remotely across India, depending on the engagement and your preferences.",
  },
  {
    q: "How do you measure results and report progress?",
    a: "We agree on KPIs at the start, share reporting on a cadence you are comfortable with, and focus on measurable impact, learning, and steady optimisation.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We partner with startups, growing businesses, and established brands that want structured digital execution, clear communication, and practical reporting.",
  },
  {
    q: "How does communication work once we start?",
    a: "You get a clear point of contact, check-ins matched to the project, and updates that keep stakeholders aligned without unnecessary noise.",
  },
  {
    q: "How does pricing and scoping work?",
    a: "Investment depends on goals, channels, timelines, and deliverables. The best next step is a short conversation or the contact form so we can propose a plan that fits.",
  },
  {
    q: "How long before we see outcomes?",
    a: "Timelines vary by channel and market. We set realistic milestones early and prioritise sustainable growth over shortcuts that do not hold up.",
  },
  {
    q: "Do you support advertising alongside digital marketing?",
    a: "Yes. We bring strategic PR and advertising capabilities alongside core digital work when your brand needs a fuller story and presence in market.",
  },
] as const;

/**
 * About copy: digital marketing–first; PR/advertising as complementary strength (not political-specific).
 * [0] is the short crux used on the home About preview and About page.
 */
export const ABOUT_PARAGRAPHS = [
  "Daksa Digital Pvt. Ltd. is a digital marketing company with strategic PR and advertising capabilities. We help brands build trust and visibility through campaigns, content, and creative execution. We're based in Noida, Uttar Pradesh, India.",
  "We empower businesses to grow through performance-led digital solutions: marketing, content, social, web, and search, with brand and creative support whenever your goals require it.",
  "We partner with clients to strengthen positioning, improve discovery, and drive meaningful outcomes. Our focus is measurable value and long-term growth, not vanity metrics alone.",
  "With a client-first approach, we ensure quality, consistency, and clear communication across every project we undertake.",
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
