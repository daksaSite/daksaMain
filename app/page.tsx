import type { Metadata } from "next";

import {
  AboutPreviewSection,
  ExploreSection,
  HeroSection,
  PartnerModelCard,
  HomeCtaSection,
  PricingTeaserSection,
  HomeFaqSection,
  ProcessPreviewSection,
  ServicesMarqueeSection,
  TestimonialPreviewSection,
  WhyUsSection,
} from "@/components/sections/home";

export const metadata: Metadata = {
  title: { absolute: "Daksa Digital — Built for Scale. Driven by Impact." },
  description:
    "Digital marketing, content, creative, and growth solutions. Daksa Digital Pvt. Ltd., Noida, Uttar Pradesh, India.",
};

export default function Home() {
  return (
    <>
      <HeroSection
        eyebrow="Built for Scale · Driven by Impact"
        title={
          <>
            Digital growth for brands that{" "}
            <span className="text-primary">refuse to stay invisible.</span>
          </>
        }
        subtitle="Daksa Digital Pvt. Ltd. is a digital marketing company with strategic PR and advertising capabilities helping brands build trust and visibility through campaigns, content, and creative execution. Based in Noida, Uttar Pradesh, India."
      />
      <PartnerModelCard />
      <AboutPreviewSection />
      <WhyUsSection />
      <ProcessPreviewSection />
      <ServicesMarqueeSection />
      <TestimonialPreviewSection />
      <HomeFaqSection />
      {/* <PricingTeaserSection /> */}
      {/* <ExploreSection /> */}
      <HomeCtaSection />
    </>
  );
}
