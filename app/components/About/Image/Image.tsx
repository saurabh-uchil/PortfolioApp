import { aboutContent } from "../About.data";
import { aboutImageStyles } from "./styles";

export function AboutImage() {
  return (
    <div className={aboutImageStyles.wrapper}>
      <div
        className={aboutImageStyles.image}
        aria-hidden="true"
      />

      <div
        className={aboutImageStyles.fade}
        aria-hidden="true"
      />

      <div className={aboutImageStyles.quote}>
        <p className={aboutImageStyles.quoteText}>
          {aboutContent.imageQuote}
        </p>

        <div
          className={aboutImageStyles.quoteLine}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}