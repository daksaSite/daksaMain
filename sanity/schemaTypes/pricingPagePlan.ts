import { defineField, defineType } from "sanity";

/**
 * One pricing card on /pricing.
 * Supports both fixed-price and custom-engagement styles.
 */
export const pricingPagePlanType = defineType({
  name: "pricingPagePlan",
  title: "Pricing plan",
  type: "object",
  description:
    "One card in the Compare plans grid. Includes plan text, included/not included lists, and either a price line or custom-engagement message.",
  fields: [
    defineField({
      name: "name",
      title: "Plan name",
      type: "string",
      description: "Example: Starter, Standard, Premium.",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "eyebrow",
      title: "Plan eyebrow",
      type: "string",
      description: "Small label above plan name. Example: Launch and learn.",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "description",
      title: "Plan description",
      type: "text",
      rows: 3,
      description:
        "Short summary under plan name. Example: Ideal for early-stage brands that need consistent digital presence.",
      validation: (Rule) => Rule.max(420),
    }),
    defineField({
      name: "featured",
      title: "Featured plan",
      type: "boolean",
      initialValue: false,
      description:
        "Highlights this card visually (recommended for only one plan).",
    }),
    defineField({
      name: "included",
      title: "Included items",
      type: "array",
      description:
        "Checklist under Included. Add concise lines; order is preserved. Recommended 5 to 10 items.",
      of: [{ type: "string", title: "Included line" }],
      validation: (Rule) => Rule.min(1).max(14),
    }),
    defineField({
      name: "notIncluded",
      title: "Not included items",
      type: "array",
      description:
        "Checklist under Not included. Add realistic exclusions. Recommended 2 to 6 items.",
      of: [{ type: "string", title: "Not included line" }],
      validation: (Rule) => Rule.min(1).max(12),
    }),
    defineField({
      name: "price",
      title: "Price line",
      type: "string",
      description:
        "Main price text. Example: From ₹79,999 / month. Leave empty to show custom-engagement box instead.",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "priceNote",
      title: "Price note",
      type: "string",
      description:
        "Optional small helper text below price. Example: Indicative · scope confirmed after discovery.",
      validation: (Rule) => Rule.max(180),
    }),
    defineField({
      name: "priceCtaLabel",
      title: "Price mode CTA label",
      type: "string",
      description:
        "Button text when price line exists. Example: Request this plan.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "priceCtaHref",
      title: "Price mode CTA link",
      type: "string",
      description: "Button link when price line exists. Example: /contact",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "customTitle",
      title: "Custom box title",
      type: "string",
      description:
        "Shown when price line is empty. Example: Custom engagement.",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "customBody",
      title: "Custom box body",
      type: "text",
      rows: 3,
      description:
        "Supporting text for custom engagement mode. Example: We shape retainers and hybrid project fees to your goals.",
      validation: (Rule) => Rule.max(420),
    }),
    defineField({
      name: "customCtaLabel",
      title: "Custom box CTA label",
      type: "string",
      description: "Button text in custom mode. Example: Contact us.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "customCtaHref",
      title: "Custom box CTA link",
      type: "string",
      description: "Button link in custom mode. Example: /contact",
      validation: (Rule) => Rule.max(200),
    }),
  ],
  preview: {
    select: { title: "name", featured: "featured" },
    prepare({ title, featured }) {
      return {
        title: title || "Pricing plan",
        subtitle: featured ? "Featured plan" : "Standard plan",
      };
    },
  },
});
