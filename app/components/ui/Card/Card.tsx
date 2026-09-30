import type { LucideIcon } from "lucide-react";
import { cardStyles } from "./styles";

type CardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <article className={cardStyles.card}>
      <div className={cardStyles.iconWrapper}>
        <Icon className={cardStyles.icon} aria-hidden="true" />
      </div>

      <h3 className={cardStyles.title}>{title}</h3>

      <p className={cardStyles.description}>{description}</p>
    </article>
  );
}