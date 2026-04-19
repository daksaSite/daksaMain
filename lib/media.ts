/**
 * Central paths for static assets under /public.
 * Place files in these folders (e.g. hero image → public/images/hero/…).
 */

/**
 * Bump this (or set `NEXT_PUBLIC_HERO_IMAGE_VERSION` in `.env.local`) whenever you
 * replace hero PNGs with the same filenames so browsers and the image optimizer
 * fetch the new files instead of cached ones.
 */
export const HERO_IMAGE_VERSION =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_HERO_IMAGE_VERSION?.length
    ? process.env.NEXT_PUBLIC_HERO_IMAGE_VERSION
    : "1";

/** Appends `?v=` for cache busting (use for hero art that is often overwritten). */
export function withHeroImageCacheBust(src: string): string {
  const sep = src.includes("?") ? "&" : "?";
  return `${src}${sep}v=${encodeURIComponent(HERO_IMAGE_VERSION)}`;
}

export const MEDIA = {
  images: {
    root: "/images",
    hero: "/images/hero",
    about: "/images/about",
    services: "/images/services",
    process: "/images/process",
    testimonials: "/images/testimonials",
    pricing: "/images/pricing",
    contact: "/images/contact",
    logo: "/images/logo",
    /** Primary navbar / header logo */
    logoMain: "/images/logo/logo-main.png",
    branding: "/images/branding",
    shared: "/images/shared",
    /** Homepage hero art (rename files as needed; keep paths in sync). */
    hero1: "/images/hero/hero1.png",
    hero2: "/images/hero/hero2.png",
    hero3: "/images/hero/hero3.png",
    hero4: "/images/hero/hero4.png",
    hero5: "/images/hero/hero5.png",
  },
  videos: {
    root: "/videos",
    hero: "/videos/hero",
    about: "/videos/about",
    services: "/videos/services",
    shared: "/videos/shared",
  },
} as const;

/** Ordered slides for hero carousels or galleries (URLs include cache-bust query). */
export const HERO_HOME_IMAGES = [
  withHeroImageCacheBust(MEDIA.images.hero5),
  withHeroImageCacheBust(MEDIA.images.hero3),
  withHeroImageCacheBust(MEDIA.images.hero2),
  withHeroImageCacheBust(MEDIA.images.hero1),
] as const;
