import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return buildHead({ title: "Product not found", description: "Product not found.", path: `/products/${params.slug}`, noindex: true });
    return buildHead({
      title: `${loaderData.product.name} | Heuer M.D. Research`,
      description: loaderData.product.tagline,
      path: `/products/${params.slug}`,
    });
  },
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout><Section><h1 className="text-2xl font-semibold">Product not found</h1><Link to="/products" className="mt-4 inline-block text-primary hover:underline">Back to products →</Link></Section></SiteLayout>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: product.name }]} />
      <Section className="pt-6">
        <PageHeader eyebrow="Product" title={product.name} intro={product.tagline} />
      </Section>

      <Section>
        <Prose><p>{product.description}</p></Prose>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Product highlights</h2>
        <ul className="mt-6 grid gap-3 text-sm md:grid-cols-2">
          {product.highlights.map((h) => (
            <li key={h} className="rounded-lg border border-border bg-card p-4">✓ {h}</li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6 text-sm text-muted-foreground">
          These statements have not been evaluated by the Food and Drug Administration. This product is not
          intended to diagnose, treat, cure or prevent any disease. Consult your healthcare provider before use.
        </div>
      </Section>

      <Section><ContactCTA heading="Questions about this product?" body="Contact the team for availability and formulation details." /></Section>
    </SiteLayout>
  );
}
