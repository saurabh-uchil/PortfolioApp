import { aboutContent } from "../About.data";
import { aboutIntroStyles } from "./styles";

export function AboutIntro() {
  return (
    <div className={aboutIntroStyles.wrapper}>
      <p className={aboutIntroStyles.eyebrow}>
        {aboutContent.eyebrow}
      </p>

      <h2 className={aboutIntroStyles.title}>
        {aboutContent.title}
      </h2>

      <p className={aboutIntroStyles.description}>
        {aboutContent.description}
      </p>
    </div>
  );
}