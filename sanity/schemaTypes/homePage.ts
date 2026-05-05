import { defineField, defineType } from "sanity";

/**
 * Home page singleton (`_id`: `homePage` via desk structure).
 *
 * Each homepage band is a collapsible object (Hero, Partner model, About preview, Why us, …).
 * For every field: the title names the UI slot; the description explains what it does with an
 * example where helpful. “Leave empty → site default” means the Next.js site keeps its built-in
 * copy or layout when the field is blank.
 */
export const homePageType = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "editorDisplayTitle",
      title: "Document name (for editors)",
      type: "string",
      description:
        "Shown in Sanity’s lists and tabs so this entry is never “Untitled”. Leave as default.",
      initialValue: "Home page — Daksa Digital",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "hero",
      title: "Hero section",
      type: "object",
      description:
        "Top of the homepage: pill line, headline, intro, two buttons, optional image carousel. Leave a field empty to keep the site’s default text or images for that spot.",
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow (small line above headline)",
          type: "string",
          description:
            "Small pill above the main headline. Example: Built for Scale · Driven by Impact. Leave empty → site default.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "headlineLead",
          title: "Headline — part before the accent",
          type: "string",
          description:
            "First part of the main headline (dark text). Example: Digital growth for brands that. Leave empty → site default.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "headlineHighlight",
          title: "Headline — accent phrase",
          type: "string",
          description:
            "Second part shown in brand accent colour. Example: refuse to stay invisible. Leave empty → site default.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle (supporting paragraph)",
          type: "text",
          rows: 5,
          description:
            "Long intro under the headline. Leave empty → site default paragraph.",
          validation: (Rule) => Rule.max(900),
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Primary button — label",
          type: "string",
          description: "Example: Plan a conversation. Leave empty → site default.",
          initialValue: "Plan a conversation",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "primaryCtaHref",
          title: "Primary button — link",
          type: "string",
          description: "Path or URL. Example: /contact. Leave empty → site default.",
          initialValue: "/contact",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "secondaryCtaLabel",
          title: "Secondary button — label",
          type: "string",
          description: "Example: View capabilities. Leave empty → site default.",
          initialValue: "View capabilities",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "secondaryCtaHref",
          title: "Secondary button — link",
          type: "string",
          description: "Example: /services. Leave empty → site default.",
          initialValue: "/services",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "slides",
          title: "Hero carousel images",
          type: "array",
          description:
            "Optional. Right-hand image carousel on the homepage hero. Add up to eight slides (each: image + alt). If this list is empty, the site uses its built-in hero photography.",
          of: [{ type: "heroSlideImage" }],
          validation: (Rule) => Rule.max(8),
        }),
      ],
    }),
    defineField({
      name: "partnerModel",
      title: "Partner model section",
      type: "object",
      description:
        "Narrow band directly under the hero: small eyebrow, headline, one supporting paragraph, then a row of stat tiles (numbers or place names). Leave any field empty to keep the site’s default text or tile layout.",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow (small line above headline)",
          type: "string",
          description:
            "Uppercase-style label above the main line. Example: Partner model. Leave empty → site default.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "title",
          title: "Headline",
          type: "string",
          description:
            "Main heading for this band. Example: Embedded digital team. Leave empty → site default.",
          validation: (Rule) => Rule.max(120),
        }),
        defineField({
          name: "body",
          title: "Supporting paragraph",
          type: "text",
          rows: 4,
          description:
            "One paragraph under the headline (strategy, P&L, engagement model, etc.). Leave empty → site default.",
          validation: (Rule) => Rule.max(500),
        }),
        defineField({
          name: "stats",
          title: "Stat tiles",
          type: "array",
          description:
            "Optional. Each item is one tile: big value + small label; turn on “accent” for a location-style tile (map pin). If the list is empty, the site shows its default pair (e.g. 9+ and Noida). Add up to four tiles.",
          of: [{ type: "partnerStat" }],
          validation: (Rule) => Rule.min(0).max(4),
        }),
      ],
    }),
    defineField({
      name: "aboutPreview",
      title: "About preview section",
      type: "object",
      description:
        "Large two-column block after Partner model. Left: eyebrow, main headline, two paragraphs, solid primary button, underlined text link. Right: globe visual, small title above chips, up to three orbiting service chips (label, link, icon each), footnote under the globe. Leave any field empty to keep the site’s default copy or orbit chips.",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow (small line above headline)",
          type: "string",
          description:
            "Small uppercase-style line above the main headline. Example: About Daksa Digital. Leave empty → site default.",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "headline",
          title: "Headline (main H2)",
          type: "string",
          description:
            "Primary heading for this block (large type). Example: Digital growth with strategy, creative, and performance. Leave empty → site default.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "paragraph1",
          title: "First paragraph (intro)",
          type: "text",
          rows: 5,
          description:
            "Opening body copy (who you are, location, positioning). Shown as the first grey paragraph under the headline. Leave empty → site default.",
          validation: (Rule) => Rule.max(700),
        }),
        defineField({
          name: "paragraph2",
          title: "Second paragraph (supporting)",
          type: "text",
          rows: 4,
          description:
            "Supporting paragraph (services, how you help). Shown under the first paragraph. Leave empty → site default.",
          validation: (Rule) => Rule.max(500),
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Primary button — label",
          type: "string",
          description:
            "Text on the solid button. Example: Read about us. Leave empty → site default.",
          initialValue: "Read about us",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "primaryCtaHref",
          title: "Primary button — link",
          type: "string",
          description:
            "Where the primary button goes. Use an internal path when possible. Example: /about. Leave empty → site default.",
          initialValue: "/about",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "secondaryLinkLabel",
          title: "Text link — label",
          type: "string",
          description:
            "Underlined link beside the button (not a second button). Example: View all services. Leave empty → site default.",
          initialValue: "View all services",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "secondaryLinkHref",
          title: "Text link — URL",
          type: "string",
          description:
            "Destination for the text link. Example: /services. Leave empty → site default.",
          initialValue: "/services",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "orbitHeading",
          title: "Globe band — heading above chips",
          type: "string",
          description:
            "Small centred title above the globe (uppercase style on the site). Example: Core service lines. Leave empty → site default.",
          initialValue: "Core service lines",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "orbitFootnote",
          title: "Globe band — footnote under chips",
          type: "text",
          rows: 3,
          description:
            "Short helper line under the globe (e.g. where to read mission/vision, that services link to detail). Leave empty → site default.",
          validation: (Rule) => Rule.max(400),
        }),
        defineField({
          name: "orbitServices",
          title: "Globe band — orbit service chips",
          type: "array",
          description:
            "Optional. Up to three cards around the globe (fixed positions: top, lower-right, lower-left). Each chip needs a label, link, and icon. If you add fewer than three, the site fills missing slots from its defaults (Digital Marketing, SEO Services, Branding & Creative Design). If the list is empty, all three defaults are used.",
          of: [{ type: "aboutPreviewOrbitService" }],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),
    defineField({
      name: "whyUs",
      title: "Why us section",
      type: "object",
      description:
        "Three-column strip after About preview: small eyebrow, main headline, one intro paragraph, then up to three pillar cards (numbered 01–03 on the site). Each card has an icon, title, and body. Leave any top-level field empty to keep the site default copy; leave the pillar list empty to use the default three pillars.",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow (small line above headline)",
          type: "string",
          description:
            "Uppercase-style label above the section headline. Example: Why us. Leave empty → site default.",
          initialValue: "Why us",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "headline",
          title: "Headline (main H2)",
          type: "string",
          description:
            "Primary heading for the block. Example: Why teams choose our model. Leave empty → site default.",
          initialValue: "Why teams choose our model",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "intro",
          title: "Intro (paragraph under headline)",
          type: "text",
          rows: 3,
          description:
            "One paragraph under the headline (sets up the three pillars). Example: Three pillars that keep strategy, creative, and delivery aligned…. Leave empty → site default.",
          validation: (Rule) => Rule.max(500),
        }),
        defineField({
          name: "pillars",
          title: "Pillar cards",
          type: "array",
          description:
            "Optional. Up to three cards in a row (order = 01, 02, 03). Each needs a title, body, and icon. If you add fewer than three, the site fills missing slots from its defaults (Strategy first, Creative that converts, Execution you can measure). If the list is empty, all three defaults are used.",
          of: [{ type: "whyUsPillar" }],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),
    defineField({
      name: "homeFaq",
      title: "FAQ section",
      type: "object",
      description:
        "Homepage FAQ band: eyebrow with icon, headline, intro copy with an inline “Contact us” link, then a stack of accordion items (numbered 01, 02, …). Leave any top-level field empty for the site default. Leave the FAQ list empty to use the built-in six questions.",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow (small label beside icon)",
          type: "string",
          description:
            "Short label next to the help icon. Example: FAQ. Leave empty → site default.",
          initialValue: "FAQ",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "headline",
          title: "Headline (main H2)",
          type: "string",
          description:
            "Primary heading for the block. Example: Common questions, straight answers. Leave empty → site default.",
          initialValue: "Common questions, straight answers",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "introLead",
          title: "Intro — text before the contact link",
          type: "text",
          rows: 3,
          description:
            "First part of the intro paragraph (ends before the contact link). Example: Straightforward guidance on how we work, scope, and outcomes. Need something specific? Leave empty → site default.",
          validation: (Rule) => Rule.max(400),
        }),
        defineField({
          name: "contactLinkLabel",
          title: "Contact link — label",
          type: "string",
          description:
            "Clickable words in the middle of the intro. Example: Contact us. Leave empty → site default.",
          initialValue: "Contact us",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "contactLinkHref",
          title: "Contact link — URL",
          type: "string",
          description:
            "Where the inline link goes. Example: /contact. Leave empty → site default.",
          initialValue: "/contact",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "introTrail",
          title: "Intro — text after the contact link",
          type: "string",
          description:
            "Closing words after the link (often starts with an em dash). Example: —we'll point you in the right direction. Leave empty → site default.",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "items",
          title: "FAQ accordion items",
          type: "array",
          description:
            "Optional. Each row is one question (summary) and answer (expanded). Order is preserved and shown as 01, 02, 03…. If this list is empty, the site shows its default six questions. Add up to twelve for the home page.",
          of: [{ type: "homeFaqItem" }],
          validation: (Rule) => Rule.max(12),
        }),
      ],
    }),
    defineField({
      name: "testimonialsPreview",
      title: "Testimonials preview section",
      type: "object",
      description:
        "Horizontal carousel of quote cards under the FAQ: eyebrow, headline, intro line, optional “All testimonials” button, then scrollable cards (quote, name, role, 1–5 stars). Leave any top-level field empty for the site default. Leave the card list empty to use the built-in three featured quotes.",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow (small line above headline)",
          type: "string",
          description:
            "Uppercase-style label above the section headline. Example: Social proof. Leave empty → site default.",
          initialValue: "Social proof",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "headline",
          title: "Headline (main H2)",
          type: "string",
          description:
            "Primary heading for the block. Example: Trusted by teams who value follow-through. Leave empty → site default.",
          initialValue: "Trusted by teams who value follow-through",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "intro",
          title: "Intro (paragraph under headline)",
          type: "text",
          rows: 3,
          description:
            "Supporting line under the headline (sets up the carousel). Leave empty → site default.",
          validation: (Rule) => Rule.max(400),
        }),
        defineField({
          name: "ctaLabel",
          title: "Outline button — label",
          type: "string",
          description:
            "Text on the top-right outline button. Example: All testimonials. Leave empty → site default.",
          initialValue: "All testimonials",
          validation: (Rule) => Rule.max(80),
        }),
        defineField({
          name: "ctaHref",
          title: "Outline button — link",
          type: "string",
          description:
            "Where the button goes. Example: /testimonials. Leave empty → site default.",
          initialValue: "/testimonials",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "items",
          title: "Testimonial cards (carousel order)",
          type: "array",
          description:
            "Optional. Each card is quote, name, role, and star rating; order matches left-to-right scroll. If empty, the site shows its default three featured quotes. Add up to eight cards for the home carousel.",
          of: [{ type: "homeTestimonialCard" }],
          validation: (Rule) => Rule.max(8),
        }),
      ],
    }),
    defineField({
      name: "wordsMarquee",
      title: "Words marquee band",
      type: "object",
      description:
        "Full-width scrolling word strip at the bottom of the home page (before the footer). Words alternate navy / brand red and repeat for a seamless loop. Leave the list empty to use the built-in default set.",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: "words",
          title: "Words (left-to-right order)",
          type: "array",
          description:
            "Each entry is one word or short phrase (shown in uppercase on the site). Order is one full cycle before the animation repeats. Add at least two entries; six to ten works well. If empty, the site uses Visibility, Growth, Impact, Scale, Trust, Results.",
          of: [{ type: "string", title: "Word or short phrase" }],
          validation: (Rule) => Rule.min(0).max(24),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      docTitle: "editorDisplayTitle",
      lead: "hero.headlineLead",
      highlight: "hero.headlineHighlight",
    },
    prepare({ docTitle, lead, highlight }) {
      const headline = [lead, highlight].filter(Boolean).join(" ").trim();
      return {
        title:
          (typeof docTitle === "string" && docTitle.trim()) ||
          "Home page — Daksa Digital",
        subtitle: headline || "Website homepage · edit sections below",
      };
    },
  },
});
