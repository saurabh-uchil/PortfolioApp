import { aboutImageStyles } from "./styles";

export function AboutImage() {
  return (
    <div className={aboutImageStyles.wrapper}>
      <div className={aboutImageStyles.image} />

      <div
        className={aboutImageStyles.fade}
        aria-hidden="true"
      />
    </div>
  );
}