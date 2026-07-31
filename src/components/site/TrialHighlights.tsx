import { Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Layout";
import { Eye, Users, Layers, Lightbulb, HeartHandshake, Stethoscope } from "lucide-react";

const cards = [
  {
    title: "Open Label Clinical Trials",
    body: "In Open Label Trials, all information related to the treatment is disclosed to both researcher and patient. There are no placebos or control treatments.",
    icon: Eye,
    to: "/clinical-trials/how-clinical-trials-work" as const,
  },
  {
    title: "Controlled Clinical Trials",
    body: "Participants are divided into two groups: one receives the proposed treatment while the control group receives a placebo. Often conducted double-blind.",
    icon: Users,
    to: "/clinical-trials/how-clinical-trials-work" as const,
  },
  {
    title: "Phases of Clinical Research",
    body: "In order for a new drug or medical device to be introduced into the market, it must undergo a total of four phases of clinical trials.",
    icon: Layers,
    to: "/clinical-trials/how-clinical-trials-work" as const,
  },
  {
    title: "Advancing Modern Medicine",
    body: "Participants play a crucial role in what may be revolutionary research that could impact the well-being of millions of people.",
    icon: Lightbulb,
    to: "/clinical-trials/what-to-expect" as const,
  },
  {
    title: "Why Participate?",
    body: "With the wide range of medical needs, body types and temperaments out there, reasons to participate vary depending on the individual.",
    icon: HeartHandshake,
    to: "/clinical-trials/participant-faq" as const,
  },
  {
    title: "Pioneering Treatments",
    body: "When you qualify for a clinical study, you gain access to medical care from experts on your particular condition at no cost to you.",
    icon: Stethoscope,
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
            className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <c.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            <Link to={c.to} className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
