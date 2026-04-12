"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/logo/logo.png"
            alt="Daksa Digital Pvt. Ltd."
            width={176}
            height={56}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-[color-mix(in_oklch,var(--brand-navy)_8%,transparent)] text-foreground"
                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex" size="sm" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>

          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium shadow-sm [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div
              className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-border bg-popover py-1 text-popover-foreground shadow-lg ring-1 ring-foreground/5"
              role="menu"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-2.5 text-sm hover:bg-muted"
                  role="menuitem"
                >
                  {label}
                </Link>
              ))}
              <div className="border-t border-border p-2">
                <Button className="w-full" size="sm" asChild>
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
