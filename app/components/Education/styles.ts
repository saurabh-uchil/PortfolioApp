export const educationStyles = {
  section:
    "relative isolate w-full overflow-hidden border-t border-border bg-background before:absolute before:inset-y-0 before:right-0 before:w-[58%] before:bg-surface-muted before:[clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] before:content-['']",

  container:
    "relative z-10 mx-auto grid w-full max-w-(--container-width) grid-cols-1 gap-10 px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-[58%_42%] lg:items-center lg:gap-12 lg:px-16 lg:py-12 xl:px-20",

  intro: "max-w-lg",

  eyebrow:
    "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-4 font-sans text-2xl font-bold leading-tight tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-4xl",

  description:
    "mt-4 max-w-md text-body leading-relaxed text-text-secondary sm:text-body-large",
} as const;