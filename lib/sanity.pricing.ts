import { cache } from "react";
import { defineQuery } from "next-sanity";

import { MEDIA } from "@/lib/media";
import { sanityClient } from "@/lib/sanity.client";
import { sanityEnv } from "@/lib/sanity.env";
import { sanityImageUrl } from "@/lib/sanity.image";

export type PricingPlan = {
  name: string;
  eyebrow: string;
  description: string;
  included: string[];
  notIncluded: string[];
  price: string | null;
  priceNote: string;
  featured: boolean;
  priceCtaLabel: string;
  priceCtaHref: string;
  customTitle: string;
  customBody: string;
  customCtaLabel: string;
  customCtaHref: string;
};

export type PricingPageData = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
  };
  plansSection: {
    headline: string;
    intro: string;
  };
  plans: PricingPlan[];
  howWePrice: {
    eyebrow: string;
    body: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
};

type PricingPageCms = {
  seoTitle?: string | null;
  seoDescription?: string | null;
  hero?: {
    eyebrow?: string | null;
    title?: string | null;
    subtitle?: string | null;
    image?: { alt?: string | null; asset?: { _ref?: string } } | null;
  } | null;
  plansSection?: {
    headline?: string | null;
    intro?: string | null;
  } | null;
  plans?: Array<{
    name?: string | null;
    eyebrow?: string | null;
    description?: string | null;
    included?: string[] | null;
    notIncluded?: string[] | null;
    price?: string | null;
    priceNote?: string | null;
    featured?: boolean | null;
    priceCtaLabel?: string | null;
    priceCtaHref?: string | null;
    customTitle?: string | null;
    customBody?: string | null;
    customCtaLabel?: string | null;
    customCtaHref?: string | null;
  }> | null;
  howWePrice?: {
    eyebrow?: string | null;
    body?: string | null;
    primaryCtaLabel?: string | null;
    primaryCtaHref?: string | null;
    secondaryCtaLabel?: string | null;
    secondaryCtaHref?: string | null;
  } | null;
} | null;

const pricingPageQuery = defineQuery(`
  *[_id == "pricingPage"][0]{
    seoTitle,
    seoDescription,
    hero{
      eyebrow,
      title,
      subtitle,
      image{ alt, asset }
    },
    plansSection{
      headline,
      intro
    },
    plans[]{
      name,
      eyebrow,
      description,
      included,
      notIncluded,
      price,
      priceNote,
      featured,
      priceCtaLabel,
      priceCtaHref,
      customTitle,
      customBody,
      customCtaLabel,
      customCtaHref
    },
    howWePrice{
      eyebrow,
      body,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref
    }
  }
`);

export const PRICING_PAGE_FALLBACK: PricingPageData = {
  seoTitle: "Pricing",
  seoDescription:
    "Starter, Standard, and Premium engagement options with Daksa Digital clear scope, realistic pricing, and custom enterprise plans.",
  hero: {
    eyebrow: "Pricing",
    title: "Three ways to work together clear scope, no surprises.",
    subtitle:
      "Figures below are starting points. After discovery we confirm deliverables, timelines, and commercials in writing project, retainer, or hybrid.",
    imageSrc: MEDIA.images.pricingHero,
    imageAlt: "Pricing and growth planning",
  },
  plansSection: {
    headline: "Compare plans",
    intro:
      "Each tier stacks more strategy, creative throughput, and senior attention. Pick a lane to start the conversation — we refine everything on a call.",
  },
  plans: [
    {
      name: "Starter",
      eyebrow: "Launch & learn",
      description:
        "Ideal for early-stage brands that need consistent digital presence without a full in-house team.",
      included: [
        "Kickoff workshop + 90-day roadmap",
        "Up to 2 social channels — planning, design & scheduling",
        "4 long-form or carousel content pieces per month",
        "Monthly performance snapshot (reach, engagement, top posts)",
        "Community monitoring & light engagement (comment/DM triage)",
        "On-brand templates for stories and static posts",
        "Email support with 48-hour response target",
      ],
      notIncluded: [
        "Paid media buying & optimisation",
        "Dedicated account director",
        "Influencer outreach & contracting",
        "Website builds or technical SEO fixes",
      ],
      price: "From ₹50,999 ",
      priceNote: "Indicative · 3-month minimum · excludes ad spend & taxes",
      featured: false,
      priceCtaLabel: "Request this plan",
      priceCtaHref: "/contact",
      customTitle: "Custom engagement",
      customBody: "We can scope this plan as a custom engagement.",
      customCtaLabel: "Contact us",
      customCtaHref: "/contact",
    },
    {
      name: "Standard",
      eyebrow: "Growth ready",
      description:
        "For teams ready to scale campaigns, tighten creative, and report on outcomes every sprint.",
      included: [
        "Everything in Starter, plus:",
        "Up to 4 social channels + platform-specific variants",
        "8 content deliverables / month (copy, creative, or landing tweaks)",
        "Paid social or search setup with weekly optimisation checkpoints",
        "Bi-weekly strategy call + shared live reporting dashboard",
        "Quarterly creative refresh & competitor snapshot",
        "Lead form / CTA audits on key landing pages",
        "Priority chat + email (24-hour target on business days)",
        "Single monthly influencer or UGC coordination slot",
      ],
      notIncluded: [
        "Full product site rebuilds",
        "Always-on brand film / large production shoots",
        "Enterprise martech integrations (CRM, CDP)",
      ],
      price: "From ₹1,19,999",
      priceNote: "Indicative · scope confirmed after discovery · excludes media spend",
      featured: true,
      priceCtaLabel: "Request this plan",
      priceCtaHref: "/contact",
      customTitle: "Custom engagement",
      customBody: "We can scope this plan as a custom engagement.",
      customCtaLabel: "Contact us",
      customCtaHref: "/contact",
    },
    {
      name: "Premium",
      eyebrow: "Scale & sophistication",
      description:
        "Executive-level partnership: integrated campaigns, senior strategists, and capacity reserved for your brand.",
      included: [
        "Everything in Standard, plus:",
        "Named strategist + producer with weekly war-room cadence",
        "Unlimited channel coverage within agreed scope of work",
        "Custom reporting pack (board-ready summaries, cohort views)",
        "Multi-market or multilingual rollout support",
        "Crisis / reputation monitoring playbook & on-call window",
        "Advanced funnel experiments (A/B journeys, nurture logic)",
        "Executive workshops & annual planning sessions",
        "Vendor & partner coordination (PR, events, creators)",
        "Optional embedded days on-site or hybrid each quarter",
      ],
      notIncluded: [
        "Pricing varies by scope — we scope retainers and hybrid project fees together.",
      ],
      price: null,
      priceNote: "",
      featured: false,
      priceCtaLabel: "Request this plan",
      priceCtaHref: "/contact",
      customTitle: "Custom engagement",
      customBody:
        "Retainers, blended project fees, and enterprise SLAs — we'll shape a proposal to your goals and governance needs.",
      customCtaLabel: "Contact us",
      customCtaHref: "/contact",
    },
  ],
  howWePrice: {
    eyebrow: "How we price",
    body: "Every engagement starts with discovery — we align on goals, constraints, and success metrics, then share a scoped plan with timelines and commercial options. Project fees suit defined deliverables; retainers keep a steady drumbeat of execution; hybrid pairs a baseline retainer with burst projects when you need extra velocity.",
    primaryCtaLabel: "See our process",
    primaryCtaHref: "/process",
    secondaryCtaLabel: "Browse services",
    secondaryCtaHref: "/services",
  },
};

