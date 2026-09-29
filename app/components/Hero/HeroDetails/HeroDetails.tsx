import { heroDetails } from "./HeroDetails.data";
import { heroDetailsStyles } from "./HeroDetails.styles";

export function HeroDetails() {
  return (
    <div className={heroDetailsStyles.wrapper}>
      {heroDetails.map((detail) => {
        const Icon = detail.icon;

        return (
          <div
            className={heroDetailsStyles.item}
            key={detail.label}
          >
            <Icon
              className={heroDetailsStyles.icon}
              aria-hidden="true"
            />

            <div className={heroDetailsStyles.text}>
              <span>{detail.label}</span>
              <span>{detail.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}