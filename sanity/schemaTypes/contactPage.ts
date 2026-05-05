import { defineField, defineType } from "sanity";

/**
 * Contact page singleton (`_id`: `contactPage` via desk structure).
 * Controls hero copy, reach-us details, and map block on /contact.
 */
export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  description:
    "Everything visible on /contact: hero copy, ways to reach us, inquiry panel intro, and map section.",
  fields: [
    defineField({
      name: "editorDisplayTitle",
      title: "Document name (for editors)",
      type: "string",
      initialValue: "Contact page — Daksa Digital",
      description:
        "Used only inside Sanity lists and tabs. Not shown on website.",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title (browser tab)",
      type: "string",
      description: "Optional. Example: Contact | Daksa Digital.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO meta description",
      type: "text",
      rows: 3,
      description:
        "Optional summary for search and social previews.",
      validation: (Rule) => Rule.max(320),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      description:
        "Top section with eyebrow, headline, subtitle, and optional background image.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: "Example: Contact.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "title",
          title: "Headline (H1)",
          type: "string",
          description:
            "Main heading. Example: Tell us how we can help you, we will get back with clear next steps.",
          validation: (Rule) => Rule.max(240),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 3,
          description:
            "Support line below H1. Example: Form submissions go straight to our inbox.",
          validation: (Rule) => Rule.max(420),
        }),
        defineField({
          name: "image",
          title: "Background image",
          type: "heroSlideImage",
          description:
            "Optional hero background image. If empty, the site uses default contact hero image.",
        }),
      ],
    }),
    defineField({
      name: "reachUs",
      title: "Ways to reach us",
      type: "object",
      description:
        "Left column contact details block: heading, intro, office, phone, email, and website.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "heading",
          title: "Section heading",
          type: "string",
          description: "Example: Ways to reach us.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "intro",
          title: "Section intro",
          type: "text",
          rows: 2,
          description:
            "Example: Based in Noida we work with teams across India and remotely.",
          validation: (Rule) => Rule.max(240),
        }),
        defineField({
          name: "officeLabel",
          title: "Office label",
          type: "string",
          initialValue: "Office",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "officeAddress",
          title: "Office address",
          type: "text",
          rows: 2,
          description:
            "Example: 184, G Block, Sector 63, Noida, Uttar Pradesh 201309.",
          validation: (Rule) => Rule.max(240),
        }),
        defineField({
          name: "googleMapsUrl",
          title: "Google Maps URL",
          type: "url",
          description:
            "Link used for Open in Google Maps button and map action.",
          validation: (Rule) => Rule.uri({ allowRelative: false }),
        }),
        defineField({
          name: "phoneLabel",
          title: "Phone label",
          type: "string",
          initialValue: "Phone",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "phoneDisplay",
          title: "Phone display text",
          type: "string",
          description: "Example: +91 9278132874.",
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: "phoneHref",
          title: "Phone link (tel:)",
          type: "string",
          description: "Example: tel:+919278132874",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "emailLabel",
          title: "Email label",
          type: "string",
          initialValue: "Email",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
          description: "Example: daksadigitalprivatelimited@gmail.com",
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: "websiteLabel",
          title: "Website label",
          type: "string",
          initialValue: "Website",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "websiteText",
          title: "Website text",
          type: "string",
          description: "Example: daksadigital.in",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "websiteHref",
          title: "Website URL",
          type: "url",
          description: "Example: https://daksadigital.in",
          validation: (Rule) => Rule.uri({ allowRelative: false }),
        }),
      ],
    }),
    defineField({
      name: "inquiryPanel",
      title: "Inquiry form panel",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "heading",
          title: "Panel heading",
          type: "string",
          description: "Example: Send an inquiry.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "intro",
          title: "Panel intro",
          type: "text",
          rows: 3,
          description:
            "Short instruction above the form.",
          validation: (Rule) => Rule.max(300),
        }),
      ],
    }),
    defineField({
      name: "mapSection",
      title: "Map section",
      type: "object",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "heading",
          title: "Map heading",
          type: "string",
          description: "Example: Find us.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "intro",
          title: "Map intro",
          type: "text",
          rows: 2,
          description:
            "Small helper line above the map.",
          validation: (Rule) => Rule.max(240),
        }),
        defineField({
          name: "mapsButtonLabel",
          title: "Google Maps button label",
          type: "string",
          initialValue: "Google Maps",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "mapEmbedSrc",
          title: "Map embed src (iframe)",
          type: "url",
          description:
            "Google embed URL for iframe source.",
          validation: (Rule) => Rule.uri({ allowRelative: false }),
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
          "Contact page — Daksa Digital",
        subtitle: h || "/contact content",
      };
    },
  },
});
