import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { business, images } from "@/lib/site-data";

const nav = [
  { to: "/about", label: "About" },
  { to: "/clinical-trials", label: "Clinical Trials" },
  { to: "/expert-witness-services", label: "Expert Witness" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={images.logo} alt={`${business.name} logo`} className="h-10 w-auto md:h-12" />
          <span className="sr-only">{business.name}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
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
          <a
            href={business.phoneHref!}
            data-cta="phone-click"
            className="hidden rounded-md border border-input px-3 py-1.5 text-sm hover:bg-accent md:inline-flex"
          >
            {business.phone}
          </a>
          <Link
            to="/contact"
            data-cta="contact-click"
            className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Request appointment
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="rounded-md border border-input p-2 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium py-2" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <img src={images.logo} alt={business.name} className="mb-4 h-10 w-auto" />
          <p className="text-sm text-muted-foreground">
            Physician-led clinical research and consulting in {business.city}, {business.regionShort}.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {business.addressLine1}<br />
            {business.cityStateZip}<br />
            <a href={business.phoneHref!} className="hover:text-foreground">{business.phone}</a>
          </p>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Research</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/clinical-trials" className="hover:text-foreground">Clinical Trials</Link></li>
            <li><Link to="/orlando-clinical-research" className="hover:text-foreground">Orlando Studies</Link></li>
            <li><Link to="/research-experience" className="hover:text-foreground">Research Experience</Link></li>
            <li><Link to="/patient-resources" className="hover:text-foreground">Patient Resources</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Services</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/expert-witness-services" className="hover:text-foreground">Expert Witness</Link></li>
            <li><Link to="/services/legal-support" className="hover:text-foreground">Legal Support</Link></li>
            <li><Link to="/services/consulting" className="hover:text-foreground">Consulting</Link></li>
            <li><Link to="/services/regulatory" className="hover:text-foreground">Regulatory</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Company</div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Dr. Heuer</Link></li>
            <li><Link to="/news" className="hover:text-foreground">News</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-foreground">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
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
  image,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-8 md:grid-cols-5 md:items-center">
        <div className={image ? "md:col-span-3" : "md:col-span-5 max-w-3xl"}>
          {eyebrow ? (
            <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h1>
          {intro ? <p className="mt-4 text-lg text-muted-foreground">{intro}</p> : null}
        </div>
        {image ? (
          <div className="md:col-span-2">
            <img src={image} alt="" className="w-full rounded-xl border border-border object-cover shadow-sm" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
