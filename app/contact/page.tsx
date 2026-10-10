import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Booking } from "./Booking/Booking";
import { ContactDetails } from "./Details/Details";

import { ContactIntro } from "./Intro/Intro";
import { testStyles } from "./styles";

const Test = () => {
  return (
    <section className={testStyles.section}>
      <Navbar navLinks={[]} showCta={false} brandHref="/" />

<main className={testStyles.main}>
  <div
    aria-hidden="true"
    className={testStyles.mainBackground}
  />

  <ContactIntro />

  <div className={testStyles.contentLayout}>
    <ContactDetails />
    <Booking />
  </div>
</main>

      <Footer />
    </section>
  );
};

export default Test;