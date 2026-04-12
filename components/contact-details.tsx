import { Mail, MapPin, Phone, Share2 } from "lucide-react";

import { CONTACT } from "@/lib/site-content";

export function ContactDetails() {
  return (
    <div className="space-y-8 text-muted-foreground">
      <div className="flex gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <MapPin className="size-5" aria-hidden />
        </span>
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">
            Office
          </p>
          <p className="mt-1 leading-relaxed">{CONTACT.address}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Phone className="size-5" aria-hidden />
        </span>
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">
            Phone
          </p>
          <a
            className="mt-1 block text-primary underline-offset-4 transition-colors hover:underline"
            href={CONTACT.phoneHref}
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Mail className="size-5" aria-hidden />
        </span>
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">
            Email
          </p>
          <a
            className="mt-1 block break-all text-primary underline-offset-4 transition-colors hover:underline"
            href={`mailto:${CONTACT.email}`}
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Share2 className="size-5" aria-hidden />
        </span>
        <div>
          <p className="font-heading text-sm font-semibold text-foreground">
            Social
          </p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a
              className="text-primary underline-offset-4 hover:underline"
              href={CONTACT.social.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="text-primary underline-offset-4 hover:underline"
              href={CONTACT.social.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="text-primary underline-offset-4 hover:underline"
              href={CONTACT.social.facebook}
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Update links to your official profiles when ready.
          </p>
        </div>
      </div>
      <div>
        <p className="font-heading text-sm font-semibold text-foreground">
          Website
        </p>
        <a
          className="mt-2 inline-flex text-primary underline-offset-4 hover:underline"
          href={CONTACT.website}
          rel="noopener noreferrer"
          target="_blank"
        >
          {CONTACT.websiteLabel}
        </a>
      </div>
    </div>
  );
}
