import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/services/legal-support")({
  head: () => buildHead({
    title: "Legal Support Services | Heuer M.D. Research",
    description:
      "Legal support services for the nutraceutical industry: FDA/FTC/ASRC representation, product-claims substantiation, trademark and IP litigation.",
    path: "/services/legal-support",
  }),
  component: LegalSupport,
});

function LegalSupport() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Legal Support" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Services"
          title="Legal Support Services"
          intro="Attorney partners with experience serving as general counsel to some of the largest brands in the nutraceutical industry."
          image={images.legalServices}
        />
      </Section>

      <Section>
        <Prose>
          <p>
            Our attorney partners have served as general counsel to some of the largest brands in the
            nutraceutical industry and provide a wealth of experience and knowledge engaging in state
            and federal litigation matters.
          </p>
        </Prose>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Legal Support Services Offered</h2>
        <ul className="mt-6 grid gap-3 text-sm md:grid-cols-2">
          {[
            "FDA / FTC / ASRC Representation",
            "Litigation disputes involving trademark / IP infringement",
            "Litigation regarding product claims substantiation",
            "Litigation involving labeling, advertising, ASRC",
            "Litigation regarding personal injury, product liability and class action",
            "Trademark and patent registration",
            "Draft and negotiate contracts",
          ].map((s) => <li key={s} className="rounded-lg border border-border bg-card p-4">• {s}</li>)}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><ContactCTA heading="Discuss your case" body="Reach out to Dr. Heuer's team for legal support matters." /></div>
          <div className="md:col-span-2"><InterestForm variant="attorney" /></div>
        </div>
      </Section>
    </SiteLayout>
  );
}
