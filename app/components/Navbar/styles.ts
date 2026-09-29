export const navbarStyles = {
  header:
    "mx-auto flex w-full max-w-(--container-width) flex-wrap items-center gap-x-8 gap-y-4 border-b border-border bg-background px-6 py-5 sm:px-12 lg:flex-nowrap lg:px-16",
  brand: "shrink-0 font-sans text-text-primary",
  brandName: "block text-lg font-bold leading-none tracking-tight sm:text-xl",
  brandSubtitle: "mt-1 block text-xs leading-none text-text-primary",
  navigation:
    "order-3 flex w-full items-center gap-6 overflow-x-auto font-sans text-xs text-text-primary lg:order-none lg:w-auto lg:flex-1 lg:justify-center",
  navigationLink:
    "border-b border-transparent pb-1 transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent focus-visible:outline-none",
  cta:
    "ml-auto inline-flex shrink-0 items-center gap-2 bg-text-primary px-4 py-3 text-xs font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:px-5",
} as const;
