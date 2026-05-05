import { defineField, defineType } from "sanity";

/** One social network link in the footer brand column (label + URL). */
export const footerSocialLinkType = defineType({
  name: "footerSocialLink",
  title: "Footer social link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Link text. Example: Instagram, LinkedIn, Facebook.",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "string",
      description:
        "Full URL (https://…). Opens in a new tab from the footer. Example: https://www.instagram.com/yourbrand",
      validation: (Rule) => Rule.required().max(300),
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "href" },
    prepare({ title, subtitle }) {
      return { title: title || "Social", subtitle };
    },
  },
});
