import { calendlyEmbedStyles } from "./styles";

type CalendlyProps = {
  url: string;
  title: string;
};

export function Calendly({ url, title }: CalendlyProps) {
  return (
    <div className={calendlyEmbedStyles.wrapper}>
      {/* Desktop */}
      <div className={calendlyEmbedStyles.desktop}>
        <iframe
          src={url}
          title={title}
          className={calendlyEmbedStyles.iframe}
        />
      </div>

      {/* Mobile */}
      <div className={calendlyEmbedStyles.mobile}>
        <div className={calendlyEmbedStyles.mobileContent}>
          <p className={calendlyEmbedStyles.mobileEyebrow}>
            Legal Consultation
          </p>

          <h3 className={calendlyEmbedStyles.mobileTitle}>
            30-minute consultation
          </h3>

          <p className={calendlyEmbedStyles.mobileDescription}>
            Choose a convenient time to discuss your legal query.
          </p>

          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={calendlyEmbedStyles.mobileButton}
          >
            Schedule a Call
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}