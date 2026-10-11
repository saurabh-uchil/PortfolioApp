import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { NotFound } from "./components/NotFound/NotFound";
import { notFoundPageStyles as styles } from "./components/NotFound/notfoundstyles";

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <Navbar navLinks={[]} showCta={false} brandHref="/" />

      <NotFound />

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
