import { Fragment } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PROCESS_STEPS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function ProcessStepCard({
  index,
  step,
  detail,
  className,
}: {
  index: number;
  step: string;
  detail: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-4 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform sm:p-5",
        "hover:border-primary/45 hover:from-white/[0.12] hover:to-white/[0.05] hover:shadow-[0_24px_50px_-14px_rgba(233,30,67,0.18)] hover:ring-primary/25",
        "motion-safe:hover:-translate-y-1.5 motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/20 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative">
        <div className="flex items-start gap-2.5 sm:gap-3">
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-md shadow-primary/35 ring-2 ring-primary/25",
              "transition-[transform,box-shadow] duration-300 ease-out",
              "group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/40",
              "motion-reduce:transition-none motion-reduce:group-hover:scale-100",
              "sm:h-10 sm:w-10 sm:text-sm",
            )}
            aria-hidden
          >
            {index + 1}
          </span>
          <h3 className="min-w-0 flex-1 pt-0.5 font-heading text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
            {step}
          </h3>
        </div>
        <p className="relative mt-2.5 border-t border-white/15 pt-2.5 text-sm leading-snug text-white/75 transition-colors duration-300 group-hover:border-primary/30 group-hover:text-white/90 sm:mt-3 sm:pt-3 sm:text-[0.9375rem]">
          {detail}
        </p>
      </div>
    </div>
  );
}

/** Homepage process preview: horizontal pipeline + animated connectors (compact). */
export function ProcessPreviewSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-white/10 bg-[var(--brand-navy)] text-white"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-30%,rgba(233,30,67,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
        aria-hidden
      />

      <div className="site-container relative py-12 sm:py-14 lg:py-16">
        <div className="mb-8 flex flex-col gap-5 sm:mb-9 lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-2xl space-y-3">
            <p className="font-heading text-base font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg lg:text-xl">
              Process
            </p>
            <h2
              id="process-heading"
              className="font-heading text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.15rem] lg:leading-[1.12]"
            >
              A clear rhythm from kickoff to scale
            </h2>
            <p className="text-base leading-relaxed text-white/75">
              Structured phases keep stakeholders aligned while we move quickly where it counts.
            </p>
          </div>
          <Button
            variant="outline"
            className="h-11 w-fit shrink-0 border-white/25 bg-white/5 px-6 text-[0.9375rem] font-semibold text-white hover:bg-white/12 hover:text-white"
            asChild
          >
            <Link href="/process">See full process</Link>
          </Button>
        </div>

        {/* Mobile: compact vertical flow */}
        <ol className="flex flex-col lg:hidden">
          {PROCESS_STEPS.map(({ step, detail }, i) => (
            <li key={step} className="flex gap-3 pb-6 last:pb-0 sm:gap-4">
              <div className="flex w-9 shrink-0 flex-col items-center sm:w-10">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-sm sm:h-10 sm:w-10 sm:text-sm"
                  aria-hidden
                >
                  {i + 1}
                </span>
                {i < PROCESS_STEPS.length - 1 ? (
                  <>
                    <div
                      className="process-flow-track-v my-1.5 min-h-[1.25rem] w-[3px] flex-1 rounded-full sm:min-h-[1.5rem]"
                      aria-hidden
                    />
                    <ArrowDown
                      className="process-flow-arrow-v size-6 text-primary sm:size-7"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                  </>
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <ProcessStepCard index={i} step={step} detail={detail} />
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop: single row pipeline */}
        <div className="hidden lg:block">
          <div className="flex flex-row items-stretch gap-0">
            {PROCESS_STEPS.map(({ step, detail }, i) => (
              <Fragment key={step}>
                <div className="min-w-0 flex-1">
                  <ProcessStepCard index={i} step={step} detail={detail} />
                </div>
                {i < PROCESS_STEPS.length - 1 ? (
                  <div
                    className="flex w-11 shrink-0 flex-col justify-center self-center px-0.5 xl:w-12"
                    aria-hidden
                  >
                    <div className="relative flex items-center">
                      <div className="process-flow-track-h h-[3px] min-w-0 flex-1 rounded-full" />
                      <ArrowRight className="process-flow-arrow-h -ml-0.5 size-7 shrink-0 text-primary xl:size-8" strokeWidth={2.25} />
                    </div>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
