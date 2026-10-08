export const calendlyEmbedStyles = {
  wrapper: "w-full",

  desktop:
    "hidden border border-border bg-surface md:block",

  iframe:
    "block h-[700px] w-full border-0",

  mobile:
    "block border border-border bg-surface md:hidden",

  mobileContent:
    "px-5 py-8 sm:px-6 sm:py-10",

  mobileEyebrow:
    "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  mobileTitle:
    "mt-3 font-sans text-xl font-bold leading-tight tracking-[-0.03em] text-text-primary",

  mobileDescription:
    "mt-3 max-w-sm text-body leading-relaxed text-text-secondary",

  mobileButton:
    "mt-6 flex min-h-11 w-full items-center justify-center gap-2 bg-button-dark px-6 py-3 text-small font-semibold !text-white transition-colors hover:bg-button-dark-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
} as const;