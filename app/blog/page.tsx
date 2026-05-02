import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "BLOG // KNOWLEDGE_BASE",
  description:
    "Notes on frontend systems, product interfaces, and performance.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="w-full px-6 pt-16 lg:px-margin-edge lg:pt-24">
      <div className="mb-12 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 flex items-end justify-between border-b border-surface-variant pb-4 lg:col-span-12">
          <h1 className="font-display text-headline-lg uppercase text-foreground">
            LOGS // KNOWLEDGE_BASE
          </h1>
          <span className="hidden font-mono text-technical-mono text-surface-variant md:block">
            ENTRIES: {posts.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 lg:col-span-2">
          <h2 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> ARCHIVE
          </h2>
        </div>

        <ol className="col-span-4 flex flex-col lg:col-span-9">
          {posts.map((post, index) => (
            <li
              key={post.slug}
              className="border-t border-surface-variant first:border-t-0 lg:first:border-t"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-4 gap-gutter py-10 transition-colors duration-150 lg:grid-cols-9"
              >
                <span className="col-span-4 font-mono text-technical-mono text-surface-variant lg:col-span-1">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <div className="col-span-4 flex flex-col gap-3 lg:col-span-5">
                  <span className="inline-flex w-fit font-mono text-technical-mono text-accent transition-transform duration-150 group-hover:translate-x-1">
                    &gt; ./{post.slug}.mdx
                  </span>
                  <h3 className="font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="font-sans text-body-md text-on-surface-variant">
                    {post.description}
                  </p>
                </div>

                <div className="col-span-4 flex flex-col gap-2 font-mono text-technical-mono uppercase text-surface-variant lg:col-span-3 lg:items-end lg:text-right">
                  <span>{post.publishedAt}</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
