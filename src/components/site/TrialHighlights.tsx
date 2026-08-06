import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Layout";
import { Eye, Users, Layers, Lightbulb, HeartHandshake, Stethoscope } from "lucide-react";
import openLabelTrials from "@/assets/open-label-trials.jpg";
import controlledTrials from "@/assets/controlled-trials.jpg";
import phasesTrials from "@/assets/phases-trials.jpg";
import modernMedicine from "@/assets/modern-medicine.jpg";
import whyParticipate from "@/assets/why-participate.jpg";
import pioneeringTreatments from "@/assets/pioneering-treatments.jpg";

const cards = [
  {
    title: "Open Label Clinical Trials",
    body: "In Open Label Trials, all information related to the treatment is disclosed to both researcher and patient. There are no placebos or control treatments.",
    icon: Eye,
    image: openLabelTrials,
    to: "/clinical-trials/how-clinical-trials-work" as const,
  },
  {
    title: "Controlled Clinical Trials",
    body: "Participants are divided into two groups: one receives the proposed treatment while the control group receives a placebo. Often conducted double-blind.",
    icon: Users,
    image: controlledTrials,
    to: "/clinical-trials/how-clinical-trials-work" as const,
  },
  {
    title: "Phases of Clinical Research",
    body: "In order for a new drug or medical device to be introduced into the market, it must undergo a total of four phases of clinical trials.",
    icon: Layers,
    image: phasesTrials,
    to: "/clinical-trials/how-clinical-trials-work" as const,
  },
  {
    title: "Advancing Modern Medicine",
    body: "Participants play a crucial role in what may be revolutionary research that could impact the well-being of millions of people.",
    icon: Lightbulb,
    image: modernMedicine,
    to: "/clinical-trials/what-to-expect" as const,
  },
  {
    title: "Why Participate?",
    body: "With the wide range of medical needs, body types and temperaments out there, reasons to participate vary depending on the individual.",
    icon: HeartHandshake,
    image: whyParticipate,
    to: "/clinical-trials/participant-faq" as const,
  },
  {
    title: "Pioneering Treatments",
    body: "When you qualify for a clinical study, you gain access to medical care from experts on your particular condition at no cost to you.",
    icon: Stethoscope,
    image: pioneeringTreatments,
    to: "/current-studies" as const,
  },
];

export function TrialHighlights({
  heading = "Clinical Trials",
  intro,
}: {
  heading?: string;
  intro?: string;
}) {
  return (
    <Section>
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight">{heading}</h2>
        {intro ? <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{intro}</p> : null}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:border-primary/40 hover:shadow-md"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={640}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <Link to={c.to} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
