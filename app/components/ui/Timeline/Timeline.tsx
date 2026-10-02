import { timelineStyles } from "./styles";

export type TimelineItem = {
  title: string;
  subtitle?: string;
  meta?: string;
  period?: string;
};

type TimelineProps = {
  items: readonly TimelineItem[];
  variant?: "experience" | "education";
};

export function Timeline({
  items,
  variant = "experience",
}: TimelineProps) {
  const isExperience = variant === "experience";

  return (
    <div className={timelineStyles.wrapper}>
      {items.map((item) => (
        <article
          key={`${item.title}-${item.subtitle}-${item.period}`}
          className={`${timelineStyles.item} ${
            isExperience
              ? timelineStyles.experienceItem
              : timelineStyles.educationItem
          }`}
        >
          <span
            className={`${timelineStyles.marker} ${
              isExperience
                ? timelineStyles.experienceMarker
                : timelineStyles.educationMarker
            }`}
            aria-hidden="true"
          />

          {isExperience && item.period && (
            <p className={timelineStyles.period}>{item.period}</p>
          )}

          <div
            className={
              isExperience
                ? timelineStyles.experienceContent
                : timelineStyles.educationContent
            }
          >
            <h3 className={timelineStyles.title}>{item.title}</h3>

            {item.subtitle && (
              <p className={timelineStyles.subtitle}>
                {item.subtitle}
              </p>
            )}

            {item.meta && (
              <p className={timelineStyles.meta}>{item.meta}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}