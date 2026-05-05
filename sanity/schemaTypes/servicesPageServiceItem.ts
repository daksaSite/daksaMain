import { defineField, defineType } from "sanity";

const ICONS = [
  { title: "Megaphone — digital marketing", value: "megaphone" },
  { title: "Users — influencer marketing", value: "users" },
  { title: "Pen line — content writing", value: "penLine" },
  { title: "Share — social media", value: "share2" },
  { title: "Globe — website development", value: "globe" },
  { title: "Search — SEO", value: "search" },
  { title: "Palette — branding", value: "palette" },
  { title: "Line chart — lead generation", value: "lineChart" },
  { title: "Bar chart — business promotion", value: "barChart3" },
] as const;

/** One card in /services grid: icon, title, description, and bullet points. */
export const servicesPageServiceItemType = defineType({
  name: "servicesPageServiceItem",
  title: "Services page item",
  type: "object",
  description:
    "One service card shown in the Services grid. Add clear service naming, one concise description, and 2–4 bullet points.",
  fields: [
    defineField({
      name: "title",
      title: "Service title",
      type: "string",
      description:
        "Card heading. Example: Digital Marketing, SEO Services, or Website Development.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "description",
      title: "Service description",
      type: "text",
      rows: 3,
      description:
        "One short paragraph explaining this service. Example: Multi-channel campaigns aligned to business outcomes.",
      validation: (Rule) => Rule.required().max(420),
    }),
    defineField({
      name: "points",
      title: "Key points",
      type: "array",
      description:
        "Short bullets shown under the description. Example: Strategy + execution in one team. Add 2 to 4 items.",
      of: [{ type: "string", title: "Bullet point" }],
      validation: (Rule) => Rule.required().min(2).max(4),
    }),
    defineField({
      name: "iconKey",
      title: "Icon",
      type: "string",
      options: { list: [...ICONS], layout: "dropdown" },
      initialValue: "megaphone",
      description:
        "Choose the icon that best matches the service. Icons are preset for consistency.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", iconKey: "iconKey" },
    prepare({ title, iconKey }) {
      return {
        title: title || "Service item",
        subtitle: iconKey || "No icon selected",
      };
    },
  },
});
