import { ContactHeader } from "../components/Contact/Header/Header";
import { Tabs } from "../components/Contact/Tabs/Tabs";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { contactStyles } from "./styles";

const ContactPage = () => {
  return (
    <section className={contactStyles.section}>
      <Navbar navLinks={[]} showCta={false} brandHref="/"/>
      <div className={contactStyles.container}>
        <ContactHeader />
        <Tabs />
      </div>
      <Footer />
    </section>
  );
}

export default ContactPage;
