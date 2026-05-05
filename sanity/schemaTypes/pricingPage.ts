import { defineField, defineType } from "sanity";

/**
 * Pricing page singleton (`_id`: `pricingPage` via desk structure).
 * Full editorial control for /pricing.
 */
export const pricingPageType = defineType({
  name: "pricingPage",
  title: "Pricing page",
  type: "document",
  description:
    "Everything visible on /pricing: hero, compare plans section, plans list with included/not included, and the how-we-price information band.",
  fields: [
    defineField({
      name: "editorDisplayTitle",
      title: "Document name (for editors)",
      type: "string",
      initialValue: "Pricing page — Daksa Digital",
      description:
        "Used only inside Sanity lists and tabs. Not shown on the website.",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title (browser tab)",
      type: "string",
      description: "Optional. Example: Pricing | Daksa Digital.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO meta description",
      type: "text",
      rows: 3,
      description:
        "Optional. Short summary for search and social previews.",
      validation: (Rule) => Rule.max(320),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      description:
        "Top dark section: eyebrow, H1 headline, subtitle, and background image.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: "Example: Pricing.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "title",
          title: "Headline (H1)",
          type: "string",
          description:
            "Main page heading. Example: Three ways to work together, clear scope, no surprises.",
          validation: (Rule) => Rule.max(220),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 4,
          description:
            "Supporting paragraph below headline. Keep to one short paragraph.",
          validation: (Rule) => Rule.max(500),
        }),
        defineField({
          name: "image",
          title: "Background image",
          type: "heroSlideImage",
          description:
            "Optional hero background image. If empty, site uses default pricing image.",
        }),
      ],
    }),
    defineField({
      name: "plansSection",
      title: "Compare plans intro",
      type: "object",
      description:
        "Heading and paragraph shown above the pricing cards grid.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "headline",
          title: "Section headline",
          type: "string",
          description: "Example: Compare plans.",
          validation: (Rule) => Rule.max(140),
        }),
        defineField({
          name: "intro",
          title: "Section intro",
          type: "text",
          rows: 3,
          description:
            "Short paragraph guiding users to compare tiers. Example: Each tier stacks more strategy and senior attention.",
          validation: (Rule) => Rule.max(420),
        }),
      ],
    }),
    defineField({
      name: "plans",
      title: "Pricing plan cards",
      type: "array",
      description:
        "Main pricing cards. Order is left to right in the grid. Add up to 6 cards.",
      of: [{ type: "pricingPagePlan" }],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: "howWePrice",
      title: "How we price band",
      type: "object",
      description:
        "Information band under cards: eyebrow, paragraph, and two optional buttons.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: "Example: How we price.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "body",
          title: "Body copy",
          type: "text",
          rows: 5,
          description:
            "Main explanation paragraph. Keep practical and clear about discovery, project, retainer, and hybrid options.",
          validation: (Rule) => Rule.max(900),
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Primary button label",
          type: "string",
          description: "Example: See our process.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "primaryCtaHref",
          title: "Primary button link",
          type: "string",
          description: "Example: /process",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "secondaryCtaLabel",
          title: "Secondary button label",
          type: "string",
          description: "Example: Browse services.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "secondaryCtaHref",
          title: "Secondary button link",
          type: "string",
          description: "Example: /services",
          validation: (Rule) => Rule.max(200),
        }),
      ],
    }),
  ],
  preview: {
    select: { docTitle: "editorDisplayTitle", h: "hero.title" },
    prepare({ docTitle, h }) {
      return {
        title:
          (typeof docTitle === "string" && docTitle.trim()) ||
          "Pricing page — Daksa Digital",
        subtitle: h || "/pricing content",
      };
    },
  },
});
