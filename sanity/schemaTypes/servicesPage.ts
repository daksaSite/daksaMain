import { defineField, defineType } from "sanity";

/**
 * Services page singleton (`_id`: `servicesPage` via desk structure).
 * Controls all copy for /services hero, service cards grid, and CTA band.
 */
export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services page",
  type: "document",
  description:
    "Everything visitors see on the /services URL: top hero, section intro, service cards, and bottom CTA band.",
  fields: [
    defineField({
      name: "editorDisplayTitle",
      title: "Document name (for editors)",
      type: "string",
      initialValue: "Services page — Daksa Digital",
      description:
        "Only used in Sanity lists and tabs. Not shown on the website. Example: Services page — Daksa Digital.",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title (browser tab)",
      type: "string",
      description:
        "Browser tab title and search snippet title. Optional: if empty, site can use a default title. Example: Services | Daksa Digital.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO meta description",
      type: "text",
      rows: 3,
      description:
        "Short page summary for search and social previews. Example: Digital marketing, SEO, web, social, and branding services tailored to your goals.",
      validation: (Rule) => Rule.max(320),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      description:
        "Top dark section with background image, eyebrow, main headline (H1), and subtitle.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description:
            "Small label above the H1. Example: Services or What we do.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "title",
          title: "Headline (H1)",
          type: "string",
          description:
            "Main headline for the page. Example: Everything you need to show up, persuade, and convert.",
          validation: (Rule) => Rule.max(220),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 3,
          description:
            "Supporting line under the H1. Example: Nine service lines, one accountable partner.",
          validation: (Rule) => Rule.max(420),
        }),
        defineField({
          name: "image",
          title: "Background image",
          type: "heroSlideImage",
          description:
            "Optional wide hero image. If empty, the frontend may use a default services hero image.",
        }),
      ],
    }),
    defineField({
      name: "servicesIntro",
      title: "Services section intro",
      type: "object",
      description:
        "Heading and paragraph shown above the services grid cards.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "headline",
          title: "Section headline",
          type: "string",
          description: "Example: What we do.",
          validation: (Rule) => Rule.max(140),
        }),
        defineField({
          name: "body",
          title: "Section supporting copy",
          type: "text",
          rows: 3,
          description:
            "Short paragraph introducing your services approach. Example: Pick a single lane or bundle channels for compound growth.",
          validation: (Rule) => Rule.max(420),
        }),
      ],
    }),
    defineField({
      name: "services",
      title: "Service cards",
      type: "array",
      description:
        "Cards in the main grid. Order controls display order (01, 02, 03...). Add up to 12 items.",
      of: [{ type: "servicesPageServiceItem" }],
      validation: (Rule) => Rule.max(12),
    }),
    defineField({
      name: "ctaSection",
      title: "Bottom CTA band",
      type: "object",
      description:
        "Final dark section before footer with headline, body, and up to two CTA buttons.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "headline",
          title: "CTA headline",
          type: "string",
          description:
            "Main CTA heading. Example: Not sure which services fit your goals?",
          validation: (Rule) => Rule.max(180),
        }),
        defineField({
          name: "body",
          title: "CTA body copy",
          type: "text",
          rows: 3,
          description:
            "Support line below headline. Example: Tell us where you are and where you want to be.",
          validation: (Rule) => Rule.max(360),
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Primary button label",
          type: "string",
          description: "Example: Discuss your requirements.",
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
          description: "Example: Read client feedback.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "secondaryCtaHref",
          title: "Secondary button link",
          type: "string",
          description: "Example: /testimonials",
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
          "Services page — Daksa Digital",
        subtitle: h || "/services content",
      };
    },
  },
});
