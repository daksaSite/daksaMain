import { defineQuery } from "next-sanity";
import { cache } from "react";

import { sanityClient } from "@/lib/sanity.client";
import { sanityEnv } from "@/lib/sanity.env";
import { sanityImageUrl, type SanityImageField } from "@/lib/sanity.image";
import { MEDIA, withHeroImageCacheBust } from "@/lib/media";
import {
  ABOUT_PARAGRAPHS,
  CONTACT,
  MISSION,
  PRIORITIES,
  VISION,
  WHY_POINTS,
} from "@/lib/site-content";

export type AboutPageStat = { value: string; label: string };

export type AboutValuePillar = {
  title: string;
  body: string;
  iconKey: string;
};

export type AboutAudienceCard = {
  label: string;
  description: string;
  iconKey: string;
};

export type AboutPageData = {
  seoTitle: string | null;
  seoDescription: string | null;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
  };
  stats: AboutPageStat[];
  story: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    address: string;
    imageSrc: string;
    imageAlt: string;
    imageCaptionBold: string;
    imageCaptionSub: string;
  };
  missionVision: {
    sectionEyebrow: string;
    sectionHeadline: string;
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
  };
  valuesSection: {
    sectionEyebrow: string;
    sectionHeadline: string;
    pillars: AboutValuePillar[];
  };
  whyPriorities: {
    sectionEyebrow: string;
    sectionHeadline: string;
    whyColumnLabel: string;
    whyPoints: string[];
    prioritiesColumnLabel: string;
    priorities: string[];
  };
  audienceSection: {
    eyebrow: string;
    headline: string;
    cards: AboutAudienceCard[];
  };
  ctaSection: {
    headline: string;
    body: string;
  };
};

const DEFAULT_HERO_IMG = withHeroImageCacheBust(MEDIA.images.hero4);

const DEFAULT_STATS: AboutPageStat[] = [
  { value: "9+", label: "Service lines" },
  { value: "100%", label: "Client-first approach" },
  { value: "Noida", label: "Headquartered in" },
  { value: "Pan-India", label: "Client reach" },
];

const DEFAULT_VALUE_PILLARS: AboutValuePillar[] = [
  {
    title: "Strategic clarity",
    body: "Every engagement starts with understanding your goals — not guessing at tactics.",
    iconKey: "lightbulb",
  },
  {
    title: "Measurable outcomes",
    body: "We tie our work to metrics that actually move the needle for your business.",
    iconKey: "barChart3",
  },
  {
    title: "Consistent quality",
    body: "No shortcuts. Every deliverable meets the standard we'd stake our reputation on.",
    iconKey: "shieldCheck",
  },
  {
    title: "Clear communication",
    body: "You always know what's happening, why it's happening, and what comes next.",
    iconKey: "messageCircle",
  },
  {
    title: "Long-term relationships",
    body: "We work best as ongoing partners, not one-off vendors. Growth takes time and trust.",
    iconKey: "users",
  },
  {
    title: "Bias for execution",
    body: "Great strategy without action is just a slide deck. We ship, learn, and iterate fast.",
    iconKey: "rocket",
  },
];

const DEFAULT_AUDIENCE: AboutAudienceCard[] = [
  {
    label: "Startups",
    description:
      "Early-stage brands finding their voice and carving out space in a crowded market.",
    iconKey: "sparkles",
  },
  {
    label: "Growing businesses",
    description:
      "Scaling teams that need strategic digital execution to match their ambition.",
    iconKey: "trendingUp",
  },
  {
    label: "Established brands",
    description:
      "Mature businesses looking to sharpen their digital edge and stay ahead.",
    iconKey: "store",
  },
];

export const ABOUT_PAGE_FALLBACK: AboutPageData = {
  seoTitle: null,
  seoDescription: null,
  hero: {
    eyebrow: "About us",
    title:
      "A digital partner invested in how you grow — not just how you look online.",
    subtitle:
      "Daksa Digital is a Noida-based digital marketing company helping brands build trust, visibility, and measurable growth.",
    imageSrc: DEFAULT_HERO_IMG,
    imageAlt: "Daksa Digital team at work",
  },
  stats: DEFAULT_STATS,
  story: {
    eyebrow: "Our story",
    headline:
      "Built to deliver what brands actually need results, not just reports.",
    paragraphs: [...ABOUT_PARAGRAPHS],
    address: CONTACT.address,
    imageSrc: DEFAULT_HERO_IMG,
    imageAlt: "Daksa Digital — strategic execution",
    imageCaptionBold: "Built for Scale. Driven by Impact.",
    imageCaptionSub: "Noida, Uttar Pradesh, India",
  },
  missionVision: {
    sectionEyebrow: "Purpose",
    sectionHeadline: "What we stand for",
    missionTitle: "Our Mission",
    missionBody: MISSION,
    visionTitle: "Our Vision",
    visionBody: VISION,
  },
  valuesSection: {
    sectionEyebrow: "How we operate",
    sectionHeadline: "Principles we don't compromise on",
    pillars: DEFAULT_VALUE_PILLARS,
  },
  whyPriorities: {
    sectionEyebrow: "Why Daksa",
    sectionHeadline: "Built different by design",
    whyColumnLabel: "What makes us different",
    whyPoints: [...WHY_POINTS],
    prioritiesColumnLabel: "What we prioritize",
    priorities: [...PRIORITIES],
  },
  audienceSection: {
    eyebrow: "Our clients",
    headline: "Who we work with",
    cards: DEFAULT_AUDIENCE,
  },
  ctaSection: {
    headline: "Ready to build something meaningful?",
    body: "Let's have a real conversation about your goals. No sales pitch — just a clear look at how we can help.",
  },
};

