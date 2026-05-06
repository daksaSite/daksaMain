import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { resolveAboutOrbitIcon } from "@/lib/about-orbit-icons";
import type { HomeAboutOrbitItem } from "@/lib/sanity.home";
import { HOME_PAGE_FALLBACK } from "@/lib/sanity.home";
import { cn } from "@/lib/utils";

/** Degrees on the orbit path: top, lower-right, lower-left. */
const ORBIT_ANGLES_DEG = [-90, 30, 150] as const;

const fb = HOME_PAGE_FALLBACK;

export type AboutPreviewSectionProps = {
  eyebrow?: string;
  headline?: string;
  paragraph1?: string;
  paragraph2?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryLinkLabel?: string;
  secondaryLinkHref?: string;
  orbitHeading?: string;
  orbitFootnote?: string;
  orbitServices?: HomeAboutOrbitItem[];
};

export function AboutPreviewSection({
  eyebrow = fb.aboutEyebrow!,
  headline = fb.aboutHeadline!,
  paragraph1 = fb.aboutParagraph1!,
  paragraph2 = fb.aboutParagraph2!,
  primaryCtaLabel = fb.aboutPrimaryCtaLabel!,
  primaryCtaHref = fb.aboutPrimaryCtaHref!,
  secondaryLinkLabel = fb.aboutSecondaryLinkLabel!,
  secondaryLinkHref = fb.aboutSecondaryLinkHref!,
  orbitHeading = fb.aboutOrbitHeading!,
  orbitFootnote = fb.aboutOrbitFootnote!,
  orbitServices = fb.aboutOrbitServices!,
}: AboutPreviewSectionProps) {
  const services = orbitServices.slice(0, 3);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border/60 bg-muted/25"
      aria-labelledby="about-preview-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div className="site-container relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16 xl:gap-20">
          <div className="space-y-8 lg:col-span-6 xl:col-span-6">
            <p className="font-heading text-base font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg lg:text-xl">
              {eyebrow}
            </p>
            <h2
              id="about-preview-heading"
              className={cn(
                "font-heading text-balance font-bold tracking-tight text-foreground",
                "text-[2.05rem] leading-[1.05] sm:text-5xl sm:leading-[1.1] lg:text-[2.85rem] lg:leading-[1.08]",
              )}
            >
              {headline}
            </h2>
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground text-justify sm:text-left sm:text-lg">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <Button
                className="h-12 px-8 text-base font-semibold shadow-md shadow-primary/15"
                size="lg"
                asChild
              >
                <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
              </Button>
              <Link
                href={secondaryLinkHref}
                className="font-heading text-sm font-semibold text-primary underline-offset-4 transition hover:underline"
              >
                {secondaryLinkLabel}
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6 xl:col-span-6">
            <div
              className="relative mx-auto w-full max-w-lg rounded-[2rem] border border-border/70 bg-gradient-to-b from-card to-muted/30 p-6 shadow-[0_24px_56px_-28px_rgba(26,27,53,0.28)] ring-1 ring-foreground/[0.04] sm:p-8 lg:max-w-none"
              aria-label="Three core services around a globe illustration"
            >
              <p className="mb-6 text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {orbitHeading}
              </p>

              <div
                className={cn(
                  "relative mx-auto aspect-square w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)]",
                  "[--orbit-r:min(31vw,8.5rem)] sm:[--orbit-r:min(28vw,9.75rem)] lg:[--orbit-r:10.25rem]",
                )}
              >
                {/* Orbit rings */}
                <div
                  className="about-orbit-ring-spin pointer-events-none absolute inset-[2%] rounded-full border border-dashed border-primary/25"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-[12%] rounded-full bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-[20%] rounded-full border border-white/50 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)] dark:border-white/10 dark:shadow-none"
                  aria-hidden
                />

                <div className="absolute inset-[24%] z-10 flex items-center justify-center">
                  <Image
                    src="/images/hero/globe.png"
                    alt=""
                    width={360}
                    height={360}
                    className="h-full w-full object-contain drop-shadow-[0_16px_40px_rgba(26,27,53,0.28)]"
                    sizes="(max-width: 640px) 42vw, 240px"
                    priority={false}
                  />
                </div>

                {/* Revolves with dashed ring; counter-spin + rotate(-angle) keeps cards screen-straight */}
                <div className="about-orbit-services-spin pointer-events-none absolute inset-0 z-20">
                  {services.map((service, i) => {
                    const Icon = resolveAboutOrbitIcon(service.iconKey);
                    const angle = ORBIT_ANGLES_DEG[i];
                    return (
                      <div
                        key={`${service.title}-${i}`}
                        className="pointer-events-none absolute left-1/2 top-1/2"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * var(--orbit-r)))`,
                        }}
                      >
                        <div className="about-orbit-service-counter pointer-events-auto">
                          <div
                            className="flex justify-center"
                            style={{
                              transform: `rotate(${-angle}deg)`,
                              transformOrigin: "center center",
                            }}
                          >
                            <Link
                              href={service.href}
                              className={cn(
                                "flex w-[9.25rem] flex-col items-center gap-1.5 rounded-2xl border border-border/80 bg-card/95 px-2.5 py-2.5 text-center shadow-md ring-1 ring-foreground/[0.05] backdrop-blur-sm transition duration-200",
                                "hover:border-primary/45 hover:shadow-lg hover:ring-primary/15",
                                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                                "sm:w-[10.25rem] sm:gap-2 sm:px-3 sm:py-3",
                              )}
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-10 sm:w-10">
                                <Icon
                                  className="size-[1.15rem] sm:size-5"
                                  aria-hidden
                                />
                              </span>
                              <span className="font-heading text-[0.7rem] font-semibold leading-snug text-foreground sm:text-xs">
                                {service.title}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="mt-8 text-justify text-sm leading-relaxed text-muted-foreground sm:text-center">
                {orbitFootnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
