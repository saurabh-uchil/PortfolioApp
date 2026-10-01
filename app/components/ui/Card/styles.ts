export const cardStyles = {
  card: "flex min-h-[258px] h-full flex-col overflow-hidden rounded-md border border-[#cfcac2] bg-surface-muted",
  image: "h-[110px] w-full shrink-0 bg-cover bg-center bg-no-repeat",
  content: "relative flex flex-1 flex-col px-5 pb-5 pt-16",
  iconWrapper:
    "absolute left-5 top-[-28px] z-10 flex size-11 items-center justify-center rounded-md border border-border bg-surface shadow-sm",
  icon: "size-6 text-accent",
  title: "font-sans text-base font-semibold leading-tight text-text-primary",
  description: "mt-3 text-small leading-relaxed text-text-secondary",
} as const;
