import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/site/Layout";
import { ContactCTA } from "@/components/site/CTA";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import heroBg from "@/assets/hero-bg.jpg";
import heroResearch from "@/assets/hero-research-3.jpg";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { IndustryNewsTicker } from "@/components/site/IndustryNews";
import { TrialHighlights } from "@/components/site/TrialHighlights";

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
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-45" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/65" />
          <div className="absolute inset-0 bg-primary/30" />
        </div>
        {/* soft arc behind the portrait, like a spotlight */}
        <div className="pointer-events-none absolute -right-40 top-1/2 hidden h-[46rem] w-[46rem] -translate-y-1/2 rounded-full bg-secondary/15 blur-[2px] md:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-32">
          <div className="text-primary-foreground">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              Physician-led · {business.city}, {business.regionShort}
            </div>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-primary-foreground md:text-6xl">
              Advancing medicine
              <br />
              through <span className="text-secondary">clinical research</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg opacity-90">
              {business.tagline}
            </p>
            <p className="mt-3 max-w-xl opacity-75">
              A physician-owned and professionally managed multi-specialty clinical trials
              research center serving Greater Orlando and Central Florida.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:w-fit">
              <Link
                to="/participate-now"
                className="inline-flex items-center justify-center rounded-md border border-white/50 px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_-12px_rgba(0,0,0,0.7)] transition hover:bg-white/10"
              >
                Participate Now
              </Link>
              <Link
                to="/enroll-now"
                className="inline-flex items-center justify-center rounded-md border border-white/50 px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-[0_14px_34px_-12px_rgba(0,0,0,0.7)] transition hover:bg-white/10"
              >
                Enroll Now
              </Link>
              <Link
                to="/enroll-now"
                className="col-span-2 inline-flex items-center justify-center rounded-md border border-secondary bg-secondary px-7 py-3.5 text-center text-sm font-semibold text-secondary-foreground shadow-[0_14px_34px_-10px_rgba(0,0,0,0.7)] transition hover:opacity-90"
              >
                Join a Study
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            {/* circular ring accent */}
            <div className="absolute inset-0 rounded-full border-[1.5px] border-secondary/40" />
            <div className="absolute inset-3 rounded-full border border-white/10" />
            <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-full border-4 border-white/10 shadow-[0_35px_80px_-30px_rgba(0,0,0,0.85)]">
              <img
                src={heroResearch}
                alt="Research coordinator reviewing a study visit with a clinical trial participant"
                className="h-full w-full object-cover"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-2 left-4 rounded-xl border border-white/15 bg-primary/90 px-5 py-4 text-primary-foreground backdrop-blur shadow-[0_20px_45px_-20px_rgba(0,0,0,0.8)]">
              <div className="text-2xl font-semibold text-secondary">Phase I–IV</div>
              <div className="text-xs opacity-80">Multi-specialty trial experience</div>
            </div>
          </div>

        </div>
      </section>


      <IndustryNewsTicker />

      {/* Transforming healthcare */}
      <Section className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Transforming healthcare</h2>
        <p className="mt-3 text-muted-foreground">Stay up to date with recent research and medical news</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:text-left">
          <Link to="/news" className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-foreground/20 hover:shadow-md">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={images.healthcareNews} alt="Clinical research news" loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground">Research News</div>
              <div className="mt-2 text-lg font-semibold group-hover:text-foreground">Industry & regulatory headlines</div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                A continuously updated feed of FDA, NIH and ClinicalTrials.gov headlines relevant to clinical research.
              </p>
            </div>
          </Link>
          <Link to="/blog" className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-foreground/20 hover:shadow-md">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={images.participantEducation} alt="Clinical trial participant education" loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground">Blog</div>
              <div className="mt-2 text-lg font-semibold group-hover:text-foreground">Participant guides & education</div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                Plain-language articles about clinical trial eligibility, compensation, safety and what to expect.
              </p>
            </div>
          </Link>
          <Link to="/research-experience" className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-foreground/20 hover:shadow-md">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={images.researchExperience} alt="HMD Research medical team collaboration" loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
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
      <TrialHighlights />


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
            <Link to="/clinical-trials" key={t.name} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-foreground/20 hover:shadow-md">
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
          Decades of research experience across a broad array of health and medical conditions.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Anti-Infectives", body: "Bronchitis, Cold, Cough, Flu Vaccines, Otitis, Pneumonia, Sinusitis", image: images.vaccine },
            { title: "Dermatology", body: "Acne, Alopecia, Cosmetics, Dermatitis, Diaper Rash, Psoriasis, Skin Cancer", image: images.dermatology },
            { title: "Endocrinology", body: "Type 1 and 2 Diabetes, Insulin Resistance", image: images.endocrinology },
            { title: "Gastroenterology", body: "Colon Polyps, Constipation, Crohn's, GERD, Hepatitis, IBS, Ulcerative Colitis", image: images.gastro },
          ].map((c) => (
            <Link to="/research-experience" key={c.title} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-foreground/20 hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={c.image} alt={c.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
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
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-colors hover:border-foreground/20 hover:shadow-md"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="font-semibold">{cat.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{cat.summary}</p>
              </div>
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
