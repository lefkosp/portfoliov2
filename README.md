# portfoliov2

Personal portfolio and decision log for Lefkos Papapetrou — terminal-inspired design built with Next.js (App Router), React, Tailwind CSS v4, and MDX.

## Stack

- **Next.js 16** with the App Router
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **MDX** content in `content/`, loaded via `lib/decisions.ts` and `lib/blog.ts`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start the dev server     |
| `npm run build` | Production build         |
| `npm run start` | Serve the build          |
| `npm run lint`  | Run ESLint               |

## Design notes

Two accent colours carry meaning and shouldn't be used interchangeably:

- **Amber** (`--color-accent`) is the site identity — hero, nav, work, lab.
- **Signal green** (`--color-signal`) is reserved for the decision log, including the ADR cross-links that appear on project cards in Selected Works.

Section entrances use `<Reveal>` with a `variant` (`up` / `clip` / `left` / `rise`) rather than one shared fade, and `<Scramble>` decodes headline text on scroll. Both respect `prefers-reduced-motion`.

## Writing a decision record

Add a `.mdx` file to `content/decisions/`. The filename becomes the slug. Each record exports a `metadata` object:

```mdx
export const metadata = {
  id: "ADR-006",
  title: "Short, opinionated statement of the call",
  date: "2026-01-01",
  status: "ACCEPTED",
  project: "TWEETPRENUER", // optional — cross-links from Selected Works
  context: "The constraint I was under.",
  options: "Option A // option B // option C",
  decision: "What I actually did.",
  tradeoff: "What it cost.",
  outcome: "What happened next.",
  revisit: "What I'd change.",
};
```

Records are statically generated, sorted by `id`, and listed on `/decisions` as well as on the home page. Setting `project` to a name used in `components/work.tsx` wires up the cross-link automatically.

## Blog

The `/blog` routes still build but are unlinked from navigation, excluded from the sitemap, and marked `noindex` — the existing posts are drafts. To bring the section back, add a `.mdx` file to `content/blog/` with `title`, `description`, `publishedAt`, and `readingTime`, then re-add a section component to `app/page.tsx` and the nav lists.

## Structure

```
app/               Routes, metadata, sitemap, robots, OG image
components/        Page sections and shared UI
content/decisions/ MDX decision records
content/blog/      MDX posts (draft, unlinked)
lib/               Content loading
```
