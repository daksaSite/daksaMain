import { defineQuery } from "next-sanity";

import { sanityClient } from "@/lib/sanity.client";
import { sanityEnv } from "@/lib/sanity.env";
import { sanityImageUrl } from "@/lib/sanity.image";
import { HOME_FAQ, HOME_TESTIMONIALS_PREVIEW } from "@/lib/site-content";

export type PartnerModelStat = {
  value: string;
  label: string;
  accent: boolean;
};

/** One orbit chip: label, link, and a Lucide key resolved on the site. */
export type HomeAboutOrbitItem = {
  title: string;
  href: string;
  iconKey: string;
};

/** One “Why us” pillar: heading, body, icon key resolved on the site. */
export type HomeWhyUsPillar = {
  title: string;
  body: string;
  iconKey: string;
};

/** One home FAQ accordion row (question in summary, answer when open). */
export type HomeFaqItem = {
  question: string;
  answer: string;
};

/** One testimonial card in the home carousel (quote, attribution, stars). */
export type HomeTestimonial = {
  quote: string;
  name: string;
  designation: string;
  rating: number;
};

/** Flat shape consumed by `app/page.tsx` and hero carousel helpers. */
export type HomePageDocument = {
  heroEyebrow?: string | null;
  heroTitleLead?: string | null;
  heroTitleHighlight?: string | null;
  heroSubtitle?: string | null;
  heroPrimaryCtaLabel?: string | null;
  heroPrimaryCtaHref?: string | null;
  heroSecondaryCtaLabel?: string | null;
  heroSecondaryCtaHref?: string | null;
  heroSlides?: Array<{
    _key: string;
    asset?: { _ref?: string };
    alt?: string | null;
  }> | null;
  partnerEyebrow?: string | null;
  partnerTitle?: string | null;
  partnerBody?: string | null;
  partnerStats?: PartnerModelStat[] | null;
  aboutEyebrow?: string | null;
  aboutHeadline?: string | null;
  aboutParagraph1?: string | null;
  aboutParagraph2?: string | null;
  aboutPrimaryCtaLabel?: string | null;
  aboutPrimaryCtaHref?: string | null;
  aboutSecondaryLinkLabel?: string | null;
  aboutSecondaryLinkHref?: string | null;
  aboutOrbitHeading?: string | null;
  aboutOrbitFootnote?: string | null;
  aboutOrbitServices?: HomeAboutOrbitItem[] | null;
  whyUsEyebrow?: string | null;
  whyUsHeadline?: string | null;
  whyUsIntro?: string | null;
  whyUsPillars?: HomeWhyUsPillar[] | null;
  faqEyebrow?: string | null;
  faqHeadline?: string | null;
  faqIntroLead?: string | null;
  faqContactLinkLabel?: string | null;
  faqContactLinkHref?: string | null;
  faqIntroTrail?: string | null;
  faqItems?: HomeFaqItem[] | null;
  testimonialsEyebrow?: string | null;
  testimonialsHeadline?: string | null;
  testimonialsIntro?: string | null;
  testimonialsCtaLabel?: string | null;
  testimonialsCtaHref?: string | null;
  testimonialsItems?: HomeTestimonial[] | null;
  marqueeWords?: string[] | null;
} | null;

type HeroSlideRow = {
  _key: string;
  asset?: { _ref?: string };
  alt?: string | null;
};

type HeroSectionCms = {
  eyebrow?: string | null;
  headlineLead?: string | null;
  headlineHighlight?: string | null;
  subtitle?: string | null;
  primaryCtaLabel?: string | null;
  primaryCtaHref?: string | null;
  secondaryCtaLabel?: string | null;
  secondaryCtaHref?: string | null;
  slides?: HeroSlideRow[] | null;
};

type PartnerStatRow = {
  value?: string | null;
  label?: string | null;
  accent?: boolean | null;
};

type PartnerModelCms = {
  eyebrow?: string | null;
  title?: string | null;
  body?: string | null;
  stats?: PartnerStatRow[] | null;
};

type AboutOrbitRow = {
  title?: string | null;
  href?: string | null;
  iconKey?: string | null;
};

type AboutPreviewCms = {
  eyebrow?: string | null;
  headline?: string | null;
  paragraph1?: string | null;
  paragraph2?: string | null;
  primaryCtaLabel?: string | null;
  primaryCtaHref?: string | null;
  secondaryLinkLabel?: string | null;
  secondaryLinkHref?: string | null;
  orbitHeading?: string | null;
  orbitFootnote?: string | null;
  orbitServices?: AboutOrbitRow[] | null;
};

