export const calendlyStyles = {
  calendar: "relative min-h-0 flex-1 overflow-y-auto bg-background",

  calendlyEmbed:
    "relative z-0 h-[900px] w-full bg-background",

  loader:
    "absolute inset-0 z-10 flex min-h-[360px] flex-col items-center justify-center gap-3 bg-background px-4 text-center",

  spinner:
    "size-9 animate-spin rounded-full border-[3px] border-border border-t-accent",

  loaderTitle:
    "font-sans text-base font-semibold text-text-primary",

  loaderDescription:
    "text-sm text-text-secondary",
} as const;
