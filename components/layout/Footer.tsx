import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/cennik", label: "Cennik" },
  { href: "/case-study", label: "Case Study" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

const serviceLinks = services.map((s) => ({
  href: `/uslugi/${s.slug}`,
  label: s.shortName,
}));

const socialLinks = [
  { key: "linkedin", label: "LinkedIn", href: siteConfig.social.linkedin },
  { key: "facebook", label: "Facebook", href: siteConfig.social.facebook },
  { key: "instagram", label: "Instagram", href: siteConfig.social.instagram },
].filter((s) => Boolean(s.href));

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle" style={{ background: "var(--bg-surface)" }}>
      <div className="ambient-glow opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="360 Connect" width={32} height={32} />
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-tight)", color: "var(--signal)" }}>360 Connect</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Performance marketing, który widać w przychodzie.
            </p>
            {socialLinks.length > 0 && (
              <div className="flex gap-4">
                {socialLinks.map(({ key, label, href }) => (
                  <a
                    key={key}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center -m-2 p-2 text-text-muted hover:text-signal transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </div>
            )}
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
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-text-secondary hover:text-signal transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-caption text-text-primary font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-signal transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="hover:text-signal transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.address.locality}, Polska</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} 360 Connect. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <Link href="/polityka-prywatnosci" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/polityka-cookies" className="text-xs text-text-muted hover:text-text-secondary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
