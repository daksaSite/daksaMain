import { defineField, defineType } from "sanity";

const ICONS = [
  { title: "Sparkles — startups / energy", value: "sparkles" },
  { title: "Trending up — growth", value: "trendingUp" },
  { title: "Store — established brands", value: "store" },
] as const;

/** Audience segment card (About page “Who we work with”). */
export const aboutPageAudienceCardType = defineType({
  name: "aboutPageAudienceCard",
  title: "About page audience card",
  type: "object",
  description:
    "One column in Who we work with: a segment name, short pitch, and a simple icon (sparkles for early-stage, trending up for growth, store for established brands).",
  fields: [
    defineField({
      name: "label",
      title: "Heading",
      type: "string",
      description:
        "Audience name shown as the card title. Example: Startups, Growing brands, Enterprise teams.",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description:
        "Who they are and how you help them in one or two sentences. Example: Founders who need a clear growth plan without hiring a full in-house team.",
      validation: (Rule) => Rule.required().max(320),
    }),
    defineField({
      name: "iconKey",
      title: "Icon",
      type: "string",
      options: { list: [...ICONS], layout: "dropdown" },
      initialValue: "sparkles",
      description:
        "Small icon at the top of the card. Sparkles suits startups and energy; trending up for scale; store for retail or larger brands.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { label: "label", iconKey: "iconKey" },
    prepare({ label, iconKey }) {
      return { title: label || "Audience", subtitle: iconKey };
    },
  },
});
