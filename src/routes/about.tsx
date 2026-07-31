import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, Prose, RelatedLinks } from "@/components/site/Layout";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { ContactCTA } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { business, images, currentTrials, completedTrials, researchCategories } from "@/lib/site-data";
import teamImg from "@/assets/team-collaboration.jpg";
import officeImg from "@/assets/orlando-office.jpg";
import consentImg from "@/assets/consent-clipboard.jpg";

export const Route = createFileRoute("/about")({
  head: () => buildHead({
    title: `About ${business.name} | Orlando Clinical Research Center`,
    description:
      "HMD Research is a physician-led, multi-specialty clinical research center in Orlando, Florida, conducting studies for sponsors, CROs and Central Florida volunteers.",
    path: "/about",
  }),
  component: AboutPage,
});

const stats = [
  { value: "25+", label: "Years of clinical research" },
  { value: `${completedTrials.length}+`, label: "Studies conducted" },
  { value: `${currentTrials.length}`, label: "Active study programs" },
  { value: `${researchCategories.length}`, label: "Therapeutic areas" },
];

const values = [
  {
    title: "Participant safety first",
    body: "Every protocol runs under IRB oversight with documented informed consent, defined safety monitoring and a physician available throughout the study.",
  },
  {
    title: "Data integrity",
    body: "Our coordinators are trained in GCP and source documentation, so sponsors receive clean, query-ready data on the timelines they plan around.",
  },
  {
    title: "Honest recruitment",
    body: "We describe eligibility, visit burden and compensation plainly. No guaranteed outcomes, no pressure — participation is always voluntary.",
  },
  {
    title: "Community rooted",
    body: "We recruit from Greater Orlando and Central Florida, and we treat every volunteer as a long-term neighbor rather than a single enrollment.",
  },
];

const capabilities = [
  "Phase II–IV interventional trials",
  "Healthy-volunteer and nutrition studies",
  "Investigator-initiated and sponsor-led protocols",
  "On-site screening, vitals and specimen collection",
  "Regulatory document management and IRB submissions",
  "Recruitment and retention across Central Florida",
];

