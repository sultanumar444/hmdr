import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { InterestForm } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { business } from "@/lib/site-data";

const faqs = [
  { q: "Where is HMD Research located?", a: `${business.addressLine1}, ${business.cityStateZip}.` },
  { q: "What are your office hours?", a: business.hours! },
  { q: "How do I schedule an appointment?", a: `Call ${business.phone} or complete the form on this page. A member of the team will follow up during business hours.` },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...buildHead({
      title: `Contact | ${business.name}`,
      description: `Contact HMD Research at ${business.addressLine1}, ${business.cityStateZip}. Phone ${business.phone}.`,
      path: "/contact",
    }),
    scripts: [jsonLdScript(faqJsonLd(faqs))],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <Section className="pt-6">
        <PageHeader eyebrow="Contact" title="Get in touch" intro="We look forward to hearing from you." />
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          <InfoCard title="Address">
            {business.addressLine1}<br />{business.cityStateZip}
          </InfoCard>
          <InfoCard title="Phone">
            <a href={business.phoneHref!} className="text-primary hover:underline">{business.phone}</a>
          </InfoCard>
          <InfoCard title="Office Hours">
            Monday – Friday<br />9:00 AM – 5:00 PM
          </InfoCard>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="HMD Research map"
              src={business.mapEmbedUrl!}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <InterestForm />
        </div>
      </Section>

      <Section><FAQ items={faqs} /></Section>
    </SiteLayout>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="mt-2 text-sm text-foreground/90">{children}</div>
    </div>
  );
}
