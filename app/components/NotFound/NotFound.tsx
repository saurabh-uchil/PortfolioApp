import Link from "next/link";
import { notFoundContent } from "./NotFound.data";
import { notFoundStyles as styles } from "./styles";
import { ErrorAnimation } from "../ui/Error/Error";

export function NotFound() {
  return (
    <main className={styles.wrapper}>
      <div
        aria-hidden="true"
        className={styles.backgroundLines}
      />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          {notFoundContent.eyebrow}
        </p>

        <h1 className={styles.title}>
          {notFoundContent.title}
          <ErrorAnimation />
        </h1>

        <p className={styles.description}>
          {notFoundContent.description}
        </p>

        <p className={styles.description}>
          {notFoundContent.subDescription}
        </p>

        <div className={styles.actions}>
          <Link
            href={notFoundContent.homeHref}
            className={styles.homeButton}
          >
            {notFoundContent.homeLabel}
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </Link>

          <Link
            href={notFoundContent.contactHref}
            className={styles.contactLink}
          >
            {notFoundContent.contactLabel}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}