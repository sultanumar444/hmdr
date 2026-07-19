import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage, buildArticleHeadScripts } from "@/components/site/ArticlePage";
import { buildHead } from "@/lib/seo";

const path = "/medical-disclaimer";
const crumbUrls = [{ label: "Home", url: "/" }, { label: "Medical Disclaimer", url: path }];

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    ...buildHead({
      title: "Medical Disclaimer",
      description: "Educational content on this site is not a substitute for medical advice.",
      path,
    }),
    scripts: buildArticleHeadScripts(crumbUrls),
  }),
  component: () => (
    <ArticlePage
      title="Medical Disclaimer"
      crumbs={[{ label: "Medical Disclaimer" }]}
      crumbUrls={crumbUrls}
      hideCTA
    >
      <p>Content on this website is provided for educational purposes and is not medical advice. It is not a substitute for consultation with a qualified healthcare provider.</p>
      <p>Participation in a clinical trial is voluntary. Eligibility, benefits and compensation vary by study and are never guaranteed.</p>
      <p>Please speak with your healthcare provider about decisions that affect your health.</p>
    </ArticlePage>
  ),
});
