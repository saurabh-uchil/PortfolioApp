import Image from "next/image";

import { heroContent } from "./Hero.data";
import { heroStyles } from "./styles";
import { Button } from "../ui/Button/Button";
import {HeroDetails} from "./HeroDetails/HeroDetails"
import { GavelAnimation } from "../ui/Gavel/Gavel";
import { Scale } from "lucide-react";
import { ScalesAnimation } from "../ui/Scale/Scale";

export function Hero() {
  return (
    <section className={heroStyles.section} aria-labelledby="hero-title">
      <div className={heroStyles.background} aria-hidden="true" />

      <div className={heroStyles.container}>
        {/* Hero Content */}
        <div className={heroStyles.content}>
  <p className={heroStyles.eyebrow}>
    {heroContent.eyebrow}
  </p>

  <h1
    className={heroStyles.title}
    id="hero-title"
  >
    {heroContent.title}
     <GavelAnimation />
    <span className={heroStyles.titleEmphasis}>
      {heroContent.emphasis}
    </span>
  </h1>

  <p className={heroStyles.description}>
    {heroContent.description}
  </p>

  <div
    className={heroStyles.actions}
    aria-label="Hero actions"
  >
    {heroContent.actions.map((action) => (
      <Button
        href={action.href}
        key={action.label}
        variant={
          action.icon === "arrow"
            ? "dark"
            : "outline"
        }
        download={action.icon === "download" ? true : undefined}
      >
        {action.icon === "download" && (
          <svg
            aria-hidden="true"
            className={heroStyles.downloadIcon}
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 2v7m0 0 3-3m-3 3L5 6m-2 5h10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        )}

        {action.label}

        {action.icon === "arrow" && (
          <span aria-hidden="true">→</span>
        )}
      </Button>
    ))}
  </div>

  <HeroDetails />
</div>

        {/* Hero Image */}
        <div className={heroStyles.imageWrapper}>
          <div className={heroStyles.imageFade} aria-hidden="true" />

          <Image
            className={heroStyles.image}
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
