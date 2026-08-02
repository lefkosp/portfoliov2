import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Decisions } from "@/components/decisions";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Lab } from "@/components/lab";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Decisions />
      <Lab />
      <Contact />
    </>
  );
}
