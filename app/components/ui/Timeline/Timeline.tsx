import { timelineStyles } from "./styles";

export type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  meta?: string;
};

type TimelineProps = {
  items: readonly TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className={timelineStyles.wrapper}>
      {items.map((item) => (
        <div key={`${item.period}-${item.title}`} className={timelineStyles.item}>
          <div className={timelineStyles.period}>
            {item.period}
          </div>

          <div className={timelineStyles.track} aria-hidden="true">
            <span className={timelineStyles.dot} />
          </div>

          <div className={timelineStyles.content}>
            <h3 className={timelineStyles.title}>{item.title}</h3>

            <p className={timelineStyles.subtitle}>{item.subtitle}</p>

            {item.meta && (
              <p className={timelineStyles.meta}>{item.meta}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}