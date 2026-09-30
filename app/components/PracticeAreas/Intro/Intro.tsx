import { practiceAreasContent } from "../PracticeAreas.data";
import { introStyles } from "./styles";

export function Intro() {
  return (
    <div className={introStyles.wrapper}>
      <p className={introStyles.eyebrow}>
        {practiceAreasContent.eyebrow}
      </p>

      <h2
        className={introStyles.title}
        id="practice-areas-title"
      >
        {practiceAreasContent.title}
      </h2>

      <p className={introStyles.description}>
        {practiceAreasContent.description}
      </p>
    </div>
  );
}