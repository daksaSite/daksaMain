import type { Metadata } from "next";

import {
  AboutPreviewSection,
  ExploreSection,
  HeroSection,
  PartnerModelCard,
  PricingTeaserSection,
  HomeFaqSection,
  WordsMarqueeSection,
  ProcessPreviewSection,
  ServicesMarqueeSection,
  TestimonialPreviewSection,
  WhyUsSection,
} from "@/components/sections/home";
import { getHeroCarouselSources, getHomePage } from "@/lib/sanity.home";

export const metadata: Metadata = {
  title: { absolute: "Daksa Digital — Built for Scale. Driven by Impact." },
  description:
    "Digital marketing, content, creative, and growth solutions. Daksa Digital Pvt. Ltd., Noida, Uttar Pradesh, India.",
  keywords: [
    "Daksa Digital",
    "digital growth partner",
    "digital marketing company",
    "Noida digital agency",
    "performance marketing",
    "content and creative services",
  ],
};

export default async function Home() {
  const home = await getHomePage();
  const carouselSlides = getHeroCarouselSources(home);

  return (
    <>
      <HeroSection
        eyebrow={home.heroEyebrow ?? undefined}
        title={
          <>
            {home.heroTitleLead}{" "}
            <span className="text-primary">{home.heroTitleHighlight}</span>
          </>
        }
        subtitle={home.heroSubtitle ?? ""}
        primaryCtaHref={home.heroPrimaryCtaHref ?? undefined}
        primaryCtaLabel={home.heroPrimaryCtaLabel ?? undefined}
        secondaryCtaHref={home.heroSecondaryCtaHref ?? undefined}
        secondaryCtaLabel={home.heroSecondaryCtaLabel ?? undefined}
        carouselSlides={
          carouselSlides.length > 0 ? carouselSlides : undefined
        }
      />
      <PartnerModelCard
        eyebrow={home.partnerEyebrow ?? undefined}
        title={home.partnerTitle ?? undefined}
        body={home.partnerBody ?? undefined}
        stats={home.partnerStats ?? undefined}
      />
      <AboutPreviewSection
        eyebrow={home.aboutEyebrow ?? undefined}
        headline={home.aboutHeadline ?? undefined}
        paragraph1={home.aboutParagraph1 ?? undefined}
        paragraph2={home.aboutParagraph2 ?? undefined}
        primaryCtaLabel={home.aboutPrimaryCtaLabel ?? undefined}
        primaryCtaHref={home.aboutPrimaryCtaHref ?? undefined}
        secondaryLinkLabel={home.aboutSecondaryLinkLabel ?? undefined}
        secondaryLinkHref={home.aboutSecondaryLinkHref ?? undefined}
        orbitHeading={home.aboutOrbitHeading ?? undefined}
        orbitFootnote={home.aboutOrbitFootnote ?? undefined}
        orbitServices={home.aboutOrbitServices ?? undefined}
      />
      <WhyUsSection
        eyebrow={home.whyUsEyebrow ?? undefined}
        headline={home.whyUsHeadline ?? undefined}
        intro={home.whyUsIntro ?? undefined}
        pillars={home.whyUsPillars ?? undefined}
      />
      <ProcessPreviewSection />
      {/* <ServicesMarqueeSection /> */}
      <TestimonialPreviewSection
        eyebrow={home.testimonialsEyebrow ?? undefined}
        headline={home.testimonialsHeadline ?? undefined}
        intro={home.testimonialsIntro ?? undefined}
        ctaLabel={home.testimonialsCtaLabel ?? undefined}
        ctaHref={home.testimonialsCtaHref ?? undefined}
        items={home.testimonialsItems ?? undefined}
      />
      <HomeFaqSection
        eyebrow={home.faqEyebrow ?? undefined}
        headline={home.faqHeadline ?? undefined}
        introLead={home.faqIntroLead ?? undefined}
        contactLinkLabel={home.faqContactLinkLabel ?? undefined}
        contactLinkHref={home.faqContactLinkHref ?? undefined}
        introTrail={home.faqIntroTrail ?? undefined}
        items={home.faqItems ?? undefined}
      />
      <WordsMarqueeSection words={home.marqueeWords ?? undefined} />
      {/* <PricingTeaserSection /> */}
      {/* <ExploreSection /> */}
    </>
  );
}
