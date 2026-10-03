export const footerStyles = {
  footer:
    "w-full bg-button-dark text-white",

  container:
    "mx-auto w-full max-w-(--container-width) px-6 py-7 sm:px-12 lg:px-16 xl:px-20",

  top:
    "flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",

  title:
    "text-base font-semibold text-white",

  cta:
    "inline-flex w-fit items-center gap-2 bg-accent px-4 py-2.5 text-small font-semibold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",

  ctaIcon:
    "size-4",

  details:
    "mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-small text-white/60",

} as const;