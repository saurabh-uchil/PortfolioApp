import {
  experienceContent,
  experienceItems,
} from "./Experience.data";
import { experienceStyles } from "./styles";
import { Timeline } from "../ui/Timeline/Timeline";

export function Experience() {
  return (
    <section id="experience" className={experienceStyles.section}>
      <div className={experienceStyles.container}>
        <div className={experienceStyles.intro}>
          <p className={experienceStyles.eyebrow}>
            {experienceContent.eyebrow}
          </p>

          <h2 className={experienceStyles.title}>
            {experienceContent.title}
          </h2>

          <p className={experienceStyles.description}>
            {experienceContent.description}
          </p>
        </div>

        <div className={experienceStyles.timelineWrapper}>
          <Timeline items={experienceItems} />
        </div>
      </div>
    </section>
  );
}