export const educationStyles = {
  section:
    "relative isolate w-full overflow-hidden border-t border-border bg-surface",

  container:
  "relative z-10 mx-auto grid w-full max-w-(--container-width) grid-cols-1 gap-10 px-6 py-16 sm:px-12 sm:py-20 lg:grid-cols-[58%_42%] lg:items-center lg:gap-12 lg:px-16 lg:py-16 xl:px-20",
  intro:
    "max-w-lg lg:order-2",

  eyebrow:
    "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-5 font-sans text-2xl font-bold leading-tight tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-4xl",

  description:
    "mt-5 max-w-md text-body leading-relaxed text-text-secondary sm:text-body-large",
} as const;