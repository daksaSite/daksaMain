import { defineQuery } from "next-sanity";

import { sanityClient } from "@/lib/sanity.client";
import { sanityEnv } from "@/lib/sanity.env";
import { CONTACT } from "@/lib/site-content";

export type FooterSocialLink = {
  label: string;
  href: string;
};

export type SiteFooterData = {
  taglineBold: string;
  taglineBody: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  hours: string;
  socialLinks: FooterSocialLink[];
  primaryButtonLabel: string;
  primaryButtonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
};

type FooterSocialRow = {
  label?: string | null;
  href?: string | null;
};

type SiteFooterRaw = {
  taglineBold?: string | null;
  taglineBody?: string | null;
  address?: string | null;
  phone?: string | null;
  phoneHref?: string | null;
  email?: string | null;
  hours?: string | null;
  socialLinks?: FooterSocialRow[] | null;
  primaryButtonLabel?: string | null;
  primaryButtonHref?: string | null;
  secondaryButtonLabel?: string | null;
  secondaryButtonHref?: string | null;
} | null;

const siteFooterQuery = defineQuery(`
  *[_id == "siteFooter"][0]{
    taglineBold,
    taglineBody,
    address,
    phone,
    phoneHref,
    email,
    hours,
    socialLinks[]{ label, href },
    primaryButtonLabel,
    primaryButtonHref,
    secondaryButtonLabel,
    secondaryButtonHref
  }
`);

const DEFAULT_SOCIALS: FooterSocialLink[] = [
  { label: "Instagram", href: CONTACT.social.instagram },
  { label: "LinkedIn", href: CONTACT.social.linkedin },
  { label: "Facebook", href: CONTACT.social.facebook },
];

export const SITE_FOOTER_FALLBACK: SiteFooterData = {
  taglineBold: "Built for Scale. Driven by Impact.",
  taglineBody:
    "Digital marketing and growth solutions for brands that want clarity, consistency, and measurable results.",
  address: CONTACT.address,
  phone: CONTACT.phone,
  phoneHref: CONTACT.phoneHref,
  email: CONTACT.email,
  hours: "Mon–Sat, 10am–7pm IST",
  socialLinks: DEFAULT_SOCIALS,
  primaryButtonLabel: "Contact the team",
  primaryButtonHref: "/contact",
  secondaryButtonLabel: "Learn more",
  secondaryButtonHref: "/about",
};

function pick(s: string | null | undefined, fb: string): string {
  const t = s?.trim();
  return t && t.length > 0 ? t : fb;
}

function normalizeSocialLinks(rows: FooterSocialRow[] | null | undefined) {
  const out: FooterSocialLink[] = [];
  for (const row of rows ?? []) {
    const label = row?.label?.trim();
    const href = row?.href?.trim();
    if (!label || !href) continue;
    out.push({ label, href });
    if (out.length >= 8) break;
  }
  return out;
}

function mergeSiteFooter(raw: SiteFooterRaw): SiteFooterData {
  const fb = SITE_FOOTER_FALLBACK;
  const socials = normalizeSocialLinks(raw?.socialLinks);
  return {
    taglineBold: pick(raw?.taglineBold, fb.taglineBold),
    taglineBody: pick(raw?.taglineBody, fb.taglineBody),
    address: pick(raw?.address, fb.address),
    phone: pick(raw?.phone, fb.phone),
    phoneHref: pick(raw?.phoneHref, fb.phoneHref),
    email: pick(raw?.email, fb.email),
    hours: pick(raw?.hours, fb.hours),
    socialLinks: socials.length > 0 ? socials : fb.socialLinks,
    primaryButtonLabel: pick(raw?.primaryButtonLabel, fb.primaryButtonLabel),
    primaryButtonHref: pick(raw?.primaryButtonHref, fb.primaryButtonHref),
    secondaryButtonLabel: pick(
      raw?.secondaryButtonLabel,
      fb.secondaryButtonLabel,
    ),
    secondaryButtonHref: pick(
      raw?.secondaryButtonHref,
      fb.secondaryButtonHref,
    ),
  };
}

export async function getSiteFooter(): Promise<SiteFooterData> {
  if (!sanityEnv.isConfigured) {
    return SITE_FOOTER_FALLBACK;
  }
  try {
    const raw = await sanityClient.fetch<SiteFooterRaw>(siteFooterQuery);
    if (!raw) {
      return SITE_FOOTER_FALLBACK;
    }
    return mergeSiteFooter(raw);
  } catch {
    return SITE_FOOTER_FALLBACK;
  }
}
