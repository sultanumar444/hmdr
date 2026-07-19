import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/services/regulatory")({
  head: () => buildHead({
    title: "Regulatory Services | Heuer M.D. Research",
    description:
      "Full-range regulatory services for the cosmetic, food and beverage, dietary supplement and pharmaceutical industries.",
    path: "/services/regulatory",
  }),
  component: Regulatory,
});

const groups = [
  {
    title: "Cosmetics",
    items: [
      "FDA / FTC / ASRC representation",
      "U.S. FDA Form 483 and warning letter analysis and response",
      "Review labels, websites and advertising claims",
      "Clinical trial design to substantiate product label claims",
      "USDA and border ingredient importation issues",
      "GMP / GCP / GLP audits (domestic and international)",
      "Adverse event monitoring and reporting",
      "Identity testing and toxicology reporting",
      "Risk assessments and risk mitigation strategies",
    ],
  },
  {
    title: "Dietary Supplements",
    items: [
      "FDA / FTC / NARC representation",
      "U.S. FDA Form 483 and warning letter analysis and response",
      "Label, website and advertising claim review",
      "Clinical trial design to substantiate product label claims",
      "White papers and monographs",
      "NDI notifications and GRAS submissions",
      "Adverse event monitoring and reporting",
      "Health Canada PLA and NPN applications",
      "USDA and border ingredient importation issues",
      "DSHEA and NHPD compliance",
      "GMP / GLP / GCP audits (domestic and international)",
      "Identity testing and toxicology reporting",
    ],
  },
  {
    title: "Food and Beverage",
    items: [
      "FDA / FTC / ASRC representation",
      "U.S. FDA Form 483 and warning letter analysis and response",
      "Review of labels, websites and advertising claims",
      "Clinical studies designed to substantiate label claims",
      "GRAS dossiers and submissions",
      "GMP / GCP / GLP audits (domestic and international)",
      "USDA and border ingredient importation issues",
      "Adverse event monitoring and reporting",
      "Identity testing and toxicology reporting",
    ],
  },
];

function Regulatory() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "Regulatory" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Services"
          title="Regulatory Services"
          intro="Full-range regulatory services for cosmetics, food and beverage, dietary supplements and pharmaceuticals."
          image={images.regulatoryServices}
        />
      </Section>

      <Section>
        <Prose>
          <p>
            Heuer M.D. provides a full range of regulatory services for the cosmetic, food and beverage,
            dietary supplement and pharmaceutical industries. Our consultants assist your business to ensure
            compliance with government regulations. Their extensive experience provides the expertise to help
            your business comprehend the FDA, FTC and other regulatory requirements.
          </p>
        </Prose>
      </Section>

      {groups.map((g) => (
        <Section key={g.title}>
          <h2 className="text-2xl font-semibold tracking-tight">{g.title}</h2>
          <ul className="mt-6 grid gap-3 text-sm md:grid-cols-2">
            {g.items.map((s) => <li key={s} className="rounded-lg border border-border bg-card p-4">• {s}</li>)}
          </ul>
        </Section>
      ))}

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><ContactCTA /></div>
          <div className="md:col-span-2"><InterestForm variant="sponsor" /></div>
        </div>
      </Section>
    </SiteLayout>
  );
}
