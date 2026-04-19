import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { HeroImageCarousel } from "./hero-image-carousel";

export function HeroSection({
  title,
  subtitle,
  eyebrow = "Built for Scale · Driven by Impact",
  primaryCtaHref = "/contact",
  primaryCtaLabel = "Plan a conversation",
  secondaryCtaHref = "/services",
  secondaryCtaLabel = "View capabilities",
}: {
  title: ReactNode;
  subtitle: ReactNode;
  eyebrow?: string;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
}) {
  return (
    <section
      className="relative overflow-x-clip border-b border-border/60"
      aria-labelledby="hero-heading"
    >
      <div className="grid min-h-0 grid-cols-1 lg:grid-cols-2 lg:items-stretch lg:gap-0 lg:min-h-[min(90dvh,56rem)]">
        {/* Left: copy + CTAs */}
        <div className="flex flex-col justify-center space-y-8 px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:min-h-full lg:py-16 lg:pl-14 lg:pr-10 xl:pl-16 xl:pr-12 2xl:pl-24">
          <div className="animate-hero inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-[color-mix(in_oklch,var(--brand-red)_6%,transparent)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            {eyebrow}
          </div>
          <div className="space-y-6">
            <h1
              id="hero-heading"
              className="animate-hero animate-hero-delay-1 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[3.35rem]"
            >
              {title}
            </h1>
            <p className="animate-hero animate-hero-delay-2 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          </div>
          <div className="animate-hero animate-hero-delay-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              className="h-12 px-8 text-base shadow-lg shadow-primary/25"
              size="lg"
              asChild
            >
              <Link href={primaryCtaHref}>
                {primaryCtaLabel}
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </Button>
            <Button
              className="h-12 px-8 text-base"
              variant="outline"
              size="lg"
              asChild
            >
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>

        {/* Right: images — full height of hero row */}
        <div className="animate-hero animate-hero-delay-2 relative flex min-h-[min(52vh,22rem)] w-full min-w-0 flex-col lg:min-h-0">
          <HeroImageCarousel className="min-h-0 flex-1" />
        </div>
      </div>
    </section>
  );
}
