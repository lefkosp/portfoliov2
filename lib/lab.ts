export type LabStatus = "ACTIVE" | "STARTED" | "PAUSED";

export type LabEntry = {
  id: string;
  name: string;
  slug: string;
  status: LabStatus;
  date: string;
  problem: string;
  built: string;
  next: string;
  tags: string[];
  github: string;
};

export const labEntries: LabEntry[] = [
  {
    id: "LAB-01",
    name: "BUDGET_FIREWALL",
    slug: "budget-firewall",
    status: "ACTIVE",
    date: "2026-01",
    problem:
      "Personal finance app that imports bank transactions and surfaces spending patterns before money leaks.",
    built:
      "Next.js app shell with auth, open-banking connect flow, transaction import, dashboard, and analytics views wired to a charting layer.",
    next: "Budget rules engine and intent-based spending alerts.",
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT"],
    github: "https://github.com/lefkosp/budget-firewall",
  },
  {
    id: "LAB-02",
    name: "REVIEWSNAP",
    slug: "reviewsnap",
    status: "STARTED",
    date: "2025-07",
    problem:
      "Let creators collect testimonials, customize an embeddable widget, and publish a public review page.",
    built:
      "Next.js SaaS scaffold with auth, dashboard, testimonial management, tweet import, widget customizer, and public /r/[username] pages.",
    next: "Billing, onboarding polish, and embed script for third-party sites.",
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT"],
    github: "https://github.com/lefkosp/reviewsnap-ui",
  },
];

export function getLabEntries() {
  return labEntries;
}

export function getLabTerminalLines() {
  return [
    ...labEntries.map(
      (entry) =>
        `${entry.id} :: ${entry.name} [${entry.status}] :: ${entry.problem}`,
    ),
    "",
    "details :: 'open lab'  |  repos :: 'open budget-firewall' | 'open reviewsnap'",
  ];
}

export const labOpenTargets: Record<string, string> = {
  lab: "/#lab",
  "budget-firewall": "https://github.com/lefkosp/budget-firewall",
  reviewsnap: "https://github.com/lefkosp/reviewsnap-ui",
};
