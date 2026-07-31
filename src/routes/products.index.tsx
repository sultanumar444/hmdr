import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products/")({
  head: () => buildHead({
    title: "Products | HMD Research",
    description:
      "Dietary supplement and nutraceutical products developed under the guidance of Dr. Marvin Heuer.",
    path: "/products",
  }),
  component: ProductsHub,
});

function ProductsHub() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Products" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Products"
          title="Nutraceutical Products"
          intro="Dietary supplement products developed under the guidance of Dr. Marvin Heuer, drawing on decades of nutraceutical formulation experience."
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group rounded-xl border border-border bg-card p-6 transition hover:border-foreground/20 hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l4 4-4 4M12 22l-4-4 4-4M2 12l4-4 4 4M22 12l-4 4-4-4" /></svg>
              </div>
              <div className="text-lg font-semibold group-hover:text-foreground">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
              <div className="mt-4 text-sm font-medium text-primary group-hover:underline">View product →</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-sm text-muted-foreground">
          Product pages are informational only. These statements have not been evaluated by the Food and Drug
          Administration. These products are not intended to diagnose, treat, cure or prevent any disease.
        </div>
      </Section>

      <Section><ContactCTA heading="Interested in these products?" body="Reach out for availability and formulation details." /></Section>
    </SiteLayout>
  );
}
