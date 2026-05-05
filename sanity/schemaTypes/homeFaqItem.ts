import { defineField, defineType } from "sanity";

/**
 * One question / answer pair in the home FAQ accordion list.
 * Order in the array matches the numbered badges (01, 02, …) on the site.
 */
export const homeFaqItemType = defineType({
  name: "homeFaqItem",
  title: "FAQ item",
  type: "object",
  fields: [
    defineField({
      name: "question",
      title: "Question (summary line)",
      type: "string",
      description:
        "Shown in the accordion header with a number badge. Keep it a clear, scannable question.",
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "answer",
      title: "Answer (revealed body)",
      type: "text",
      rows: 5,
      description:
        "Full answer when the row is expanded. Plain text; one or two short paragraphs work best.",
      validation: (Rule) => Rule.required().max(1200),
    }),
  ],
  preview: {
    select: { question: "question" },
    prepare({ question }) {
      return { title: question || "FAQ item" };
    },
  },
});
