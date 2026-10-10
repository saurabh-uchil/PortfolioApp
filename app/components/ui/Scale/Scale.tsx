
import Image from "next/image";
import { scalesStyles as styles } from "./styles";

export function ScalesAnimation() {
  return (
    <span
      className={styles.wrapper}
      role="img"
      aria-label="Scales of Justice"
    >
      {/* Fixed pillar and base */}
      <Image
        src="/assets/animation-images/scales-pillar.png"
        alt=""
        fill
        sizes="160px"
        className={styles.pillar}
      />

      {/* One connected, rotating assembly */}
      <span className={styles.assembly} aria-hidden="true">
        <Image
          src="/assets/animation-images/scales-left-pan.png"
          alt=""
          fill
          sizes="160px"
          className={styles.pan}
        />

        <Image
          src="/assets/animation-images/scales-right-pan.png"
          alt=""
          fill
          sizes="160px"
          className={styles.pan}
        />

        <Image
          src="/assets/animation-images/scales-beam.png"
          alt=""
          fill
          sizes="160px"
          className={styles.beam}
        />
      </span>
    </span>
  );
}
