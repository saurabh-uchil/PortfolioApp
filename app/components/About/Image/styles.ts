export const aboutImageStyles = {
  wrapper:
    "relative min-h-[420px] overflow-hidden lg:border-r lg:border-accent",

  image:
    "absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/assets/law.png')]",

  fade:
    "absolute inset-0 bg-gradient-to-r from-transparent via-background/15 to-background",

  quote:
    "absolute bottom-12 right-0 z-10 w-[220px] bg-accent/90 px-6 py-6 text-white sm:w-[240px] sm:px-7 sm:py-7",

  quoteText:
    "font-serif text-lg font-medium leading-tight sm:text-xl",

  quoteLine:
    "mt-4 h-px w-8 bg-white/80",
} as const;