const aboutPageQuery = defineQuery(`
  *[_id == "aboutPage"][0]{
    seoTitle,
    seoDescription,
    hero{
      eyebrow,
      title,
      subtitle,
      image{ asset, alt }
    },
    stats[]{ value, label },
    story{
      eyebrow,
      headline,
      paragraphs,
      address,
      image{ asset, alt },
      imageCaptionBold,
      imageCaptionSub
    },
    missionVision{
      sectionEyebrow,
      sectionHeadline,
      missionTitle,
      missionBody,
      visionTitle,
      visionBody
    },
    valuesSection{
      sectionEyebrow,
      sectionHeadline,
      pillars[]{ title, body, iconKey }
    },
    whyPriorities{
      sectionEyebrow,
      sectionHeadline,
      whyColumnLabel,
      whyPoints,
      prioritiesColumnLabel,
      priorities
    },
    audienceSection{
      eyebrow,
      headline,
      cards[]{ label, description, iconKey }
    },
    ctaSection{
      headline,
      body
    }
  }
`);

function pick(s: string | null | undefined, fb: string): string {
  const t = s?.trim();
  return t && t.length > 0 ? t : fb;
}

function pickNullable(s: string | null | undefined): string | null {
  const t = s?.trim();
  return t && t.length > 0 ? t : null;
}

function normalizeStringList(raw: unknown, max: number): string[] {
  if (!Array.isArray(raw)) return [];
  const out: string[] = [];
  for (const item of raw) {
    if (typeof item !== "string") continue;
    const t = item.trim();
    if (!t) continue;
    out.push(t);
    if (out.length >= max) break;
  }
  return out;
}

function normalizeStats(rows: unknown): AboutPageStat[] {
  if (!Array.isArray(rows)) return [];
  const out: AboutPageStat[] = [];
  for (const row of rows) {
    if (!row || typeof row !== "object") continue;
    const r = row as { value?: string | null; label?: string | null };
    const value = r.value?.trim();
    const label = r.label?.trim();
    if (!value || !label) continue;
    out.push({ value, label });
    if (out.length >= 4) break;
  }
  return out;
}

function normalizeValuePillars(rows: unknown): AboutValuePillar[] {
  if (!Array.isArray(rows)) return [];
  const out: AboutValuePillar[] = [];
  for (const row of rows) {
    if (!row || typeof row !== "object") continue;
    const r = row as {
      title?: string | null;
      body?: string | null;
      iconKey?: string | null;
    };
    const title = r.title?.trim();
    const body = r.body?.trim();
    const iconKey = r.iconKey?.trim();
    if (!title || !body || !iconKey) continue;
    out.push({ title, body, iconKey });
    if (out.length >= 8) break;
  }
  return out;
}

function normalizeAudienceCards(rows: unknown): AboutAudienceCard[] {
  if (!Array.isArray(rows)) return [];
  const out: AboutAudienceCard[] = [];
  for (const row of rows) {
    if (!row || typeof row !== "object") continue;
    const r = row as {
      label?: string | null;
      description?: string | null;
      iconKey?: string | null;
    };
    const label = r.label?.trim();
    const description = r.description?.trim();
    const iconKey = r.iconKey?.trim();
    if (!label || !description || !iconKey) continue;
    out.push({ label, description, iconKey });
    if (out.length >= 3) break;
  }
  return out;
}

function imageOrFallback(
  img: SanityImageField | null | undefined,
  fallbackSrc: string,
  fallbackAlt: string,
): { src: string; alt: string } {
  const url = sanityImageUrl(img ?? undefined, 1920);
  if (url) {
    return {
      src: url,
      alt: img?.alt?.trim() || fallbackAlt,
    };
  }
  return { src: fallbackSrc, alt: fallbackAlt };
}

