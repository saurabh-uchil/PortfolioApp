import Image from "next/image";
import { errorStyles as styles } from "./styles";

type ErrorAnimationProps = {
  className?: string;
};

export function ErrorAnimation({
  className,
}: ErrorAnimationProps) {
  return (
    <span
      className={`${styles.wrapper} ${className ?? ""}`}
      role="img"
      aria-label="Error"
    >
      <Image
        src="/assets/animation-images/error-icon.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes="1.5em"
        className={styles.icon}
      />
    </span>
  );
}