type WhyUsPillarRow = {
  title?: string | null;
  body?: string | null;
  iconKey?: string | null;
};

type WhyUsCms = {
  eyebrow?: string | null;
  headline?: string | null;
  intro?: string | null;
  pillars?: WhyUsPillarRow[] | null;
};

type HomeFaqItemRow = {
  question?: string | null;
  answer?: string | null;
};

type HomeFaqCms = {
  eyebrow?: string | null;
  headline?: string | null;
  introLead?: string | null;
  contactLinkLabel?: string | null;
  contactLinkHref?: string | null;
  introTrail?: string | null;
  items?: HomeFaqItemRow[] | null;
};

type HomeTestimonialRow = {
  quote?: string | null;
  name?: string | null;
  designation?: string | null;
  rating?: number | null;
};

type TestimonialsPreviewCms = {
  eyebrow?: string | null;
  headline?: string | null;
  intro?: string | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
  items?: HomeTestimonialRow[] | null;
};

type WordsMarqueeCms = {
  words?: unknown;
};

/** Raw fetch: nested `hero` (new) or legacy flat hero fields (old documents). */
type HomePageRaw = {
  hero?: HeroSectionCms | null | undefined;
  partnerModel?: PartnerModelCms | null | undefined;
  aboutPreview?: AboutPreviewCms | null | undefined;
  whyUs?: WhyUsCms | null | undefined;
  homeFaq?: HomeFaqCms | null | undefined;
  testimonialsPreview?: TestimonialsPreviewCms | null | undefined;
  wordsMarquee?: WordsMarqueeCms | null | undefined;
  heroEyebrow?: string | null;
  heroTitleLead?: string | null;
  heroTitleHighlight?: string | null;
  heroSubtitle?: string | null;
  heroPrimaryCtaLabel?: string | null;
  heroPrimaryCtaHref?: string | null;
  heroSecondaryCtaLabel?: string | null;
  heroSecondaryCtaHref?: string | null;
  heroSlides?: HeroSlideRow[] | null;
} | null;

const homePageQuery = defineQuery(`
  coalesce(*[_id == "homePage"][0], *[_type == "homePage"]|order(_updatedAt desc)[0]){
    hero{
      eyebrow,
      headlineLead,
      headlineHighlight,
      subtitle,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref,
      slides[]{ _key, alt, asset }
    },
    partnerModel{
      eyebrow,
      title,
      body,
      stats[]{ value, label, accent }
    },
    aboutPreview{
      eyebrow,
      headline,
      paragraph1,
      paragraph2,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryLinkLabel,
      secondaryLinkHref,
      orbitHeading,
      orbitFootnote,
      orbitServices[]{ title, href, iconKey }
    },
    whyUs{
      eyebrow,
      headline,
      intro,
      pillars[]{ title, body, iconKey }
    },
    homeFaq{
      eyebrow,
      headline,
      introLead,
      contactLinkLabel,
      contactLinkHref,
      introTrail,
      items[]{ question, answer }
    },
    testimonialsPreview{
      eyebrow,
      headline,
      intro,
      ctaLabel,
      ctaHref,
      items[]{ quote, name, designation, rating }
    },
    wordsMarquee{
      words
    },
    heroEyebrow,
    heroTitleLead,
    heroTitleHighlight,
    heroSubtitle,
    heroPrimaryCtaLabel,
    heroPrimaryCtaHref,
    heroSecondaryCtaLabel,
    heroSecondaryCtaHref,
    heroSlides[]{ _key, alt, asset }
  }
`);

const ABOUT_ORBIT_FALLBACK: HomeAboutOrbitItem[] = [
  {
    title: "Digital Marketing",
    href: "/services",
    iconKey: "megaphone",
  },
  {
    title: "SEO Services",
    href: "/services",
    iconKey: "search",
  },
  {
    title: "Branding & Creative Design",
    href: "/services",
    iconKey: "palette",
  },
];

const WHY_US_PILLARS_FALLBACK: HomeWhyUsPillar[] = [
  {
    title: "Strategy first",
    body: "Roadmaps rooted in your market, audience, and commercial goals, not vanity metrics.",
    iconKey: "compass",
  },
  {
    title: "Creative that converts",
    body: "Distinctive craft across content, social, and brand touchpoints with clarity and consistency.",
    iconKey: "sparkles",
  },
  {
    title: "Execution you can measure",
    body: "Campaigns, sites, and funnels optimized for learning loops and sustainable growth.",
    iconKey: "lineChart",
  },
];

