import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/clinical-trials/clinical-trial-safety";
const crumbs = [{ label: "Clinical Trials" }, { label: "Safety" }];
const crumbUrls = [
  { label: "Home", url: "/" },
  { label: "Clinical Trials", url: "/clinical-trials/how-clinical-trials-work" },
  { label: "Safety", url: path },
];

const faqs = [
  { q: "Are clinical trials risk-free?", a: "No study is entirely risk-free. The informed consent document explains possible risks so you can make a fully informed decision." },
  { q: "Can I stop participating?", a: "Yes. Participation is voluntary and you may withdraw at any time." },
];

export const Route = createFileRoute("/clinical-trials/clinical-trial-safety")({
  head: () => ({
    ...buildHead({
      title: "Clinical Trial Safety",
      description: "How clinical trial safety is protected through informed consent, ethics review, oversight and participant rights.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls, faqs),
  }),
  component: Page,
});

function Page() {
  return (
    <ArticlePage
      eyebrow="Participant education"
      title="Clinical Trial Safety"
      intro="Clinical trials are conducted under written protocols and independent oversight. Understanding how safety is protected helps you make an informed decision."
      crumbs={crumbs}
      crumbUrls={crumbUrls}
      faqs={faqs}
      related={[
        { to: "/clinical-trials/how-clinical-trials-work", label: "How clinical trials work" },
        { to: "/clinical-trials/what-to-expect", label: "What to expect step by step" },
        { to: "/clinical-trials/participant-faq", label: "Participant FAQ" },
      ]}
    >
      <h2 className="text-xl font-semibold">Informed consent</h2>
      <p>Before joining a study, participants review a written informed consent document that describes the study, its procedures, possible risks and benefits, and the participant's rights. Informed consent is an ongoing conversation.</p>

      <h2 className="text-xl font-semibold">Study oversight and ethics review</h2>
      <p>Studies are reviewed by an ethics committee — often called an Institutional Review Board (IRB) — that evaluates the protocol and consent materials. Sponsors and regulators also play oversight roles.</p>

      <h2 className="text-xl font-semibold">Possible benefits and risks</h2>
      <p>Possible benefits vary by study and are not guaranteed. Possible risks are described in the consent document. No clinical trial is entirely risk-free, and the research team will discuss risks in plain language before you enroll.</p>

      <h2 className="text-xl font-semibold">Voluntary participation and withdrawal</h2>
      <p>Participation is voluntary. You may withdraw from a study at any time. A short final visit may be requested so any study-related follow-up can be completed thoughtfully.</p>

      <h2 className="text-xl font-semibold">Reporting symptoms or concerns</h2>
      <p>Participants should report any new symptoms or concerns to the research team promptly. The team is available to answer questions throughout the study.</p>
    </ArticlePage>
  );
}
