import { defineField, defineType } from "sanity";

/**
 * Global footer singleton (`_id`: `siteFooter` via desk structure).
 * Brand column: tagline, address, phone, email, hours, socials; right column: two CTAs.
 */
export const siteFooterType = defineType({
  name: "siteFooter",
  title: "Site footer",
  type: "document",
  fields: [
    defineField({
      name: "editorDisplayTitle",
      title: "Document name (for editors)",
      type: "string",
      description:
        "Shown in Sanity lists so this entry is never “Untitled”. Leave as default.",
      initialValue: "Site footer — Daksa Digital",
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: "taglineBold",
      title: "Tagline — bold lead",
      type: "string",
      description:
        "First sentence of the blurb (rendered in stronger white). Example: Built for Scale. Driven by Impact. Leave empty → site default.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "taglineBody",
      title: "Tagline — supporting sentence",
      type: "text",
      rows: 3,
      description:
        "Second sentence after the bold line (slightly muted on the site). Leave empty → site default.",
      validation: (Rule) => Rule.max(400),
    }),
    defineField({
      name: "address",
      title: "Address (plain text)",
      type: "string",
      description: "Full address as one line. Shown next to the map pin icon.",
      validation: (Rule) => Rule.max(240),
    }),
    defineField({
      name: "phone",
      title: "Phone — display number",
      type: "string",
      description: "Digits or formatted number as visitors should read it.",
      validation: (Rule) => Rule.max(40),
    }),
    defineField({
      name: "phoneHref",
      title: "Phone — tap-to-call link",
      type: "string",
      description: "Example: tel:+919278132874. Leave empty → site default.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
      description: "Shown as mailto link. Leave empty → site default.",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "hours",
      title: "Business hours",
      type: "string",
      description: "One line next to the clock icon. Example: Mon–Sat, 10am–7pm IST.",
      validation: (Rule) => Rule.max(120),
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      description:
        "Optional. Order matches left-to-right with dot separators (Instagram · LinkedIn · …). If empty, the site uses its default three networks from the live config.",
      of: [{ type: "footerSocialLink" }],
      validation: (Rule) => Rule.max(8),
    }),
    defineField({
      name: "primaryButtonLabel",
      title: "Primary button — label",
      type: "string",
      description: "Solid button under the nav columns. Example: Contact the team.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "primaryButtonHref",
      title: "Primary button — link",
      type: "string",
      description: "Example: /contact. Leave empty → site default.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "secondaryButtonLabel",
      title: "Secondary button — label",
      type: "string",
      description: "Outline-style button. Example: Learn more.",
      validation: (Rule) => Rule.max(80),
    }),
    defineField({
      name: "secondaryButtonHref",
      title: "Secondary button — link",
      type: "string",
      description: "Example: /about. Leave empty → site default.",
      validation: (Rule) => Rule.max(200),
    }),
  ],
  preview: {
    select: { docTitle: "editorDisplayTitle", tagline: "taglineBold" },
    prepare({ docTitle, tagline }) {
      return {
        title:
          (typeof docTitle === "string" && docTitle.trim()) ||
          "Site footer — Daksa Digital",
        subtitle: tagline || "Global footer · tagline & contact",
      };
    },
  },
});
