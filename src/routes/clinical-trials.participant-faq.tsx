import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, PageHeader } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { FAQ, faqJsonLd } from "@/components/site/FAQ";
import { ContactCTA, ReviewedLabel } from "@/components/site/CTA";
import { buildHead } from "@/lib/seo";
import { jsonLdScript } from "@/components/site/JsonLd";

const path = "/clinical-trials/participant-faq";

const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Eligibility",
    items: [
      { q: "How do I know if I qualify?", a: "A short prescreening conversation reviews basic eligibility. If a study looks like a fit, the next step is usually an in-person screening visit." },
      { q: "Can I join more than one study?", a: "Usually not at the same time. The research team can explain any waiting periods between studies." },
    ],
  },
  {
    title: "Cost",
    items: [
      { q: "Is there a cost to participate?", a: "Study-related visits and procedures are typically provided at no cost to the participant. Unrelated medical care is handled through your regular provider." },
    ],
  },
  {
    title: "Insurance",
    items: [
      { q: "Do I need health insurance?", a: "Insurance is usually not required to participate. Requirements can vary by study." },
    ],
  },
  {
    title: "Compensation",
    items: [
      { q: "Is compensation guaranteed?", a: "No. Some studies offer compensation and some do not, and compensation is usually tied to completed visits." },
    ],
  },
  {
    title: "Privacy",
    items: [
      { q: "Is my information kept private?", a: "Yes. Information shared with the research team is handled confidentially and used only for the purposes described in the informed consent." },
    ],
  },
  {
    title: "Study visits",
    items: [
      { q: "How long does a visit take?", a: "Visit length varies by study and by the type of assessment being done. The research team will let you know what to plan for." },
    ],
  },
  {
    title: "Medications",
    items: [
      { q: "Should I mention my current medications?", a: "Yes. Sharing an accurate medication list helps the research team decide whether a study is a safe fit." },
    ],
  },
  {
    title: "Transportation",
    items: [
      { q: "Is transportation provided?", a: "This varies by study. Some studies may offer travel-related support; others may not." },
    ],
  },
  {
    title: "Informed consent",
    items: [
      { q: "Can I take the consent form home before signing?", a: "In most cases, yes. Take the time you need to review it, ask questions and decide." },
    ],
  },
  {
    title: "Withdrawing from a study",
    items: [
      { q: "Can I stop after I've started?", a: "Yes. Participation is voluntary and you may withdraw at any time. A brief final visit may be requested to complete study-related follow-up." },
    ],
  },
  {
    title: "Contacting the research team",
    items: [
      { q: "How do I reach the team with a question?", a: "You can use the contact options on the Orlando location page. During a study, you will also have direct contact details for your coordinator." },
    ],
  },
];

const flat = groups.flatMap((g) => g.items);

export const Route = createFileRoute("/clinical-trials/participant-faq")({
  head: () => ({
    ...buildHead({
      title: "Clinical Trial Participant FAQ",
      description: "Common questions about clinical trial participation, including eligibility, cost, compensation, privacy and withdrawing from a study.",
      path,
    }),
    scripts: [
      jsonLdScript(faqJsonLd(flat)),
      jsonLdScript(breadcrumbJsonLd([
        { label: "Home", url: "/" },
        { label: "Clinical Trials", url: "/clinical-trials/how-clinical-trials-work" },
        { label: "Participant FAQ", url: path },
      ])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <Breadcrumbs items={[{ label: "Clinical Trials" }, { label: "Participant FAQ" }]} />
      <Section className="pt-6">
        <PageHeader
          eyebrow="Participant education"
          title="Participant FAQ"
          intro="Common questions asked by people considering a clinical trial. Answers are general; the research team can explain study-specific details."
        />
      </Section>
      <Section>
        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="mb-3 text-xl font-semibold">{g.title}</h2>
              <FAQ items={g.items} title="" />
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <ContactCTA />
        <ReviewedLabel />
      </Section>
    </SiteLayout>
  );
}
