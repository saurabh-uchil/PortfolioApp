import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
    </main>
  );
}
