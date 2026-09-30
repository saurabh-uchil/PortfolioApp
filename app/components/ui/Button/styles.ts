export const buttonStyles = {
  base:
    "inline-flex items-center justify-center gap-2 font-sans text-ui font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",

  sizes: {
    medium: "px-5 py-3",
  },

  variants: {
    dark:
      "bg-button-dark !text-white hover:bg-button-dark-hover focus-visible:outline-button-dark",

    outline:
      "border border-text-primary text-text-primary hover:bg-surface-muted focus-visible:outline-text-primary",
  },
} as const;