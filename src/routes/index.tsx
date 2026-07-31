import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { ContactCTA } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import heroBg from "@/assets/hero-bg.jpg";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { IndustryNewsTicker } from "@/components/site/IndustryNews";
import {
  business,
  currentTrials,
  images,
  researchCategories,
} from "@/lib/site-data";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: business.name,
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressLine1,
    addressLocality: business.city,
    addressRegion: business.regionShort,
    postalCode: "32819",
    addressCountry: "US",
  },
  areaServed: "Orlando, Florida and Central Florida",
  medicalSpecialty: "Clinical Research",
};

const homeFaqs = [
  { q: "Where is HMD Research located?", a: `${business.name} is located at ${business.addressLine1}, ${business.cityStateZip}.` },
  { q: "How do I find a clinical trial in Orlando?", a: "Review currently recruiting studies on our Clinical Trials page or call (407) 574-5650 to speak with the research team." },
  { q: "Is compensation offered for participation?", a: "Some studies may offer compensation for time and travel. It varies by study and is not guaranteed." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildHead({
      title: `${business.name} | Clinical Trials in Orlando, FL`,
      description:
        "Physician-led clinical trials in Orlando, Florida. HMD Research recruits volunteers across Greater Orlando and Central Florida for multi-specialty studies.",
      path: "/",
    }),
    scripts: [jsonLdScript(orgJsonLd), jsonLdScript(faqJsonLd(homeFaqs))],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div className="text-primary-foreground">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              Physician-led · {business.city}, {business.regionShort}
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Advancing medicine through <span className="text-secondary">clinical research</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg opacity-90 md:text-xl">
              {business.tagline}
            </p>
            <p className="mt-4 max-w-xl opacity-80">
              A physician-owned and professionally managed multi-specialty clinical trials
              research center serving Greater Orlando and Central Florida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/clinical-trials"
                className="inline-flex items-center rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-lg hover:opacity-90"
              >
                View Clinical Trials
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 rounded-3xl bg-secondary/30 blur-2xl" />
            <img
              src={images.doctorPortrait}
              alt="Dr. Marvin Heuer, M.D."
              className="relative w-full rounded-2xl border border-white/20 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <IndustryNewsTicker />

      {/* Transforming healthcare */}
      <Section className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Transforming healthcare</h2>
        <p className="mt-3 text-muted-foreground">Stay up to date with recent research and medical news</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:text-left">
          <Link to="/news" className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md">
            <img src={images.clinicalTrialHero} alt="Clinical research news" className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="text-xs text-muted-foreground">Research News</div>
              <div className="mt-2 text-lg font-semibold group-hover:text-foreground">Industry & regulatory headlines</div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                A continuously updated feed of FDA, NIH and ClinicalTrials.gov headlines relevant to clinical research.
              </p>
            </div>
          </Link>
          <Link to="/blog" className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md">
            <img src={images.clinicalTrialHero} alt="Clinical trial insights" className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="text-xs text-muted-foreground">Blog</div>
              <div className="mt-2 text-lg font-semibold group-hover:text-foreground">Participant guides & education</div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Plain-language articles about clinical trial eligibility, compensation, safety and what to expect.
              </p>
            </div>
          </Link>
          <Link to="/research-experience" className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md">
            <img src={images.medicalTeam} alt="HMD Research medical team" className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="text-xs text-muted-foreground">Research</div>
              <div className="mt-2 text-lg font-semibold group-hover:text-foreground">Decades of research experience</div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                More than 100 funded projects across a broad array of health and medical conditions.
              </p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Welcome */}
      <Section className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Welcome to {business.name}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          A physician owned and professionally managed multi-specialty clinical trials research center.
          We recognize conducting successful clinical trials requires the utmost quality and accuracy which
          our core of proficient and ethical Clinical Research Coordinators continuously provide. We recruit
          volunteers in the Greater Orlando and surrounding areas for various medical research studies.
        </p>
      </Section>

      {/* Clinical Trials feature grid */}
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight text-center">Clinical Trials</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Open Label Clinical Trials", body: "In Open Label Trials, all information related to the treatment is disclosed to both researcher and patient. There are no placebos or control treatments." },
            { title: "Controlled Clinical Trials", body: "Participants are divided into two groups: one receives the proposed treatment while the control group receives a placebo. Often conducted double-blind." },
            { title: "Phases of Clinical Research", body: "In order for a new drug or medical device to be introduced into the market, it must undergo a total of four phases of clinical trials." },
            { title: "Advancing Modern Medicine", body: "Participants play a crucial role in what may be revolutionary research that could impact the well-being of millions of people." },
            { title: "Why Participate?", body: "With the wide range of medical needs, body types and temperaments out there, reasons to participate vary depending on the individual." },
            { title: "Pioneering Treatments", body: "When you qualify for a clinical study, you gain access to medical care from experts on your particular condition at no cost to you." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20" /></svg>
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              <Link to="/clinical-trials" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">Read More →</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Current studies */}
      <Section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Currently recruiting studies</h2>
            <p className="mt-2 text-muted-foreground">Select a study to learn more.</p>
          </div>
          <Link to="/clinical-trials" className="hidden text-sm font-medium underline-offset-4 hover:underline md:inline">
            View all studies
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentTrials.slice(0, 3).map((t) => (
            <Link to="/clinical-trials" key={t.name} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={t.image} alt={t.name} className="h-full w-full object-cover transition group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="font-semibold group-hover:text-foreground">{t.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Medical Research categories */}
      <Section>
        <h2 className="text-3xl font-semibold tracking-tight text-center">Medical Research</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Dr. Heuer has had decades of research experience (including more than 100 funded projects)
          in a broad array of health and medical conditions.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Anti-Infectives", body: "Bronchitis, Cold, Cough, Flu Vaccines, Otitis, Pneumonia, Sinusitis", image: images.vaccine },
            { title: "Dermatology", body: "Acne, Alopecia, Cosmetics, Dermatitis, Diaper Rash, Psoriasis, Skin Cancer", image: images.dermatology },
            { title: "Endocrinology", body: "Type 1 and 2 Diabetes, Insulin Resistance", image: images.endocrinology },
            { title: "Gastroenterology", body: "Colon Polyps, Constipation, Crohn's, GERD, Hepatitis, IBS, Ulcerative Colitis", image: images.gastro },
          ].map((c) => (
            <Link to="/research-experience" key={c.title} className="group overflow-hidden rounded-xl border border-border bg-card transition hover:border-foreground/20 hover:shadow-md">
              <img src={c.image} alt={c.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <div className="text-base font-semibold group-hover:text-foreground">{c.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/research-experience" className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent">
            View All Research Areas
          </Link>
        </div>
      </Section>

      {/* Team image + About */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img src={images.medicalTeam} alt="HMD Research medical team" className="rounded-2xl border border-border shadow-md" />
          <div>
            <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">About Us</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              A clinical research facility providing specialty healthcare services to volunteers
            </h2>
            <p className="mt-4 text-muted-foreground">
              {business.name} is a full-service regulatory consulting firm with a specialized focus in
              Clinical Research Trials and Expert Witness services, led by {business.physician} — an internationally
              recognized research physician with over 40 years of experience in the medical field and 25 years
              of clinical research experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Meet Our Doctor
              </Link>
              <Link to="/clinical-trials" className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent">
                View Clinical Trials
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Categories mini grid */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Research experience</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchCategories.slice(0, 6).map((cat) => (
            <Link
              key={cat.slug}
              to="/research-experience/$category"
              params={{ category: cat.slug }}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-foreground/20"
            >
              <div className="font-semibold">{cat.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{cat.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/research-experience" className="text-sm font-medium underline-offset-4 hover:underline">
            Explore all research categories →
          </Link>
        </div>
      </Section>

      {/* Partners */}
      <Section>
        <PartnerMarquee />
      </Section>

      {/* Why choose our clinic */}
      <Section>
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Why choose our research center</h2>
              <p className="mt-3 text-muted-foreground">
                Led by an internationally accomplished medical research physician, our study center is
                dedicated to the advancement of medical knowledge for current and future medical treatments.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="rounded-lg border border-border bg-background p-4">Physician-led, multi-specialty trial site in Orlando</li>
              <li className="rounded-lg border border-border bg-background p-4">Experienced, ethically trained research coordinators</li>
              <li className="rounded-lg border border-border bg-background p-4">Study care and visits at no cost to qualified participants</li>
              <li className="rounded-lg border border-border bg-background p-4">Clear informed consent and ongoing safety monitoring</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <FAQ items={homeFaqs} />
      </Section>

      <Section>
        <ContactCTA />
      </Section>
    </SiteLayout>
  );
}
