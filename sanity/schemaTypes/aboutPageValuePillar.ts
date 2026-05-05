import { defineField, defineType } from "sanity";

const ICONS = [
  { title: "Lightbulb — strategy / ideas", value: "lightbulb" },
  { title: "Bar chart — measurement", value: "barChart3" },
  { title: "Shield — quality / trust", value: "shieldCheck" },
  { title: "Message — communication", value: "messageCircle" },
  { title: "Users — relationships", value: "users" },
  { title: "Rocket — execution", value: "rocket" },
] as const;

/** Value card on the About page (icon, title, body). */
export const aboutPageValuePillarType = defineType({
  name: "aboutPageValuePillar",
  title: "About page value pillar",
  type: "object",
  description:
    "One principle in the Values grid. Pick an icon that matches the idea; the site shows a fixed set of icons (you cannot upload a custom icon).",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Card heading. Example: Clarity over noise, or We own the outcome.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 3,
      description:
        "One or two sentences explaining the principle. Shorter reads better in the card.",
      validation: (Rule) => Rule.required().max(400),
    }),
    defineField({
      name: "iconKey",
      title: "Icon",
      type: "string",
      options: { list: [...ICONS], layout: "dropdown" },
      initialValue: "lightbulb",
      description:
        "Decorative icon next to the title. Lightbulb for ideas, bar chart for measurement, shield for trust, and so on — match the dropdown label to your message.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", iconKey: "iconKey" },
    prepare({ title, iconKey }) {
      return { title: title || "Pillar", subtitle: iconKey };
    },
  },
});
