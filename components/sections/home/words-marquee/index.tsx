const WORDS = ["Visibility", "Growth", "Impact", "Scale", "Trust", "Results"] as const;

const TRACK_WORDS = Array.from({ length: 4 }, () => WORDS).flat();

export function WordsMarqueeSection() {
  return (
    <section
      aria-hidden
      className="words-marquee-wrap overflow-hidden border-y border-border/40 bg-background py-9 sm:py-11 lg:py-13"
    >
      <div className="words-marquee-track flex w-max select-none items-center gap-0">
        {[0, 1].map((run) => (
          <span key={run} className="flex items-center gap-0">
            {TRACK_WORDS.map((word, i) => (
              <span key={`${run}-${i}`} className="flex items-center">
                <span
                  className={
                    i % 2 === 0
                      ? "font-heading text-2xl font-extrabold uppercase leading-none tracking-[0.06em] text-[var(--brand-navy)] sm:text-3xl lg:text-[2.1rem]"
                      : "font-heading text-2xl font-extrabold uppercase leading-none tracking-[0.06em] text-[var(--brand-red)] sm:text-3xl lg:text-[2.1rem]"
                  }
                >
                  {word}
                </span>
                <span
                  className="mx-6 inline-block size-1.5 shrink-0 rotate-45 rounded-[1px] bg-border sm:mx-8 sm:size-2"
                  aria-hidden
                />
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
