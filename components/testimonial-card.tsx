"use client";

import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  const n = Math.min(5, Math.max(0, Math.round(rating)));
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${n} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4 sm:size-[1.0625rem]",
            i < n
              ? "fill-primary text-primary"
              : "fill-muted/30 text-muted/30",
          )}
          aria-hidden
        />
      ))}
    </div>
  );
}

export type TestimonialCardProps = {
  quote: string;
  name: string;
  designation: string;
  rating: number;
  className?: string;
};

export function TestimonialCard({
  quote,
  name,
  designation,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 pt-7 ring-1 ring-foreground/[0.04] backdrop-blur-sm transition-[transform,border-color] duration-300",
        "hover:-translate-y-0.5 hover:border-primary/25",
        "motion-reduce:transform-none motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -right-px -top-px h-16 w-16 rounded-bl-[2rem] rounded-tr-2xl bg-gradient-to-br from-primary/[0.12] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative mb-5">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100">
          <Quote className="size-5" strokeWidth={1.75} aria-hidden />
        </span>
      </div>

      <blockquote className="relative flex-1">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.65]">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <footer className="relative mt-6 border-t border-border/60 pt-5">
        <p className="font-heading text-base font-semibold tracking-tight text-[var(--brand-navy)]">
          {name}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{designation}</p>
        <div className="mt-3">
          <StarRating rating={rating} />
        </div>
      </footer>
    </article>
  );
}
