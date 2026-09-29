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

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
