import {About} from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import {PracticeAreas} from "./components/PracticeAreas/PracticeAreas";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <About />
      <Experience />
    </main>
  );
}
