import { cache } from "react";
import { defineQuery } from "next-sanity";

import { MEDIA } from "@/lib/media";
import { sanityClient } from "@/lib/sanity.client";
import { sanityEnv } from "@/lib/sanity.env";
import { sanityImageUrl } from "@/lib/sanity.image";

export type ServicesPageServiceItem = {
  title: string;
  description: string;
  points: string[];
  iconKey: string;
};

export type ServicesPageData = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
  };
  servicesIntro: {
    headline: string;
    body: string;
  };
  services: ServicesPageServiceItem[];
  ctaSection: {
    headline: string;
    body: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
};

type ServicesPageCms = {
  seoTitle?: string | null;
  seoDescription?: string | null;
  hero?: {
    eyebrow?: string | null;
    title?: string | null;
    subtitle?: string | null;
    image?: { alt?: string | null; asset?: { _ref?: string } } | null;
  } | null;
  servicesIntro?: {
    headline?: string | null;
    body?: string | null;
  } | null;
  services?: Array<{
    title?: string | null;
    description?: string | null;
    points?: string[] | null;
    iconKey?: string | null;
  }> | null;
  ctaSection?: {
    headline?: string | null;
    body?: string | null;
    primaryCtaLabel?: string | null;
    primaryCtaHref?: string | null;
    secondaryCtaLabel?: string | null;
    secondaryCtaHref?: string | null;
  } | null;
} | null;

const servicesPageQuery = defineQuery(`
  *[_id == "servicesPage"][0]{
    seoTitle,
    seoDescription,
    hero{
      eyebrow,
      title,
      subtitle,
      image{ alt, asset }
    },
    servicesIntro{
      headline,
      body
    },
    services[]{
      title,
      description,
      points,
      iconKey
    },
    ctaSection{
      headline,
      body,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref
    }
  }
`);

export const SERVICES_PAGE_FALLBACK: ServicesPageData = {
  seoTitle: "Services",
  seoDescription:
    "Digital marketing, content, social, web, SEO, branding, lead generation, and more tailored to your goals.",
  hero: {
    eyebrow: "Services",
    title: "Everything you need to show up, persuade, and convert.",
    subtitle:
      "Nine service lines. One accountable partner. Scoped around your stage, goals, and growth metrics.",
    imageSrc: MEDIA.images.hero7,
    imageAlt: "Daksa Digital team planning services",
  },
  servicesIntro: {
    headline: "What we do",
    body: "Pick a single lane or bundle channels for compound growth each engagement is customized to your business objectives.",
  },
  services: [
    {
      iconKey: "megaphone",
      title: "Digital Marketing",
      description:
        "Multi-channel campaigns built around your goals paid search, display, and performance marketing managed end-to-end.",
      points: ["Strategy + execution in one team", "ROI-focused reporting", "Paid & organic channels"],
    },
    {
      iconKey: "users",
      title: "Influencer Marketing",
      description:
        "Creator partnerships matched by niche, audience quality, and brand fit not just follower count.",
      points: ["Nano to macro creator network", "Brief to post-campaign reporting", "Authentic, not scripted"],
    },
    {
      iconKey: "penLine",
      title: "Content Writing",
      description:
        "Blog posts, web copy, case studies, and ad scripts purposeful writing that earns attention and drives action.",
      points: ["SEO-optimized by default", "Brand voice matched", "Every format covered"],
    },
    {
      iconKey: "share2",
      title: "Social Media Management",
      description:
        "Consistent daily presence, community engagement, and creative content published across your key platforms.",
      points: ["Content calendar + scheduling", "Community engagement & replies", "Data-backed creative"],
    },
    {
      iconKey: "globe",
      title: "Website Development",
      description:
        "Fast, clean, mobile-first websites built to convert from focused landing pages to full product sites.",
      points: ["Performance-first builds", "Conversion-optimized UX", "CMS-ready or headless"],
    },
    {
      iconKey: "search",
      title: "SEO Services",
      description:
        "Technical audits, keyword strategy, and on-page content foundations that compound discoverability over time.",
      points: ["Full technical audit", "Content + link strategy", "Transparent rank tracking"],
    },
    {
      iconKey: "palette",
      title: "Branding & Creative Design",
      description:
        "Logo, color, type, and visual systems that stay cohesive from business card to full campaign.",
      points: ["Brand identity & guidelines", "Print + digital assets", "Consistent across channels"],
    },
    {
      iconKey: "lineChart",
      title: "Lead Generation",
      description:
        "Paid ads, landing pages, and nurture flows engineered to fill your pipeline with the right prospects.",
      points: ["Targeted ad campaigns", "Landing page optimisation", "Lead nurture sequences"],
    },
    {
      iconKey: "barChart3",
      title: "Business Promotion Solutions",
      description:
        "Integrated campaign planning and media execution for product launches, events, and growth moments.",
      points: ["Launch & event campaigns", "Multi-channel media mix", "Offline + online coverage"],
    },
  ],
  ctaSection: {
    headline: "Not sure which services fit your goals?",
    body: "Tell us where you are and where you want to be. We'll put together a scoped plan no jargon, no pressure.",
    primaryCtaLabel: "Discuss your requirements",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Read client feedback",
    secondaryCtaHref: "/testimonials",
  },
};

