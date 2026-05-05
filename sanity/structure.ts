import { DocumentIcon, EarthGlobeIcon, HomeIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

/**
 * Left sidebar in Studio: Home singleton, Site footer singleton (fixed ids).
 */
export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home page")
        .id("homePageEntry")
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType("homePage")
            .documentId("homePage")
            .title("Home page — Daksa Digital"),
        ),
      S.listItem()
        .title("About page")
        .id("aboutPageEntry")
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType("aboutPage")
            .documentId("aboutPage")
            .title("About page — /about"),
        ),
      S.listItem()
        .title("Services page")
        .id("servicesPageEntry")
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType("servicesPage")
            .documentId("servicesPage")
            .title("Services page — /services"),
        ),
      S.listItem()
        .title("Testimonials page")
        .id("testimonialsPageEntry")
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType("testimonialsPage")
            .documentId("testimonialsPage")
            .title("Testimonials page — /testimonials"),
        ),
      S.listItem()
        .title("Pricing page")
        .id("pricingPageEntry")
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType("pricingPage")
            .documentId("pricingPage")
            .title("Pricing page — /pricing"),
        ),
      S.listItem()
        .title("Contact page")
        .id("contactPageEntry")
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType("contactPage")
            .documentId("contactPage")
            .title("Contact page — /contact"),
        ),
      S.listItem()
        .title("Site footer")
        .id("siteFooterEntry")
        .icon(EarthGlobeIcon)
        .child(
          S.document()
            .schemaType("siteFooter")
            .documentId("siteFooter")
            .title("Site footer — contact & CTAs"),
        ),
    ]);
