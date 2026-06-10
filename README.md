# portfoliov2

Personal portfolio and blog for Lefkos Papapetrou — terminal-inspired design built with Next.js (App Router), React, Tailwind CSS v4, and MDX.

## Stack

- **Next.js 16** with the App Router
- **Tailwind CSS v4** (CSS-first config in `app/globals.css`)
- **MDX** blog posts in `content/blog/`, loaded via `lib/blog.ts`

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

## Writing a blog post

Add a new `.mdx` file to `content/blog/`. The filename becomes the slug. Each post exports a `metadata` object:

```mdx
export const metadata = {
  title: "Post Title",
  description: "Short summary.",
  publishedAt: "2026-01-01",
  readingTime: "5 min read",
};
```

Posts are statically generated and sorted by `publishedAt`.

## Structure

```
app/          Routes, metadata, sitemap, robots, OG image
components/   Page sections and shared UI
content/blog/ MDX posts
lib/          Blog content loading
```
