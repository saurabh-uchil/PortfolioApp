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
    "mt-1 block text-ui leading-none text-text-secondary",

  navigation:
    "hidden items-center gap-7 font-sans text-nav text-text-primary lg:flex lg:flex-1 lg:justify-center",

  navigationLink:
    "border-b border-transparent pb-1 transition-colors hover:border-accent focus-visible:border-accent focus-visible:outline-none",

  desktopCtaWrapper:
    "ml-auto hidden shrink-0 lg:block",

  menuButton:
    "ml-auto inline-flex h-10 w-10 items-center justify-center bg-surface text-text-primary transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:ml-4 lg:hidden",

  mobileMenu:
    "border-t border-border bg-surface lg:hidden",

  mobileNavigation:
    "mx-auto flex w-full max-w-(--container-width) flex-col gap-1 px-6 py-5 sm:px-12",

  mobileNavigationLink:
    "py-3 text-small font-medium text-text-primary transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none",

  mobileCta:
    "mt-4 w-full justify-center",
} as const;