function mergeAboutPage(raw: Record<string, unknown> | null): AboutPageData {
  const fb = ABOUT_PAGE_FALLBACK;
  const heroImg = imageOrFallback(
    (raw?.hero as { image?: SanityImageField })?.image,
    fb.hero.imageSrc,
    fb.hero.imageAlt,
  );
  const storyImg = imageOrFallback(
    (raw?.story as { image?: SanityImageField })?.image,
    fb.story.imageSrc,
    fb.story.imageAlt,
  );

  const h = (raw?.hero ?? {}) as Record<string, string | null | undefined>;
  const stats = normalizeStats(raw?.stats);
  const st = (raw?.story ?? {}) as Record<string, unknown>;
  const paragraphs = normalizeStringList(st.paragraphs, 8);
  const mv = (raw?.missionVision ?? {}) as Record<string, string | null | undefined>;
  const vs = (raw?.valuesSection ?? {}) as {
    sectionEyebrow?: string | null;
    sectionHeadline?: string | null;
    pillars?: unknown;
  };
  const pillars = normalizeValuePillars(vs.pillars);
  const wp = (raw?.whyPriorities ?? {}) as Record<string, unknown>;
  const whyPoints = normalizeStringList(wp.whyPoints, 12);
  const priorities = normalizeStringList(wp.priorities, 12);
  const aud = (raw?.audienceSection ?? {}) as {
    eyebrow?: string | null;
    headline?: string | null;
    cards?: unknown;
  };
  const cards = normalizeAudienceCards(aud.cards);
  const cta = (raw?.ctaSection ?? {}) as Record<string, string | null | undefined>;

  return {
    seoTitle: pickNullable(raw?.seoTitle as string | undefined),
    seoDescription: pickNullable(raw?.seoDescription as string | undefined),
    hero: {
      eyebrow: pick(h.eyebrow, fb.hero.eyebrow),
      title: pick(h.title, fb.hero.title),
      subtitle: pick(h.subtitle, fb.hero.subtitle),
      imageSrc: heroImg.src,
      imageAlt: heroImg.alt,
    },
    stats: stats.length > 0 ? stats : fb.stats,
    story: {
      eyebrow: pick(st.eyebrow as string | undefined, fb.story.eyebrow),
      headline: pick(st.headline as string | undefined, fb.story.headline),
      paragraphs: paragraphs.length > 0 ? paragraphs : fb.story.paragraphs,
      address: pick(st.address as string | undefined, fb.story.address),
      imageSrc: storyImg.src,
      imageAlt: storyImg.alt,
      imageCaptionBold: pick(
        st.imageCaptionBold as string | undefined,
        fb.story.imageCaptionBold,
      ),
      imageCaptionSub: pick(
        st.imageCaptionSub as string | undefined,
        fb.story.imageCaptionSub,
      ),
    },
    missionVision: {
      sectionEyebrow: pick(mv.sectionEyebrow, fb.missionVision.sectionEyebrow),
      sectionHeadline: pick(
        mv.sectionHeadline,
        fb.missionVision.sectionHeadline,
      ),
      missionTitle: pick(mv.missionTitle, fb.missionVision.missionTitle),
      missionBody: pick(mv.missionBody, fb.missionVision.missionBody),
      visionTitle: pick(mv.visionTitle, fb.missionVision.visionTitle),
      visionBody: pick(mv.visionBody, fb.missionVision.visionBody),
    },
    valuesSection: {
      sectionEyebrow: pick(vs.sectionEyebrow, fb.valuesSection.sectionEyebrow),
      sectionHeadline: pick(
        vs.sectionHeadline,
        fb.valuesSection.sectionHeadline,
      ),
      pillars: pillars.length > 0 ? pillars : fb.valuesSection.pillars,
    },
    whyPriorities: {
      sectionEyebrow: pick(
        wp.sectionEyebrow as string | undefined,
        fb.whyPriorities.sectionEyebrow,
      ),
      sectionHeadline: pick(
        wp.sectionHeadline as string | undefined,
        fb.whyPriorities.sectionHeadline,
      ),
      whyColumnLabel: pick(
        wp.whyColumnLabel as string | undefined,
        fb.whyPriorities.whyColumnLabel,
      ),
      whyPoints:
        whyPoints.length > 0 ? whyPoints : fb.whyPriorities.whyPoints,
      prioritiesColumnLabel: pick(
        wp.prioritiesColumnLabel as string | undefined,
        fb.whyPriorities.prioritiesColumnLabel,
      ),
      priorities:
        priorities.length > 0 ? priorities : fb.whyPriorities.priorities,
    },
    audienceSection: {
      eyebrow: pick(aud.eyebrow, fb.audienceSection.eyebrow),
      headline: pick(aud.headline, fb.audienceSection.headline),
      cards: cards.length > 0 ? cards : fb.audienceSection.cards,
    },
    ctaSection: {
      headline: pick(cta.headline, fb.ctaSection.headline),
      body: pick(cta.body, fb.ctaSection.body),
    },
  };
}

async function fetchAboutPage(): Promise<AboutPageData> {
  if (!sanityEnv.isConfigured) {
    return ABOUT_PAGE_FALLBACK;
  }
  try {
    const raw = await sanityClient.fetch<Record<string, unknown> | null>(
      aboutPageQuery,
    );
    if (!raw) {
      return ABOUT_PAGE_FALLBACK;
    }
    return mergeAboutPage(raw);
  } catch {
    return ABOUT_PAGE_FALLBACK;
  }
}

export const getAboutPage = cache(fetchAboutPage);
