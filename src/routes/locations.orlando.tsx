import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { ContactCTA, EmptyStudies, InterestForm, ReviewedLabel } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { areasServed, business, studies } from "@/lib/site-data";

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: business.name,
  address: business.addressLine1 ? {
    "@type": "PostalAddress",
    streetAddress: business.addressLine1,
    addressLocality: business.city,
    addressRegion: business.regionShort,
    addressCountry: "US",
  } : undefined,
  areaServed: areasServed,
};

const faqs = [
  { q: "Where is Heuer M.D. Research located in Orlando?", a: "The research center is located in Orlando, Florida. A verified street address will appear on this page once confirmed." },
  { q: "Is parking available at the research location?", a: "Parking details will be listed here once verified. Please contact the team if you have accessibility or arrival questions in the meantime." },
  { q: "Are evening or weekend appointments available?", a: "Availability varies by study. Some visits may be scheduled outside standard hours — please ask the research team about a specific study." },
  { q: "How do I contact the Orlando research team?", a: "You can send a message using the form on this page. Once phone details are verified they will appear here as a click-to-call link." },
];

export const Route = createFileRoute("/locations/orlando")({
  head: () => ({
    ...buildHead({
      title: `Clinical Research Center in Orlando, ${business.regionShort}`,
      description: `Directions, hours and contact details for the ${business.name} clinical research center in Orlando, Florida.`,
      path: "/locations/orlando",
    }),
    scripts: [
      jsonLdScript(localBusinessLd),
      jsonLdScript(faqJsonLd(faqs.map((f) => ({ q: f.q, a: f.a })))),
      jsonLdScript(breadcrumbJsonLd([
        { label: "Home", url: "/" },
        { label: "Locations", url: "/locations/orlando" },
        { label: "Orlando", url: "/locations/orlando" },
      ])),
    ],
  }),
  component: OrlandoLocation,
});

function OrlandoLocation() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Locations" }, { label: "Orlando" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Orlando Location"
          title={`${business.name} in Orlando, ${business.regionShort}`}
          intro="Directions, hours and how to reach the local research team."
        />
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Address</div>
            <div className="mt-2 text-lg font-semibold">{business.name}</div>
            <div className="mt-1 text-sm text-muted-foreground">
              {business.addressLine1 ?? "Street address to be confirmed"}<br />
              {business.cityStateZip}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                data-cta="get-directions"
                className="inline-flex items-center rounded-md border border-input px-3 py-1.5 text-sm hover:bg-accent"
              >
                Get Directions
              </button>
              {business.phoneHref ? (
                <a
                  href={business.phoneHref}
                  data-cta="phone-click"
                  className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Call {business.phone}
                </a>
              ) : (
                <span className="inline-flex items-center rounded-md border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground">
                  Phone to be confirmed
                </span>
              )}
            </div>
          </div>
          <div className="aspect-video w-full overflow-hidden rounded-xl border border-dashed border-border bg-muted/40">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Embedded map placeholder
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-[4/3] rounded-xl border border-dashed border-border bg-muted/40">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Exterior building image placeholder</div>
          </div>
          <div className="aspect-[4/3] rounded-xl border border-dashed border-border bg-muted/40">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">Entrance image placeholder</div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          <Detail label="Office hours" value={business.hours} />
          <Detail label="Parking" value={business.parking} />
          <Detail label="Public transportation" value={business.transit} />
          <Detail label="Accessibility" value={business.accessibility} />
          <Detail label="Nearby landmarks" value={null} placeholder="Landmark information will be added once verified." />
          <Detail label="Email" value={business.email} />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Serving Orlando and Central Florida</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Participants regularly travel to the Orlando research site from surrounding communities. Individual city pages will be added only when we can offer unique, useful information for that community.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-sm">
          {areasServed.map((a) => (
            <li key={a} className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Current studies</h2>
        <div className="mt-4">
          {studies.length === 0 ? <EmptyStudies /> : null}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><FAQ items={faqs} title="Local FAQs" /></div>
          <div className="md:col-span-2"><InterestForm /></div>
        </div>
      </Section>

      <Section>
        <ContactCTA />
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}

function Detail({ label, value, placeholder }: { label: string; value: string | null; placeholder?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm text-foreground/90">
        {value ?? <span className="text-muted-foreground">{placeholder ?? "To be verified."}</span>}
      </div>
    </div>
  );
}
