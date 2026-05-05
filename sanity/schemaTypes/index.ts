import type { SchemaTypeDefinition } from "sanity";

import { aboutPageAudienceCardType } from "./aboutPageAudienceCard";
import { aboutPageStatType } from "./aboutPageStat";
import { aboutPageType } from "./aboutPage";
import { aboutPageValuePillarType } from "./aboutPageValuePillar";
import { aboutPreviewOrbitServiceType } from "./aboutPreviewOrbitService";
import { contactPageType } from "./contactPage";
import { footerSocialLinkType } from "./footerSocialLink";
import { homeFaqItemType } from "./homeFaqItem";
import { homeTestimonialCardType } from "./homeTestimonialCard";
import { heroSlideImageType } from "./heroSlideImage";
import { homePageType } from "./homePage";
import { partnerStatType } from "./partnerStat";
import { pricingPagePlanType } from "./pricingPagePlan";
import { pricingPageType } from "./pricingPage";
import { servicesPageServiceItemType } from "./servicesPageServiceItem";
import { servicesPageType } from "./servicesPage";
import { siteFooterType } from "./siteFooter";
import { testimonialsPageStatItemType } from "./testimonialsPageStatItem";
import { testimonialsPageTrustPillarType } from "./testimonialsPageTrustPillar";
import { testimonialsPageType } from "./testimonialsPage";
import { whyUsPillarType } from "./whyUsPillar";

export const schemaTypes: SchemaTypeDefinition[] = [
  heroSlideImageType,
  aboutPageAudienceCardType,
  aboutPageStatType,
  aboutPageValuePillarType,
  aboutPageType,
  aboutPreviewOrbitServiceType,
  contactPageType,
  footerSocialLinkType,
  homeFaqItemType,
  homeTestimonialCardType,
  partnerStatType,
  pricingPagePlanType,
  pricingPageType,
  servicesPageServiceItemType,
  servicesPageType,
  siteFooterType,
  testimonialsPageStatItemType,
  testimonialsPageTrustPillarType,
  testimonialsPageType,
  whyUsPillarType,
  homePageType,
];
