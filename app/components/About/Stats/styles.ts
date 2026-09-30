export const aboutStatsStyles = {
  wrapper:
    "flex flex-col justify-center gap-8 bg-surface-muted px-6 py-12 sm:px-10 lg:px-8",

  stat:
    "flex items-start gap-4",

  iconWrapper:
    "flex size-10 shrink-0 items-center justify-center rounded-full bg-surface",

  icon:
    "size-5 text-accent",

  content:
    "min-w-0",

  value:
    "font-sans text-lg font-bold leading-tight text-text-primary",

  label:
    "mt-1 max-w-xs text-small leading-relaxed text-text-secondary",
} as const;