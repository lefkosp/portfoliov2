import { Reveal } from "./reveal";

type ExperienceRole = {
  role: string;
  period: string;
  bullets: string[];
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
        bullets: [
          "Replaced a 7-layer architecture with a flat, conventional React structure, cutting the number of files a typical feature touches. Still building features in it day to day.",
          "Own the shared UI component library end to end: 150+ components on shadcn/ui, used by four products across the company, not just ClearSkies.",
          "Lead three frontend developers through mentoring and code review, and brought the team onto an AI-assisted workflow with Claude Code, now our default way of building features.",
        ],
        current: true,
      },
      {
        role: "Software Developer (Frontend) // ClearSkies",
        period: "JUN_2025 -> MAY_2026",
        bullets: [
          "Built the client-side dashboard engine: users compose their own dashboards from around 130 widget types, reordering and resizing on a grid, with new widget types dropping in without touching the engine.",
          "One of the core contributors on the rewrite from C#/Ext.NET to React, moving 30+ modules off the legacy stack and building the component systems that replaced it.",
        ],
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
        bullets: [
          "Sole frontend owner of a staffing and scheduling platform used across 10+ regions in Sweden.",
          "Shipped the original scheduling module in Angular/TypeScript, then three years of calendar-heavy features on top of it.",
          "Built the platform's first automatic shift-to-staff assignment engine.",
          "Built the API endpoints behind those features and covered that backend work with Mocha unit tests.",
          "Designed the UI myself; the team had no designer.",
        ],
      },
    ],
  },
  {
    status: "ARCHIVED_NODE",
    company: "PRIMOTHEPLUG",
    roles: [
      {
        role: "Owner",
        period: "SEP_2018 -> SEP_2021",
        bullets: [
          "Ran an e-commerce brand end to end: built the storefront, product pages, and a conversion-optimized checkout, and owned the frontend layer alongside inventory and pricing logic.",
          "Grew three social channels into recurring brand partnerships.",
        ],
      },
    ],
  },
];

/** Bullets rather than a paragraph: these are scanned, not read. The marker is
 *  the same 1px rule the section headers and timeline ticks use, so the list
 *  reads as part of the log rather than as generic prose. */
function RoleBullets({ bullets }: { bullets: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {bullets.map((text) => (
        <li
          key={text}
          className="relative pl-6 font-sans text-body-md text-on-surface-variant"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-[0.8em] h-[1px] w-3 bg-surface-variant"
          />
          {text}
        </li>
      ))}
    </ul>
  );
}

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
        <div className="mb-1 flex flex-wrap items-center gap-3 font-mono text-technical-mono text-outline">
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
        <RoleBullets bullets={role.bullets} />
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 font-sans text-body-md text-on-surface-variant">
        {role.role}
      </div>
      <RoleBullets bullets={role.bullets} />
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
        <Reveal className="col-span-4 lg:col-span-2">
          <h3 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> LOG
          </h3>
        </Reveal>

        <div className="relative col-span-4 flex flex-col gap-16 border-l border-surface-variant pl-8 lg:col-span-8 lg:pl-12">
          {entries.map((entry, i) => {
            const stacked = entry.roles.length > 1;
            const primaryRole = entry.roles[0];

            return (
              <Reveal
                key={entry.company}
                variant="left"
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
                <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-technical-mono text-outline">
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
