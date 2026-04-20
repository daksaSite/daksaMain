import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CONTACT } from "@/lib/site-content";

const NAV_COLS = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/process", label: "Our process" },
      { href: "/our-work", label: "Our work" },
      { href: "/testimonials", label: "Testimonials" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services", label: "All services" },
      { href: "/services", label: "Digital marketing" },
      { href: "/services", label: "SEO" },
      { href: "/services", label: "Branding & creative" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
] as const;

const SOCIALS = [
  { href: CONTACT.social.instagram, label: "Instagram" },
  { href: CONTACT.social.linkedin, label: "LinkedIn" },
  { href: CONTACT.social.facebook, label: "Facebook" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white/80">
      {/* Top accent line */}
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        aria-hidden
      />

      <div className="site-container py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] lg:gap-10 xl:gap-14">

          {/* Brand column */}
          <div className="space-y-5 lg:pr-6">
            {/* Logo + name */}
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-85">
              <Image
                src="/images/logo/logo.png"
                alt="Daksa Digital Pvt. Ltd."
                width={560}
                height={180}
                quality={100}
                className="h-10 w-auto rounded-lg sm:h-11"
                sizes="180px"
              />
              <span className="flex flex-col">
                <span className="font-heading text-base font-bold leading-tight text-white">
                  Daksa Digital
                </span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                  Pvt. Ltd.
                </span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-white/60">
              <span className="font-semibold text-white/85">Built for Scale. Driven by Impact.</span>{" "}
              Digital marketing and growth solutions for brands that want clarity,
              consistency, and measurable results.
            </p>

            {/* Contact details */}
            <ul className="space-y-2.5 text-sm text-white/55">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary/80" aria-hidden />
                <span>{CONTACT.address}</span>
              </li>
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-3.5 shrink-0 text-primary/80" aria-hidden />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 size-3.5 shrink-0 text-primary/80" aria-hidden />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-3.5 shrink-0 text-primary/80" aria-hidden />
                <span>Mon–Sat, 10am–7pm IST</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-1 pt-0.5">
              <Share2 className="mr-2 size-3.5 text-white/30" aria-hidden />
              {SOCIALS.map(({ href, label }, i) => (
                <span key={label} className="flex items-center gap-1">
                  {i > 0 && <span className="text-white/20">·</span>}
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-4 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/38">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA buttons */}
          <div className="flex flex-col justify-start gap-2.5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="size-4" aria-hidden />
              Contact the team
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/75 transition-colors hover:border-white/30 hover:text-white"
            >
              Learn more
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="site-container flex flex-col gap-3 py-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <p>© {new Date().getFullYear()} Daksa Digital Pvt. Ltd. All rights reserved.</p>
            <span className="hidden text-white/15 sm:inline">·</span>
            <p className="text-white/30">Made with ♥ in Noida</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <Link href="/privacy" className="transition-colors hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/70">
              Terms of Service
            </Link>
            <a
              href={CONTACT.website}
              className="transition-colors hover:text-white/70"
              rel="noopener noreferrer"
              target="_blank"
            >
              {CONTACT.websiteLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
