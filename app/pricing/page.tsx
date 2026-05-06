import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getPricingPage } from "@/lib/sanity.pricing";

const DEFAULT_META_DESCRIPTION =
  "Starter, Standard, and Premium engagement options with Daksa Digital clear scope, realistic pricing, and custom enterprise plans.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPricingPage();
  return {
    title: page.seoTitle || "Pricing",
    description: page.seoDescription || DEFAULT_META_DESCRIPTION,
    keywords: [
      "digital marketing pricing",
      "SEO pricing India",
      "social media management plans",
      "Daksa Digital pricing",
      "marketing retainer plans",
    ],
  };
}

export default async function PricingPage() {
  const page = await getPricingPage();
  return (
    <div>

      <section className="relative min-h-[48vh] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[52vh] lg:min-h-[54vh]">
        <Image
          src={page.hero.imageSrc}
          alt={page.hero.imageAlt}
          fill
          quality={95}
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/55 via-transparent to-[var(--brand-navy)]/90"
          aria-hidden
        />

        <div className="site-container relative flex min-h-[48vh] flex-col justify-end pb-12 pt-24 sm:min-h-[52vh] sm:pb-14 sm:pt-28 lg:min-h-[54vh] lg:pb-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing" },
            ]}
            tone="inverse"
          />
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            {page.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-4xl sm:leading-[1.08] lg:text-[3rem]">
            {page.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72 sm:mt-5 sm:text-lg">
            {page.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background" aria-labelledby="plans-heading">
        <div className="site-container py-14 sm:py-20 lg:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
            <h2
              id="plans-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              {page.plansSection.headline}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              {page.plansSection.intro}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-5 lg:items-stretch">
            {page.plans.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow",
                  plan.featured
                    ? "border-primary/40 shadow-md ring-2 ring-primary/20 lg:-mt-2 lg:mb-2"
                    : "border-border/70",
                )}
              >
                <div
                  className={cn(
                    "border-b px-6 py-6 sm:px-7 sm:py-7",
                    plan.featured ? "border-primary/15 bg-primary/[0.06]" : "border-border/60 bg-muted/20",
                  )}
                >
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {plan.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-6 px-6 py-6 sm:px-7 sm:py-7">
                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.included.map((line) => (
                        <li key={line} className="flex gap-2.5 text-sm leading-snug text-foreground">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Not included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.notIncluded.map((line) => (
                        <li
                          key={line}
                          className="flex gap-2.5 text-sm leading-snug text-muted-foreground"
                        >
                          <X
                            className="mt-0.5 size-4 shrink-0 text-muted-foreground/70"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={cn(
                    "mt-auto border-t px-6 py-6 sm:px-7",
                    plan.featured ? "border-primary/15 bg-muted/30" : "border-border/60 bg-muted/15",
                  )}
                >
                  {plan.price ? (
                    <>
                      <p className="font-heading text-xl font-bold tracking-tight text-[var(--brand-navy)] sm:text-2xl">
                        {plan.price}
                      </p>
                      {plan.priceNote?.trim() ? (
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                          {plan.priceNote}
                        </p>
                      ) : null}
                      <Button className="mt-5 w-full font-semibold sm:mt-6" size="lg" asChild>
                        <Link href={plan.priceCtaHref}>{plan.priceCtaLabel}</Link>
                      </Button>
                    </>
                  ) : (
                    <div className="rounded-xl border border-dashed border-primary/35 bg-primary/[0.04] px-4 py-5 text-center">
                      <p className="font-heading text-lg font-bold text-foreground sm:text-xl">
                        {plan.customTitle}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {plan.customBody}
                      </p>
                      <Button className="mt-5 w-full font-semibold" size="lg" asChild>
                        <Link href={plan.customCtaHref}>{plan.customCtaLabel}</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border/70 bg-muted/20 px-6 py-8 sm:mt-16 sm:px-8 lg:mt-20">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {page.howWePrice.eyebrow}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
              {page.howWePrice.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" className="font-semibold" asChild>
                <Link href={page.howWePrice.primaryCtaHref}>{page.howWePrice.primaryCtaLabel}</Link>
              </Button>
              <Button variant="ghost" className="font-semibold text-primary hover:text-primary" asChild>
                <Link href={page.howWePrice.secondaryCtaHref}>{page.howWePrice.secondaryCtaLabel}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
