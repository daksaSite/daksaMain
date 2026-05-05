import { defineField, defineType } from "sanity";

/** One stat cell in the About page stats strip (value + label). */
export const aboutPageStatType = defineType({
  name: "aboutPageStat",
  title: "About page stat",
  type: "object",
  description:
    "One cell in the stats strip: large number or word on top, short label underneath. Example value: 9+ with label: Years in digital marketing.",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description:
        "The big text (number, plus sign, or short word). Keep it short so it fits in the layout. Examples: 9+, 50+, 2018, NCR.",
      validation: (Rule) => Rule.required().max(24),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description:
        "What the value means, in a few words. Example: Years of combined experience, Brands partnered with, Based in Noida.",
      validation: (Rule) => Rule.required().max(80),
    }),
  ],
  preview: {
    select: { value: "value", label: "label" },
    prepare({ value, label }) {
      return { title: value || "Stat", subtitle: label };
    },
  },
});
