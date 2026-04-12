import Link from "next/link";

import { NAV_LINKS } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color-mix(in_oklch,var(--brand-navy)_88%,black)] bg-[var(--brand-navy)] text-[color-mix(in_oklch,white_90%,transparent)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-3">
          <p className="font-heading text-base font-semibold text-white">
            Daksa Digital Pvt. Ltd.
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-[color-mix(in_oklch,white_72%,transparent)]">
            Built for Scale. Driven by Impact. Strategic digital solutions for
            brands that want clarity, consistency, and measurable growth.
          </p>
        </div>
        <div>
          <p className="font-heading text-xs font-semibold uppercase tracking-wider text-[color-mix(in_oklch,white_55%,transparent)]">
            Explore
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {NAV_LINKS.filter((l) => l.href !== "/").map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[color-mix(in_oklch,white_78%,transparent)] transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-[color-mix(in_oklch,white_58%,transparent)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Daksa Digital Pvt. Ltd. All rights reserved.</p>
          <Link
            href="https://daksadigital.in"
            className="w-fit text-[color-mix(in_oklch,white_72%,transparent)] hover:text-white"
            rel="noopener noreferrer"
            target="_blank"
          >
            daksadigital.in
          </Link>
        </div>
      </div>
    </footer>
  );
}
