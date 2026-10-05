import { ContactHeader } from "../components/Contact/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";

const ContactPage = () => {
  return (
    <main>
      <Navbar navLinks={[]} showCta={false} />
      <ContactHeader />
    </main>
  )
}

export default ContactPage;
