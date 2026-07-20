import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { business, images } from "@/lib/site-data";
import pageHeroBg from "@/assets/page-hero-bg.jpg";


type MegaItem = { to: string; label: string; desc?: string };
type MegaGroup = { heading: string; items: MegaItem[] };
type NavEntry =
  | { to: string; label: string }
  | { label: string; mega: MegaGroup[]; feature?: { title: string; body: string; to: string; cta: string } };

const nav: NavEntry[] = [
  { to: "/about", label: "About" },
  {
    label: "Clinical Trials",
    mega: [
      {
        heading: "Participate",
        items: [
          { to: "/clinical-trials", label: "All Studies", desc: "Currently recruiting and completed" },
          { to: "/clinical-trials/clinical-trial-eligibility", label: "Eligibility", desc: "Who qualifies to join" },
          { to: "/clinical-trials/what-to-expect", label: "What to Expect", desc: "Visit timeline & process" },
          { to: "/clinical-trials/participant-faq", label: "Participant FAQ" },
        ],
      },
      {
        heading: "Learn",
        items: [
          { to: "/clinical-trials/how-clinical-trials-work", label: "How Trials Work" },
          { to: "/clinical-trials/clinical-trial-safety", label: "Safety & Oversight" },
          { to: "/clinical-trials/clinical-trial-compensation", label: "Compensation" },
          { to: "/clinical-trials/healthy-volunteer-studies", label: "Healthy Volunteers" },
        ],
      },
      {
        heading: "Local",
        items: [
          { to: "/orlando-clinical-research", label: "Orlando Studies" },
          { to: "/locations/orlando", label: "Orlando Location" },
          { to: "/research-experience", label: "Therapeutic Areas" },
          { to: "/patient-resources", label: "Patient Resources" },
        ],
      },
    ],
    feature: {
      title: "Join a study today",
      body: "See currently recruiting trials at our Orlando center.",
      to: "/clinical-trials",
      cta: "View studies →",
    },
  },
  {
    label: "Services",
    mega: [
      {
        heading: "Professional",
        items: [
          { to: "/expert-witness-services", label: "Expert Witness", desc: "Testimony & litigation support" },
          { to: "/services/legal-support", label: "Legal Support" },
          { to: "/services/consulting", label: "Consulting" },
          { to: "/services/regulatory", label: "Regulatory Affairs" },
        ],
      },
      {
        heading: "For Partners",
        items: [
          { to: "/for-sponsors-and-cros", label: "Sponsors & CROs" },
          { to: "/for-attorneys", label: "Attorneys" },
          { to: "/for-healthcare-professionals", label: "Healthcare Professionals" },
        ],
      },
    ],
    feature: {
      title: "Work with Dr. Heuer",
      body: "40+ years of medical & regulatory expertise.",
      to: "/contact",
      cta: "Start a conversation →",
    },
  },
  {
    label: "Products",
    mega: [
      {
        heading: "Nutraceuticals",
        items: [
          { to: "/products", label: "All Products" },
          { to: "/products/pure-polar-omega-3", label: "Pure Polar Omega 3" },
          { to: "/products/joint-ax", label: "Joint AX" },
          { to: "/products/sport-ax", label: "Sport AX" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    mega: [
      {
        heading: "Education",
        items: [
          { to: "/blog", label: "Blog" },
          { to: "/news", label: "News" },
          { to: "/research-glossary", label: "Research Glossary" },
          { to: "/patient-resources", label: "Patient Resources" },
        ],
      },
    ],
  },
  { to: "/contact", label: "Contact" },
];

function MegaPanel({ groups, feature }: { groups: MegaGroup[]; feature?: NonNullable<Extract<NavEntry, { mega: MegaGroup[] }>["feature"]> }) {
  return (
    <div className="invisible absolute left-0 right-0 top-full z-50 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-xl border border-border bg-popover p-6 shadow-2xl">
          <div className={`grid gap-8 ${feature ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
            {groups.map((g) => (
              <div key={g.heading}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-secondary">
                  {g.heading}
                </div>
                <ul className="space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it.to}>
                      <Link to={it.to} className="group/link block">
                        <div className="text-sm font-medium text-foreground group-hover/link:text-secondary">
                          {it.label}
                        </div>
                        {it.desc ? (
                          <div className="mt-0.5 text-xs text-muted-foreground">{it.desc}</div>
                        ) : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {feature ? (
              <Link
                to={feature.to}
                className="rounded-lg bg-gradient-to-br from-primary to-secondary p-5 text-primary-foreground transition hover:opacity-95"
              >
                <div className="text-base font-semibold">{feature.title}</div>
                <p className="mt-2 text-sm opacity-90">{feature.body}</p>
                <div className="mt-4 text-sm font-medium">{feature.cta}</div>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">

        <Link to="/" className="flex items-center gap-3">
          <img src={images.logo} alt={`${business.name} logo`} className="h-16 w-auto md:h-20" />
          <span className="sr-only">{business.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm lg:flex">
          {nav.map((n) =>
            "mega" in n ? (
              <div key={n.label} className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-medium text-foreground/80 hover:text-primary"
                >
                  {n.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <MegaPanel groups={n.mega} feature={n.feature} />
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "rounded-md px-3 py-2 font-medium text-primary" }}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={business.phoneHref!}
            data-cta="phone-click"
            className="hidden rounded-md border border-input px-3 py-1.5 text-sm font-medium hover:bg-accent md:inline-flex"
          >
            {business.phone}
          </a>
          <Link
            to="/contact"
            data-cta="contact-click"
            className="rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-sm hover:opacity-90"
          >
            Request appointment
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="rounded-md border border-input p-2 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 text-sm">
            {nav.map((n) =>
              "mega" in n ? (
                <details key={n.label} className="border-b border-border/60">
                  <summary className="cursor-pointer py-2.5 font-medium text-foreground">{n.label}</summary>
                  <div className="pb-3 pl-3">
                    {n.mega.map((g) => (
                      <div key={g.heading} className="mt-2">
                        <div className="text-xs font-semibold uppercase tracking-widest text-secondary">
                          {g.heading}
                        </div>
                        <ul className="mt-1 space-y-1">
                          {g.items.map((it) => (
                            <li key={it.to}>
                              <Link
                                to={it.to}
                                onClick={() => setOpen(false)}
                                className="block py-1 text-muted-foreground hover:text-foreground"
                              >
                                {it.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-2.5 font-medium text-foreground/80 hover:text-foreground"
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <img src={images.logo} alt={business.name} className="mb-4 h-20 w-auto rounded-lg bg-white p-2 shadow-sm" />
          <p className="text-sm opacity-80">
            Physician-led clinical research and consulting in {business.city}, {business.regionShort}.
          </p>
          <p className="mt-3 text-sm opacity-80">
            {business.addressLine1}<br />
            {business.cityStateZip}<br />
            <a href={business.phoneHref!} className="hover:opacity-100">{business.phone}</a>
          </p>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Research</div>
          <ul className="space-y-1.5 text-sm opacity-80">
            <li><Link to="/clinical-trials" className="hover:opacity-100">Clinical Trials</Link></li>
            <li><Link to="/orlando-clinical-research" className="hover:opacity-100">Orlando Studies</Link></li>
            <li><Link to="/research-experience" className="hover:opacity-100">Research Experience</Link></li>
            <li><Link to="/patient-resources" className="hover:opacity-100">Patient Resources</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Services</div>
          <ul className="space-y-1.5 text-sm opacity-80">
            <li><Link to="/expert-witness-services" className="hover:opacity-100">Expert Witness</Link></li>
            <li><Link to="/services/legal-support" className="hover:opacity-100">Legal Support</Link></li>
            <li><Link to="/services/consulting" className="hover:opacity-100">Consulting</Link></li>
            <li><Link to="/services/regulatory" className="hover:opacity-100">Regulatory</Link></li>
            <li><Link to="/products" className="hover:opacity-100">Products</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Company</div>
          <ul className="space-y-1.5 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100">About Dr. Heuer</Link></li>
            <li><Link to="/news" className="hover:opacity-100">News</Link></li>
            <li><Link to="/blog" className="hover:opacity-100">Blog</Link></li>
            <li><Link to="/contact" className="hover:opacity-100">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:opacity-100">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:opacity-100">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs opacity-70 md:flex-row md:items-center md:justify-between">
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

const LABEL_OVERRIDES: Record<string, string> = {
  "clinical-trials": "Clinical Trials",
  "for-sponsors-and-cros": "Sponsors & CROs",
  "for-attorneys": "For Attorneys",
  "for-healthcare-professionals": "For Healthcare Professionals",
  "orlando-clinical-research": "Orlando Clinical Research",
  "expert-witness-services": "Expert Witness Services",
  "research-experience": "Research Experience",
  "research-glossary": "Research Glossary",
  "patient-resources": "Patient Resources",
  "medical-disclaimer": "Medical Disclaimer",
  "privacy-policy": "Privacy Policy",
  "terms-of-use": "Terms of Use",
  "healthy-volunteer-studies": "Healthy Volunteer Studies",
  "clinical-trial-eligibility": "Eligibility",
  "clinical-trial-safety": "Safety & Oversight",
  "clinical-trial-compensation": "Compensation",
  "how-clinical-trials-work": "How Trials Work",
  "what-to-expect": "What to Expect",
  "participant-faq": "Participant FAQ",
};

function titleize(seg: string) {
  if (LABEL_OVERRIDES[seg]) return LABEL_OVERRIDES[seg];
  return seg
    .split("-")
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function useAutoCrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const parts = pathname.split("/").filter(Boolean);
  const crumbs: { label: string; to: string; last: boolean }[] = [];
  let acc = "";
  parts.forEach((p, i) => {
    acc += `/${p}`;
    crumbs.push({ label: titleize(decodeURIComponent(p)), to: acc, last: i === parts.length - 1 });
  });
  return crumbs;
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  const crumbs = useAutoCrumbs();
  const bg = image ?? pageHeroBg;
  const isHomepage = crumbs.length === 0;
  return (
    <div className="relative left-1/2 w-screen -ml-[50vw] -mt-6 -mb-12 overflow-hidden">
      <img
        src={bg}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {!isHomepage ? (
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/80">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.to} className="flex items-center gap-1.5">
                  <span aria-hidden className="text-white/50">›</span>
                  {c.last ? (
                    <span className="text-white">{c.label}</span>
                  ) : (
                    <Link to={c.to} className="hover:text-white">{c.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-3xl text-base text-white/85 md:text-lg">{intro}</p>
        ) : null}
      </div>
    </div>
  );
}

export function RelatedLinks({
  heading = "Continue exploring",
  links,
}: {
  heading?: string;
  links: { to: string; label: string; desc?: string; params?: Record<string, string> }[];
}) {
  if (!links || links.length === 0) return null;
  return (
    <Section>
      <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.to + JSON.stringify(l.params ?? {})}
            to={l.to as any}
            params={l.params as any}
            className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-md"
          >
            <div className="font-semibold text-foreground group-hover:text-primary">{l.label}</div>
            {l.desc ? <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p> : null}
            <div className="mt-3 text-sm font-medium text-primary">Learn more →</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

