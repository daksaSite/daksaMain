import { cn } from "@/lib/utils";

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl space-y-4", className)}>
      {eyebrow ? (
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-heading text-[1.95rem] font-bold leading-[1.08] tracking-tight text-balance md:text-4xl md:leading-[1.12] lg:text-[2.75rem]">
        {title}
      </h1>
      {description ? (
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}
