import { defineField, defineType } from "sanity";

/**
 * One stat tile in the home **Partner model** band (large value + caption).
 * Turn **accent** on for a location row (map pin + highlighted tile).
 */
export const partnerStatType = defineType({
  name: "partnerStat",
  title: "Partner model stat tile",
  type: "object",
  fields: [
    defineField({
      name: "value",
      title: "Value (large text)",
      type: "string",
      description:
        "Bold figure or word in the tile. Examples: 9+, 12, Noida, Pan‑India. Required for each tile.",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "label",
      title: "Caption (line under value)",
      type: "string",
      description:
        "Smaller line explaining the value. Examples: Service lines, full-funnel; On-site & remote across India.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "accent",
      title: "Location / accent style",
      type: "boolean",
      description:
        "Off = neutral tile. On = highlighted tile with map pin (use for a place name or “hero” stat). Example: on for Noida, off for 9+.",
      initialValue: false,
    }),
  ],
  preview: {
    select: { value: "value", label: "label", accent: "accent" },
    prepare({ value, label, accent }) {
      return {
        title: value || "Stat",
        subtitle: [label, accent ? "· accent" : null].filter(Boolean).join(" "),
      };
    },
  },
});
