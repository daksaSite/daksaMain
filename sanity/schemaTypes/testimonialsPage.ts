import { defineField, defineType } from "sanity";

/**
 * Testimonials page singleton (`_id`: `testimonialsPage` via desk structure).
 * Controls copy and cards for /testimonials.
 */
export const testimonialsPageType = defineType({
  name: "testimonialsPage",
  title: "Testimonials page",
  type: "document",
  description:
    "Everything visible on /testimonials: hero, stats strip, testimonial cards, trust pillars, and CTA.",
  fields: [
    defineField({
      name: "editorDisplayTitle",
      title: "Document name (for editors)",
      type: "string",
      initialValue: "Testimonials page — Daksa Digital",
      description:
        "Used in Studio lists only. Not visible on the website. Example: Testimonials page — Daksa Digital.",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title (browser tab)",
      type: "string",
      description:
        "Optional browser tab title. Example: Testimonials | Daksa Digital.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO meta description",
      type: "text",
      rows: 3,
      description:
        "Optional search and social preview text. Example: Client feedback, ratings, and how teams experience working with Daksa Digital.",
      validation: (Rule) => Rule.max(320),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      description:
        "Top section with background image, small label, H1 headline, and supporting paragraph.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: "Small label above the hero headline. Example: Social proof.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "title",
          title: "Headline (H1)",
          type: "string",
          description:
            "Main hero heading. Example: Real words from leaders who have worked with us.",
          validation: (Rule) => Rule.max(220),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 3,
          description:
            "Supporting line under the H1. Keep it concise and readable.",
          validation: (Rule) => Rule.max(420),
        }),
        defineField({
          name: "chipThreeText",
          title: "Hero chip 3 text",
          type: "string",
          description:
            "Text for the third hero chip (globe icon). Example: Partners across India.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "image",
          title: "Background image",
          type: "heroSlideImage",
          description:
            "Optional hero background image. If empty, the site falls back to a default image.",
        }),
      ],
    }),
    defineField({
      name: "stats",
      title: "Stats strip",
      type: "array",
      description:
        "Row of tiles below hero. Add up to 4 stat items; order is left to right.",
      of: [{ type: "testimonialsPageStatItem" }],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: "storiesSection",
      title: "Stories section",
      type: "object",
      description:
        "Section above the testimonial cards grid: eyebrow, headline, intro, and cards.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Section eyebrow",
          type: "string",
          description: "Example: Voices from partners.",
          validation: (Rule) => Rule.max(100),
        }),
        defineField({
          name: "headline",
          title: "Section headline",
          type: "string",
          description: "Example: What stood out for them.",
          validation: (Rule) => Rule.max(180),
        }),
        defineField({
          name: "intro",
          title: "Section intro",
          type: "text",
          rows: 3,
          description:
            "Paragraph above the cards. Example: Each card includes a short quote, role, and rating.",
          validation: (Rule) => Rule.max(420),
        }),
        defineField({
          name: "items",
          title: "Testimonial cards",
          type: "array",
          description:
            "Cards shown in the two-column grid. If empty, site defaults are used.",
          of: [{ type: "homeTestimonialCard" }],
          validation: (Rule) => Rule.max(24),
        }),
      ],
    }),
    defineField({
      name: "trustSection",
      title: "Trust section",
      type: "object",
      description:
        "How we show up section with eyebrow, headline, intro, and 3 trust cards.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Section eyebrow",
          type: "string",
          description: "Example: How we show up.",
          validation: (Rule) => Rule.max(100),
        }),
        defineField({
          name: "headline",
          title: "Section headline",
          type: "string",
          description: "Example: The themes behind the praise.",
          validation: (Rule) => Rule.max(180),
        }),
        defineField({
          name: "intro",
          title: "Section intro",
          type: "text",
          rows: 3,
          description:
            "Paragraph introducing the trust pillars. Keep it to 1–2 sentences.",
          validation: (Rule) => Rule.max(420),
        }),
        defineField({
          name: "pillars",
          title: "Trust pillar cards",
          type: "array",
          description:
            "Add up to 3 trust cards (icon, title, body). If empty, default pillars are shown.",
          of: [{ type: "testimonialsPageTrustPillar" }],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),
    defineField({
      name: "ctaSection",
      title: "CTA section",
      type: "object",
      description:
        "Bottom call-to-action block with headline, body, and two buttons.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "eyebrow",
          title: "CTA eyebrow",
          type: "string",
          description: "Small label above CTA headline. Example: Next step.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "headline",
          title: "CTA headline",
          type: "string",
          description: "Example: Tell us what you are building next.",
          validation: (Rule) => Rule.max(180),
        }),
        defineField({
          name: "body",
          title: "CTA body",
          type: "text",
          rows: 3,
          description:
            "Short supporting copy under the CTA headline. Keep it practical and direct.",
          validation: (Rule) => Rule.max(360),
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Primary button label",
          type: "string",
          description: "Example: Start a conversation.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "primaryCtaHref",
          title: "Primary button link",
          type: "string",
          description: "Example: /contact",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "secondaryCtaLabel",
          title: "Secondary button label",
          type: "string",
          description: "Example: Explore services.",
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
          "Testimonials page — Daksa Digital",
        subtitle: h || "/testimonials content",
      };
    },
  },
});
