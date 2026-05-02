import { FadeIn } from "./fade-in";

const techStack = [
  { name: "HTML", level: "CORE" },
  { name: "CSS", level: "CORE" },
  { name: "SASS", level: "ADV" },
  { name: "TAILWIND", level: "ADV" },
  { name: "JS_ES6+", level: "V.ADV" },
  { name: "REACT_ECO", level: "CORE" },
  { name: "ANGULAR", level: "CORE" },
];

export function About() {
  return (
    <section
      id="about"
      className="mt-section-gap w-full px-6 lg:px-margin-edge"
    >
      <div className="relative grid w-full grid-cols-4 gap-gutter border-t border-surface-variant pt-12 lg:grid-cols-12">
        <div className="absolute -top-[4px] left-0 h-[8px] w-[8px] border border-accent bg-background" />

        <FadeIn className="col-span-4 lg:col-span-3">
          <h3 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> IDENT
          </h3>
        </FadeIn>

        <FadeIn
          className="col-span-4 flex flex-col gap-6 font-sans text-body-lg text-on-surface-variant lg:col-span-5"
          delay={100}
        >
          <p>
            Hello, my name is Lefkos and I really enjoy creating things on the
            internet. Ever since I can remember I have been fascinated by the
            rapidly growing world of technology and it was always a dream of
            mine to make myself part of it.
          </p>
          <p>
            I love learning about new and advanced technologies and also
            applying critical thinking and problem-solving skills to overcome
            modern challenges.
          </p>
        </FadeIn>

        <FadeIn
          className="relative col-span-4 border border-surface-variant p-6 lg:col-span-3 lg:col-start-10"
          delay={200}
        >
          <div className="mb-4 font-mono text-technical-mono text-surface-variant">
            TECH_STACK //
          </div>
          <ul className="flex flex-col gap-2 font-mono text-technical-mono text-on-surface">
            {techStack.map((item) => (
              <li
                key={item.name}
                className="flex justify-between border-b border-surface-variant/30 pb-2"
              >
                <span>{item.name}</span>
                <span className="text-accent">{item.level}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
