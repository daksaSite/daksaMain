import { cache } from "react";
import { defineQuery } from "next-sanity";

import { sanityClient } from "@/lib/sanity.client";
import { sanityEnv } from "@/lib/sanity.env";
import { sanityImageUrl } from "@/lib/sanity.image";
import { MEDIA } from "@/lib/media";

export type ContactPageData = {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
  };
  reachUs: {
    heading: string;
    intro: string;
    officeLabel: string;
    officeAddress: string;
    googleMapsUrl: string;
    phoneLabel: string;
    phoneDisplay: string;
    phoneHref: string;
    emailLabel: string;
    email: string;
    websiteLabel: string;
    websiteText: string;
    websiteHref: string;
  };
  inquiryPanel: {
    heading: string;
    intro: string;
  };
  mapSection: {
    heading: string;
    intro: string;
    mapsButtonLabel: string;
    mapEmbedSrc: string;
  };
};

type ContactPageCms = {
  seoTitle?: string | null;
  seoDescription?: string | null;
  hero?: {
    eyebrow?: string | null;
    title?: string | null;
    subtitle?: string | null;
    image?: { alt?: string | null; asset?: { _ref?: string } } | null;
  } | null;
  reachUs?: {
    heading?: string | null;
    intro?: string | null;
    officeLabel?: string | null;
    officeAddress?: string | null;
    googleMapsUrl?: string | null;
    phoneLabel?: string | null;
    phoneDisplay?: string | null;
    phoneHref?: string | null;
    emailLabel?: string | null;
    email?: string | null;
    websiteLabel?: string | null;
    websiteText?: string | null;
    websiteHref?: string | null;
  } | null;
  inquiryPanel?: {
    heading?: string | null;
    intro?: string | null;
  } | null;
  mapSection?: {
    heading?: string | null;
    intro?: string | null;
    mapsButtonLabel?: string | null;
    mapEmbedSrc?: string | null;
  } | null;
} | null;

const contactPageQuery = defineQuery(`
  *[_id == "contactPage"][0]{
    seoTitle,
    seoDescription,
    hero{
      eyebrow,
      title,
      subtitle,
      image{ alt, asset }
    },
    reachUs{
      heading,
      intro,
      officeLabel,
      officeAddress,
      googleMapsUrl,
      phoneLabel,
      phoneDisplay,
      phoneHref,
      emailLabel,
      email,
      websiteLabel,
      websiteText,
      websiteHref
    },
    inquiryPanel{
      heading,
      intro
    },
    mapSection{
      heading,
      intro,
      mapsButtonLabel,
      mapEmbedSrc
    }
  }
`);

export const CONTACT_PAGE_FALLBACK: ContactPageData = {
  seoTitle: "Contact",
  seoDescription:
    "Reach Daksa Digital in Noida phone, email, inquiry form, and directions to Sector 63, G Block.",
  hero: {
    eyebrow: "Contact",
    title: "Tell us how we can help you, we'll get back with clear next steps.",
    subtitle:
      "Form submissions go straight to our inbox. Prefer voice? Call or email same team, no hand-offs.",
    imageSrc: MEDIA.images.hero8,
    imageAlt: "Partners collaborating contact Daksa Digital",
  },
  reachUs: {
    heading: "Ways to reach us",
    intro: "Based in Noida we work with teams across India and remotely.",
    officeLabel: "Office",
    officeAddress: "184, G Block, Sector 63, Noida, Uttar Pradesh 201309",
    googleMapsUrl:
      "https://www.google.com/maps/place/184,+G+Block,+Sector+63,+Noida,+Chotpur,+Uttar+Pradesh+201309/@28.6161164,77.3895552,17.76z/data=!4m6!3m5!1s0x390cef92ae0d9713:0x8857e943aaf1db2c!8m2!3d28.6164226!4d77.3905024!16s%2Fg%2F11jzqwdht9?entry=ttu",
    phoneLabel: "Phone",
    phoneDisplay: "+91 9278132874",
    phoneHref: "tel:+919278132874",
    emailLabel: "Email",
    email: "daksadigitalprivatelimited@gmail.com",
    websiteLabel: "Website",
    websiteText: "daksadigital.in",
    websiteHref: "https://daksadigital.in",
  },
  inquiryPanel: {
    heading: "Send an inquiry",
    intro:
      "Share your goals and timeline — the more context you give, the faster we can come back with something useful.",
  },
  mapSection: {
    heading: "Find us",
    intro: "Sector 63, G Block — same pin as Google Maps for directions and navigation.",
    mapsButtonLabel: "Google Maps",
    mapEmbedSrc:
      "https://maps.google.com/maps?q=28.6164226,77.3905024&z=17&hl=en&output=embed",
  },
};

function pick(s: string | null | undefined, fallback: string): string {
  const t = s?.trim();
  return t && t.length > 0 ? t : fallback;
}

function mergeContactPage(cms: ContactPageCms): ContactPageData {
  const fb = CONTACT_PAGE_FALLBACK;
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
    reachUs: {
      heading: pick(cms?.reachUs?.heading, fb.reachUs.heading),
      intro: pick(cms?.reachUs?.intro, fb.reachUs.intro),
      officeLabel: pick(cms?.reachUs?.officeLabel, fb.reachUs.officeLabel),
      officeAddress: pick(cms?.reachUs?.officeAddress, fb.reachUs.officeAddress),
      googleMapsUrl: pick(cms?.reachUs?.googleMapsUrl, fb.reachUs.googleMapsUrl),
      phoneLabel: pick(cms?.reachUs?.phoneLabel, fb.reachUs.phoneLabel),
      phoneDisplay: pick(cms?.reachUs?.phoneDisplay, fb.reachUs.phoneDisplay),
      phoneHref: pick(cms?.reachUs?.phoneHref, fb.reachUs.phoneHref),
      emailLabel: pick(cms?.reachUs?.emailLabel, fb.reachUs.emailLabel),
      email: pick(cms?.reachUs?.email, fb.reachUs.email),
      websiteLabel: pick(cms?.reachUs?.websiteLabel, fb.reachUs.websiteLabel),
      websiteText: pick(cms?.reachUs?.websiteText, fb.reachUs.websiteText),
      websiteHref: pick(cms?.reachUs?.websiteHref, fb.reachUs.websiteHref),
    },
    inquiryPanel: {
      heading: pick(cms?.inquiryPanel?.heading, fb.inquiryPanel.heading),
      intro: pick(cms?.inquiryPanel?.intro, fb.inquiryPanel.intro),
    },
    mapSection: {
      heading: pick(cms?.mapSection?.heading, fb.mapSection.heading),
      intro: pick(cms?.mapSection?.intro, fb.mapSection.intro),
      mapsButtonLabel: pick(
        cms?.mapSection?.mapsButtonLabel,
        fb.mapSection.mapsButtonLabel,
      ),
      mapEmbedSrc: pick(cms?.mapSection?.mapEmbedSrc, fb.mapSection.mapEmbedSrc),
    },
  };
}

export const getContactPage = cache(async (): Promise<ContactPageData> => {
  if (!sanityEnv.isConfigured) return CONTACT_PAGE_FALLBACK;
  try {
    const cms = await sanityClient.fetch<ContactPageCms>(contactPageQuery);
    return mergeContactPage(cms);
  } catch {
    return CONTACT_PAGE_FALLBACK;
  }
});
