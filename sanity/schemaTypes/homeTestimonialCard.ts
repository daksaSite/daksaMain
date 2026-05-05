import { defineField, defineType } from "sanity";

/**
 * One quote card in the home testimonials carousel (quote, name, role, star rating).
 */
export const homeTestimonialCardType = defineType({
  name: "homeTestimonialCard",
  title: "Testimonial card",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      description:
        "Client quote in quotation marks on the site. Keep it authentic and specific; one or two sentences is ideal.",
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Person’s name as it should appear on the card.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "designation",
      title: "Role / title",
      type: "string",
      description:
        "Job title or company line under the name. Example: Marketing Director, Founder & CEO.",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "rating",
      title: "Star rating",
      type: "number",
      description: "1–5 stars shown under the quote. Whole numbers only.",
      initialValue: 5,
      validation: (Rule) => Rule.required().integer().min(1).max(5),
    }),
  ],
  preview: {
    select: { name: "name", quote: "quote" },
    prepare({ name, quote }) {
      const q = typeof quote === "string" ? quote.trim() : "";
      return {
        title: name || "Testimonial",
        subtitle: q.length > 72 ? `${q.slice(0, 72)}…` : q || undefined,
      };
    },
  },
});
