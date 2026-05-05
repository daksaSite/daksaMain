"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { HERO_HOME_IMAGES, HERO_IMAGE_VERSION } from "@/lib/media";
import { cn } from "@/lib/utils";

export type HeroCarouselSlide = { src: string; alt: string };

const INTERVAL_MS = 5000;

export function HeroImageCarousel({
  className,
  slides,
}: {
  className?: string;
  slides?: HeroCarouselSlide[];
}) {
  const sources =
    slides && slides.length > 0
      ? slides
      : HERO_HOME_IMAGES.map((src, i) => ({
          src,
          alt: `Daksa Digital showcase ${i + 1} of ${HERO_HOME_IMAGES.length}`,
        }));
  const count = sources.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className={cn(
        "relative flex h-full min-h-0 w-full flex-col",
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <figure
        className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[var(--brand-navy)]"
        aria-roledescription="carousel"
        aria-label="Featured imagery"
      >
        <div className="relative min-h-0 flex-1">
          {sources.map((item, i) => (
            <div
              key={`${item.src}-${HERO_IMAGE_VERSION}-${i}`}
              className={cn(
                "absolute inset-0",
                i === index ? "z-[1]" : "z-0"
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                quality={100}
                priority={i === 0}
                loading="eager"
                placeholder="empty"
                className={cn(
                  "object-cover object-center transition-opacity duration-700 ease-out",
                  i === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                )}
                aria-hidden={i !== index}
              />
            </div>
          ))}
        </div>

        <figcaption className="sr-only">
          Slide {index + 1} of {count}
        </figcaption>
      </figure>

      {count > 1 && (
        <p className="sr-only" aria-live="polite">
          Image {index + 1} of {count}
        </p>
      )}
    </div>
  );
}
