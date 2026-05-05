import { defineField, defineType } from "sanity";

/**
 * About page singleton (`_id`: `aboutPage` via desk structure).
 * Full editorial control for /about: hero, stats, story, mission/vision, values, why/priorities, audience, CTA.
 */
export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  description:
    "Everything visitors see on the /about URL: hero, stats, story, mission and vision, values, why and priorities, audience, and the bottom CTA band. Empty fields fall back to sensible defaults on the site.",
  fields: [
    defineField({
      name: "editorDisplayTitle",
      title: "Document name (for editors)",
      type: "string",
      initialValue: "About page — Daksa Digital",
      description:
        "Only used inside Sanity (sidebar, search). Not shown on the website. Example: About page — Daksa Digital.",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title (browser tab)",
      type: "string",
      description:
        "Browser tab title and bookmark name. Optional: if empty, the site uses “About”. Example: About Daksa Digital | Performance marketing. Aim for under ~60 characters for Google.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO meta description",
      type: "text",
      rows: 3,
      description:
        "Short summary for Google and social previews when the page is shared. Optional: if empty, a default blurb is used. Example: Learn how we partner with brands for long-term growth. Aim for ~150–160 characters.",
      validation: (Rule) => Rule.max(320),
    }),

    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      description:
        "Top of the About page: full-width dark band with optional background image, eyebrow, main headline (H1), and subtitle.",
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description:
            "Small label above the headline (often uppercase in the design). Example: Who we are.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "title",
          title: "Headline (H1)",
          type: "string",
          description:
            "Main page title. There should be only one H1 on the page (this field). Example: A digital growth partner for ambitious brands.",
          validation: (Rule) => Rule.max(220),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 3,
          description:
            "Supporting line(s) under the H1. Example: We combine strategy, creative, and performance media so marketing works as one system.",
          validation: (Rule) => Rule.max(400),
        }),
        defineField({
          name: "image",
          title: "Background image",
          type: "heroSlideImage",
          description:
            "Optional. Wide photo behind the text (dimmed) as a full-bleed background. If empty, the site uses its default about hero image. Upload landscape; set hotspot so faces stay visible on crop.",
        }),
      ],
    }),

    defineField({
      name: "stats",
      title: "Stats strip",
      type: "array",
      description:
        "Four-column strip under the hero: large value plus small label per cell (e.g. years, clients, location). Optional: if empty, built-in defaults appear. Up to 4 items; order is left to right.",
      of: [{ type: "aboutPageStat" }],
      validation: (Rule) => Rule.max(4),
    }),

    defineField({
      name: "story",
      title: "Our story",
      type: "object",
      description:
        "Two-column section: text + address on the left, large image with caption overlay on the right.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          type: "string",
          description: "Small label above the story headline. Example: Our story.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "headline",
          title: "Headline (H2)",
          type: "string",
          description:
            "Section title for the story block. Example: Built to deliver what brands actually need.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "paragraphs",
          title: "Body paragraphs",
          type: "array",
          description:
            "Each array item is one paragraph, stacked in order. Use short paragraphs for readability. Up to 8 items. Example opening: Daksa Digital started with a simple idea…",
          of: [{ type: "string", title: "Paragraph" }],
          validation: (Rule) => Rule.max(8),
        }),
        defineField({
          name: "address",
          title: "Address line (map pin)",
          type: "string",
          description:
            "Single line with a map pin icon under the story text. Optional: if empty, the default office line from the site is used. Example: Noida, India — remote-first with clients worldwide.",
          validation: (Rule) => Rule.max(240),
        }),
        defineField({
          name: "image",
          title: "Story column image",
          type: "heroSlideImage",
          description:
            "Optional. Right-hand image. If empty, a default about image is used. Set alt text on the image for accessibility. Captions below appear on the gradient at the bottom of the image.",
        }),
        defineField({
          name: "imageCaptionBold",
          title: "Image caption — bold line",
          type: "string",
          description:
            "First line of the caption (stronger weight). Example: Strategy session in the studio.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "imageCaptionSub",
          title: "Image caption — second line",
          type: "string",
          description:
            "Second line (smaller, muted). Example: Campaign reviews with the growth team.",
          validation: (Rule) => Rule.max(120),
        }),
      ],
    }),

    defineField({
      name: "missionVision",
      title: "Mission & vision",
      type: "object",
      description:
        "Section intro (eyebrow and headline) plus two cards: mission (dark gradient) and vision (light card).",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "sectionEyebrow",
          title: "Section eyebrow",
          type: "string",
          description: "Label above the mission and vision section title. Example: Purpose.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "sectionHeadline",
          title: "Section headline",
          type: "string",
          description:
            "Title spanning both cards. Example: Why we exist — and where we are headed.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "missionTitle",
          title: "Mission card title",
          type: "string",
          description: "Heading inside the left, dark card. Example: Our mission.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "missionBody",
          title: "Mission body",
          type: "text",
          rows: 5,
          description:
            "Mission paragraph(s). Example: We help brands grow by making marketing measurable, creative, and accountable to revenue.",
          validation: (Rule) => Rule.max(800),
        }),
        defineField({
          name: "visionTitle",
          title: "Vision card title",
          type: "string",
          description: "Heading inside the right, light card. Example: Our vision.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "visionBody",
          title: "Vision body",
          type: "text",
          rows: 5,
          description:
            "Vision paragraph(s). Example: A future where every growing brand has a clear, honest path from spend to outcome.",
          validation: (Rule) => Rule.max(800),
        }),
      ],
    }),

    defineField({
      name: "valuesSection",
      title: "Values (how we operate)",
      type: "object",
      description:
        "Grid of principle cards with **icons** (chosen per card). Shown after mission & vision.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "sectionEyebrow",
          title: "Section eyebrow",
          type: "string",
          description: "Example: How we work.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "sectionHeadline",
          title: "Section headline",
          type: "string",
          description: "Example: Principles that guide every engagement.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "pillars",
          title: "Value cards",
          type: "array",
          description:
            "Each item is one card: title, short body, and a preset icon (dropdown, not an upload). Optional: if empty, the site uses six built-in principles. Up to 8 cards.",
          of: [{ type: "aboutPageValuePillar" }],
          validation: (Rule) => Rule.max(8),
        }),
      ],
    }),

    defineField({
      name: "whyPriorities",
      title: "Why Daksa + priorities",
      type: "object",
      description:
        "Two columns on desktop: Why choose us (numbered, stronger text) and What we prioritize (numbered, muted). Rows are not paired — line 1 on the left is independent from line 1 on the right.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "sectionEyebrow",
          title: "Section eyebrow",
          type: "string",
          description: "Example: The Daksa difference.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "sectionHeadline",
          title: "Section headline",
          type: "string",
          description: "Example: Why teams partner with us.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "whyColumnLabel",
          title: "Left column label",
          type: "string",
          description:
            "Small uppercase label above the left list. Example: Why Daksa.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "whyPoints",
          title: "Left column — bullet lines",
          type: "array",
          description:
            "Numbered list (01, 02, …). Each line is one reason or proof point. Up to 12 lines. Example: Senior strategists on every account.",
          of: [{ type: "string", title: "Line" }],
          validation: (Rule) => Rule.max(12),
        }),
        defineField({
          name: "prioritiesColumnLabel",
          title: "Right column label",
          type: "string",
          description:
            "Label above the right list. Example: What we prioritize.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "priorities",
          title: "Right column — lines",
          type: "array",
          description:
            "Numbered list for operating priorities (softer styling than the left column). Up to 12 lines. Example: Clarity over noise in reporting.",
          of: [{ type: "string", title: "Line" }],
          validation: (Rule) => Rule.max(12),
        }),
      ],
    }),

    defineField({
      name: "audienceSection",
      title: "Who we work with",
      type: "object",
      description:
        "Three audience cards in a row (startups, scale-ups, enterprises — or your own segments).",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Section eyebrow",
          type: "string",
          description: "Example: Who we work with.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "headline",
          title: "Section headline",
          type: "string",
          description: "Example: Built for every stage of growth.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "cards",
          title: "Audience cards",
          type: "array",
          description:
            "Optional. Up to 3 cards side by side. If empty, defaults are Startups, Growing businesses, and Established brands. Each card has a heading, description, and icon.",
          of: [{ type: "aboutPageAudienceCard" }],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),

    defineField({
      name: "ctaSection",
      title: "Bottom CTA band",
      type: "object",
      description:
        "Final navy band before the site footer: headline and supporting copy only. Buttons are not edited here; use your global navigation or contact page.",
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({
          name: "headline",
          title: "Headline",
          type: "string",
          description: "Example: Ready to grow with a partner, not a vendor?",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "body",
          title: "Supporting copy",
          type: "text",
          rows: 4,
          description:
            "One or two sentences inviting contact. Example: Tell us about your goals — we will reply with clear next steps.",
          validation: (Rule) => Rule.max(500),
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
          "About page — Daksa Digital",
        subtitle: h || "/about content",
      };
    },
  },
});
