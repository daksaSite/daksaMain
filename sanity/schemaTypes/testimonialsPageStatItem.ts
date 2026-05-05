import { defineField, defineType } from "sanity";

const STAT_ICONS = [
  { title: "Quote bubble — stories", value: "messageSquareQuote" },
  { title: "Star — rating", value: "star" },
  { title: "Map pin — location", value: "mapPin" },
  { title: "Globe — geography", value: "globe2" },
] as const;

/** One stat tile in the /testimonials stats strip. */
export const testimonialsPageStatItemType = defineType({
  name: "testimonialsPageStatItem",
  title: "Testimonials stat item",
  type: "object",
  description:
    "One stat cell: icon, value, and label. Keep values short so they fit in one line.",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description:
        "Main stat text. Example: 4.9, 28+, Noida, or Pan-India.",
      validation: (Rule) => Rule.required().max(24),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description:
        "What the value represents. Example: Average rating or Stories featured.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "iconKey",
      title: "Icon",
      type: "string",
      options: { list: [...STAT_ICONS], layout: "dropdown" },
      initialValue: "messageSquareQuote",
      description: "Icon shown above the stat value.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { value: "value", label: "label" },
    prepare({ value, label }) {
      return { title: value || "Stat value", subtitle: label || "Stat label" };
    },
  },
});
