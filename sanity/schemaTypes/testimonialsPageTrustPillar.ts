import { defineField, defineType } from "sanity";

const TRUST_ICONS = [
  { title: "Message circle — clarity", value: "messageCircle" },
  { title: "Refresh — iteration", value: "refreshCw" },
  { title: "Headphones — support", value: "headphones" },
  { title: "Award — quality", value: "award" },
] as const;

/** One card in the "How we show up" trust section on /testimonials. */
export const testimonialsPageTrustPillarType = defineType({
  name: "testimonialsPageTrustPillar",
  title: "Testimonials trust pillar",
  type: "object",
  description:
    "One trust card: icon, title, and short body. Usually 3 cards work best on desktop.",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Short heading for the trust card. Example: Clarity from day one.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 3,
      description:
        "One short paragraph for what this trust point means in practice.",
      validation: (Rule) => Rule.required().max(420),
    }),
    defineField({
      name: "iconKey",
      title: "Icon",
      type: "string",
      options: { list: [...TRUST_ICONS], layout: "dropdown" },
      initialValue: "messageCircle",
      description: "Pick the icon that best matches the trust point.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", iconKey: "iconKey" },
    prepare({ title, iconKey }) {
      return {
        title: title || "Trust pillar",
        subtitle: iconKey || "No icon selected",
      };
    },
  },
});
