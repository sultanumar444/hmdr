import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA, InterestForm } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { images } from "@/lib/site-data";
import legalExpertImg from "@/assets/legal-expert.jpg";



export const Route = createFileRoute("/expert-witness-services")({
  head: () => buildHead({
    title: "Expert Witness Services | Heuer M.D. Research",
    description:
      "Dr. Marvin Heuer provides medical expert witness services for the pharmaceutical, dietary supplement, and nutraceutical industries.",
    path: "/expert-witness-services",
  }),
  component: ExpertWitnessPage,
});

function ExpertWitnessPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Expert Witness Services" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Legal"
          title="Expert Witness Services"
          intro='"Dr. Marvin Heuer brings over 30 years of dedicated professional experience in the pharmaceutical and dietary supplement industries to be positioned as the ultimate authority in your proceedings."'
          image={images.expertWitnessHero}
        />
      </Section>

      <Section>
        <Prose>
          <h2 className="text-2xl font-semibold text-foreground">What is an Expert Witness?</h2>
          <p>
            An Expert Witness is a fact-oriented individual who can offer testimony based on firsthand knowledge.
            Usually based on their professional backgrounds, Expert Witnesses have a personal understanding and
            expertise on the concepts about which they testify. During litigation when the stakes are high, the
            testimony of an Expert Witness is often a vital part of the legal strategy — especially when
            quantifying damages.
          </p>
          <h3 className="text-xl font-semibold text-foreground">When is an Expert Witness Needed?</h3>
          <ul>
            <li>The foundational issues or facts of the case are not clear</li>
            <li>The jury requires facts to reach a conclusion that is not easily attained</li>
            <li>The judge is not well-versed in the relevant concepts of the case</li>
          </ul>
          <p>
            Expert witnesses can be utilized on the forefront of litigation via testimonies, or in a more
            discrete role by assisting in building the fact basis needed to effectively try or defend a case.
          </p>
          <h3 className="text-xl font-semibold text-foreground">Top Level Discipline: Dietary Supplements</h3>
          <p>
            The Dietary Supplement and Pharmaceutical sectors are multi-faceted industries. Our Expert Consulting
            services can offer valuable information specific to litigation involving nutrition, food science,
            toxicology, pharmacology, neurological sciences, animal nutrition and other associated disciplines.
          </p>
          <p>
            Dr. Marvin Heuer is a certified expert in FDA regulations and chemistry. Moreover, he possesses an
            extensive background in international and domestic clinical research, as well as pharmaceutical and
            nutraceutical development. With his extensive experience and interaction with the FDA, FTC and ERSP
            in the pharmaceutical and nutraceutical industries, Dr. Heuer offers the skill and proficiency
            necessary to support your specific litigation needs.
          </p>
        </Prose>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={legalExpertImg} alt="Medical expert witness consultation" loading="lazy" width={1600} height={1000} className="rounded-2xl border border-border object-cover shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Trusted testimony where science meets the courtroom</h2>
            <p className="mt-3 text-muted-foreground">
              Legal teams retain Dr. Heuer for matters where medical, regulatory or nutraceutical science plays a decisive role — from claim-substantiation and labeling disputes to product-liability, personal-injury and class-action cases.
            </p>
            <p className="mt-3 text-muted-foreground">
              His hands-on experience with the FDA, FTC, NARC, ASRC and Health Canada, combined with decades of clinical research leadership, allows him to explain complex scientific concepts to judges and juries with clarity and integrity.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Related Disciplines</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {["Intellectual Property","Label Compliance","Marketing Compliance","Manufacturing","Medical","Pharmaceutical","Product Liability","Toxicology"].map((d) => (
            <div key={d} className="rounded-lg border border-border bg-card p-4 text-sm font-medium">{d}</div>
          ))}
        </div>
      </Section>


      <RelatedLinks
        heading="Related professional services"
        links={[
          { to: "/services/legal-support", label: "Legal Support", desc: "General-counsel-caliber litigation support for the nutraceutical industry." },
          { to: "/services/consulting", label: "Consulting Services", desc: "FDA / FTC / NARC / Health Canada regulatory consulting." },
          { to: "/services/regulatory", label: "Regulatory Services", desc: "Full-range regulatory work for cosmetics, food, supplements and pharma." },
          { to: "/for-attorneys", label: "For Attorneys", desc: "Case types, engagement process and case-consultation requests." },
          { to: "/about", label: "About Dr. Heuer", desc: "40+ years medical experience and 25+ years clinical research leadership." },
          { to: "/for-sponsors-and-cros", label: "For Sponsors & CROs", desc: "Clinical research site capabilities." },
        ]}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3"><ContactCTA heading="Request an expert consultation" body="Speak with Dr. Heuer's team about your case." /></div>
          <div className="md:col-span-2"><InterestForm variant="attorney" /></div>
        </div>
      </Section>
    </SiteLayout>
  );
}

