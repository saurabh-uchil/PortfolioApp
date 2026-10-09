export const navbarBrandName = "KASHVI AIL";
export const navbarBrandSubtitle = "Advocate, Bombay High Court";

export type NavbarLink = {
  label: string;
  href: `#${string}`;
};

export const navbarLinks: readonly NavbarLink[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" }
];

export const navbarCta = {
  label: "Schedule a Call",
  href: "/contact",
} as const;
