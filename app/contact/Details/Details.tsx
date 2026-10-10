import { FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { contactDetailsContent } from "./Details.data";
import { contactDetailsStyles as styles } from "./styles";

export function ContactDetails() {
  const hasEmail = contactDetailsContent.email.length > 0;

  const hasLinkedIn =
    contactDetailsContent.linkedinUrl.includes("www.linkedin.com/in/") &&
    !contactDetailsContent.linkedinUrl.includes("YOUR_PROFILE");

  return (
    <aside className={styles.wrapper} aria-labelledby="contact-details-title">
      <div>
        <h2 id="contact-details-title" className={styles.title}>
          {contactDetailsContent.title}
        </h2>

        <p className={styles.description}>
          {contactDetailsContent.description}
        </p>
      </div>

      {hasEmail && (
        <div className={styles.emailSection}>
          <p className={styles.label}>{contactDetailsContent.emailLabel}</p>

          <a
            className={styles.email}
            href={`mailto:${contactDetailsContent.email}?subject=Legal%20Enquiry`}
          >
            {contactDetailsContent.email}
          </a>

          <a
            className={styles.emailLink}
            href={`mailto:${contactDetailsContent.email}?subject=Legal%20Enquiry`}
          >
            <Mail className={styles.emailIcon} aria-hidden="true" />
            {contactDetailsContent.emailLinkLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}

      {hasLinkedIn && (
        <div className={styles.socialSection}>
          <p className={styles.label}>{contactDetailsContent.linkedinLabel}</p>

          <a
            href={contactDetailsContent.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Visit LinkedIn profile (opens in a new tab)"
          >
            <FaLinkedin aria-hidden="true" className={styles.socialIcon} />
            View LinkedIn profile
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </aside>
  );
}
