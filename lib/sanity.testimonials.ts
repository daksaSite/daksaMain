import { cache } from "react";
import { defineQuery } from "next-sanity";

import { sanityClient } from "@/lib/sanity.client";
import { sanityEnv } from "@/lib/sanity.env";
import { sanityImageUrl } from "@/lib/sanity.image";
import { MEDIA, withHeroImageCacheBust } from "@/lib/media";
import { TESTIMONIALS } from "@/lib/site-content";

type StatItem = {
  value: string;
  label: string;
  iconKey: string;
};

type TrustPillar = {
  title: string;
  body: string;
  iconKey: string;
};

type TestimonialItem = {
  quote: string;
  name: string;
  designation: string;
  rating: number;
};

export type TestimonialsPageData = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    chipThreeText: string;
    imageSrc: string;
    imageAlt: string;
  };
  stats: StatItem[];
  storiesSection: {
    eyebrow: string;
    headline: string;
    intro: string;
    items: TestimonialItem[];
  };
  trustSection: {
    eyebrow: string;
    headline: string;
    intro: string;
    pillars: TrustPillar[];
  };
  ctaSection: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
};

type TestimonialsPageCms = {
  seoTitle?: string | null;
  seoDescription?: string | null;
  hero?: {
    eyebrow?: string | null;
    title?: string | null;
    subtitle?: string | null;
    chipThreeText?: string | null;
    image?: { asset?: { _ref?: string }; alt?: string | null } | null;
  } | null;
  stats?: Array<{
    value?: string | null;
    label?: string | null;
    iconKey?: string | null;
  }> | null;
  storiesSection?: {
    eyebrow?: string | null;
    headline?: string | null;
    intro?: string | null;
    items?: Array<{
      quote?: string | null;
      name?: string | null;
      designation?: string | null;
      rating?: number | null;
    }> | null;
  } | null;
  trustSection?: {
    eyebrow?: string | null;
    headline?: string | null;
    intro?: string | null;
    pillars?: Array<{
      title?: string | null;
      body?: string | null;
      iconKey?: string | null;
    }> | null;
  } | null;
  ctaSection?: {
    eyebrow?: string | null;
    headline?: string | null;
    body?: string | null;
    primaryCtaLabel?: string | null;
    primaryCtaHref?: string | null;
    secondaryCtaLabel?: string | null;
    secondaryCtaHref?: string | null;
  } | null;
} | null;

const testimonialsPageQuery = defineQuery(`
  *[_id == "testimonialsPage"][0]{
    seoTitle,
    seoDescription,
    hero{
      eyebrow,
      title,
      subtitle,
      chipThreeText,
      image{ alt, asset }
    },
    stats[]{ value, label, iconKey },
    storiesSection{
      eyebrow,
      headline,
      intro,
      items[]{ quote, name, designation, rating }
    },
    trustSection{
      eyebrow,
      headline,
      intro,
      pillars[]{ title, body, iconKey }
    },
    ctaSection{
      eyebrow,
      headline,
      body,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref
    }
  }
`);

const TESTIMONIALS_DEFAULT: TestimonialItem[] = TESTIMONIALS.map((t) => ({
  quote: t.quote,
  name: t.name,
  designation: t.designation,
  rating: t.rating,
}));

export const TESTIMONIALS_PAGE_FALLBACK: TestimonialsPageData = {
  seoTitle: "Testimonials",
  seoDescription:
    "Client feedback, ratings, and how teams experience working with Daksa Digital—strategy, delivery, and long-term partnership.",
  hero: {
    eyebrow: "Social proof",
    title: "Real words from leaders who've worked with us",
    subtitle:
      "Ratings, roles, and candid feedback—how teams experience strategy, execution, and ongoing support when Daksa is in the mix.",
    chipThreeText: "Partners across India",
    imageSrc: withHeroImageCacheBust(MEDIA.images.hero5),
    imageAlt: "Daksa Digital team and client collaboration",
  },
  stats: [
    { value: String(TESTIMONIALS_DEFAULT.length), label: "Stories featured", iconKey: "messageSquareQuote" },
    { value: "4.9", label: "Average rating", iconKey: "star" },
    { value: "Noida", label: "HQ & core team", iconKey: "mapPin" },
    { value: "Pan-India", label: "Where we collaborate", iconKey: "globe2" },
  ],
  storiesSection: {
    eyebrow: "Voices from partners",
    headline: "What stood out for them",
    intro:
      "Each card includes a short quote, role, and rating—the same pattern you'll see on our homepage, with more room to read here.",
    items: TESTIMONIALS_DEFAULT,
  },
  trustSection: {
    eyebrow: "How we show up",
    headline: "The themes behind the praise",
    intro:
      "Feedback clusters around a few things we optimize for on every engagement—whether the brief is campaigns, content, or full-funnel work.",
    pillars: [
      {
        iconKey: "messageCircle",
        title: "Clarity from day one",
        body: "We align on goals, cadence, and who owns what before the first deliverable so reviews feel like progress, not surprises.",
      },
      {
        iconKey: "refreshCw",
        title: "Iterate with intent",
        body: "When something works, we scale it; when it does not, we adjust fast with reporting that matches agreed KPIs.",
      },
      {
        iconKey: "headphones",
        title: "A partner, not a ticket queue",
        body: "You get a consistent point of contact and practical communication rhythms matched to your team.",
      },
    ],
  },
  ctaSection: {
    eyebrow: "Next step",
    headline: "Tell us what you're building next",
    body: "Share your goals and timeline—we'll suggest a practical path across marketing, content, web, and growth support.",
    primaryCtaLabel: "Start a conversation",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Explore services",
    secondaryCtaHref: "/services",
  },
};

