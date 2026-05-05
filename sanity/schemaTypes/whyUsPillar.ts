import { defineField, defineType } from "sanity";

const WHY_US_ICON_OPTIONS = [
  { title: "Compass — strategy, direction, planning", value: "compass" },
  { title: "Sparkles — creative, craft, ideas", value: "sparkles" },
  { title: "Line chart — performance, measurement, growth", value: "lineChart" },
] as const;

/**
 * One numbered pillar card in the home “Why us” strip (icon, title, body).
 * Order in the array is order on the page (01, 02, 03).
 */
export const whyUsPillarType = defineType({
  name: "whyUsPillar",
  title: "Why us pillar",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Pillar title (card heading)",
      type: "string",
      description:
        "Bold line under the icon. Example: Strategy first; Creative that converts; Execution you can measure.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "body",
      title: "Pillar body (supporting copy)",
      type: "text",
      rows: 4,
      description:
        "Paragraph under the title for this pillar. Keep it one short block for even card height.",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "iconKey",
      title: "Icon (visual only)",
      type: "string",
      description:
        "Lucide-style icon in the card corner. Pick the metaphor that fits the pillar (strategy vs creative vs measurement).",
      options: {
        list: [...WHY_US_ICON_OPTIONS],
        layout: "dropdown",
      },
      initialValue: "compass",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", iconKey: "iconKey" },
    prepare({ title, iconKey }) {
      return {
        title: title || "Pillar",
        subtitle: iconKey ? `Icon: ${iconKey}` : undefined,
      };
    },
  },
});
