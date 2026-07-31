import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ContactCTA, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { researchCategories } from "@/lib/site-data";

const path = "/research-experience";

export const Route = createFileRoute("/research-experience/")({
  head: () => ({
    ...buildHead({
      title: "Research Experience by Medical Category",
      description: "Explore research experience across dermatology, respiratory health, endocrinology, gastroenterology, nutrition, dietary supplements and more.",
      path,
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { label: "Home", url: "/" },
      { label: "Research Experience", url: path },
    ]))],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Research Experience" }]} />
      <Section className="pt-6">
        <PageHeader
          title="Research Experience"
          intro="Areas where the HMD Research team has clinical or product-research experience. Select a category for more detail."
        />
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchCategories.map((cat) => (
            <Link
              key={cat.slug}
              to="/research-experience/$category"
              params={{ category: cat.slug }}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="font-semibold">{cat.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{cat.summary}</p>
              <div className="mt-3 text-sm font-medium underline-offset-4 hover:underline">
                Explore {cat.name.toLowerCase()} experience →
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <ContactCTA
          heading="Discuss a research opportunity"
          body="Sponsors, CROs and healthcare professionals can reach out to discuss category-specific experience in more detail."
        />
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
