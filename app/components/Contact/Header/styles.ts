export const contactHeaderStyles = {
  wrapper: "w-full bg-background",
  content:
    "mx-auto w-full max-w-(--container-width) px-6 pt-10 pb-5 sm:px-12 sm:pt-12 sm:pb-6 lg:px-16 lg:pt-14 lg:pb-6 xl:px-20",
  eyebrow: "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-4 max-w-2xl font-sans text-2xl font-bold leading-tight tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-4xl",

  description:
    "mt-4 max-w-lg text-body leading-relaxed text-text-secondary sm:text-body-large",
} as const;