function pick(value: string | null | undefined, fallback: string): string {
  const t = value?.trim();
  return t && t.length > 0 ? t : fallback;
}

function normalizeTestimonials(
  rows:
    | Array<{
        quote?: string | null;
        name?: string | null;
        designation?: string | null;
        rating?: number | null;
      }>
    | null
    | undefined,
): TestimonialItem[] {
  const out: TestimonialItem[] = [];
  for (const row of rows ?? []) {
    const quote = row?.quote?.trim();
    const name = row?.name?.trim();
    const designation = row?.designation?.trim();
    if (!quote || !name || !designation) continue;
    const ratingRaw = typeof row.rating === "number" ? Math.round(row.rating) : 5;
    out.push({
      quote,
      name,
      designation,
      rating: Math.max(1, Math.min(5, ratingRaw)),
    });
  }
  return out;
}

function normalizeStats(
  rows:
    | Array<{
        value?: string | null;
        label?: string | null;
        iconKey?: string | null;
      }>
    | null
    | undefined,
): StatItem[] {
  const out: StatItem[] = [];
  for (const row of rows ?? []) {
    const value = row?.value?.trim();
    const label = row?.label?.trim();
    const iconKey = row?.iconKey?.trim();
    if (!value || !label || !iconKey) continue;
    out.push({ value, label, iconKey });
    if (out.length >= 4) break;
  }
  return out;
}

function normalizeTrustPillars(
  rows:
    | Array<{
        title?: string | null;
        body?: string | null;
        iconKey?: string | null;
      }>
    | null
    | undefined,
): TrustPillar[] {
  const out: TrustPillar[] = [];
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

function mergeTestimonialsPage(cms: TestimonialsPageCms): TestimonialsPageData {
  const fb = TESTIMONIALS_PAGE_FALLBACK;
  const stories = normalizeTestimonials(cms?.storiesSection?.items);
  const stats = normalizeStats(cms?.stats);
  const pillars = normalizeTrustPillars(cms?.trustSection?.pillars);
  const heroImage = cms?.hero?.image;
  const cmsHeroSrc = sanityImageUrl(heroImage, 2400);

  return {
    seoTitle: pick(cms?.seoTitle, fb.seoTitle),
    seoDescription: pick(cms?.seoDescription, fb.seoDescription),
    hero: {
      eyebrow: pick(cms?.hero?.eyebrow, fb.hero.eyebrow),
      title: pick(cms?.hero?.title, fb.hero.title),
      subtitle: pick(cms?.hero?.subtitle, fb.hero.subtitle),
      chipThreeText: pick(cms?.hero?.chipThreeText, fb.hero.chipThreeText),
      imageSrc: cmsHeroSrc ?? fb.hero.imageSrc,
      imageAlt: pick(cms?.hero?.image?.alt, fb.hero.imageAlt),
    },
    stats: stats.length > 0 ? stats : fb.stats,
    storiesSection: {
      eyebrow: pick(cms?.storiesSection?.eyebrow, fb.storiesSection.eyebrow),
      headline: pick(cms?.storiesSection?.headline, fb.storiesSection.headline),
      intro: pick(cms?.storiesSection?.intro, fb.storiesSection.intro),
      items: stories.length > 0 ? stories : fb.storiesSection.items,
    },
    trustSection: {
      eyebrow: pick(cms?.trustSection?.eyebrow, fb.trustSection.eyebrow),
      headline: pick(cms?.trustSection?.headline, fb.trustSection.headline),
      intro: pick(cms?.trustSection?.intro, fb.trustSection.intro),
      pillars: pillars.length > 0 ? pillars : fb.trustSection.pillars,
    },
    ctaSection: {
      eyebrow: pick(cms?.ctaSection?.eyebrow, fb.ctaSection.eyebrow),
      headline: pick(cms?.ctaSection?.headline, fb.ctaSection.headline),
      body: pick(cms?.ctaSection?.body, fb.ctaSection.body),
      primaryCtaLabel: pick(cms?.ctaSection?.primaryCtaLabel, fb.ctaSection.primaryCtaLabel),
      primaryCtaHref: pick(cms?.ctaSection?.primaryCtaHref, fb.ctaSection.primaryCtaHref),
      secondaryCtaLabel: pick(cms?.ctaSection?.secondaryCtaLabel, fb.ctaSection.secondaryCtaLabel),
      secondaryCtaHref: pick(cms?.ctaSection?.secondaryCtaHref, fb.ctaSection.secondaryCtaHref),
    },
  };
}

export const getTestimonialsPage = cache(async (): Promise<TestimonialsPageData> => {
  if (!sanityEnv.isConfigured) return TESTIMONIALS_PAGE_FALLBACK;
  try {
    const cms = await sanityClient.fetch<TestimonialsPageCms>(testimonialsPageQuery);
    return mergeTestimonialsPage(cms);
  } catch {
    return TESTIMONIALS_PAGE_FALLBACK;
  }
});
