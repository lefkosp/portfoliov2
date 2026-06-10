import { FadeIn } from "./fade-in";

type ExperienceRole = {
  role: string;
  period: string;
  description: string;
  current?: boolean;
};

type ExperienceEntry = {
  status: string;
  company: string;
  roles: ExperienceRole[];
  current?: boolean;
};

function companyPeriod(entry: ExperienceEntry): string {
  const oldest = entry.roles[entry.roles.length - 1];
  const newest = entry.roles[0];
  const start = oldest.period.split(" -> ")[0];
  const end = newest.period.split(" -> ")[1] ?? "PRESENT";
  return `${start} -> ${end}`;
}

const entries: ExperienceEntry[] = [
  {
    status: "CURRENT_DEPLOYMENT",
    company: "ODYSSEY CYBERSECURITY",
    current: true,
    roles: [
      {
        role: "Lead Software Developer (Frontend) // ClearSkies",
        period: "MAY_2026 -> PRESENT",
        description:
          "Own frontend architecture for ClearSkies—module boundaries, shared patterns, and long-term React platform direction. Lead a small frontend team through mentoring, structured code reviews, and unblocking delivery while raising the quality bar.",
        current: true,
      },
      {
        role: "Software Developer (Frontend) // ClearSkies",
        period: "JUN_2025 -> MAY_2026",
        description:
          "Leading the full rewrite of ClearSkies from C#/Ext.NET to a modern React architecture. Replaced a brittle legacy UI layer with composable component systems, reducing developer onboarding friction and improving cross-team maintainability for long-term platform evolution.",
      },
    ],
  },
  {
    status: "PREVIOUS_NODE",
    company: "MEDLO",
    roles: [
      {
        role: "Frontend Developer",
        period: "APR_2022 -> MAY_2025",
        description:
          "Architected and shipped an internal staffing module in Angular/TypeScript with tight Node.js API integration. Mobile-first implementation expanded platform reach to field teams, eliminating manual scheduling overhead and streamlining cross-department coordination.",
      },
    ],
  },
  {
    status: "ARCHIVED_NODE",
    company: "PRIMOTHEPLUG",
    roles: [
      {
        role: "Owner & Digital Strategist",
        period: "SEP_2018 -> SEP_2021",
        description:
          "Built and maintained a custom e-commerce platform end-to-end: product pages, landing flows, and conversion-optimized checkout. Owned the frontend layer alongside inventory systems and pricing logic. Business strategy and social channel growth drove recurring brand partnerships.",
      },
    ],
  },
];

function ExperienceRoleBlock({
  role,
  stacked,
}: {
  role: ExperienceRole;
  stacked: boolean;
}) {
  if (stacked) {
    return (
      <div className="relative pl-6">
        <span
          aria-hidden="true"
          className="absolute left-0 top-[10px] h-[1px] w-3 bg-surface-variant"
        />
        <div className="mb-1 flex flex-wrap items-center gap-3 font-mono text-technical-mono text-surface-variant">
          <span
            className={
              role.current ? "text-accent" : "text-on-surface-variant"
            }
          >
            {role.period}
          </span>
        </div>
        <div className="mb-3 font-sans text-body-md text-foreground">
          {role.role}
        </div>
        <p className="font-sans text-body-md text-on-surface-variant">
          {role.description}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 font-sans text-body-md text-on-surface-variant">
        {role.role}
      </div>
      <p className="font-sans text-body-md text-on-surface-variant">
        {role.description}
      </p>
    </>
  );
}

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
          {entries.map((entry, i) => {
            const stacked = entry.roles.length > 1;
            const primaryRole = entry.roles[0];

            return (
              <FadeIn
                key={entry.company}
                className="group relative"
                delay={i * 120}
              >
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
                      entry.current
                        ? "text-accent"
                        : "text-on-surface-variant"
                    }
                  >
                    {stacked ? companyPeriod(entry) : primaryRole.period}
                  </span>
                </div>
                <h4 className="mb-1 font-display text-headline-md text-foreground">
                  {entry.company}
                </h4>

                {stacked ? (
                  <div className="mt-4 flex flex-col gap-8 border-l border-surface-variant/60">
                    {entry.roles.map((role) => (
                      <ExperienceRoleBlock
                        key={`${role.role}-${role.period}`}
                        role={role}
                        stacked
                      />
                    ))}
                  </div>
                ) : (
                  <ExperienceRoleBlock role={primaryRole} stacked={false} />
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
