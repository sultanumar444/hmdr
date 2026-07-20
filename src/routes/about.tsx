import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { business, images, keyIndustries, regulatoryIndustries } from "@/lib/site-data";
import teamImg from "@/assets/team-collaboration.jpg";



export const Route = createFileRoute("/about")({
  head: () => buildHead({
    title: `About ${business.physician} | ${business.name}`,
    description:
      "Dr. Marvin Heuer, M.D. FAAFP is an internationally recognized research physician with 40+ years of medical experience and 25+ years of clinical research leadership.",
    path: "/about",
  }),
  component: AboutPage,
});

const experienceSections = [
  { title: "Anti-Infectives", items: ["Bronchitis","Cold","Cough","Flu Vaccines","Otitis","Pneumonia","Sinusitis"] },
  { title: "Dermatology", items: ["Acne","Alopecia","Cosmetics","Dermatitis","Diaper Rash","Psoriasis","Skin Cancer"] },
  { title: "Endocrinology", items: ["Type 1 & Type 2 Diabetes","Insulin Resistance"] },
  { title: "Gastroenterology", items: ["Colon Polyps","Constipation","Crohn's Disease","GERD","Gastroparesis","Hepatitis A, B, C, E","Irritable Bowel Syndrome","Peptic Ulcer Disease","Ulcerative Colitis"] },
  { title: "Internal Medicine", items: ["Asthma","COPD","High Cholesterol","Hypertension","Obesity"] },
  { title: "Muscle Physiology", items: ["Diet","Muscle Building","Sarcopenia","Strength Training"] },
  { title: "Nutrition / Dietary", items: ["Dietary Supplements","Muscle Building","Weight Loss","Hormone Replacement Therapy","Infertility","Menopause","Osteoporosis","PCOS","PMS","Uterine Fibroids"] },
  { title: "Pediatrics", items: ["Acne","Allergies","Asthma"] },
  { title: "OB/GYN", items: ["Contraception","Dysmenorrhea","Endometriosis","Diabetes","Urinary Incontinence","Vaccines","Weight Loss"] },
];

function AboutPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "About" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="About Us"
          title={`About ${business.physician}`}
          intro="Internationally recognized research physician with 40+ years of medical experience and 25+ years of clinical research leadership."
          image={images.doctorPortrait}
        />
      </Section>

      <Section>
        <Prose>
          <p>
            Marvin Heuer is an internationally recognized research physician with over 40 years of experience
            in the medical field and 25 years of experience in domestic and international clinical research.
            Graduating cum laude from Mankato State University in Minnesota in 1969, Dr. Heuer earned his
            medical degree from the University of Minnesota Medical School and completed his internship at
            St. John's Hospital in St. Paul shortly thereafter. Since that time, Dr. Heuer has been published
            in several peer-reviewed scientific publications and presented a wide variety of papers at
            research and medical conferences all around the United States and abroad.
          </p>
          <p>
            Dr. Heuer has served as the Vice President and Worldwide Director of Clinical Research for many
            companies including SmithKline (now GSK), Wallace Laboratories (now Meda AB) and Ayerst
            Laboratories (now Pfizer). Moreover, Dr. Heuer has also served as the Chief Science Officer for
            Iovate Health Sciences International where he played a vital role in the research and development
            of nutraceutical products.
          </p>
          <p>
            Currently, Dr. Heuer is a certified expert in FDA regulations and chemistry with extensive
            experience and interaction with the FDA, FTC and ERSP within the pharmaceutical and nutraceutical
            industries. He actively continues practicing medicine, conducting clinical trials and
            participating on review boards within the nutraceutical arena.
          </p>
          <p>
            In addition to his professional accomplishments, Dr. Heuer enjoys teaching, publishing, inventing
            and actively serving within the community and professional societies. His renowned contributions
            over the years have earned him a multitude of awards from the American Medical Association and
            the Marquis Who's Who series.
          </p>
        </Prose>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Areas of research experience</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experienceSections.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-5">
              <div className="font-semibold">{s.title}</div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {s.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{business.name}</h2>
            <p className="mt-3 text-muted-foreground">
              We are a medical research center dedicated to the advancement of medical knowledge for current
              and future medical treatments. We are committed to the importance of clinical trial research
              and clinical trial participation and promoting the positive contribution they provide to society.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="mb-2 font-semibold">Key Industries Served</div>
              <ul className="space-y-1 text-muted-foreground">{keyIndustries.map((k)=><li key={k}>• {k}</li>)}</ul>
            </div>
            <div>
              <div className="mb-2 font-semibold">Regulatory Services</div>
              <ul className="space-y-1 text-muted-foreground">{regulatoryIndustries.map((k)=><li key={k}>• {k}</li>)}</ul>
            </div>
          </div>
        </div>
      </Section>

      <RelatedLinks
        heading="Explore the practice"
        links={[
          { to: "/clinical-trials", label: "Clinical Trials", desc: "Current and completed studies." },
          { to: "/expert-witness-services", label: "Expert Witness Services", desc: "Testimony and litigation support." },
          { to: "/services/consulting", label: "Consulting Services", desc: "FDA / FTC regulatory consulting." },
          { to: "/services/regulatory", label: "Regulatory Services", desc: "Cosmetics, food, supplements and pharma." },
          { to: "/products", label: "Products", desc: "Nutraceuticals formulated under Dr. Heuer's guidance." },
          { to: "/locations/orlando", label: "Orlando Location", desc: "Directions, hours and how to reach the team." },
        ]}
      />

      <Section><ContactCTA /></Section>
    </SiteLayout>
  );
}

