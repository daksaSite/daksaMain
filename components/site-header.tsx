"use client";

import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MEDIA } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function navPillClass(active: boolean) {
  return cn(
    "rounded-md px-2.5 py-1.5 text-[0.9375rem] font-semibold leading-tight tracking-tight transition-colors duration-150",
    active
      ? "bg-[var(--nav-pill-active)] text-[var(--brand-navy)]"
      : "text-[var(--brand-navy)]/70 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]"
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  const isServicesActive =
    pathname === "/services" ||
    pathname.startsWith("/services/") ||
    pathname === "/pricing" ||
    pathname.startsWith("/pricing/");

  const dropdownLinkClass =
    "block rounded-md px-2.5 py-2 text-[0.9375rem] font-semibold leading-snug text-[var(--brand-navy)]/90 transition-colors duration-150 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]";

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85">
      <div className="site-container relative flex min-h-[4.5rem] items-center justify-between gap-3 py-2 sm:min-h-20 sm:py-3">
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center transition-opacity hover:opacity-90"
        >
          <Image
            src={MEDIA.images.logoMain}
            alt="Daksa Digital Pvt. Ltd."
            width={560}
            height={180}
            quality={100}
            className="h-11 w-auto sm:h-12 md:h-14 lg:h-16 xl:h-[4.5rem]"
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, (max-width: 1280px) 230px, 260px"
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 top-1/2 z-10 hidden min-w-0 max-w-[min(100vw-20rem,52rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex xl:max-w-[56rem]"
          aria-label="Main"
        >
          <div className="flex flex-wrap items-center justify-center gap-0.5">
            <Link href="/" className={navPillClass(pathname === "/")}>
              Home
            </Link>
            <Link
              href="/about"
              className={navPillClass(
                pathname === "/about" || pathname.startsWith("/about/")
              )}
            >
              About us
            </Link>

            {/* Services: hover dropdown, vertical list, chevron rotates on row hover */}
            <div className="group/services relative">
              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[0.9375rem] font-semibold leading-tight tracking-tight transition-colors duration-150",
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                  isServicesActive
                    ? "bg-[var(--nav-pill-active)] text-[var(--brand-navy)]"
                    : "text-[var(--brand-navy)]/70 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]",
                  "group-hover/services:bg-[var(--nav-pill)] group-hover/services:text-[var(--brand-navy)]"
                )}
                aria-haspopup="menu"
              >
                Services
                <ChevronDown
                  className="size-3.5 shrink-0 opacity-80 transition-transform duration-200 group-hover/services:rotate-180 group-focus-within/services:rotate-180"
                  aria-hidden
                />
              </button>

              <div
                className="pointer-events-none invisible absolute left-0 top-full z-50 pt-1.5 opacity-0 transition-all duration-200 group-hover/services:pointer-events-auto group-hover/services:visible group-hover/services:opacity-100 group-focus-within/services:pointer-events-auto group-focus-within/services:visible group-focus-within/services:opacity-100"
                role="menu"
              >
                <div className="flex min-w-[13.5rem] flex-col gap-px rounded-lg border border-border/80 bg-popover p-1.5 shadow-lg ring-1 ring-foreground/[0.04]">
                  <Link
                    href="/services"
                    className={dropdownLinkClass}
                    role="menuitem"
                  >
                    All services
                  </Link>
                  <Link
                    href="/pricing"
                    className={dropdownLinkClass}
                    role="menuitem"
                  >
                    Pricing
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/testimonials"
              className={navPillClass(
                pathname === "/testimonials" ||
                  pathname.startsWith("/testimonials/")
              )}
            >
              Testimonials
            </Link>
            {/* <Link
              href="/our-work"
              className={navPillClass(
                pathname === "/our-work" || pathname.startsWith("/our-work/")
              )}
            >
              Our work
            </Link> */}
            <Link
              href="/contact"
              className={navPillClass(
                pathname === "/contact" || pathname.startsWith("/contact/")
              )}
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="relative z-10 flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            className="hidden h-11 gap-2 px-6 text-base font-semibold shadow-md transition-shadow hover:shadow-lg sm:inline-flex"
            size="lg"
            asChild
          >
            <Link href="/contact">
              <MessageCircle
                className="size-[1.125rem] transition-transform duration-300 ease-out group-hover/button:scale-110 group-hover/button:-rotate-6 sm:size-5"
                aria-hidden
              />
              <span>Let&apos;s discuss</span>
              <ArrowRight
                className="size-4 transition-transform duration-300 ease-out group-hover/button:translate-x-1"
                aria-hidden
              />
            </Link>
          </Button>

          <details className="relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-lg border border-border bg-card px-2.5 py-1.5 text-sm font-semibold shadow-sm [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div
              className="absolute right-0 z-50 mt-2 w-72 overflow-hidden rounded-xl border border-border bg-popover py-2 text-popover-foreground shadow-lg ring-1 ring-foreground/5"
              role="menu"
            >
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-semibold text-[var(--brand-navy)]/80 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]"
                role="menuitem"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-semibold text-[var(--brand-navy)]/80 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]"
                role="menuitem"
              >
                About us
              </Link>
              <div className="border-t border-border px-3 py-2">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </p>
                <Link
                  href="/services"
                  className="mt-1.5 block py-1.5 text-sm font-semibold hover:text-[var(--brand-navy)]"
                >
                  All services
                </Link>
                <Link
                  href="/pricing"
                  className="block py-1.5 text-sm font-semibold hover:text-[var(--brand-navy)]"
                >
                  Pricing
                </Link>
              </div>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-sm font-semibold text-[var(--brand-navy)]/80 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]"
                role="menuitem"
              >
                Testimonials
              </Link>
              {/* <Link
                href="/our-work"
                className="block px-3 py-2 text-sm font-semibold text-[var(--brand-navy)]/80 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]"
                role="menuitem"
              >
                Our work
              </Link> */}
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-semibold text-[var(--brand-navy)]/80 hover:bg-[var(--nav-pill)] hover:text-[var(--brand-navy)]"
                role="menuitem"
              >
                Contact
              </Link>
              <div className="border-t border-border p-2">
                <Button
                  className="h-11 w-full gap-2 text-base font-semibold shadow-md"
                  size="lg"
                  asChild
                >
                  <Link href="/contact">
                    <MessageCircle
                      className="size-5 transition-transform duration-300 ease-out group-hover/button:scale-110 group-hover/button:-rotate-6"
                      aria-hidden
                    />
                    <span>Let&apos;s discuss</span>
                    <ArrowRight
                      className="size-4 transition-transform duration-300 ease-out group-hover/button:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