const timeline = [
  { year: "Foundation", body: "Founded as a physician-led research site in Orlando, built around executive-level pharmaceutical research experience." },
  { year: "Growth", body: "Expanded into a multi-specialty site running dermatology, respiratory, endocrine, gastroenterology and nutrition programs." },
  { year: "Partnerships", body: "Established working relationships with pharmaceutical sponsors, contract research organizations and central review boards." },
  { year: "Today", body: "Operating from Suite 104 on Vineland Road, enrolling volunteers into active studies while supporting sponsor pipelines." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "About" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="About Us"
          title={`About ${business.name}`}
          intro="A physician-led, multi-specialty clinical research center in Orlando, Florida — conducting rigorous studies for sponsors and CROs while giving Central Florida residents access to investigational care."
          image={images.medicalTeam}
        />
      </Section>

      {/* Who we are */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <img
            src={teamImg}
            alt="HMD Research clinical research team in Orlando"
            loading="lazy"
            width={1600}
            height={1000}
            className="rounded-2xl border border-border object-cover shadow-md"
          />
          <Prose>
            <h2>Who we are</h2>
            <p>
              {business.name} is a clinical research organization based in Orlando, Florida. We are a
              dedicated study center — not a general medical practice — and our entire operation is built
              around running clinical trials properly: careful screening, disciplined protocol execution,
              and clear communication with the people who volunteer.
            </p>
            <p>
              Our team brings together research physicians, study coordinators and regulatory staff whose
              combined background spans pharmaceutical, nutraceutical and academic research. That mix means
              a sponsor gets a site that understands protocol demands, and a participant gets a team that
              can explain what a study actually involves in plain language.
            </p>
            <p>
              We work across more than a dozen therapeutic areas and have contributed to studies at every
              stage from healthy-volunteer research through late-phase interventional trials.
            </p>
          </Prose>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4 md:p-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-background p-6 text-center">
              <div className="text-3xl font-semibold tracking-tight text-primary">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission & what we do */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our mission</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Advancing medical knowledge, responsibly</h2>
            <p className="mt-3 text-muted-foreground">
              We exist to move investigational treatments through research with the rigor sponsors require
              and the transparency participants deserve. We are committed to the value of clinical trial
              research, to the people who make it possible, and to promoting the positive contribution
              research provides to society.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">What we do</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">A full-service trial site</h2>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {capabilities.map((c) => (
                <li key={c} className="rounded-lg border border-border bg-background px-4 py-2.5">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          The standards below apply to every study we take on, regardless of sponsor, phase or indication.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6">
              <div className="text-lg font-semibold">{v.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Therapeutic areas */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Therapeutic areas we cover</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Our research experience spans multiple specialties, which lets us support sponsors across a
              broad pipeline and offer volunteers a wider range of study opportunities.
            </p>
          </div>
          <Link to="/research-experience" className="text-sm font-medium text-primary hover:underline">
            Explore research experience →
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          {researchCategories.map((c) => (
            <Link
              key={c.slug}
              to="/research-experience/$category"
              params={{ category: c.slug }}
              className="rounded-full border border-border bg-card px-4 py-2 text-muted-foreground transition hover:border-secondary/60 hover:text-foreground"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section>
        <div className="grid gap-10 md:grid-cols-5 md:items-center">
          <img
            src={images.doctorPortrait}
            alt={business.physician}
            loading="lazy"
            className="rounded-2xl border border-border object-cover shadow-md md:col-span-2"
          />
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Leadership</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Physician-led from the top</h2>
            <p className="mt-3 text-muted-foreground">
              {business.name} was founded and is medically led by {business.physician}, an internationally
              recognized research physician with more than 40 years in medicine and 25 years of domestic and
              international clinical research. He has served as Vice President and Worldwide Director of
              Clinical Research for organizations including SmithKline (now GSK), Wallace Laboratories and
              Ayerst Laboratories, and as Chief Science Officer at Iovate Health Sciences International.
            </p>
            <p className="mt-3 text-muted-foreground">
              That experience sets the standard for the whole organization: protocols are reviewed by a
              physician who has sat on both the sponsor and the site side of clinical research, supported by
              coordinators and regulatory staff who run the day-to-day study operations.
            </p>
            <Link
              to="/our-investigators"
              className="mt-5 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Meet our investigators
            </Link>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight">Our story</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {timeline.map((t, i) => (
            <div key={t.year} className="rounded-xl border border-border bg-card p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-secondary">Step {i + 1}</div>
              <div className="mt-2 font-semibold">{t.year}</div>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Facility & audiences */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Our Orlando research center</h2>
            <p className="mt-3 text-muted-foreground">
              We operate from {business.addressLine1}, {business.cityStateZip}, with on-site parking and easy
              access from I-4 and the 408. Screening visits, study procedures and follow-up appointments all
              take place at this location.
            </p>
            <dl className="mt-5 grid gap-3 text-sm">
              <div className="rounded-lg border border-border bg-card p-4">
                <dt className="font-medium">Hours</dt>
                <dd className="mt-1 text-muted-foreground">{business.hours}</dd>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <dt className="font-medium">Accessibility</dt>
                <dd className="mt-1 text-muted-foreground">{business.accessibility}</dd>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <dt className="font-medium">Phone</dt>
                <dd className="mt-1 text-muted-foreground">
                  <a href={business.phoneHref} className="hover:underline">{business.phone}</a>
                </dd>
              </div>
            </dl>
            <Link to="/locations/orlando" className="mt-5 inline-block text-sm font-medium text-primary hover:underline">
              Directions and location details →
            </Link>
          </div>
          <img
            src={officeImg}
            alt="HMD Research office in Orlando, Florida"
            loading="lazy"
            className="rounded-2xl border border-border object-cover shadow-md"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={consentImg} alt="Informed consent paperwork review" loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">If you are considering a study</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Study-related visits and care are provided at no cost to qualified participants, and some
                studies offer compensation for time and travel. Start with our currently enrolling studies.
              </p>
              <Link to="/current-studies" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                View current studies →
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <img src={images.clinicalTrialHero} alt="Clinical research site operations" loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">If you are a sponsor or CRO</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Review our site capabilities, therapeutic experience, staffing and recruitment reach in
                Central Florida, then contact us about protocol feasibility.
              </p>
              <Link to="/for-sponsors-and-cros" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                Site capabilities →
              </Link>
            </div>
          </div>
        </div>
      </Section>



      <Section><ContactCTA /></Section>
    </SiteLayout>
  );
}
