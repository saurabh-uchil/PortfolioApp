
import { Timeline } from "../ui/Timeline/Timeline";
import {
  educationContent,
  educationItems,
} from "./Education.data";
import { educationStyles } from "./styles";

export function Education() {
  return (
    <section id="education" className={educationStyles.section}>
      <div className={educationStyles.container}>
        <Timeline items={educationItems} />

        <div className={educationStyles.intro}>
          <p className={educationStyles.eyebrow}>
            {educationContent.eyebrow}
          </p>

          <h2 className={educationStyles.title}>
            {educationContent.title}
          </h2>

          <p className={educationStyles.description}>
            {educationContent.description}
          </p>
        </div>
      </div>
    </section>
  );
}