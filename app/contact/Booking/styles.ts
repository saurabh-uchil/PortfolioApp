export const bookingStyles = {
  wrapper:
    "relative isolate flex min-h-[280px] w-full min-w-0 items-center overflow-hidden border border-border/70 bg-background shadow-md sm:min-h-[320px] lg:min-h-[360px]",

  backgroundImage:
    "absolute inset-0 -z-20 h-full w-full object-cover object-center",

  backgroundOverlay: "absolute inset-0 -z-10 bg-background/45",

  header: "relative z-10 w-full max-w-lg p-6 sm:p-8",

  eyebrow: "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-2 font-sans text-xl font-bold leading-tight tracking-[-0.03em] text-text-primary sm:text-2xl",

  description: "mt-2 max-w-lg text-sm leading-relaxed text-text-primary",

  buttonWrapper: "mt-6 flex w-full justify-center lg:mt-4 lg:justify-start",

  trigger:
    "inline-flex min-h-11 w-fit items-center justify-center gap-2 bg-button-dark px-5 py-3 font-sans font-semibold !text-white transition-colors hover:bg-button-dark-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-dark",

  fallback: "shrink-0 border-t border-border px-4 py-3 text-center sm:px-6",

  fallbackLink:
    "text-sm font-medium text-accent underline underline-offset-4 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4",

  fontSize: { fontSize: "12px" },
} as const;
