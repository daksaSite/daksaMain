import type { MetadataRoute } from "next";

const SITE_URL = "https://daksadigital.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/process",
    "/testimonials",
    "/contact",
    "/our-work",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
