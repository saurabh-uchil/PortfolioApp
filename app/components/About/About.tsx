import { AboutImage } from "./Image/Image";
import { AboutIntro } from "./Intro/Intro";
import { AboutStats } from "./Stats/Stats";
import { aboutStyles } from "./styles";

export function About() {
  return (
    <section id="about" className={aboutStyles.section}>
      <div className={aboutStyles.container}>
        <AboutImage />
        <AboutIntro />
        <AboutStats />
      </div>
    </section>
  );
}