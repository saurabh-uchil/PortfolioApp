import Link from "next/link";
import { heroDetails } from "./HeroDetails.data";
import { heroDetailsStyles } from "./HeroDetails.styles";
import { ArrowUpRight } from "lucide-react";

export function HeroDetails() {
  return (
    <div className={heroDetailsStyles.wrapper}>
      {heroDetails.map((detail) => {
        const Icon = detail.icon;

        return (
          <div className={heroDetailsStyles.item} key={detail.label}>
            <Icon className={heroDetailsStyles.icon} aria-hidden="true" />

            <div className={heroDetailsStyles.text}>
              <span>{detail.label}</span>

              {detail.href ? (
                <Link
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={heroDetailsStyles.link}
                  aria-label={`${detail.label} ${detail.value} (opens in a new tab)`}
                >
                  {detail.value}
                  <ArrowUpRight
                    className={heroDetailsStyles.linkIcon}
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <span>{detail.value}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
