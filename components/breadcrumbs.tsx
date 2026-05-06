import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({
  items,
  tone = "default",
}: {
  items: BreadcrumbItem[];
  tone?: "default" | "inverse";
}) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium sm:text-sm",
          tone === "inverse" ? "text-white/75" : "text-muted-foreground",
        )}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="inline-flex items-center gap-2">
              {i > 0 ? (
                <ChevronRight
                  className={cn(
                    "size-3.5 shrink-0",
                    tone === "inverse" ? "text-white/40" : "text-muted-foreground/60",
                  )}
                  aria-hidden
                />
              ) : null}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                    tone === "inverse" ? "hover:text-white" : "hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn(tone === "inverse" ? "text-white" : "text-foreground")}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
