export const modalStyles = {
  overlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-6",

  dialog:
    "flex h-[92dvh] w-full max-w-5xl flex-col overflow-hidden border border-border bg-background shadow-2xl",

  header:
    "flex shrink-0 items-start justify-between gap-4 border-b border-border px-4 py-4 sm:px-6",

  title:
    "font-sans text-lg font-bold text-text-primary sm:text-xl",

  description:
    "mt-1 text-sm text-text-secondary",

  closeButton:
    "inline-flex size-10 shrink-0 items-center justify-center text-text-primary transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-primary",

  content:
    "flex min-h-0 flex-1 flex-col overflow-y-auto bg-background",
} as const;
