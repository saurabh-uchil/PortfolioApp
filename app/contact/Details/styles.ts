export const contactDetailsStyles = {
  wrapper:
    "flex flex-col gap-4 border border-border bg-surface p-4 sm:p-5 lg:p-6",

  eyebrow:
    "text-eyebrow font-semibold uppercase tracking-[0.14em] text-accent",

  title:
    "mt-2 font-sans text-xl font-bold leading-tight text-text-primary sm:text-2xl",

  description:
    "mt-3 max-w-md text-sm leading-relaxed text-text-secondary",

  emailSection: "border-t border-border pt-4",

  label:
    "text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary",

  email: "mt-2 block break-all text-sm text-text-primary",

  emailLink:
    "mt-2 inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4 decoration-accent/40 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",

  socialSection: "border-t border-border pt-4",

  socialLink:
    "mt-2 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",

  socialIcon: "size-5 shrink-0 text-accent",
} as const;
