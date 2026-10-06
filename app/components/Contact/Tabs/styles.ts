export const contactTabsStyles = {
  wrapper:
    "mx-auto w-full max-w-4xl px-6 pb-12 sm:px-12 lg:px-16",

  tabs:
    "flex w-full border-b border-border",

  tab:
    "border-b-2 border-transparent px-4 py-3 text-small font-semibold text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-6",

  activeTab:
    "border-accent text-text-primary",

  content:
    "mt-8 border border-border bg-surface px-6 py-8 sm:px-8 lg:px-10",
} as const;