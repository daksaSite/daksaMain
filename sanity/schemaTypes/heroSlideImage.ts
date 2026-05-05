import { defineField, defineType } from "sanity";

/**
 * Shared image block: home hero carousel slides and About page hero/story images.
 * Own type so list rows in Studio show a clear title instead of “Untitled”.
 */
export const heroSlideImageType = defineType({
  name: "heroSlideImage",
  title: "Hero / section image",
  type: "image",
  description:
    "Landscape image with optional hotspot (drag the focal point so faces stay centered when cropped). Used on the home hero carousel and on About for the hero background and story photo.",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      type: "string",
      title: "Alt text (accessibility)",
      description:
        "Describe what is in the image for screen readers and SEO. Example: Team reviewing campaign analytics on a screen. If you leave this empty, the site may use a generic fallback — filling this is strongly recommended.",
      validation: (Rule) => Rule.max(180),
    }),
  ],
  preview: {
    select: {
      alt: "alt",
      media: "asset",
    },
    prepare({ alt, media }) {
      return {
        title: alt?.trim() || "Hero / section image",
        subtitle: "Home hero or About sections",
        media,
      };
    },
  },
});
