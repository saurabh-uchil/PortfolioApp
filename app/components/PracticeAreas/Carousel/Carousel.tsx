"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselStyles } from "./styles";
import { Card } from "../../ui/Card/Card";
import { practiceAreas } from "./Carousel.data";

export function Carousel() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "previous" | "next") => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const card = viewport.querySelector<HTMLElement>(
      "[data-carousel-card]",
    );

    if (!card) return;

    const cardWidth = card.offsetWidth;

    viewport.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={carouselStyles.wrapper}>
      <div className={carouselStyles.controls}>
        <button
          type="button"
          aria-label="Previous practice areas"
          className={carouselStyles.control}
          onClick={() => scrollByCard("previous")}
        >
          <ChevronLeft
            className={carouselStyles.icon}
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          aria-label="Next practice areas"
          className={carouselStyles.control}
          onClick={() => scrollByCard("next")}
        >
          <ChevronRight
            className={carouselStyles.icon}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        ref={viewportRef}
        className={carouselStyles.viewport}
      >
        <div className={carouselStyles.track}>
          {practiceAreas.map((practiceArea) => (
            <div
              key={practiceArea.title}
              data-carousel-card
              className={carouselStyles.slide}
            >
              <Card
                icon={practiceArea.icon}
                title={practiceArea.title}
                description={practiceArea.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}