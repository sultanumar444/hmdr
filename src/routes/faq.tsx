import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader, RelatedLinks } from "@/components/site/Layout";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { ContactCTA, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { business } from "@/lib/site-data";
import heroImg from "@/assets/participant-education.jpg";

const path = "/faq";

const groups: { id: string; title: string; blurb: string; items: { q: string; a: string }[] }[] = [
  {
    id: "basics",
    title: "Clinical trial basics",
    blurb: "What a study is and how it is regulated.",
    items: [
      { q: "What is a clinical trial?", a: "A clinical trial is a carefully designed research study that evaluates whether an investigational treatment, device or product is safe and effective. Each study follows a written protocol reviewed by an Institutional Review Board (IRB) before any participant is enrolled." },
      { q: "Who oversees the study?", a: "Studies are conducted under a Principal Investigator and reviewed by an independent IRB. Sponsors and monitors also review site data and documentation throughout the study." },
      { q: "What are the phases of a clinical trial?", a: "Phase I evaluates safety and dosing in a small group, Phase II examines effectiveness and side effects, Phase III compares the treatment against existing standards in larger groups, and Phase IV monitors a treatment after approval." },
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility & screening",
    blurb: "How we determine whether a study is a fit.",
    items: [
      { q: "How do I know if I qualify?", a: "A short prescreening conversation reviews basic eligibility. If a study looks like a fit, the next step is usually an in-person screening visit with additional assessments." },
      { q: "Why are there eligibility criteria?", a: "Criteria protect participant safety and ensure the results are meaningful. They typically cover age, diagnosis, medical history, current medications and prior treatments." },
      { q: "Can I join more than one study?", a: "Usually not at the same time. The research team can explain any waiting periods between studies." },
      { q: "Do I need to be sick to participate?", a: "Not always. Some studies enroll healthy volunteers, particularly vaccine, nutrition and consumer-health studies." },
    ],
  },
  {
    id: "cost",
    title: "Cost, insurance & compensation",
    blurb: "What participation costs and what may be provided.",
    items: [
      { q: "Is there a cost to participate?", a: "Study-related visits and procedures are typically provided at no cost to the participant. Unrelated medical care is handled through your regular provider." },
      { q: "Do I need health insurance?", a: "Insurance is usually not required to participate, though requirements can vary by study." },
      { q: "Is compensation guaranteed?", a: "No. Some studies offer compensation and some do not, and compensation is usually tied to completed visits." },
      { q: "Is transportation provided?", a: "This varies by study. Some studies may offer travel-related support; others may not." },
    ],
  },
  {
    id: "visits",
    title: "Study visits & medications",
    blurb: "What your schedule looks like day to day.",
    items: [
      { q: "How long does a visit take?", a: "Visit length varies by study and by the type of assessment being done. The research team will let you know what to plan for before each visit." },
      { q: "How often will I come in?", a: "Visit frequency is defined by the protocol. Some studies require weekly visits early on, then space out; others involve only a handful of visits." },
      { q: "Should I mention my current medications?", a: "Yes. Sharing an accurate medication list helps the research team decide whether a study is a safe fit." },
      { q: "Do I keep seeing my own doctor?", a: "Yes. Study participation does not replace your regular medical care, and we encourage you to keep your physician informed." },
    ],
  },
  {
    id: "safety",
    title: "Safety, consent & privacy",
    blurb: "Your rights and protections as a participant.",
    items: [
      { q: "Can I take the consent form home before signing?", a: "In most cases, yes. Take the time you need to review it, ask questions and decide." },
      { q: "Is my information kept private?", a: "Yes. Information shared with the research team is handled confidentially and used only for the purposes described in the informed consent." },
      { q: "What if I have a side effect?", a: "Report anything unusual to your coordinator right away. Adverse events are documented and reviewed by the investigator, and you will be given contact details for questions between visits." },
      { q: "Can I stop after I've started?", a: "Yes. Participation is voluntary and you may withdraw at any time. A brief final visit may be requested to complete study-related follow-up." },
    ],
  },
  {
    id: "professionals",
    title: "For sponsors, CROs & physicians",
    blurb: "Questions from professional partners.",
    items: [
      { q: "What phases does the site conduct?", a: "The Orlando site conducts Phase II–IV studies as well as consumer-health and nutrition research, with investigator oversight on every visit." },
      { q: "How quickly can the site complete startup?", a: "Startup depends on contract and IRB timelines, but feasibility responses are returned promptly and site-level documents are prepared in parallel with budget review." },
      { q: "Can physicians refer patients without joining a study team?", a: "Yes. Referring physicians can send eligible patients for prescreening while continuing to provide their regular care." },
      { q: "How do I request a capabilities statement?", a: "Contact the site and we will send the current capabilities statement, including therapeutic experience and facility details." },
    ],
  },
];

const flat = groups.flatMap((g) => g.items);

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...buildHead({
      title: "FAQ | Clinical Trial Questions Answered",
      description:
        "Answers to common clinical trial questions for participants, sponsors, CROs and referring physicians — eligibility, cost, compensation, safety, privacy and study visits.",
      path,
    }),
    scripts: [
      jsonLdScript(faqJsonLd(flat)),
      jsonLdScript(
        breadcrumbJsonLd([
          { label: "Home", url: "/" },
          { label: "FAQ", url: path },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Section className="pt-6">
        <PageHeader
          eyebrow="Frequently asked questions"
          title="Clinical trial questions, answered"
          intro={`Straightforward answers about participation, safety and working with ${business.name}. Study-specific details are always reviewed with you by the research team.`}
          image={heroImg}
        />
      </Section>

      <Section>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="font-semibold">{g.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.id} id={g.id} className="scroll-mt-28">
              <h2 className="text-xl font-semibold tracking-tight">{g.title}</h2>
              <div className="mt-3">
                <FAQ items={g.items} title="" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="font-semibold">Still have a question?</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Ask the Orlando research team directly, or start with a short prescreening conversation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/enroll-now" className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Enroll now
            </Link>
            <Link to="/contact" className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent">
              Contact us
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <ContactCTA />
        <ReviewedLabel />
      </Section>

      <RelatedLinks
        links={[
          { to: "/patient-resources", label: "Patient resources", desc: "Guides on participation and consent." },
          { to: "/research-glossary", label: "Research glossary", desc: "Plain-language research terms." },
          { to: "/clinical-trials", label: "Clinical trials", desc: "How trials work and what to expect." },
        ]}
      />
    </SiteLayout>
  );
}
