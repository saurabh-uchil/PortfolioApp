export const bookingStyles = {
  wrapper:
    "relative isolate flex min-h-[280px] w-full min-w-0 items-center overflow-hidden bg-background sm:min-h-[320px] lg:min-h-[360px]",

  backgroundImage:
    "absolute inset-0 -z-20 h-full w-full object-cover object-center",
  backgroundOverlay: "absolute inset-0 -z-10 bg-background/25",

  header: "relative z-10 max-w-lg p-6 sm:p-8",

  eyebrow: "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-2 font-sans text-xl font-bold leading-tight tracking-[-0.03em] text-text-primary sm:text-2xl",

  description: "mt-2 max-w-lg text-sm leading-relaxed text-text-secondary",

  trigger:
    "mt-4 inline-flex min-h-11 items-center justify-center gap-2 bg-button-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-button-dark-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-primary",

  overlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6",

  dialog:
    "relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden border border-border bg-background shadow-2xl",

  modalHeader:
    "flex shrink-0 items-start justify-between gap-4 border-b border-border px-4 py-4 sm:px-6",

  modalTitle: "font-sans text-lg font-bold text-text-primary sm:text-xl",

  modalDescription: "mt-1 text-sm text-text-secondary",

  closeButton:
    "inline-flex size-10 shrink-0 items-center justify-center text-text-primary transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary",

  calendar: "min-h-0 flex-1 bg-surface",
  iframe: "block h-[65dvh] min-h-[360px] w-full border-0 sm:h-[68dvh]",
  fallback: "shrink-0 border-t border-border px-4 py-3 text-center sm:px-6",
  fallbackLink:
    "text-sm font-medium text-accent underline underline-offset-4 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4",
} as const;
