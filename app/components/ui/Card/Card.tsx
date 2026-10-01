import type { LucideIcon } from "lucide-react";

import { cardStyles } from "./styles";

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
};

export function Card({
  icon: Icon,
  title,
  description,
  image,
}: CardProps) {
  return (
    <article className={cardStyles.card}>
      {image && (
        <div
          className={cardStyles.image}
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden="true"
        />
      )}

      <div className={cardStyles.content}>
        <div className={cardStyles.iconWrapper}>
          <Icon className={cardStyles.icon} aria-hidden="true" />
        </div>

        <h3 className={cardStyles.title}>{title}</h3>

        <p className={cardStyles.description}>{description}</p>
      </div>
    </article>
  );
}