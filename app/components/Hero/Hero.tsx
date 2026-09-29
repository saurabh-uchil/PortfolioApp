import Image from "next/image";

import { heroContent } from "./Hero.data";
import { heroStyles } from "./styles";

export function Hero() {
  return (
    <section className={heroStyles.section} aria-labelledby="hero-title">
      <div className={heroStyles.container}>
        <div className={heroStyles.content}>
          <p className={heroStyles.eyebrow}>{heroContent.eyebrow}</p>
          <h1 className={heroStyles.title} id="hero-title">
            {heroContent.title}
            <span className={heroStyles.titleEmphasis}>{heroContent.emphasis}</span>
          </h1>
          <p className={heroStyles.description}>{heroContent.description}</p>
        </div>

        <div className={heroStyles.imageWrapper}>
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
