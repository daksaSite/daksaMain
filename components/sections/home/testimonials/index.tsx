"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";

import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function TestimonialPreviewSection() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hovered, setHovered] = useState(false);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      ro.disconnect();
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const cardW = el.querySelector("li")?.clientWidth ?? 380;
    el.scrollBy({ left: dir === "right" ? cardW + 24 : -(cardW + 24), behavior: "smooth" });
  };

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
        {/* Header */}
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

        {/* Carousel */}
        <div
          className="group/carousel relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Scroll track */}
          <ul
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-7"
          >
            {TESTIMONIALS.map(({ quote }, i) => (
              <li key={i} className="w-[min(82vw,380px)] shrink-0 sm:w-[min(60vw,420px)] lg:w-[min(38vw,440px)]">
                <blockquote
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card to-muted/25 p-6 sm:p-7"
                >
                  <div className="relative mb-5 sm:mb-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/15 sm:h-12 sm:w-12">
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

          {/* Left arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className={cn(
              "absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all duration-200",
              "hover:border-primary/40 hover:bg-primary hover:text-white",
              hovered && canScrollLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none",
            )}
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className={cn(
              "absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all duration-200",
              "hover:border-primary/40 hover:bg-primary hover:text-white",
              hovered && canScrollRight ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none",
            )}
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Edge fade masks */}
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-muted/50 to-transparent transition-opacity duration-200",
              canScrollLeft ? "opacity-100" : "opacity-0",
            )}
            aria-hidden
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted/50 to-transparent transition-opacity duration-200",
              canScrollRight ? "opacity-100" : "opacity-0",
            )}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