const HOME_FAQ_ITEMS_FALLBACK: HomeFaqItem[] = HOME_FAQ.map((row) => ({
  question: row.q,
  answer: row.a,
}));

const TESTIMONIALS_PREVIEW_FALLBACK: HomeTestimonial[] =
  HOME_TESTIMONIALS_PREVIEW.map((row) => ({
    quote: row.quote,
    name: row.name,
    designation: row.designation,
    rating: row.rating,
  }));

const MARQUEE_WORDS_FALLBACK: string[] = [
  "Visibility",
  "Growth",
  "Impact",
  "Scale",
  "Trust",
  "Results",
];

const PARTNER_STATS_FALLBACK: PartnerModelStat[] = [
  {
    value: "9+",
    label: "Service lines, full-funnel",
    accent: false,
  },
  {
    value: "Noida",
    label: "On-site & remote across India",
    accent: true,
  },
];

/** Built-in defaults when CMS fields are empty or Sanity is offline. */
export const HOME_PAGE_FALLBACK: NonNullable<HomePageDocument> = {
  heroEyebrow: "Built for Scale · Driven by Impact",
  heroTitleLead: "Digital growth for brands that",
  heroTitleHighlight: "refuse to stay invisible.",
  heroSubtitle:
    "Daksa Digital Pvt. Ltd. is a digital marketing company with strategic PR and advertising capabilities helping brands build trust and visibility through campaigns, content, and creative execution. Based in Noida, Uttar Pradesh, India.",
  heroPrimaryCtaLabel: "Plan a conversation",
  heroPrimaryCtaHref: "/contact",
  heroSecondaryCtaLabel: "View capabilities",
  heroSecondaryCtaHref: "/services",
  heroSlides: null,
  partnerEyebrow: "Partner model",
  partnerTitle: "Embedded digital team",
  partnerBody:
    "Strategy, creative, and analytics, tied to your P&L from discovery through launch and beyond.",
  partnerStats: PARTNER_STATS_FALLBACK,
  aboutEyebrow: "About Daksa Digital",
  aboutHeadline:
    "Digital growth with strategy, creative, and performance.",
  aboutParagraph1:
    "Daksa Digital Pvt. Ltd. is a digital marketing company with strategic PR and advertising capabilities. We help brands build trust and visibility through campaigns, content, and creative execution. We're based in Noida, Uttar Pradesh, India.",
  aboutParagraph2:
    "We empower businesses to grow through performance-led digital solutions: marketing, content, social, web, and search, with brand and creative support whenever your goals require it.",
  aboutPrimaryCtaLabel: "Read about us",
  aboutPrimaryCtaHref: "/about",
  aboutSecondaryLinkLabel: "View all services",
  aboutSecondaryLinkHref: "/services",
  aboutOrbitHeading: "Core service lines",
  aboutOrbitFootnote:
    "Mission, vision, and how we work with clients are on the About page. Services link to full detail.",
  aboutOrbitServices: ABOUT_ORBIT_FALLBACK,
  whyUsEyebrow: "Why us",
  whyUsHeadline: "Why teams choose our model",
  whyUsIntro:
    "Three pillars that keep strategy, creative, and delivery aligned with outcomes you can see in the business.",
  whyUsPillars: WHY_US_PILLARS_FALLBACK,
  faqEyebrow: "FAQ",
  faqHeadline: "Common questions, straight answers",
  faqIntroLead:
    "Straightforward guidance on how we work, scope, and outcomes. Need something specific? ",
  faqContactLinkLabel: "Contact us",
  faqContactLinkHref: "/contact",
  faqIntroTrail: "—we'll point you in the right direction.",
  faqItems: HOME_FAQ_ITEMS_FALLBACK,
  testimonialsEyebrow: "Social proof",
  testimonialsHeadline: "Trusted by teams who value follow-through",
  testimonialsIntro:
    "Real feedback from leaders we've partnered with—ratings, roles, and what stood out for them.",
  testimonialsCtaLabel: "All testimonials",
  testimonialsCtaHref: "/testimonials",
  testimonialsItems: TESTIMONIALS_PREVIEW_FALLBACK,
  marqueeWords: MARQUEE_WORDS_FALLBACK,
};

