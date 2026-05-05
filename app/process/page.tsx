import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  UserCircle2,
} from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { PROCESS_STEPS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Daksa Digital runs engagements—from discovery and strategy through execution, measurement, and ongoing optimization—with clear phases and accountable delivery.",
  keywords: [
    "Daksa Digital process",
    "digital marketing workflow",
    "campaign strategy and execution",
    "marketing delivery model",
  ],
};

const expectations = [
  {
    title: "Single accountable lead",
    body: "One owner coordinates across workstreams so you are not chasing threads in chat.",
    icon: UserCircle2,
  },
  {
    title: "Rhythm that fits your team",
    body: "Weekly or biweekly reviews, async updates, and shared dashboards when they actually reduce noise—not meetings for their own sake.",
    icon: CalendarClock,
  },
  {
    title: "Scope changes, handled explicitly",
    body: "When priorities shift, we document impact on timeline and outcomes so expectations stay aligned.",
    icon: ClipboardCheck,
  },
] as const;

export default function ProcessPage() {
  return (
    <div className="site-container py-16 sm:py-20 lg:py-24">
      <PageIntro
        eyebrow="Process"
        title="From discovery to optimization—with clear phases at every step."
        description="Every engagement follows the same backbone: understand your reality, plan with intent, ship work you can measure, then refine based on what the data and your team tell us. Below is how that shows up in practice, week by week."
        className="mb-14 max-w-4xl md:mb-20"
      />

      <section aria-labelledby="process-phases-heading">
        <h2
          id="process-phases-heading"
          className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Four phases
        </h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Each phase has clear inputs and outputs so stakeholders know what to expect before we move on.
        </p>

        <ol className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-7">
          {PROCESS_STEPS.map(
            ({ step, detail, icon: Icon, description, activities }, i) => (
              <li key={step}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-7 shadow-[0_16px_44px_-28px_rgba(26,27,53,0.2)] ring-1 ring-foreground/[0.04] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300",
                    "hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_22px_52px_-24px_rgba(26,27,53,0.28)]",
                    "motion-reduce:transform-none motion-reduce:hover:translate-y-0",
                  )}
                >
                  <div
                    className="pointer-events-none absolute -right-px -top-px h-24 w-24 rounded-bl-[2.25rem] rounded-tr-2xl bg-gradient-to-br from-primary/[0.14] to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="relative flex flex-1 flex-col">
                    <div className="flex items-start gap-4">
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                        aria-hidden
                      >
                        <Icon className="size-7" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          Phase {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
                          {step}
                        </h3>
                        <p className="mt-1 text-sm font-medium leading-snug text-primary sm:text-[0.9375rem]">
                          {detail}
                        </p>
                      </div>
                    </div>

                    <p className="relative mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">
                      {description}
                    </p>

                    <ul className="relative mt-5 space-y-3 border-t border-border/60 pt-5">
                      {activities.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-[0.9375rem]">
                          <CheckCircle2
                            className="mt-0.5 size-[1.125rem] shrink-0 text-primary"
                            aria-hidden
                          />
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ),
          )}
        </ol>
      </section>

      <section
        className="mt-16 lg:mt-20"
        aria-labelledby="process-expectations-heading"
      >
        <h2
          id="process-expectations-heading"
          className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          What you can expect week to week
        </h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Beyond the four phases, this is how we keep momentum without burying your team in process.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {expectations.map(({ title, body, icon: Icon }) => (
            <li key={title}>
              <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-muted/25 p-6 ring-1 ring-foreground/[0.03]">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-primary shadow-sm ring-1 ring-border/80"
                  aria-hidden
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-14 flex flex-wrap gap-4 lg:mt-16">
        <Button asChild size="lg" className="h-11 px-7 text-base font-semibold">
          <Link href="/contact">Start a conversation</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 px-7 text-base font-semibold"
        >
          <Link href="/services">Browse services</Link>
        </Button>
      </div>
    </div>
  );
}
