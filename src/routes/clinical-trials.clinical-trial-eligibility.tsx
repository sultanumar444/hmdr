import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/clinical-trials/clinical-trial-eligibility";
const crumbs = [{ label: "Clinical Trials" }, { label: "Eligibility" }];
const crumbUrls = [
  { label: "Home", url: "/" },
  { label: "Clinical Trials", url: "/clinical-trials/how-clinical-trials-work" },
  { label: "Eligibility", url: path },
];

const faqs = [
  { q: "Why might I not qualify for a study?", a: "Every study has its own criteria. Not qualifying is common and is not a reflection on you — a different study may be a better fit." },
  { q: "Do I need to share my medical history to check eligibility?", a: "Some basic health questions are usually part of prescreening. Only share information you are comfortable sharing, and never enter sensitive medical details into an online form." },
];

export const Route = createFileRoute("/clinical-trials/clinical-trial-eligibility")({
  head: () => ({
    ...buildHead({
      title: "Clinical Trial Eligibility",
      description: "How clinical trial eligibility criteria work and why age, medications and medical history can matter.",
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
      title="Clinical Trial Eligibility"
      intro="Eligibility criteria describe who a specific study is designed for. They are set by the study protocol and reviewed by an ethics committee."
      crumbs={crumbs}
      crumbUrls={crumbUrls}
      faqs={faqs}
      related={[
        { to: "/clinical-trials/how-clinical-trials-work", label: "How clinical trials work" },
        { to: "/clinical-trials/what-to-expect", label: "What to expect at a screening visit" },
        { to: "/orlando-clinical-research", label: "View recruiting clinical trials in Orlando" },
      ]}
    >
      <h2 className="text-xl font-semibold">What eligibility criteria are</h2>
      <p>Eligibility criteria describe who a study is designed for. They exist to protect participants and to help answer the study's scientific question in a meaningful way.</p>

      <h2 className="text-xl font-semibold">Inclusion and exclusion criteria</h2>
      <p>Inclusion criteria describe the characteristics needed to participate. Exclusion criteria describe reasons a study may not be a safe or appropriate fit — for example, certain medications, medical conditions or recent procedures.</p>

      <h2 className="text-xl font-semibold">Why age ranges may differ</h2>
      <p>Some studies focus on specific age groups because the product or question is most relevant to that population, or because safety information is being gathered in stages.</p>

      <h2 className="text-xl font-semibold">Why medications and medical history matter</h2>
      <p>Certain medications, conditions or procedures can affect how a study product behaves or how a study is interpreted. Sharing an accurate history at prescreening helps the research team decide whether a study is a safe fit.</p>

      <h2 className="text-xl font-semibold">What happens during prescreening</h2>
      <p>Prescreening is usually a short conversation, often by phone, that reviews basic eligibility. If a study looks like a potential fit, an in-person screening visit is scheduled.</p>

      <h2 className="text-xl font-semibold">Privacy reassurance</h2>
      <p>Information shared with the research team is handled confidentially and used only to determine whether a study is a fit. Please avoid entering sensitive medical details into web forms.</p>
    </ArticlePage>
  );
}
