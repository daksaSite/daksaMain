import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getServicesPage } from "@/lib/sanity.services";
import { resolveServiceIcon } from "@/lib/services-page-icons";

const DEFAULT_META_DESCRIPTION =
  "Digital marketing, content, social, web, SEO, branding, lead generation, and more tailored to your goals.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getServicesPage();
  return {
    title: page.seoTitle || "Services",
    description: page.seoDescription || DEFAULT_META_DESCRIPTION,
    keywords: [
      "digital marketing services",
      "digital agency services",
      "digital agency Noida",
      "SEO services Noida",
      "social media management",
      "website development services",
      "branding and creative design",
      "lead generation services",
    ],
  };
}

export default async function ServicesPage() {
  const page = await getServicesPage();
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative min-h-[52vh] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[58vh] lg:min-h-[60vh]">
        <Image
          src={page.hero.imageSrc}
          alt={page.hero.imageAlt}
          fill
          quality={100}
          priority
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/50 via-transparent to-[var(--brand-navy)]/85"
          aria-hidden
        />

        <div className="site-container relative flex h-full min-h-[52vh] flex-col justify-end pb-14 pt-24 sm:min-h-[58vh] sm:pb-16 sm:pt-28 lg:min-h-[60vh] lg:pb-20">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            {page.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
            {page.hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
            {page.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="border-b border-border/60 bg-background" aria-labelledby="services-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">

          <div className="mb-12 lg:mb-16">
            <h2
              id="services-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              {page.servicesIntro.headline}
            </h2>
            <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              {page.servicesIntro.body}
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {page.services.map(({ iconKey, title, description, points }, i) => {
              const Icon = resolveServiceIcon(iconKey);
              return (
              <li
                key={`${title}-${i}`}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/30 sm:p-7"
              >
                {/* Ghost number */}
                <span
                  className="pointer-events-none absolute right-5 top-4 font-heading text-[4.5rem] font-extrabold leading-none tracking-tight text-foreground/[0.04] select-none"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" aria-hidden />
                </span>

                {/* Body */}
                <div className="relative flex flex-1 flex-col gap-3">
                  <h3 className="font-heading text-[1.0625rem] font-bold tracking-tight text-foreground sm:text-lg">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.65]">
                    {description}
                  </p>

                  {/* Key points */}
                  <ul className="mt-auto space-y-1.5 pt-2">
                    {points.map((pt, ptIdx) => (
                      <li key={`${title}-${ptIdx}`} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
            })}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--brand-navy)]" aria-labelledby="services-cta-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl space-y-3">
              <h2
                id="services-cta-heading"
                className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]"
              >
                {page.ctaSection.headline}
              </h2>
              <p className="text-base leading-relaxed text-white/65 sm:text-lg">
                {page.ctaSection.body}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                className="h-12 px-8 text-[0.9375rem] font-semibold"
                size="lg"
                asChild
              >
                <Link href={page.ctaSection.primaryCtaHref}>{page.ctaSection.primaryCtaLabel}</Link>
              </Button>
              <Button
                className="h-12 px-8 text-[0.9375rem] font-semibold"
                variant="outline"
                size="lg"
                asChild
              >
                <Link href={page.ctaSection.secondaryCtaHref}>{page.ctaSection.secondaryCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
