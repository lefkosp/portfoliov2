import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
import { Decisions } from "@/components/decisions";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { ReferenceBlock } from "@/components/reference-block";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ReferenceBlock />
      <Experience />
      <Work />
      <Decisions />
      <Blog />
      <Contact />
    </>
  );
}
