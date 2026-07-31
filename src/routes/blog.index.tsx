import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { blogCategories, blogPosts } from "@/lib/site-data";

const path = "/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...buildHead({
      title: "Clinical Research Blog | Orlando Clinical Trials Insights",
      description: "Practical articles on clinical trials, participation, regulatory topics and expert-witness insights from the HMD Research team.",
      path,
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { label: "Home", url: "/" },
      { label: "Blog", url: path },
    ]))],
  }),
  component: Page,
});

function Page() {
  const [cat, setCat] = useState<string>("All");
  const filtered = useMemo(
    () => (cat === "All" ? blogPosts : blogPosts.filter((p) => p.category === cat)),
    [cat],
  );
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <Section className="pt-6">
        <PageHeader
          title="Blog"
          intro="Articles from the HMD Research team on clinical trial participation, regulatory topics and expert-witness insights."
        />
      </Section>
      <Section>
        <div className="mb-6 flex flex-wrap gap-2 text-sm">
          {["All", ...blogCategories].map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1 ${
                cat === c ? "border-foreground bg-foreground text-background" : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/40" aria-hidden />
              <div className="flex flex-1 flex-col p-5">
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{p.category}</div>
                <h2 className="mt-2 text-lg font-semibold group-hover:text-foreground">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.author}</span>
                  <span>{p.updated} · {p.readTime}</span>
                </div>
                <div className="mt-4 text-sm font-medium">Read article →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
