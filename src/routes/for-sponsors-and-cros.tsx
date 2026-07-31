import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ReviewedLabel, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";

const path = "/for-sponsors-and-cros";

export const Route = createFileRoute("/for-sponsors-and-cros")({
  head: () => ({
    ...buildHead({
      title: "For Sponsors & CROs | Clinical Research Site Capabilities",
      description: "Site capabilities, therapeutic experience, participant recruitment and study operations at HMD Research.",
      path,
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { label: "Home", url: "/" },
      { label: "Sponsors & CROs", url: path },
    ]))],
  }),
  component: Page,
});

const capabilities = [
  { t: "Investigator experience", d: "Physician-led site with experience across multiple therapeutic areas." },
  { t: "Participant recruitment", d: "Established Central Florida community reach with an emphasis on quality prescreening." },
  { t: "Study startup", d: "Support for feasibility, budgeting and regulatory startup activities." },
  { t: "Regulatory documentation", d: "Experience with essential documents, source templates and monitor readiness." },
  { t: "Site operations", d: "Trained coordinators, protocol adherence and reliable visit execution." },
  { t: "Data quality", d: "Source documentation practices designed to minimize queries." },
  { t: "Participant retention", d: "A participant-centered approach that supports adherence and retention." },
  { t: "Therapeutic experience", d: "Prior work spans dermatology, respiratory, endocrinology, GI, nutrition and more." },
  { t: "Facility", d: "Physician-led research facility located in Orlando, Florida." },
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "For Sponsors & CROs" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="For professionals"
          title="For Sponsors and CROs"
          intro="A physician-led clinical research site in Orlando, Florida supporting pharmaceutical, biotech and consumer-health studies."
        />
      </Section>
      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-5">
              <div className="font-semibold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6">
          <div className="text-sm font-semibold">Capabilities statement (placeholder)</div>
          <p className="mt-1 text-sm text-muted-foreground">
            A downloadable capabilities statement will be available here.
          </p>
          <button
            type="button"
            data-cta="resource-download"
            className="mt-3 inline-flex items-center rounded-md border border-input bg-background px-3 py-1.5 text-sm hover:bg-accent"
          >
            Download capabilities statement
          </button>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Discuss a research opportunity</h2>
            <p className="mt-3 text-muted-foreground">
              Reach out to talk through therapeutic fit, feasibility and site capabilities for an upcoming study.
            </p>
          </div>
          <InterestForm variant="sponsor" />
        </div>
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
