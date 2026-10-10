export const testStyles = {
  section: "min-h-screen bg-background",

  main:
    "relative isolate mx-auto w-full max-w-(--container-width) px-6 py-4 sm:px-10 sm:py-5 lg:px-16",

  mainBackground:
    "pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,transparent_0%,transparent_25%,rgba(23,23,23,0.035)_25%,rgba(23,23,23,0.035)_45%,transparent_45%,transparent_100%)]",

  contentLayout:
    "mt-8 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]",
} as const;
