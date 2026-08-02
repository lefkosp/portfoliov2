import { Reveal } from "./reveal";

const techStack = [
  {
    category: "CORE //",
    items: ["TYPESCRIPT", "REACT", "ANGULAR", "NEXT.JS"],
  },
  {
    category: "PLATFORM //",
    items: ["NODE.JS", "REST", "WEBSOCKETS"],
  },
  {
    category: "DELIVERY //",
    items: ["DESIGN_SYSTEMS", "GIT", "VITE"],
  },
];

export function About() {
  return (
    <section
      id="about"
      className="mt-section-gap w-full px-6 lg:px-margin-edge"
    >
      <div className="relative grid w-full grid-cols-4 gap-gutter border-t border-surface-variant pt-12 lg:grid-cols-12">
        <div className="absolute -top-[4px] left-0 h-[8px] w-[8px] border border-accent bg-background" />

        <Reveal className="col-span-4 lg:col-span-3">
          <h3 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> ABOUT
          </h3>
        </Reveal>

        <Reveal
          className="col-span-4 flex flex-col gap-6 font-sans text-body-lg text-on-surface-variant lg:col-span-5"
          delay={100}
        >
          <p>
            Lead frontend developer specializing in modernizing legacy systems
            into scalable, maintainable UI architectures. I&apos;ve rebuilt
            enterprise platforms from Ext.NET to React and shipped modular
            Angular systems from the ground up.
          </p>
          <p>
            Currently leading frontend on ClearSkies at Odyssey Cybersecurity,
            owning architecture direction, mentoring the team, and driving a
            full platform rewrite. I optimize for code that outlives the sprint:
            clear module boundaries, reviewable patterns, and UIs other
            engineers can extend without a walkthrough.
          </p>
        </Reveal>

        <Reveal
          variant="rise"
          className="relative col-span-4 border border-surface-variant p-6 lg:col-span-3 lg:col-start-10"
          delay={200}
        >
          <div className="mb-4 font-mono text-technical-mono text-outline">
            TECH_STACK //
          </div>
          <div className="flex flex-col gap-4 font-mono text-technical-mono">
            {techStack.map((group) => (
              <div key={group.category}>
                <div className="mb-2 text-accent">{group.category}</div>
                <ul className="flex flex-col gap-2 text-on-surface">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-surface-variant/30 pb-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
