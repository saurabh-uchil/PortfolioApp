export const timelineStyles = {
  wrapper: "relative",

  item:
    "relative border-b border-border py-5 last:border-b-0",

  experienceItem:
    "grid min-w-0 grid-cols-[80px_minmax(0,1fr)] gap-6",

  educationItem:
    "grid min-w-0 grid-cols-[24px_minmax(0,1fr)] gap-6",

  marker:
    "absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-accent",

  experienceMarker:
    "left-[80px] -translate-x-1/2",

  educationMarker:
    "left-[4px] -translate-x-1/2",

  period:
    "text-small text-text-secondary",

  experienceContent:
    "min-w-0 w-full border-l border-border pl-6",

  educationContent:
    "min-w-0 w-full border-l border-border pl-6",

  title:
    "text-small font-semibold text-text-primary",

  subtitle:
    "mt-1 text-small leading-relaxed text-text-secondary",

  meta:
    "text-small leading-relaxed text-text-muted",
} as const;