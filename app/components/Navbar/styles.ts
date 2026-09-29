export const navbarStyles = {
  wrapper:
    "w-full border-b border-border bg-surface",

  header:
    "mx-auto flex w-full max-w-(--container-width) items-center gap-x-8 px-6 py-4 sm:px-12 lg:px-16",

  brand:
    "shrink-0 font-sans text-text-primary",

  brandName:
    "block text-lg font-bold leading-none tracking-tight sm:text-xl",

  brandSubtitle:
    "mt-1 block text-xs leading-none text-text-secondary",

  navigation:
    "flex items-center gap-7 font-sans text-[13px] text-text-primary lg:flex-1 lg:justify-center",

  navigationLink:
    "border-b border-transparent pb-1 transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none",
} as const;
