import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

import type { HomeFaqItem } from "@/lib/sanity.home";
import { HOME_PAGE_FALLBACK } from "@/lib/sanity.home";
import { cn } from "@/lib/utils";

const fb = HOME_PAGE_FALLBACK;

export type HomeFaqSectionProps = {
  eyebrow?: string;
  headline?: string;
  introLead?: string;
  contactLinkLabel?: string;
  contactLinkHref?: string;
  introTrail?: string;
  items?: HomeFaqItem[];
};

/** Homepage FAQ: essentials only; heading left, accordions right on large screens. */
export function HomeFaqSection({
  eyebrow = fb.faqEyebrow!,
  headline = fb.faqHeadline!,
  introLead = fb.faqIntroLead!,
  contactLinkLabel = fb.faqContactLinkLabel!,
  contactLinkHref = fb.faqContactLinkHref!,
  introTrail = fb.faqIntroTrail!,
  items = fb.faqItems!,
}: HomeFaqSectionProps) {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-border/60 bg-muted/25"
      aria-labelledby="home-faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_60%_at_100%_-15%,rgba(233,30,67,0.08),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />

      <div className="site-container relative py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14 xl:gap-20">
          <header className="mx-auto max-w-xl text-center lg:mx-0 lg:w-[min(100%,26rem)] lg:max-w-none lg:shrink-0 lg:sticky lg:top-28 lg:self-start lg:text-left">
            <div className="inline-flex items-center justify-center gap-2 text-primary lg:justify-start">
              <HelpCircle className="size-[1.125rem] shrink-0 sm:size-5" aria-hidden />
              <p className="font-heading text-base font-semibold uppercase tracking-[0.2em] sm:text-lg lg:text-xl">
                {eyebrow}
              </p>
            </div>
            <h2
              id="home-faq-heading"
              className="mt-4 font-heading text-balance text-3xl font-bold tracking-tight text-[var(--brand-navy)] sm:text-4xl lg:mt-5 lg:text-[2.35rem] lg:leading-[1.12]"
            >
              {headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {introLead}
              <Link
                href={contactLinkHref}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {contactLinkLabel}
              </Link>
              {introTrail}
            </p>
          </header>

          <div className="min-w-0 flex-1 space-y-2.5 sm:space-y-3">
            {items.map(({ question, answer }, i) => (
              <details
                key={`${question}-${i}`}
                className={cn(
                  "faq-details group w-full min-w-0 rounded-2xl border border-border/70 bg-card/85 shadow-[0_12px_36px_-22px_rgba(26,27,53,0.16)] ring-1 ring-foreground/[0.04] backdrop-blur-sm transition-[border-color,box-shadow] duration-300",
                  "open:border-primary/30 open:bg-card open:shadow-[0_18px_44px_-22px_rgba(26,27,53,0.22)] open:ring-primary/12",
                  "hover:border-primary/15",
                )}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/40 [&::-webkit-details-marker]:hidden sm:px-5 sm:py-4">
                  <span className="min-w-0 font-heading text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                    <span className="mr-2 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-mono text-[0.65rem] font-bold tabular-nums text-primary ring-1 ring-primary/12 sm:h-8 sm:w-8 sm:text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {question}
                  </span>
                  <ChevronDown
                    className="mt-0.5 size-[1.125rem] shrink-0 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-180 motion-reduce:duration-200"
                    aria-hidden
                  />
                </summary>
                <div className="faq-answer-grid">
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-border/50 px-4 pb-4 pt-0 sm:px-5">
                      <p className="faq-answer-body pt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