function pick(s: string | null | undefined, fallback: string): string {
  const t = s?.trim();
  return t && t.length > 0 ? t : fallback;
}

function sanitizePoints(points: string[] | null | undefined): string[] {
  const out: string[] = [];
  for (const point of points ?? []) {
    const t = point?.trim();
    if (!t) continue;
    out.push(t);
    if (out.length >= 6) break;
  }
  return out;
}

function mergeServices(
  cmsRows: NonNullable<ServicesPageCms>["services"],
): ServicesPageServiceItem[] {
  const out: ServicesPageServiceItem[] = [];
  for (const row of cmsRows ?? []) {
    const title = row?.title?.trim();
    const description = row?.description?.trim();
    const iconKey = row?.iconKey?.trim();
    const points = sanitizePoints(row?.points);
    if (!title || !description || !iconKey || points.length === 0) continue;
    out.push({ title, description, iconKey, points });
    if (out.length >= 12) break;
  }
  return out;
}

function mergeServicesPage(cms: ServicesPageCms): ServicesPageData {
  const fb = SERVICES_PAGE_FALLBACK;
  const cmsServices = mergeServices(cms?.services);
  const heroImageSrc = sanityImageUrl(cms?.hero?.image, 2400);
  return {
    seoTitle: pick(cms?.seoTitle, fb.seoTitle),
    seoDescription: pick(cms?.seoDescription, fb.seoDescription),
    hero: {
      eyebrow: pick(cms?.hero?.eyebrow, fb.hero.eyebrow),
      title: pick(cms?.hero?.title, fb.hero.title),
      subtitle: pick(cms?.hero?.subtitle, fb.hero.subtitle),
      imageSrc: heroImageSrc ?? fb.hero.imageSrc,
      imageAlt: pick(cms?.hero?.image?.alt, fb.hero.imageAlt),
    },
    servicesIntro: {
      headline: pick(cms?.servicesIntro?.headline, fb.servicesIntro.headline),
      body: pick(cms?.servicesIntro?.body, fb.servicesIntro.body),
    },
    services: cmsServices.length > 0 ? cmsServices : fb.services,
    ctaSection: {
      headline: pick(cms?.ctaSection?.headline, fb.ctaSection.headline),
      body: pick(cms?.ctaSection?.body, fb.ctaSection.body),
      primaryCtaLabel: pick(
        cms?.ctaSection?.primaryCtaLabel,
        fb.ctaSection.primaryCtaLabel,
      ),
      primaryCtaHref: pick(
        cms?.ctaSection?.primaryCtaHref,
        fb.ctaSection.primaryCtaHref,
      ),
      secondaryCtaLabel: pick(
        cms?.ctaSection?.secondaryCtaLabel,
        fb.ctaSection.secondaryCtaLabel,
      ),
      secondaryCtaHref: pick(
        cms?.ctaSection?.secondaryCtaHref,
        fb.ctaSection.secondaryCtaHref,
      ),
    },
  };
}

export const getServicesPage = cache(async (): Promise<ServicesPageData> => {
  if (!sanityEnv.isConfigured) return SERVICES_PAGE_FALLBACK;
  try {
    const cms = await sanityClient.fetch<ServicesPageCms>(servicesPageQuery);
    return mergeServicesPage(cms);
  } catch {
    return SERVICES_PAGE_FALLBACK;
  }
});
