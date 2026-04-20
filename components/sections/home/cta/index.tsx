import Link from "next/link";
import { PhoneCall, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HomeCtaSection() {
  return (
    <section
      className="relative z-30 -mt-44 -mb-44 bg-transparent py-0"
      aria-labelledby="cta-heading"
    >
      <div className="site-container">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative overflow-hidden rounded-xl border border-primary/45 bg-[var(--primary)] px-6 py-12 shadow-[0_20px_45px_-24px_rgba(26,27,53,0.35)] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent"
              aria-hidden
            />

            <div className="relative mx-auto flex min-h-[260px] max-w-4xl flex-col items-center justify-center text-center sm:min-h-[290px]">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/18 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white sm:mb-5 sm:text-xs">
                <Sparkles className="size-3.5" aria-hidden />
                Growth partner
              </div>
              <h2
                id="cta-heading"
                className="font-heading text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]"
              >
                Let&apos;s Take Your Business Further
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[color-mix(in_oklch,white_90%,transparent)] sm:text-lg">
                Partner with us for tailored strategies that drive success. Our
                experts are ready to help you grow and thrive - let&apos;s make it
                happen!
              </p>
              <Button
                className="mt-8 h-12 border border-white/70 bg-white px-8 text-base font-semibold text-[var(--brand-navy)] shadow-[0_18px_32px_-18px_rgba(26,27,53,0.45)] hover:border-[color-mix(in_srgb,var(--primary)_82%,#000)] hover:bg-[color-mix(in_srgb,var(--primary)_82%,#000)] hover:text-white sm:px-10"
                size="lg"
                asChild
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <PhoneCall className="size-4" aria-hidden />
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
