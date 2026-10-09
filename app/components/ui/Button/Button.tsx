import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { buttonStyles } from "./styles";

type ButtonVariant = keyof typeof buttonStyles.variants;
type ButtonSize = keyof typeof buttonStyles.sizes;

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  children,
  className,
  size = "medium",
  variant = "dark",
  href = "#",
  download,
  ...props
}: ButtonProps) {
  const classes = [
    buttonStyles.base,
    buttonStyles.sizes[size],
    buttonStyles.variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Use a regular anchor for downloads.
  if (download !== undefined) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Use Next.js Link for navigation.
  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}