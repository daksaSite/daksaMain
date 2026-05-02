import type { LucideIcon } from "lucide-react";
import { Compass, LineChart, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const pillars: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Strategy first",
    body: "Roadmaps rooted in your market, audience, and commercial goals, not vanity metrics.",
    icon: Compass,
  },
  {
    title: "Creative that converts",
    body: "Distinctive craft across content, social, and brand touchpoints with clarity and consistency.",
    icon: Sparkles,
  },
  {
    title: "Execution you can measure",
    body: "Campaigns, sites, and funnels optimized for learning loops and sustainable growth.",
    icon: LineChart,
  },
];

/** Homepage “Why us” / differentiation strip (three pillars). */
export function WhyUsSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-border/60 bg-muted/25"
      aria-labelledby="why-us-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div className="site-container relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="font-heading text-base font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg lg:text-xl">
            Why us
          </p>
          <h2
            id="why-us-heading"
            className="mt-4 font-heading text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:mt-5 lg:text-[2.35rem] lg:leading-[1.12]"
          >
            Why teams choose our model
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg lg:max-w-2xl">
            Three pillars that keep strategy, creative, and delivery aligned with outcomes you can
            see in the business.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {pillars.map(({ title, body, icon: Icon }, i) => (
            <article
              key={title}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border/70 bg-card/80 p-6 pt-7 shadow-[0_16px_40px_-24px_rgba(26,27,53,0.18)] ring-1 ring-foreground/[0.04] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300",
                "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_22px_48px_-20px_rgba(26,27,53,0.28)]",
                "motion-reduce:transform-none motion-reduce:hover:translate-y-0",
              )}
            >
              <span
                className="pointer-events-none absolute right-5 top-5 font-heading text-xs font-semibold tabular-nums text-muted-foreground/70"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div
                className="pointer-events-none absolute -right-px -top-px h-16 w-16 rounded-bl-[2rem] rounded-tr-2xl bg-gradient-to-br from-primary/[0.12] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold tracking-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
