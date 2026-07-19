import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { InterestForm, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";

const path = "/for-attorneys";

export const Route = createFileRoute("/for-attorneys")({
  head: () => ({
    ...buildHead({
      title: "Medical and Regulatory Expertise for Attorneys",
      description: "Expert-witness, medical-record review and regulatory expertise for product-claim, labeling, dietary supplement and pharmaceutical matters.",
      path,
    }),
    scripts: [jsonLdScript(breadcrumbJsonLd([
      { label: "Home", url: "/" },
      { label: "For Attorneys", url: path },
    ]))],
  }),
  component: Page,
});

const areas = [
  "Medical-record review",
  "Product claims and substantiation",
  "Labeling and regulatory disputes",
  "Dietary supplement matters",
  "Pharmaceutical matters",
  "Scientific literature review",
];

const process = [
  { t: "Initial conversation", d: "A short call to understand the matter and confirm fit." },
  { t: "Materials review", d: "Review of the records, product information and claims at issue." },
  { t: "Written analysis", d: "A clear, defensible written analysis when scope calls for it." },
  { t: "Deposition and testimony", d: "Available when the scope of engagement requires it." },
];

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "For Attorneys" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="For professionals"
          title="Medical and Regulatory Expertise for Attorneys"
          intro="Support for legal teams handling product-claim, labeling, dietary supplement and pharmaceutical matters."
        />
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Case types supported</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
              {areas.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Deposition and testimony experience is described only when verified for the specific engagement.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Engagement process</h2>
            <ol className="mt-3 space-y-3">
              {process.map((p, i) => (
                <li key={i} className="rounded-lg border border-border bg-card p-4">
                  <div className="font-medium">{i + 1}. {p.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.d}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Request a case consultation</h2>
            <p className="mt-3 text-muted-foreground">
              Reach out to discuss whether the engagement is a fit. No case results or client logos are displayed.
            </p>
          </div>
          <InterestForm variant="attorney" />
        </div>
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
