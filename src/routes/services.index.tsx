import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { images } from "@/lib/site-data";


export const Route = createFileRoute("/services/")({
  head: () => buildHead({
    title: "Services | Heuer M.D. Research",
    description:
      "Legal support, consulting, and regulatory services for the pharmaceutical, dietary supplement, food and beverage, and cosmetic industries.",
    path: "/services",
  }),
  component: ServicesHub,
});

const cards = [
  { to: "/services/legal-support", title: "Legal Support", body: "General counsel-caliber support for state and federal litigation in the nutraceutical industry.", image: images.legalServices },
  { to: "/services/consulting", title: "Consulting Services", body: "FDA, FTC, NARC, ASRC and Health Canada experience across dietary supplement and food industries.", image: images.consultingServices },
  { to: "/services/regulatory", title: "Regulatory Services", body: "Full-range regulatory services for cosmetics, food, dietary supplements and pharmaceuticals.", image: images.regulatoryServices },
] as const;

function ServicesHub() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Services"
          title="Our Services"
          intro="Comprehensive legal support, consulting, and regulatory services led by an internationally recognized research physician."
        />
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.to} to={c.to} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md">
              <img src={c.image} alt={c.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="text-lg font-semibold">{c.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                <div className="mt-3 text-sm font-medium text-primary group-hover:underline">Learn more →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <RelatedLinks
        heading="Also explore"
        links={[
          { to: "/expert-witness-services", label: "Expert Witness Services", desc: "Testimony, medical-record review and litigation support." },
          { to: "/for-attorneys", label: "For Attorneys", desc: "Case types, engagement process and how to request a consultation." },
          { to: "/for-sponsors-and-cros", label: "For Sponsors & CROs", desc: "Physician-led site capabilities in Orlando." },
          { to: "/clinical-trials", label: "Clinical Trials", desc: "Currently recruiting studies and clinical research overview." },
          { to: "/products", label: "Products", desc: "Nutraceuticals formulated under Dr. Heuer's guidance." },
          { to: "/about", label: "About Dr. Heuer", desc: "Physician-led leadership with international clinical research experience." },
        ]}
      />

      <Section><ContactCTA /></Section>
    </SiteLayout>
  );
}

