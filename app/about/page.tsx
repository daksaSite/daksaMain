import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Image from "next/image";

import { Breadcrumbs } from "@/components/breadcrumbs";
import {
  resolveAboutAudienceIcon,
  resolveAboutValueIcon,
} from "@/lib/about-page-icons";
import { getAboutPage } from "@/lib/sanity.about";

const DEFAULT_META_DESCRIPTION =
  "Learn about Daksa Digital — our mission, vision, values, and how we partner with businesses for long-term digital growth.";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();
  return {
    title: about.seoTitle ?? "About",
    description: about.seoDescription ?? DEFAULT_META_DESCRIPTION,
    keywords: [
      "about Daksa Digital",
      "about digital agency Noida",
      "digital agency mission and vision",
      "Noida digital marketing team",
      "Daksa Digital values",
    ],
  };
}

export default async function AboutPage() {
  const about = await getAboutPage();

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[52vh] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[58vh] lg:min-h-[62vh]">
        <Image
          src={about.hero.imageSrc}
          alt={about.hero.imageAlt}
          fill
          quality={100}
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/40 via-transparent to-[var(--brand-navy)]/80"
          aria-hidden
        />

        <div className="site-container relative flex h-full min-h-[52vh] flex-col justify-end pb-14 pt-24 sm:min-h-[58vh] sm:pb-16 sm:pt-28 lg:min-h-[62vh] lg:pb-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About us" },
            ]}
            tone="inverse"
          />
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            {about.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-[2rem] font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-4xl sm:leading-[1.1] lg:text-[3rem]">
            {about.hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
            {about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-border/60 bg-background" aria-label="Company stats">
        <div className="site-container">
          <dl className="grid grid-cols-2 divide-x divide-y divide-border/60 lg:grid-cols-4 lg:divide-y-0">
            {about.stats.map(({ value, label }, i) => (
              <div
                key={`${label}-${i}`}
                className="flex flex-col items-center px-6 py-8 text-center sm:px-8 sm:py-10"
              >
                <dt className="font-heading text-3xl font-extrabold tracking-tight text-[var(--brand-navy)] sm:text-4xl">
                  {value}
                </dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="border-b border-border/60 bg-muted/20" aria-labelledby="story-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="space-y-5">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
                {about.story.eyebrow}
              </p>
              <h2
                id="story-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem] lg:leading-tight"
              >
                {about.story.headline}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                {about.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                <span>{about.story.address}</span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={about.story.imageSrc}
                alt={about.story.imageAlt}
                width={720}
                height={520}
                quality={100}
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--brand-navy)]/75 to-transparent px-5 pb-5 pt-12">
                <p className="font-heading text-sm font-semibold text-white">
                  {about.story.imageCaptionBold}
                </p>
                <p className="mt-0.5 text-xs text-white/65">
                  {about.story.imageCaptionSub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="border-b border-border/60 bg-background" aria-labelledby="mv-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              {about.missionVision.sectionEyebrow}
            </p>
            <h2
              id="mv-heading"
              className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              {about.missionVision.sectionHeadline}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-[var(--brand-navy)] to-[color-mix(in_srgb,var(--brand-navy)_85%,#32375f)] p-8 md:p-10">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                  {about.missionVision.missionTitle}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">
                  {about.missionVision.missionBody}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-8 md:p-10">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/5 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                  {about.missionVision.visionTitle}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {about.missionVision.visionBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-b border-border/60 bg-muted/20" aria-labelledby="values-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              {about.valuesSection.sectionEyebrow}
            </p>
            <h2
              id="values-heading"
              className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              {about.valuesSection.sectionHeadline}
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {about.valuesSection.pillars.map((pillar, i) => {
              const Icon = resolveAboutValueIcon(pillar.iconKey);
              return (
                <li
                  key={`${pillar.title}-${i}`}
                  className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5 sm:p-6"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-[0.9375rem] font-semibold text-foreground">
                      {pillar.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {pillar.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ── Why us + Priorities ── */}
      <section className="border-b border-border/60 bg-background" aria-labelledby="why-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mb-12 lg:mb-16">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              {about.whyPriorities.sectionEyebrow}
            </p>
            <h2
              id="why-heading"
              className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              {about.whyPriorities.sectionHeadline}
            </h2>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-border/60 pr-0 lg:border-r lg:pr-16">
              <p className="mb-7 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {about.whyPriorities.whyColumnLabel}
              </p>
              <ul className="space-y-0 divide-y divide-border/50">
                {about.whyPriorities.whyPoints.map((t, i) => (
                  <li key={`why-${i}`} className="flex items-center gap-5 py-5">
                    <span className="font-heading text-[2rem] font-extrabold leading-none tracking-tight text-primary/20 sm:text-[2.25rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-semibold leading-snug text-foreground sm:text-[1.0625rem]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="my-10 border-t border-border/60 lg:hidden" aria-hidden />

            <div className="pl-0 lg:pl-16">
              <p className="mb-7 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {about.whyPriorities.prioritiesColumnLabel}
              </p>
              <ul className="space-y-0 divide-y divide-border/50">
                {about.whyPriorities.priorities.map((t, i) => (
                  <li key={`pri-${i}`} className="flex items-center gap-5 py-5">
                    <span className="font-heading text-[2rem] font-extrabold leading-none tracking-tight text-[var(--brand-navy)]/15 sm:text-[2.25rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base leading-snug text-muted-foreground sm:text-[1.0625rem]">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who we work with ── */}
      <section className="border-b border-border/60 bg-muted/20" aria-labelledby="audience-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mb-10 text-center sm:mb-12 lg:mb-14">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              {about.audienceSection.eyebrow}
            </p>
            <h2
              id="audience-heading"
              className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              {about.audienceSection.headline}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
            {about.audienceSection.cards.map((card, i) => {
              const Icon = resolveAboutAudienceIcon(card.iconKey);
              return (
                <div
                  key={`${card.label}-${i}`}
                  className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 sm:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-foreground sm:text-[1.0625rem]">
                      {card.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--brand-navy)]" aria-labelledby="about-cta-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl space-y-3">
            <h2
              id="about-cta-heading"
              className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]"
            >
              {about.ctaSection.headline}
            </h2>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              {about.ctaSection.body}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
