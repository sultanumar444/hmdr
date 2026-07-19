import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { InterestForm, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { researchCategories } from "@/lib/site-data";

const path = "/for-healthcare-professionals";

export const Route = createFileRoute("/for-healthcare-professionals")({
  head: () => ({
    ...buildHead({
      title: "For Healthcare Professionals | Clinical Research Collaboration",
      description: "Information for referring physicians and healthcare professionals interested in clinical trial opportunities for their patients or research collaboration.",
      path,
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { label: "Home", url: "/" },
      { label: "For Healthcare Professionals", url: path },
    ]))],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "For Healthcare Professionals" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="For professionals"
          title="For Healthcare Professionals"
          intro="Information for referring physicians and healthcare professionals interested in clinical trial opportunities for their patients or research collaboration."
        />
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">For referring physicians</h2>
            <p className="mt-3 text-muted-foreground">
              Central Florida clinicians can share information about currently recruiting studies with patients who may be interested in participation. Formal referral partnerships are not implied; each patient decides independently whether to reach out.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Research collaboration</h2>
            <p className="mt-3 text-muted-foreground">
              Healthcare professionals interested in collaboration — for example, on investigator-initiated concepts or product-research questions — are welcome to contact the team.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-xl font-semibold">Current study categories</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {researchCategories.map((c) => (
            <span key={c.slug} className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
              {c.name}
            </span>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Referral enquiry</h2>
            <p className="mt-3 text-muted-foreground">
              Send a short note and the team will follow up with details.
            </p>
          </div>
          <InterestForm variant="referral" />
        </div>
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
