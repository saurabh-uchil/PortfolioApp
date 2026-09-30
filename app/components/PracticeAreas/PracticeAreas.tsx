import {Carousel} from "./Carousel/Carousel";
import {Intro} from "./Intro/Intro";
import { practiceAreasStyles } from "./styles";

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className={practiceAreasStyles.section}
    >
      <div className={practiceAreasStyles.container}>
        <Intro />
        <Carousel />
      </div>
    </section>
  );
}