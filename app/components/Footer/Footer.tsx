import { ArrowRight } from "lucide-react";
import { footerContent } from "./Footer.data";
import { footerStyles } from "./styles";

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.top}>
          <h2 className={footerStyles.title}>
            {footerContent.title}
          </h2>

          <a href="/contact" className={footerStyles.cta}>
            {footerContent.cta}
            <ArrowRight
              className={footerStyles.ctaIcon}
              aria-hidden="true"
            />
          </a>
        </div>

        <div className={footerStyles.details}>
          <a href={`mailto:${footerContent.email}`}>
            {footerContent.email}
          </a>

          <span aria-hidden="true">·</span>

          <a
            href="https://www.linkedin.com/in/kashvi-ail-5775402b1"
            target="_blank"
            rel="noreferrer"
          >
            {footerContent.linkedin}
          </a>

          <span aria-hidden="true">·</span>

          <span>{footerContent.location}</span>
        </div>
      </div>
    </footer>
  );
}