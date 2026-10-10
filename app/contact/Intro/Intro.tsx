import { ScalesAnimation } from "@/app/components/ui/Scale/Scale";
import { contactIntroContent } from "./Intro.data";
import { contactIntroStyles } from "./styles";

export function ContactIntro() {
  return (
    <header className={contactIntroStyles.wrapper}>
      <p className={contactIntroStyles.eyebrow}>
        {contactIntroContent.eyebrow}
      </p>

      
<h1 className={contactIntroStyles.title}>
  <span className="inline-flex items-center gap-x-2">
    <span>{contactIntroContent.title.lineOne}</span>
    <ScalesAnimation />
  </span>
  <br />
  {contactIntroContent.title.lineTwo}
</h1>


      <p className={contactIntroStyles.description}>
        {contactIntroContent.description}
      </p>
    </header>
  );
}
