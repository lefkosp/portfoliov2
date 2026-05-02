import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { FadeIn } from "./fade-in";

export async function Blog() {
  const posts = await getBlogPosts();

  return (
    <section id="blog" className="mt-section-gap w-full px-6 lg:px-margin-edge">
      <FadeIn className="mb-12 grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <div className="col-span-4 flex items-end justify-between border-b border-surface-variant pb-4 lg:col-span-12">
          <h3 className="font-display text-headline-lg uppercase text-foreground">
            LOGS // KNOWLEDGE_BASE
          </h3>
          <span className="hidden font-mono text-technical-mono text-surface-variant md:block">
            ENTRIES: {posts.length.toString().padStart(2, "0")}
          </span>
        </div>
      </FadeIn>

      <div className="grid w-full grid-cols-4 gap-gutter lg:grid-cols-12">
        <FadeIn className="col-span-4 lg:col-span-2">
          <h4 className="flex items-center gap-2 font-display text-label-caps uppercase text-accent">
            <span className="h-[1px] w-4 bg-accent" /> ARCHIVE
          </h4>
        </FadeIn>

        <ol className="col-span-4 flex flex-col lg:col-span-9">
          {posts.map((post, index) => (
            <li
              key={post.slug}
              className="border-t border-surface-variant first:border-t-0 lg:first:border-t"
            >
              <FadeIn delay={index * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-4 gap-gutter py-8 transition-colors duration-150 lg:grid-cols-9"
                >
                  <span className="col-span-4 font-mono text-technical-mono text-surface-variant lg:col-span-1">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <div className="col-span-4 flex flex-col gap-3 lg:col-span-5">
                    <span className="inline-flex w-fit font-mono text-technical-mono text-accent transition-transform duration-150 group-hover:translate-x-1">
                      &gt; ./{post.slug}.mdx
                    </span>
                    <h4 className="font-display text-headline-md text-foreground transition-colors duration-150 group-hover:text-accent">
                      {post.title}
                    </h4>
                    <p className="font-sans text-body-md text-on-surface-variant">
                      {post.description}
                    </p>
                  </div>

                  <div className="col-span-4 flex flex-col gap-2 font-mono text-technical-mono uppercase text-surface-variant lg:col-span-3 lg:items-end lg:text-right">
                    <span>{post.publishedAt}</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}

          <li className="border-t border-surface-variant pt-6">
            <FadeIn delay={posts.length * 100}>
              <Link
                href="/blog"
                className="group/btn flex w-fit items-center gap-3 border border-surface-variant px-6 py-3 font-display text-label-caps uppercase text-on-surface transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                VIEW_ARCHIVE
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-150 group-hover/btn:translate-x-1"
                >
                  →
                </span>
              </Link>
            </FadeIn>
          </li>
        </ol>
      </div>
    </section>
  );
}
