import { About } from "@/components/about";
import { Blog } from "@/components/blog";
import { Contact } from "@/components/contact";
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
      <Blog />
      <Contact />
    </>
  );
}
