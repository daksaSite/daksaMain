"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { TestimonialCard } from "@/components/testimonial-card";
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
    const cardW = el.querySelector("li")?.clientWidth ?? 400;
    el.scrollBy({
      left: dir === "right" ? cardW + 24 : -(cardW + 24),
      behavior: "smooth",
    });
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
              Real feedback from leaders we&apos;ve partnered with—ratings,
              roles, and what stood out for them.
            </p>
          </div>
          <Button
            variant="outline"
            className="h-12 w-fit shrink-0 px-7 text-[0.9375rem] font-semibold"
            asChild
          >
            <Link href="/testimonials">All testimonials</Link>
          </Button>
        </div>

        <div
          className="group/carousel relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <ul
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-7"
          >
            {TESTIMONIALS.map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className="w-[min(88vw,400px)] shrink-0 sm:w-[min(68vw,440px)] lg:w-[min(42vw,480px)]"
              >
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  designation={t.designation}
                  rating={t.rating}
                />
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className={cn(
              "absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all duration-200",
              "hover:border-primary/40 hover:bg-primary hover:text-white",
              hovered && canScrollLeft
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-2 opacity-0",
            )}
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className={cn(
              "absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-md transition-all duration-200",
              "hover:border-primary/40 hover:bg-primary hover:text-white",
              hovered && canScrollRight
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none translate-x-2 opacity-0",
            )}
          >
            <ChevronRight className="size-5" />
          </button>

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
