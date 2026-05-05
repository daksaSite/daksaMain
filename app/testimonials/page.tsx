import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  MessageCircle,
  MessageSquareQuote,
  Sparkles,
  Star,
} from "lucide-react";

import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { getTestimonialsPage } from "@/lib/sanity.testimonials";
import {
  resolveTestimonialsStatIcon,
  resolveTestimonialsTrustIcon,
} from "@/lib/testimonials-page-icons";
import { cn } from "@/lib/utils";

const DEFAULT_META_DESCRIPTION =
  "Client feedback, ratings, and how teams experience working with Daksa Digital—strategy, delivery, and long-term partnership.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getTestimonialsPage();
  return {
    title: page.seoTitle || "Testimonials",
    description: page.seoDescription || DEFAULT_META_DESCRIPTION,
    keywords: [
      "Daksa Digital testimonials",
      "digital marketing client reviews",
      "marketing agency feedback",
      "Noida agency testimonials",
    ],
  };
}

export default async function TestimonialsPage() {
  const page = await getTestimonialsPage();
  const n = page.storiesSection.items.length;
  const avg =
    n > 0
      ? (page.storiesSection.items.reduce((acc, t) => acc + t.rating, 0) / n).toFixed(1)
      : "—";

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section
        className="relative min-h-[48vh] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[52vh] lg:min-h-[56vh]"
        aria-label="Testimonials intro"
      >
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
          className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/50 via-[var(--brand-navy)]/75 to-[var(--brand-navy)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
          aria-hidden
        />

        <div className="site-container relative flex min-h-[48vh] flex-col justify-end pb-12 pt-24 sm:min-h-[52vh] sm:pb-14 sm:pt-28 lg:min-h-[56vh] lg:pb-16 lg:pt-32">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/95 sm:text-sm">
            <Sparkles className="size-4 shrink-0" aria-hidden />
            <span>{page.hero.eyebrow}</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-heading text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.08]">
            {page.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {page.hero.subtitle}
          </p>

          <ul className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              <Star className="size-4 shrink-0 fill-primary text-primary" aria-hidden />
              <span className="font-medium">{avg} avg. rating</span>
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              <MessageSquareQuote className="size-4 shrink-0 text-primary" aria-hidden />
              <span className="font-medium">{n} stories</span>
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              <Globe2 className="size-4 shrink-0 text-primary" aria-hidden />
              <span className="font-medium">{page.hero.chipThreeText}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section
        className="border-b border-border/60 bg-background"
        aria-label="At a glance"
      >
        <div className="site-container">
          <dl className="grid grid-cols-2 divide-x divide-y divide-border/60 lg:grid-cols-4 lg:divide-y-0">
            {page.stats.map(({ iconKey, value, label }) => {
              const Icon = resolveTestimonialsStatIcon(iconKey);
              const displayValue =
                label.toLowerCase().includes("story") ? String(n) : label.toLowerCase().includes("rating") ? avg : value;
              return (
              <div
                key={label}
                className="flex flex-col items-center gap-3 px-5 py-9 text-center sm:px-8 sm:py-10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <dt className="font-heading text-3xl font-extrabold tracking-tight text-[var(--brand-navy)] sm:text-4xl">
                  {displayValue}
                </dt>
                <dd className="max-w-[12rem] text-sm text-muted-foreground">
                  {label}
                </dd>
              </div>
            );
            })}
          </dl>
        </div>
      </section>

      {/* Testimonials grid */}
      <section
        className="border-b border-border/60 bg-muted/20"
        aria-labelledby="testimonials-stories-heading"
      >
        <div className="site-container py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="font-heading text-base font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg">
              {page.storiesSection.eyebrow}
            </p>
            <h2
              id="testimonials-stories-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
            >
              {page.storiesSection.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-2xl">
              {page.storiesSection.intro}
            </p>
          </div>

          <ul className="mt-12 grid gap-6 sm:gap-7 lg:mt-14 lg:grid-cols-2">
            {page.storiesSection.items.map((t, i) => (
              <li key={`${t.name}-${i}`}>
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  designation={t.designation}
                  rating={t.rating}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust pillars */}
      <section
        className="relative overflow-hidden bg-background"
        aria-labelledby="trust-model-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          aria-hidden
        />
        <div className="site-container py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <div className="inline-flex items-center gap-2 text-primary">
              <MessageCircle className="size-5 shrink-0" aria-hidden />
              <p className="font-heading text-base font-semibold uppercase tracking-[0.2em] sm:text-lg">
                {page.trustSection.eyebrow}
              </p>
            </div>
            <h2
              id="trust-model-heading"
              className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {page.trustSection.headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-2xl">
              {page.trustSection.intro}
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            {page.trustSection.pillars.map(({ iconKey, title, body }) => {
              const Icon = resolveTestimonialsTrustIcon(iconKey);
              return (
              <li key={title}>
                <div
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-border/70 bg-card/80 p-6 shadow-[0_16px_40px_-24px_rgba(26,27,53,0.14)] ring-1 ring-foreground/[0.04] transition-[transform,box-shadow,border-color] duration-300 sm:p-7",
                    "hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_22px_48px_-20px_rgba(26,27,53,0.22)]",
                    "motion-reduce:transform-none motion-reduce:hover:translate-y-0",
                  )}
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-[var(--brand-navy)]">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                    {body}
                  </p>
                </div>
              </li>
            );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-muted/30" aria-label="Next steps">
        <div className="site-container py-14 sm:py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-card via-card to-muted/40 p-8 shadow-[0_24px_60px_-30px_rgba(26,27,53,0.25)] ring-1 ring-foreground/[0.05] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:p-12">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-xl">
              <div className="flex items-center gap-2 text-primary">
                <MessageCircle className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="font-heading text-sm font-semibold uppercase tracking-[0.18em]">
                  {page.ctaSection.eyebrow}
                </span>
              </div>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {page.ctaSection.headline}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {page.ctaSection.body}
              </p>
            </div>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-0 lg:flex-col lg:items-stretch xl:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 gap-2 px-8 text-base font-semibold shadow-md"
              >
                <Link href={page.ctaSection.primaryCtaHref}>
                  {page.ctaSection.primaryCtaLabel}
                  <ArrowRight className="size-4 shrink-0" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-border/80 bg-background/80 px-8 text-base font-semibold backdrop-blur-sm"
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