function pick(s: string | null | undefined, fb: string): string {
  const t = s?.trim();
  return t && t.length > 0 ? t : fb;
}

/** New nested `hero` object, or legacy flat fields on the same document. */
function canonicalHeroSection(raw: HomePageRaw): HeroSectionCms {
  if (raw?.hero != null && typeof raw.hero === "object") {
    return raw.hero;
  }
  return {
    eyebrow: raw?.heroEyebrow ?? null,
    headlineLead: raw?.heroTitleLead ?? null,
    headlineHighlight: raw?.heroTitleHighlight ?? null,
    subtitle: raw?.heroSubtitle ?? null,
    primaryCtaLabel: raw?.heroPrimaryCtaLabel ?? null,
    primaryCtaHref: raw?.heroPrimaryCtaHref ?? null,
    secondaryCtaLabel: raw?.heroSecondaryCtaLabel ?? null,
    secondaryCtaHref: raw?.heroSecondaryCtaHref ?? null,
    slides: raw?.heroSlides ?? null,
  };
}

function normalizePartnerStats(rows: PartnerStatRow[] | null | undefined) {
  const out: PartnerModelStat[] = [];
  for (const row of rows ?? []) {
    const value = row?.value?.trim();
    const label = row?.label?.trim();
    if (!value || !label) continue;
    out.push({
      value,
      label,
      accent: Boolean(row?.accent),
    });
  }
  return out;
}

function mergePartnerFields(
  p: PartnerModelCms | null | undefined,
): Pick<
  NonNullable<HomePageDocument>,
  "partnerEyebrow" | "partnerTitle" | "partnerBody" | "partnerStats"
> {
  const fb = HOME_PAGE_FALLBACK;
  const stats = normalizePartnerStats(p?.stats);
  return {
    partnerEyebrow: pick(p?.eyebrow, fb.partnerEyebrow!),
    partnerTitle: pick(p?.title, fb.partnerTitle!),
    partnerBody: pick(p?.body, fb.partnerBody!),
    partnerStats: stats.length > 0 ? stats : fb.partnerStats!,
  };
}

function normalizeAboutOrbit(
  rows: AboutOrbitRow[] | null | undefined,
): HomeAboutOrbitItem[] {
  const out: HomeAboutOrbitItem[] = [];
  for (const row of rows ?? []) {
    const title = row?.title?.trim();
    const href = row?.href?.trim();
    const iconKey = row?.iconKey?.trim();
    if (!title || !href || !iconKey) continue;
    out.push({ title, href, iconKey });
    if (out.length >= 3) break;
  }
  return out;
}

function padAboutOrbitServices(
  normalized: HomeAboutOrbitItem[],
): HomeAboutOrbitItem[] {
  const fb = ABOUT_ORBIT_FALLBACK;
  const out: HomeAboutOrbitItem[] = [];
  for (let i = 0; i < 3; i++) {
    out.push(normalized[i] ?? fb[i]!);
  }
  return out;
}

function mergeAboutPreviewFields(
  a: AboutPreviewCms | null | undefined,
): Pick<
  NonNullable<HomePageDocument>,
  | "aboutEyebrow"
  | "aboutHeadline"
  | "aboutParagraph1"
  | "aboutParagraph2"
  | "aboutPrimaryCtaLabel"
  | "aboutPrimaryCtaHref"
  | "aboutSecondaryLinkLabel"
  | "aboutSecondaryLinkHref"
  | "aboutOrbitHeading"
  | "aboutOrbitFootnote"
  | "aboutOrbitServices"
> {
  const fb = HOME_PAGE_FALLBACK;
  const orbit = padAboutOrbitServices(normalizeAboutOrbit(a?.orbitServices));
  return {
    aboutEyebrow: pick(a?.eyebrow, fb.aboutEyebrow!),
    aboutHeadline: pick(a?.headline, fb.aboutHeadline!),
    aboutParagraph1: pick(a?.paragraph1, fb.aboutParagraph1!),
    aboutParagraph2: pick(a?.paragraph2, fb.aboutParagraph2!),
    aboutPrimaryCtaLabel: pick(a?.primaryCtaLabel, fb.aboutPrimaryCtaLabel!),
    aboutPrimaryCtaHref: pick(a?.primaryCtaHref, fb.aboutPrimaryCtaHref!),
    aboutSecondaryLinkLabel: pick(
      a?.secondaryLinkLabel,
      fb.aboutSecondaryLinkLabel!,
    ),
    aboutSecondaryLinkHref: pick(
      a?.secondaryLinkHref,
      fb.aboutSecondaryLinkHref!,
    ),
    aboutOrbitHeading: pick(a?.orbitHeading, fb.aboutOrbitHeading!),
    aboutOrbitFootnote: pick(a?.orbitFootnote, fb.aboutOrbitFootnote!),
    aboutOrbitServices: orbit,
  };
}

