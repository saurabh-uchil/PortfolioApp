export const messageStyles = {
  wrapper: "w-full max-w-2xl",

  header: "max-w-xl",

  eyebrow:
    "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-3 font-sans text-2xl font-bold leading-tight tracking-[-0.04em] text-text-primary",

  description:
    "mt-3 max-w-lg text-body leading-relaxed text-text-secondary",

  form:
    "mt-8 flex w-full max-w-xl flex-col gap-5",

  field:
    "flex flex-col gap-2",

  label:
    "text-small font-semibold text-text-primary",

  input:
    "w-full border border-border bg-background px-4 py-3.5 text-body text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent",

  textarea:
    "w-full resize-y border border-border bg-background px-4 py-3.5 text-body text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-accent",

  button:
    "mt-2 inline-flex min-h-11 items-center justify-center gap-2 bg-button-dark px-6 py-3 text-small font-semibold text-white transition-colors hover:bg-button-dark-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
} as const;