function pick(s: string | null | undefined, fallback: string): string {
  const t = s?.trim();
  return t && t.length > 0 ? t : fallback;
}

function sanitizeList(list: string[] | null | undefined): string[] {
  const out: string[] = [];
  for (const item of list ?? []) {
    const t = item?.trim();
    if (!t) continue;
    out.push(t);
    if (out.length >= 20) break;
  }
  return out;
}

function mergePlans(cmsPlans: NonNullable<PricingPageCms>["plans"]): PricingPlan[] {
  const out: PricingPlan[] = [];
  for (const row of cmsPlans ?? []) {
    const name = row?.name?.trim();
    if (!name) continue;
    const included = sanitizeList(row?.included);
    const notIncluded = sanitizeList(row?.notIncluded);
    if (included.length === 0 || notIncluded.length === 0) continue;
    const hasPrice = Boolean(row?.price?.trim());
    out.push({
      name,
      eyebrow: row?.eyebrow?.trim() || "",
      description: row?.description?.trim() || "",
      included,
      notIncluded,
      price: hasPrice ? row?.price?.trim() || null : null,
      priceNote: row?.priceNote?.trim() || "",
      featured: Boolean(row?.featured),
      priceCtaLabel: row?.priceCtaLabel?.trim() || "Request this plan",
      priceCtaHref: row?.priceCtaHref?.trim() || "/contact",
      customTitle: row?.customTitle?.trim() || "Custom engagement",
      customBody:
        row?.customBody?.trim() ||
        "Retainers and project blends are scoped to your goals.",
      customCtaLabel: row?.customCtaLabel?.trim() || "Contact us",
      customCtaHref: row?.customCtaHref?.trim() || "/contact",
    });
    if (out.length >= 6) break;
  }
  return out;
}

function mergePricingPage(cms: PricingPageCms): PricingPageData {
  const fb = PRICING_PAGE_FALLBACK;
  const heroImageSrc = sanityImageUrl(cms?.hero?.image, 2400);
  const plans = mergePlans(cms?.plans);
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
    plansSection: {
      headline: pick(cms?.plansSection?.headline, fb.plansSection.headline),
      intro: pick(cms?.plansSection?.intro, fb.plansSection.intro),
    },
    plans: plans.length > 0 ? plans : fb.plans,
    howWePrice: {
      eyebrow: pick(cms?.howWePrice?.eyebrow, fb.howWePrice.eyebrow),
      body: pick(cms?.howWePrice?.body, fb.howWePrice.body),
      primaryCtaLabel: pick(
        cms?.howWePrice?.primaryCtaLabel,
        fb.howWePrice.primaryCtaLabel,
      ),
      primaryCtaHref: pick(
        cms?.howWePrice?.primaryCtaHref,
        fb.howWePrice.primaryCtaHref,
      ),
      secondaryCtaLabel: pick(
        cms?.howWePrice?.secondaryCtaLabel,
        fb.howWePrice.secondaryCtaLabel,
      ),
      secondaryCtaHref: pick(
        cms?.howWePrice?.secondaryCtaHref,
        fb.howWePrice.secondaryCtaHref,
      ),
    },
  };
}

export const getPricingPage = cache(async (): Promise<PricingPageData> => {
  if (!sanityEnv.isConfigured) return PRICING_PAGE_FALLBACK;
  try {
    const cms = await sanityClient.fetch<PricingPageCms>(pricingPageQuery);
    return mergePricingPage(cms);
  } catch {
    return PRICING_PAGE_FALLBACK;
  }
});
