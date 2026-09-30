export const carouselStyles = {
  wrapper:
    "relative w-full",

  controls:
    "mb-6 flex justify-end gap-2",

  control:
    "flex size-10 items-center justify-center border border-border bg-surface text-text-primary transition-colors hover:bg-surface-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-40",

  icon:
    "size-4",

  viewport:
    "overflow-hidden touch-pan-y",

  track:
    "flex transition-transform duration-500 ease-in-out",

  slide:
    "w-full shrink-0 pr-4 sm:w-1/2 lg:w-1/3",
} as const;