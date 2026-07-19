import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/services/consulting")({
  head: () => buildHead({
    title: "Consulting Services | Heuer M.D. Research",
    description:
      "Consulting services for pharmaceutical, dietary supplement, food & beverage, and cosmetic industries — FDA/FTC experience, GRAS, NDI, GMP audits and more.",
    path: "/services/consulting",
  }),
  component: Consulting,
});

const services = [
  "GRAS Dossiers and Submission",
  "New Dietary Ingredient Notifications",
  "FDA / FTC / NARC Representation",
  "Health Canada Product License Application",
  "Product Testing / Clinical Trial Development",
  "GMP Manufacturing Plant Audits (domestic and international)",
  "Claims Substantiation",
  "Label Analysis and Review",
  "Review White Papers and Monographs",
];

function Consulting() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: "Consulting" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Services"
          title="Consulting Services"
          intro="Executive-level pharma and nutraceutical consulting with extensive FDA, FTC, NARC, ASRC and Health Canada experience."
          image={images.consultingServices}
        />
      </Section>

      <Section>
        <Prose>
          <p>
            Having served in pivotal executive positions in the pharmaceutical and nutraceutical industries,
            Dr. Heuer has extensive experience and interaction with the FDA, FTC, NARC, ASRC, Health Canada
            and other regulatory bodies domestically and internationally.
          </p>
        </Prose>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Key Industries Served</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Dietary Supplements</li>
              <li>• Food and Beverage</li>
              <li>• Cosmetic and Personal Care</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Services Include</h2>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {services.map((s) => <li key={s}>• {s}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Highlights</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Championed removal of Super Citramax (Garcinia Cambogia) from NFL and World Anti Doping Agency watch list</li>
          <li>• Instrumental in caffeine removal from World Anti Doping Agency Olympic watch list</li>
        </ul>
        <h3 className="mt-8 text-xl font-semibold tracking-tight">Supplement Formulations</h3>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Dr. Heuer has formulated hundreds of patented and patent-pending nutraceuticals which have
          revolutionized the sports supplement industry — including muscle strength and conditioning,
          weight management, joint support and OTC sleep aids. Some have helped produce bodybuilding and
          fitness champions and numerous winning athletes.
        </p>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><ContactCTA heading="Talk to a consultant" body="Ask about your product, claim, or regulatory question." /></div>
          <div className="md:col-span-2"><InterestForm variant="sponsor" /></div>
        </div>
      </Section>
    </SiteLayout>
  );
}