function normalizeWhyUsPillars(
  rows: WhyUsPillarRow[] | null | undefined,
): HomeWhyUsPillar[] {
  const out: HomeWhyUsPillar[] = [];
  for (const row of rows ?? []) {
    const title = row?.title?.trim();
    const body = row?.body?.trim();
    const iconKey = row?.iconKey?.trim();
    if (!title || !body || !iconKey) continue;
    out.push({ title, body, iconKey });
    if (out.length >= 3) break;
  }
  return out;
}

function padWhyUsPillars(normalized: HomeWhyUsPillar[]): HomeWhyUsPillar[] {
  const fb = WHY_US_PILLARS_FALLBACK;
  const out: HomeWhyUsPillar[] = [];
  for (let i = 0; i < 3; i++) {
    out.push(normalized[i] ?? fb[i]!);
  }
  return out;
}

function mergeWhyUsFields(
  w: WhyUsCms | null | undefined,
): Pick<
  NonNullable<HomePageDocument>,
  "whyUsEyebrow" | "whyUsHeadline" | "whyUsIntro" | "whyUsPillars"
> {
  const fb = HOME_PAGE_FALLBACK;
  const pillars = padWhyUsPillars(normalizeWhyUsPillars(w?.pillars));
  return {
    whyUsEyebrow: pick(w?.eyebrow, fb.whyUsEyebrow!),
    whyUsHeadline: pick(w?.headline, fb.whyUsHeadline!),
    whyUsIntro: pick(w?.intro, fb.whyUsIntro!),
    whyUsPillars: pillars,
  };
}

function normalizeHomeFaqItems(
  rows: HomeFaqItemRow[] | null | undefined,
): HomeFaqItem[] {
  const out: HomeFaqItem[] = [];
  for (const row of rows ?? []) {
    const question = row?.question?.trim();
    const answer = row?.answer?.trim();
    if (!question || !answer) continue;
    out.push({ question, answer });
  }
  return out;
}

function mergeHomeFaqFields(
  f: HomeFaqCms | null | undefined,
): Pick<
  NonNullable<HomePageDocument>,
  | "faqEyebrow"
  | "faqHeadline"
  | "faqIntroLead"
  | "faqContactLinkLabel"
  | "faqContactLinkHref"
  | "faqIntroTrail"
  | "faqItems"
> {
  const fb = HOME_PAGE_FALLBACK;
  const items = normalizeHomeFaqItems(f?.items);
  return {
    faqEyebrow: pick(f?.eyebrow, fb.faqEyebrow!),
    faqHeadline: pick(f?.headline, fb.faqHeadline!),
    faqIntroLead: pick(f?.introLead, fb.faqIntroLead!),
    faqContactLinkLabel: pick(f?.contactLinkLabel, fb.faqContactLinkLabel!),
    faqContactLinkHref: pick(f?.contactLinkHref, fb.faqContactLinkHref!),
    faqIntroTrail: pick(f?.introTrail, fb.faqIntroTrail!),
    faqItems: items.length > 0 ? items : fb.faqItems!,
  };
}

function clampStarRating(n: unknown): number {
  const v =
    typeof n === "number" && !Number.isNaN(n) ? Math.round(n) : 5;
  return Math.min(5, Math.max(1, v));
}

function normalizeTestimonialsPreviewItems(
  rows: HomeTestimonialRow[] | null | undefined,
): HomeTestimonial[] {
  const out: HomeTestimonial[] = [];
  for (const row of rows ?? []) {
    const quote = row?.quote?.trim();
    const name = row?.name?.trim();
    const designation = row?.designation?.trim();
    if (!quote || !name || !designation) continue;
    out.push({
      quote,
      name,
      designation,
      rating: clampStarRating(row?.rating),
    });
    if (out.length >= 8) break;
  }
  return out;
}

