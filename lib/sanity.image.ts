import { createImageUrlBuilder } from "@sanity/image-url";

import { sanityEnv } from "@/lib/sanity.env";

const builder =
  sanityEnv.projectId &&
  createImageUrlBuilder({
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
  });

/** Sanity image field from GROQ (asset + optional crop/hotspot). */
export type SanityImageField = {
  asset?: { _ref?: string };
  alt?: string | null;
} | null;

export function sanityImageUrl(
  source: SanityImageField | undefined,
  width = 1600,
): string | null {
  if (!builder || !source?.asset?._ref) return null;
  try {
    return builder.image(source).width(width).quality(90).auto("format").url();
  } catch {
    return null;
  }
}
