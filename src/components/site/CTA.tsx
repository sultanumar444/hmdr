import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site-data";

export function ContactCTA({
  heading = "Speak with the Orlando research team",
  body = "Ask about currently recruiting studies, eligibility or what participation involves. Every conversation is voluntary and private.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
      <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {business.phoneHref ? (
          <a
            href={business.phoneHref}
            data-cta="phone-click"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Call {business.phone}
          </a>
        ) : (
          <Link
            to="/locations/orlando"
            data-cta="contact-click"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Contact the Orlando team
          </Link>
        )}
        <Link
          to="/orlando-clinical-research"
          data-cta="studies-click"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent"
        >
          View Orlando studies
        </Link>
      </div>
    </div>
  );
}

export function InterestForm({
  variant = "participant",
}: {
  variant?: "participant" | "sponsor" | "attorney" | "referral";
}) {
  const labels = {
    participant: { title: "Study interest form", cta: "Submit interest", startAttr: "eligibility-form-start", submitAttr: "eligibility-form-submit" },
    sponsor: { title: "Sponsor enquiry", cta: "Discuss a research opportunity", startAttr: "consultation-form-start", submitAttr: "consultation-form-submit" },
    attorney: { title: "Request a case consultation", cta: "Request consultation", startAttr: "consultation-form-start", submitAttr: "consultation-form-submit" },
    referral: { title: "Referral enquiry", cta: "Send referral enquiry", startAttr: "consultation-form-start", submitAttr: "consultation-form-submit" },
  }[variant];

  return (
    <form
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
      onSubmit={(e) => e.preventDefault()}
      data-form={variant}
    >
      <h3 className="text-xl font-semibold">{labels.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        This form is a placeholder. Please do not include sensitive medical details.
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Name</span>
          <input
            type="text"
            data-cta={labels.startAttr}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium">Email</span>
          <input
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
        <label className="block text-sm md:col-span-2">
          <span className="mb-1 block font-medium">How can we help?</span>
          <textarea
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
          />
        </label>
      </div>
      <button
        type="submit"
        data-cta={labels.submitAttr}
        className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        {labels.cta}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Submissions are handled securely by the {business.name} team.
      </p>
    </form>
  );
}

export function EmptyStudies({ note }: { note?: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border bg-muted/30 p-8 text-center">
      <div className="text-sm font-medium">No studies are currently listed here.</div>
      <p className="mt-2 text-sm text-muted-foreground">
        {note ?? "New studies are added when they open for enrollment. Contact the Orlando team to be notified when a relevant study begins recruiting."}
      </p>
    </div>
  );
}

export function ReviewedLabel() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
      <span>Reviewed for clarity by the {business.name} team.</span>
      <span aria-hidden>·</span>
      <span>Last updated {business.updated}</span>
    </div>
  );
}
