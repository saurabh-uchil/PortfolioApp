export const timelineStyles = {
  wrapper: "relative w-full",

  item:
    "relative grid grid-cols-[82px_20px_minmax(0,1fr)] gap-3",

  period:
    "pt-1 text-small leading-tight text-text-secondary",

  track:
    "relative flex justify-center before:absolute before:bottom-0 before:left-1/2 before:top-0 before:w-px before:-translate-x-1/2 before:bg-border before:content-['']",

  dot:
    "relative z-10 mt-2 size-2 shrink-0 rounded-full bg-accent",

  content:
    "min-w-0 pb-6",

  title:
    "text-small font-semibold leading-tight text-text-primary",

  subtitle:
    "mt-1 text-small leading-relaxed text-text-secondary",

  meta:
    "text-small leading-relaxed text-text-secondary",
} as const;