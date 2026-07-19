import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ContactCTA, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { blogPosts, business } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const path = `/blog/${params.slug}`;
    return {
      ...buildHead({
        title: loaderData.title,
        description: loaderData.summary,
        path,
        ogType: "article",
      }),
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: loaderData.title,
          description: loaderData.summary,
          author: { "@type": "Organization", name: loaderData.author },
          dateModified: loaderData.updated,
          publisher: { "@type": "Organization", name: business.name },
        }),
        jsonLdScript(breadcrumbJsonLd([
          { label: "Home", url: "/" },
          { label: "Blog", url: "/blog" },
          { label: loaderData.title, url: path },
        ])),
      ],
    };
  },
  component: Page,
});

function Page() {
  const post = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.title }]} />
      <Section className="pt-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{post.category}</div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <span>Updated {post.updated}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Section>
      <Section>
        <article className="mx-auto max-w-3xl space-y-5 text-[15px] leading-relaxed text-foreground/90">
          {post.body.map((p, i) => <p key={i}>{p}</p>)}
          <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            Medical disclaimer: This article is educational and is not medical advice. Please speak with your healthcare provider about decisions that affect your health.
          </div>
        </article>
      </Section>
      {related.length > 0 ? (
        <Section>
          <h2 className="text-xl font-semibold">Related articles</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/blog/$slug"
                params={{ slug: r.slug }}
                className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/20"
              >
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{r.category}</div>
                <div className="mt-2 font-semibold">{r.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{r.summary}</div>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}
      <Section>
        <ContactCTA />
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
