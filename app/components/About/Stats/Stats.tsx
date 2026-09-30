import { aboutStats } from "../About.data";
import { aboutStatsStyles } from "./styles";

export function AboutStats() {
  return (
    <div className={aboutStatsStyles.wrapper}>
      {aboutStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.value}
            className={aboutStatsStyles.stat}
          >
            <div className={aboutStatsStyles.iconWrapper}>
              <Icon
                className={aboutStatsStyles.icon}
                aria-hidden="true"
              />
            </div>

            <div className={aboutStatsStyles.content}>
              <p className={aboutStatsStyles.value}>
                {stat.value}
              </p>

              <p className={aboutStatsStyles.label}>
                {stat.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}