import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { business } from "@/lib/site-data";

const nav = [
  { to: "/orlando-clinical-research", label: "Orlando" },
  { to: "/research-experience", label: "Research Experience" },
  { to: "/patient-resources", label: "Patient Resources" },
  { to: "/blog", label: "Blog" },
];

const professionalNav = [
  { to: "/for-sponsors-and-cros", label: "Sponsors & CROs" },
  { to: "/for-attorneys", label: "Attorneys" },
  { to: "/for-healthcare-professionals", label: "Healthcare Professionals" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-base font-semibold tracking-tight text-foreground">{business.name}</span>
          <span className="text-xs text-muted-foreground">Clinical Research · {business.city}, {business.regionShort}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {business.phoneHref ? (
            <a
              href={business.phoneHref}
              data-cta="phone-click"
              className="hidden rounded-md border border-input px-3 py-1.5 text-sm hover:bg-accent sm:inline-flex"
            >
              {business.phone}
            </a>
          ) : null}
          <Link
            to="/locations/orlando"
            data-cta="contact-click"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="font-semibold">{business.name}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Physician-led clinical research in {business.city} and Central Florida.
          </p>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Participants</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/orlando-clinical-research" className="hover:text-foreground">Orlando Clinical Research</Link></li>
            <li><Link to="/clinical-trials/how-clinical-trials-work" className="hover:text-foreground">How Clinical Trials Work</Link></li>
            <li><Link to="/clinical-trials/participant-faq" className="hover:text-foreground">Participant FAQ</Link></li>
            <li><Link to="/patient-resources" className="hover:text-foreground">Patient Resources</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Professionals</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {professionalNav.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="hover:text-foreground">{p.label}</Link>
              </li>
            ))}
            <li><Link to="/research-experience" className="hover:text-foreground">Research Experience</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">About</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/locations/orlando" className="hover:text-foreground">Orlando Location</Link></li>
            <li><Link to="/research-glossary" className="hover:text-foreground">Research Glossary</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-foreground">Terms of Use</Link></li>
            <li><Link to="/accessibility" className="hover:text-foreground">Accessibility</Link></li>
            <li><Link to="/medical-disclaimer" className="hover:text-foreground">Medical Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {business.name}. All rights reserved.</div>
          <div>Clinical research is voluntary. Eligibility is not guaranteed.</div>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`mx-auto max-w-6xl px-4 py-12 ${className}`}>{children}</section>;
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-neutral max-w-3xl space-y-4 text-[15px] leading-relaxed text-foreground/90">
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      {eyebrow ? (
        <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </div>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h1>
      {intro ? <p className="mt-4 text-lg text-muted-foreground">{intro}</p> : null}
    </div>
  );
}
