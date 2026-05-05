import { defineField, defineType } from "sanity";

const ORBIT_ICON_OPTIONS = [
  { title: "Megaphone — marketing / campaigns", value: "megaphone" },
  { title: "Search — SEO", value: "search" },
  { title: "Palette — branding & creative", value: "palette" },
  { title: "Users — influencers / community", value: "users" },
  { title: "Pen — content writing", value: "penLine" },
  { title: "Share — social", value: "share2" },
  { title: "Globe — web", value: "globe" },
  { title: "Line chart — leads / growth", value: "lineChart" },
  { title: "Bar chart — promotion / analytics", value: "barChart3" },
] as const;

/**
 * One orbit “chip” on the home About preview (globe graphic).
 * Editors: set **label** (visible name), **link** (click target), **icon** (visual cue only).
 */
export const aboutPreviewOrbitServiceType = defineType({
  name: "aboutPreviewOrbitService",
  title: "Orbit service chip",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Chip label (visible text)",
      type: "string",
      description:
        "Name shown on the card next to the icon. Example: Digital Marketing, SEO Services, Branding & Creative Design.",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "href",
      title: "Chip link",
      type: "string",
      description:
        "Where visitors go when they tap the chip. Prefer internal paths. Examples: /services, /services#seo. Default for new chips: /services.",
      initialValue: "/services",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "iconKey",
      title: "Icon (visual only)",
      type: "string",
      description:
        "Matches the service type on the chip; does not change the link. Example: megaphone for marketing, search for SEO, palette for creative.",
      options: {
        list: [...ORBIT_ICON_OPTIONS],
        layout: "dropdown",
      },
      initialValue: "megaphone",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", iconKey: "iconKey" },
    prepare({ title, iconKey }) {
      return {
        title: title || "Service",
        subtitle: iconKey ? `Icon: ${iconKey}` : undefined,
      };
    },
  },
});