function mergeTestimonialsPreviewFields(
  t: TestimonialsPreviewCms | null | undefined,
): Pick<
  NonNullable<HomePageDocument>,
  | "testimonialsEyebrow"
  | "testimonialsHeadline"
  | "testimonialsIntro"
  | "testimonialsCtaLabel"
  | "testimonialsCtaHref"
  | "testimonialsItems"
> {
  const fb = HOME_PAGE_FALLBACK;
  const items = normalizeTestimonialsPreviewItems(t?.items);
  return {
    testimonialsEyebrow: pick(t?.eyebrow, fb.testimonialsEyebrow!),
    testimonialsHeadline: pick(t?.headline, fb.testimonialsHeadline!),
    testimonialsIntro: pick(t?.intro, fb.testimonialsIntro!),
    testimonialsCtaLabel: pick(t?.ctaLabel, fb.testimonialsCtaLabel!),
    testimonialsCtaHref: pick(t?.ctaHref, fb.testimonialsCtaHref!),
    testimonialsItems:
      items.length > 0 ? items : fb.testimonialsItems!,
  };
}

function normalizeMarqueeWords(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const out: string[] = [];
  for (const w of raw) {
    if (typeof w !== "string") continue;
    const t = w.trim();
    if (!t) continue;
    out.push(t);
    if (out.length >= 24) break;
  }
  return out;
}

function mergeWordsMarqueeFields(
  m: WordsMarqueeCms | null | undefined,
): Pick<NonNullable<HomePageDocument>, "marqueeWords"> {
  const fb = HOME_PAGE_FALLBACK;
  const words = normalizeMarqueeWords(m?.words);
  return {
    marqueeWords: words.length >= 2 ? words : fb.marqueeWords!,
  };
}

function mergeHeroFields(h: HeroSectionCms): NonNullable<HomePageDocument> {
  const fb = HOME_PAGE_FALLBACK;
  const slides = h?.slides?.filter((s) => s?.asset?._ref) ?? [];
  return {
    heroEyebrow: pick(h?.eyebrow, fb.heroEyebrow!),
    heroTitleLead: pick(h?.headlineLead, fb.heroTitleLead!),
    heroTitleHighlight: pick(h?.headlineHighlight, fb.heroTitleHighlight!),
    heroSubtitle: pick(h?.subtitle, fb.heroSubtitle!),
    heroPrimaryCtaLabel: pick(h?.primaryCtaLabel, fb.heroPrimaryCtaLabel!),
    heroPrimaryCtaHref: pick(h?.primaryCtaHref, fb.heroPrimaryCtaHref!),
    heroSecondaryCtaLabel: pick(h?.secondaryCtaLabel, fb.heroSecondaryCtaLabel!),
    heroSecondaryCtaHref: pick(h?.secondaryCtaHref, fb.heroSecondaryCtaHref!),
    heroSlides: slides.length > 0 ? slides : null,
  };
}

export async function getHomePage(): Promise<NonNullable<HomePageDocument>> {
  if (!sanityEnv.isConfigured) {
    return HOME_PAGE_FALLBACK;
  }
  try {
    const raw = await sanityClient.fetch<HomePageRaw>(homePageQuery);
    if (!raw) {
      return HOME_PAGE_FALLBACK;
    }
    const hero = canonicalHeroSection(raw);
    return {
      ...mergeHeroFields(hero),
      ...mergePartnerFields(raw?.partnerModel),
      ...mergeAboutPreviewFields(raw?.aboutPreview),
      ...mergeWhyUsFields(raw?.whyUs),
      ...mergeHomeFaqFields(raw?.homeFaq),
      ...mergeTestimonialsPreviewFields(raw?.testimonialsPreview),
      ...mergeWordsMarqueeFields(raw?.wordsMarquee),
    };
  } catch {
    return HOME_PAGE_FALLBACK;
  }
}

/** URLs for `next/image` when Sanity hero slides exist. */
export function getHeroCarouselSources(
  doc: Pick<NonNullable<HomePageDocument>, "heroSlides">,
): { src: string; alt: string }[] {
  const slides = doc.heroSlides;
  if (!slides?.length) return [];
  const out: { src: string; alt: string }[] = [];
  for (const slide of slides) {
    const src = sanityImageUrl(slide, 2000);
    if (src) {
      out.push({
        src,
        alt: slide.alt?.trim() || "Daksa Digital showcase",
      });
    }
  }
  return out;
}
