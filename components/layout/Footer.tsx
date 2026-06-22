import Link from "next/link";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/cennik", label: "Cennik" },
  { href: "/case-study", label: "Case Study" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceLinks = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Content Marketing",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle" style={{ background: "var(--bg-surface)" }}>
      <div className="ambient-glow opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight block mb-4"
              style={{ fontFamily: "var(--font-tight)", color: "var(--signal)" }}
            >
              360 Connect
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Performance marketing, który widać w przychodzie.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center -m-2 p-2 text-text-muted hover:text-signal transition-colors">
                <ExternalLink size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center -m-2 p-2 text-text-muted hover:text-signal transition-colors">
                <ExternalLink size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center -m-2 p-2 text-text-muted hover:text-signal transition-colors">
                <ExternalLink size={18} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-caption text-text-primary font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-signal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-caption text-text-primary font-semibold mb-4">Usługi</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-text-secondary">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-caption text-text-primary font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>kontakt@360connect.pl</li>
              <li>+48 123 456 789</li>
              <li>Warszawa, Polska</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} 360 Connect. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Polityka prywatności
            </Link>
            <Link href="#" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
