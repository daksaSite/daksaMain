import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { HOME_FAQ } from "@/lib/site-content";
import { cn } from "@/lib/utils";

/** Homepage FAQ: compact grid on large screens so the block feels shorter. */
export function HomeFaqSection() {
  return (
    <section
      className="relative overflow-hidden bg-[color-mix(in_oklch,var(--brand-navy)_6%,white)]"
      aria-labelledby="home-faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />

      <div className="site-container relative py-10 sm:py-12 lg:py-14">
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-8 lg:mb-9">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary sm:text-base lg:text-lg">
            FAQ
          </p>
          <h2
            id="home-faq-heading"
            className="mt-2 font-heading text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:mt-2.5 lg:text-[2rem] lg:leading-tight"
          >
            Common questions, straight answers
          </h2>
          <p className="mt-2 text-sm leading-snug text-muted-foreground sm:mt-2.5 sm:text-base">
            Quick answers below. For detail,{" "}
            <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-2 sm:gap-2.5 md:grid-cols-2 md:gap-x-4 md:gap-y-2.5 lg:max-w-6xl">
          {HOME_FAQ.map(({ q, a }, i) => (
            <details
              key={`home-faq-${i}`}
              className={cn(
                "faq-details group w-full min-w-0 self-start rounded-xl border border-border/70 bg-card/80 shadow-sm ring-1 ring-foreground/[0.04] transition-[border-color,box-shadow] duration-300",
                "open:border-primary/25 open:bg-card open:shadow-md open:ring-primary/10",
              )}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-3 text-left outline-none [&::-webkit-details-marker]:hidden sm:px-4 sm:py-3.5">
                <span className="min-w-0 font-heading text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                  <span className="mr-1.5 inline-block w-6 shrink-0 font-mono text-[0.65rem] font-bold tabular-nums text-primary/80 sm:w-7 sm:text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {q}
                </span>
                <ChevronDown
                  className="mt-0.5 size-[1.125rem] shrink-0 text-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-180 motion-reduce:duration-200"
                  aria-hidden
                />
              </summary>
              <div className="faq-answer-grid">
                <div className="min-h-0 overflow-hidden">
                  <div className="border-t border-border/50 px-4 pb-3.5 pt-0 sm:px-4">
                    <p className="faq-answer-body pt-2.5 text-[0.8125rem] leading-snug text-muted-foreground sm:text-sm sm:leading-relaxed">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
