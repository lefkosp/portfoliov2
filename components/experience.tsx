import { FadeIn } from "./fade-in";

type ExperienceEntry = {
  status: string;
  company: string;
  role: string;
  period: string;
  description: string;
  current?: boolean;
};

const entries: ExperienceEntry[] = [
  {
    status: "CURRENT_DEPLOYMENT",
    company: "ODYSSEY CYBERSECURITY",
    role: "Software Developer (Frontend) — ClearSkies",
    period: "JUN_2025 -> PRESENT",
    description:
      "Contributing to the modernization of a core internal platform by rebuilding the frontend using React, with a focus on improving usability, performance, and long-term maintainability. Rewriting the ClearSkies platform from C# and Ext.NET to a modern React-based stack while ramping up on a legacy system.",
    current: true,
  },
  {
    status: "PREVIOUS_NODE",
    company: "MEDLO",
    role: "Frontend Developer",
    period: "APR_2022 -> MAY_2025",
    description:
      "Spearheaded the development of an internal staffing module using Angular and TypeScript and collaborated closely with the Node.js backend team to ensure seamless API integration. Implemented mobile-first design principles to improve platform accessibility and user experience.",
  },
  {
    status: "ARCHIVED_NODE",
    company: "PRIMOTHEPLUG",
    role: "Owner & Digital Strategist",
    period: "SEP_2018 -> SEP_2021",
    description:
      "Founded and operated an e-commerce platform with daily inventory and pricing management. Managed three social media channels with consistent content creation and community engagement, executing marketing strategies that secured strategic partnership opportunities.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mt-section-gap w-full px-6 lg:px-margin-edge"
    >
      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <FadeIn className="col-span-4 lg:col-span-2">
          <h3 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> LOG
          </h3>
        </FadeIn>

        <div className="relative col-span-4 flex flex-col gap-16 border-l border-surface-variant pl-8 lg:col-span-8 lg:pl-12">
          {entries.map((entry, i) => (
            <FadeIn key={entry.company} className="group relative" delay={i * 120}>
              <div
                className={`absolute -left-[33px] top-[10px] h-[1px] w-4 transition-all duration-150 group-hover:w-6 lg:-left-[49px] ${
                  entry.current
                    ? "animate-pulse bg-accent"
                    : "bg-surface-variant group-hover:bg-on-surface-variant"
                }`}
              />
              <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-technical-mono text-surface-variant">
                <span>{entry.status}</span>
                <span aria-hidden="true">{"//"}</span>
                <span
                  className={
                    entry.current ? "text-accent" : "text-on-surface-variant"
                  }
                >
                  {entry.period}
                </span>
              </div>
              <h4 className="mb-1 font-display text-headline-md text-foreground">
                {entry.company}
              </h4>
              <div className="mb-4 font-sans text-body-md text-on-surface-variant">
                {entry.role}
              </div>
              <p className="font-sans text-body-md text-on-surface-variant">
                {entry.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
