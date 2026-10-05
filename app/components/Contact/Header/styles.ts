export const contactHeaderStyles = {
  wrapper: "w-full bg-background",

  content:
    "mx-auto w-full max-w-(--container-width) px-6 py-16 sm:px-12 lg:px-16 lg:py-20 xl:px-20",

  eyebrow:
    "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-4 font-sans text-2xl font-bold leading-tight tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-4xl",

  description:
    "mt-5 max-w-lg text-body leading-relaxed text-text-secondary sm:text-body-large",
} as const;