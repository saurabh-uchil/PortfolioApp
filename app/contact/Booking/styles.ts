export const bookingStyles = {
  dialog:
    "relative flex h-[92dvh] w-full max-w-5xl flex-col overflow-hidden border border-border bg-background shadow-2xl",

  calendar: "relative min-h-0 flex-1 overflow-y-auto bg-background",

  calendlyEmbed: "relative z-0 h-[900px] w-full bg-background",
  wrapper:
    "relative isolate flex min-h-[280px] w-full min-w-0 items-center overflow-hidden bg-background sm:min-h-[320px] lg:min-h-[360px]",

  backgroundImage:
    "absolute inset-0 -z-20 h-full w-full object-cover object-center",

  backgroundOverlay: "absolute inset-0 -z-10 bg-background/45",

  header: "relative z-10 w-full max-w-lg p-6 sm:p-8",

  eyebrow: "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-2 font-sans text-xl font-bold leading-tight tracking-[-0.03em] text-text-primary sm:text-2xl",

  description: "mt-2 max-w-lg text-sm leading-relaxed text-text-primary",

  trigger:
    "mx-auto mt-4 flex min-h-11 w-fit items-center justify-center gap-2 bg-button-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-button-dark-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text-primary lg:mx-0",

  overlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6",

  modalHeader:
    "flex shrink-0 items-start justify-between gap-4 border-b border-border px-4 py-4 sm:px-6",

  modalTitle: "font-sans text-lg font-bold text-text-primary sm:text-xl",

  modalDescription: "mt-1 text-sm text-text-secondary",

  closeButton:
    "inline-flex size-10 shrink-0 items-center justify-center text-text-primary transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary",

  loader:
    "absolute inset-0 z-10 flex min-h-[360px] flex-col items-center justify-center gap-3 bg-background px-4 text-center",

  spinner:
    "size-9 animate-spin rounded-full border-[3px] border-border border-t-accent",

  loaderTitle: "font-sans text-base font-semibold text-text-primary",

  loaderDescription: "text-sm text-text-secondary",

  fallback: "shrink-0 border-t border-border px-4 py-3 text-center sm:px-6",

  fallbackLink:
    "text-sm font-medium text-accent underline underline-offset-4 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4",
} as const;
