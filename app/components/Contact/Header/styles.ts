export const contactHeaderStyles = {
  wrapper:
    "relative w-full overflow-hidden border-b border-border bg-background",

  content:
    "mx-auto w-full max-w-(--container-width) px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24 xl:px-20",

  eyebrow:
    "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-5 max-w-3xl font-sans text-4xl font-bold leading-[0.95] tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-6xl",

  description:
    "mt-6 max-w-xl text-body leading-relaxed text-text-secondary sm:text-body-large",
} as const;