export const notFoundStyles = {
  title:
    "mt-5 max-w-2xl font-sans text-2xl font-bold uppercase leading-[1.08] tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-4xl",

  description:
    "mt-4 max-w-lg font-sans text-sm leading-relaxed text-text-secondary sm:text-base",

  actions:
    "mt-6 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row",

  wrapper:
    "relative isolate flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center",

  backgroundLines:
    "pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,transparent_22%,rgba(23,23,23,0.025)_22%,rgba(23,23,23,0.025)_48%,transparent_48%,transparent_100%)]",
  content: "relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center",

  eyebrow: "text-eyebrow font-semibold uppercase tracking-[0.16em] text-accent",

  homeButton:
    "inline-flex min-h-11 w-fit items-center justify-center gap-2 border border-button-dark bg-button-dark px-6 py-3 font-sans text-ui font-semibold !text-white transition-colors hover:bg-button-dark-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-dark",

  contactLink:
    "inline-flex min-h-11 w-fit items-center justify-center gap-2 border border-border bg-transparent px-6 py-3 font-sans text-ui font-semibold text-text-primary transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary",
} as const;
