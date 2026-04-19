import Link from "next/link";
import { Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function TestimonialPreviewSection() {
  const preview = TESTIMONIALS.slice(0, 2);

  return (
    <section
      className="relative overflow-hidden border-b border-border/60 bg-muted/25"
      aria-labelledby="testimonial-preview-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />

      <div className="site-container relative py-16 sm:py-20 lg:py-24">
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl space-y-3 lg:space-y-4">
            <p className="font-heading text-base font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg lg:text-xl">
              Social proof
            </p>
            <h2
              id="testimonial-preview-heading"
              className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
            >
              Trusted by teams who value follow-through
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              A quick read. Full testimonials and more context are on the dedicated page.
            </p>
          </div>
          <Button variant="outline" className="h-12 w-fit shrink-0 px-7 text-[0.9375rem] font-semibold" asChild>
            <Link href="/testimonials">All testimonials</Link>
          </Button>
        </div>

        <ul className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {preview.map(({ quote }, i) => (
            <li key={i}>
              <blockquote
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card to-muted/25 p-6 shadow-[0_16px_44px_-28px_rgba(26,27,53,0.2)] ring-1 ring-foreground/[0.05] transition-[transform,box-shadow,border-color] duration-300 sm:p-7 lg:p-8",
                  "hover:border-primary/25 hover:shadow-[0_24px_56px_-24px_rgba(26,27,53,0.28)] hover:ring-primary/10",
                  "motion-safe:hover:-translate-y-1 motion-reduce:hover:translate-y-0",
                )}
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/[0.06] blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative mb-5 sm:mb-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100 sm:h-12 sm:w-12">
                    <Quote className="size-5 sm:size-6" strokeWidth={1.75} aria-hidden />
                  </span>
                </div>
                <p className="relative flex-1 text-base leading-[1.7] text-foreground/95 sm:text-lg">
                  &ldquo;{quote}&rdquo;
                </p>
                <div
                  className="mt-6 h-px w-10 rounded-full bg-gradient-to-r from-primary/60 to-primary/10 sm:mt-7"
                  aria-hidden
                />
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
