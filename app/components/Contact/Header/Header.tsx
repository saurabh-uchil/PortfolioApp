import { contactHeaderContent } from "./Header.data";
import { contactHeaderStyles } from "./styles";

export function ContactHeader() {
  return (
    <header className={contactHeaderStyles.wrapper}>
      <div className={contactHeaderStyles.content}>
        <p className={contactHeaderStyles.eyebrow}>
          {contactHeaderContent.eyebrow}
        </p>

        <h1 className={contactHeaderStyles.title}>
          {contactHeaderContent.title.lineOne}
          <br />
          {contactHeaderContent.title.lineTwo}
        </h1>

        <p className={contactHeaderStyles.description}>
          {contactHeaderContent.description}
        </p>
      </div>
    </header>
  );
}