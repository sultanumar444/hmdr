import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { newsItems, blogPosts } from "@/lib/site-data";

export const Route = createFileRoute("/news")({
  head: () => buildHead({
    title: "News | Heuer M.D. Research",
    description: "Recent research news, industry insights and updates from Heuer M.D. Research.",
    path: "/news",
  }),
  component: NewsPage,
});

function NewsPage() {
  const recentBlog = blogPosts.slice(0, 6);
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "News" }]} />
      <Section className="pt-6">
        <PageHeader eyebrow="News" title="Latest News & Insights" intro="Stay up to date with recent research and medical news." />
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Featured stories</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {newsItems.map((n) => (
            <div key={n.slug} className="overflow-hidden rounded-xl border border-border bg-card">
              <img src={n.image} alt={n.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{n.date}</div>
                <h3 className="mt-2 text-xl font-semibold">{n.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{n.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">From the blog</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentBlog.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-xl border border-border bg-card p-5 transition hover:border-foreground/20">
              <div className="text-xs text-muted-foreground">{p.category} · {p.readTime}</div>
              <div className="mt-2 font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6"><Link to="/blog" className="text-sm font-medium underline-offset-4 hover:underline">View all blog posts →</Link></div>
      </Section>

      <Section><ContactCTA /></Section>
    </SiteLayout>
  );
}
