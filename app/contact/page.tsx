import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { InquiryForm } from "@/components/inquiry-form";
import { Button } from "@/components/ui/button";
import { getContactPage } from "@/lib/sanity.contact";

const DEFAULT_META_DESCRIPTION =
  "Reach Daksa Digital in Noida phone, email, inquiry form, and directions to Sector 63, G Block.";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContactPage();
  return {
    title: page.seoTitle || "Contact",
    description: page.seoDescription || DEFAULT_META_DESCRIPTION,
    keywords: [
      "contact Daksa Digital",
      "digital agency Noida contact",
      "digital marketing agency Noida contact",
      "Daksa Digital phone",
      "Daksa Digital email",
    ],
  };
}

export default async function ContactPage() {
  const page = await getContactPage();
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative min-h-[46vh] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[50vh] lg:min-h-[52vh]">
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
          className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/55 via-transparent to-[var(--brand-navy)]/88"
          aria-hidden
        />

        <div className="site-container relative flex min-h-[46vh] flex-col justify-end pb-12 pt-24 sm:min-h-[50vh] sm:pb-14 sm:pt-28 lg:min-h-[52vh] lg:pb-16">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            {page.hero.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-[3rem] lg:leading-[1.08]">
            {page.hero.title}
       
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:mt-5 sm:text-lg">
            {page.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── Form + details ── */}
      <section className="border-b border-border/60 bg-background" aria-labelledby="contact-form-heading">
        <div className="site-container py-14 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">

            {/* Left — channels */}
            <div className="lg:col-span-5">
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                {page.reachUs.heading}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {page.reachUs.intro}
              </p>

              <ul className="mt-10 space-y-8">
                <li className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {page.reachUs.officeLabel}
                    </p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{page.reachUs.officeAddress}</p>
                    <Button variant="link" className="mt-2 h-auto p-0 text-primary" asChild>
                      <a
                        href={page.reachUs.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold"
                      >
                        Open in Google Maps
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    </Button>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {page.reachUs.phoneLabel}
                    </p>
                    <a
                      href={page.reachUs.phoneHref}
                      className="mt-1 inline-block font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {page.reachUs.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/10">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {page.reachUs.emailLabel}
                    </p>
                    <a
                      href={`mailto:${page.reachUs.email}`}
                      className="mt-1 inline-block break-all font-medium text-primary underline-offset-4 hover:underline"
                    >
                      {page.reachUs.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl border border-border/70 bg-muted/25 px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {page.reachUs.websiteLabel}
                </p>
                <Link
                  href={page.reachUs.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 font-heading font-semibold text-foreground hover:text-primary"
                >
                  {page.reachUs.websiteText}
                  <ArrowUpRight className="size-4 opacity-70" aria-hidden />
                </Link>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm ring-1 ring-foreground/[0.03] sm:p-8 lg:p-10">
                <h2
                  id="contact-form-heading"
                  className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                >
                  {page.inquiryPanel.heading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  {page.inquiryPanel.intro}
                </p>
                <InquiryForm className="mt-8" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="border-b border-border/60 bg-muted/15" aria-labelledby="map-heading">
        <div className="site-container py-14 sm:py-20 lg:py-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="map-heading"
                className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                {page.mapSection.heading}
              </h2>
              <p className="mt-1 max-w-lg text-sm text-muted-foreground sm:text-base">
                {page.mapSection.intro}
              </p>
            </div>
            <Button variant="outline" className="w-fit shrink-0 gap-1.5" asChild>
              <a href={page.reachUs.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {page.mapSection.mapsButtonLabel}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted shadow-inner">
            <div className="aspect-[16/10] min-h-[240px] w-full sm:aspect-[21/9] sm:min-h-[280px] lg:min-h-[320px]">
              <iframe
                title="Daksa Digital office location on Google Maps"
                src={page.mapSection.mapEmbedSrc}
                className="size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
