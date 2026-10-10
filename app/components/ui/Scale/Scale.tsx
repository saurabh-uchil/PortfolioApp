import Image from "next/image";
import { scalesStyles as styles } from "./styles";

export function ScalesAnimation() {
  return (
    <span className={styles.wrapper} role="img" aria-label="Scales of Justice">
      {/* Fixed pillar and base */}
      <Image
        src="/assets/animation-images/scales-pillar.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="1.5em"
        className={styles.pillar}
      />

      {/* Beam, suspension lines and pans move together */}
      <Image
        src="/assets/animation-images/scales-assembly.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="1.5em"
        className={styles.assembly}
      />
    </span>
  );
}
