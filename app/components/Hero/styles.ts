export const heroStyles = {
  section: "relative w-full overflow-hidden bg-surface",

  background:
    "pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_180px,rgba(0,0,0,0.028)_180px,rgba(0,0,0,0.028)_360px,transparent_360px,transparent_540px)] md:bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_220px,rgba(0,0,0,0.03)_220px,rgba(0,0,0,0.03)_440px,transparent_440px,transparent_660px)]",

  container:
    "relative z-10 mx-auto grid w-full max-w-(--container-width) md:min-h-[590px] md:grid-cols-[46%_54%] lg:grid-cols-[44%_56%]",

  content:
    "relative z-10 flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 md:px-10 lg:px-16 xl:px-20",

  eyebrow:
    "mb-5 text-eyebrow font-semibold uppercase tracking-[0.14em] text-text-secondary",

  title:
    "max-w-2xl font-sans text-2xl font-bold leading-[1.08] tracking-[-0.04em] text-text-primary sm:text-3xl lg:text-4xl",

  titleEmphasis: "block",

  description:
    "mt-6 max-w-md text-body leading-relaxed text-text-secondary sm:mt-7 sm:text-body-large",

  actions: "mt-7 flex flex-wrap gap-3 sm:mt-8",

  downloadIcon: "size-4",

  imageWrapper: "relative min-h-[420px] overflow-hidden md:min-h-0",
  image: "object-cover object-[68%_center]",

  imageFade:
    "pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-surface via-surface/60 to-transparent md:w-[38%]",
} as const;
