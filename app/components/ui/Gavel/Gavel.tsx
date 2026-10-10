import Image from "next/image";
import { gavelStyles as styles } from "./styles";

export function GavelAnimation() {
  return (
    <span
      className={styles.wrapper}
      role="img"
      aria-label="Gavel"
    >
      {/* Stationary base */}
      <Image
        src="/assets/animation-images/gavel-base.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="1.5em"
        className={styles.base}
      />

      {/* Animated hammer */}
      <Image
        src="/assets/animation-images/gavel-hammer.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="1.5em"
        className={styles.hammer}
      />
    </span>
  );
}
