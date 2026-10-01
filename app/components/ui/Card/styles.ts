export const cardStyles = {
  card: "flex min-h-[420px] flex-col overflow-hidden bg-surface-muted",
  image: "h-48 w-full shrink-0 bg-cover bg-center bg-no-repeat",

  content: "relative flex flex-1 flex-col px-5 pb-5 pt-16",

  iconWrapper:
    "absolute left-5 top-[-28px] z-10 flex size-11 items-center justify-center rounded-md bg-[#f7eee9]",

  icon: "size-6 text-accent",

  title:
    "font-sans text-base font-semibold leading-tight text-text-primary",

  description:
    "mt-3 text-small leading-relaxed text-text-secondary",
} as const;