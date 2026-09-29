export const heroStyles = {
  section: "w-full bg-surface",

  container:
    "mx-auto grid w-full max-w-(--container-width) overflow-hidden md:min-h-[590px] md:grid-cols-2",

  content:
    "flex flex-col justify-center px-6 py-20 sm:px-12 md:px-16 lg:px-20 xl:px-24",

  eyebrow:
    "mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary",

  title:
    "max-w-xl font-sans text-4xl font-bold leading-[1.08] tracking-[-0.055em] text-text-primary sm:text-5xl lg:text-6xl",

  titleEmphasis: "mt-2 block",

  description:
    "mt-7 max-w-md text-base leading-relaxed text-text-secondary sm:text-[17px]",

  actions: "mt-8 flex flex-wrap gap-3",

  downloadIcon: "size-4",

  imageWrapper: "relative min-h-[400px] overflow-hidden md:order-none md:min-h-0",

  image: "object-cover object-[62%_center]",
} as const;
