"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CONTACT } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    href: CONTACT.social.instagram,
    label: "Instagram",
    Icon: InstagramIcon,
  },
  {
    href: CONTACT.social.linkedin,
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: CONTACT.social.facebook,
    label: "Facebook",
    Icon: FacebookIcon,
  },
] as const;

/** Hide after scrolling down past this; show again only when near top (hysteresis stops jitter). */
const SCROLL_COLLAPSE_AFTER = 48;
const SCROLL_EXPAND_BEFORE = 12;

export function TopBar() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setCollapsed((prev) => {
        if (y > SCROLL_COLLAPSE_AFTER) return true;
        if (y < SCROLL_EXPAND_BEFORE) return false;
        return prev;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "hidden border-b border-white/[0.08] bg-[var(--brand-navy)] motion-reduce:!transition-none lg:grid lg:transition-[grid-template-rows] lg:duration-300 lg:ease-[cubic-bezier(0.4,0,0.2,1)]",
        collapsed
          ? "pointer-events-none border-b-0 lg:grid-rows-[0fr]"
          : "lg:grid-rows-[1fr]"
      )}
      aria-hidden={collapsed}
    >
      {/* min-h-0 + overflow hidden lets grid row animate smoothly without max-height jank */}
      <div className="min-h-0 overflow-hidden">
        <div className="site-container flex w-full flex-col gap-3 py-2.5 text-xs text-white sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-3 md:gap-12 lg:gap-16 sm:text-sm">
        <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:items-center sm:pr-4">
          <MapPin
            className="mt-0.5 size-4 shrink-0 text-white/75 sm:mt-0 sm:size-[1.125rem]"
            aria-hidden
          />
          <span className="leading-snug text-white/92">{CONTACT.address}</span>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-5 gap-y-2 sm:justify-end sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <a
              href={CONTACT.phoneHref}
              className="rounded-md p-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              aria-label={`Call ${CONTACT.phone}`}
            >
              <Phone className="size-[1.125rem] sm:size-4" aria-hidden />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-md p-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              aria-label={`Email ${CONTACT.email}`}
            >
              <Mail className="size-[1.125rem] sm:size-4" aria-hidden />
            </a>
          </div>

          <span
            className="hidden h-5 w-px shrink-0 bg-white/20 sm:block"
            aria-hidden
          />

          <nav
            className="flex items-center gap-0.5 sm:gap-1"
            aria-label="Social media"
          >
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                aria-label={label}
              >
                <Icon className="size-[1.125rem] sm:size-4" />
              </Link>
            ))}
          </nav>
        </div>
        </div>
      </div>
    </div>
  );
}
