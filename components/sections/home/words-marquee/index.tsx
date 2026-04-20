const WORDS = ["Visibility.", "Growth.", "Impact.", "Scale."] as const;

const TRACK_WORDS = Array.from({ length: 5 }, () => WORDS).flat();

export function WordsMarqueeSection() {
  return (
    <section
      aria-hidden
      className="words-marquee-wrap overflow-hidden border-y border-border/40 bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="words-marquee-track flex w-max select-none items-center gap-8 sm:gap-10">
        {[0, 1].map((run) => (
          <span key={run} className="flex items-center gap-8 sm:gap-10">
            {TRACK_WORDS.map((word, i) => (
              <span
                key={`${run}-${i}`}
                className={
                  i % 2 === 0
                    ? "font-heading text-3xl font-extrabold leading-none tracking-tight text-[var(--brand-navy)] sm:text-4xl lg:text-[2.6rem]"
                    : "font-heading text-3xl font-extrabold leading-none tracking-tight text-[var(--brand-red)] sm:text-4xl lg:text-[2.6rem]"
                }
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
