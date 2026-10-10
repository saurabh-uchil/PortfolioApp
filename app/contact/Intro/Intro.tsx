import { contactIntroContent } from "./Intro.data";
import { contactIntroStyles } from "./styles";

export function ContactIntro() {
  return (
    <header className={contactIntroStyles.wrapper}>
      <p className={contactIntroStyles.eyebrow}>
        {contactIntroContent.eyebrow}
      </p>

      <h1 className={contactIntroStyles.title}>
        {contactIntroContent.title.lineOne}
        <br />
        {contactIntroContent.title.lineTwo}
      </h1>

      <p className={contactIntroStyles.description}>
        {contactIntroContent.description}
      </p>
    </header>
  );
}