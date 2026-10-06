import { footerContent } from "./Footer.data";
import { footerStyles } from "./styles";

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <span className={footerStyles.copyright}>
          {footerContent.copyright}
        </span>
      </div>
    </footer>
  );
}