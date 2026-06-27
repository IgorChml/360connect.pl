"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

const links = [
  { href: "/o-nas", label: "O nas" },
  { href: "/uslugi", label: "Usługi" },
  { href: "/cennik", label: "Cennik" },
  { href: "/case-study", label: "Case Study" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 lg lg--raised transition-all duration-300 ${
          scrolled ? "border-b border-border-subtle" : "border-b border-transparent"
        }`}
        style={{ borderRadius: 0 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-text-primary"
              style={{ fontFamily: "var(--font-tight)" }}
              aria-label="360 Connect — strona główna"
            >
              <Logo className="h-7 w-7" />
              <span>360 Connect</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      active
                        ? "text-signal"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                    style={
                      active
                        ? {
                            textDecoration: "none",
                            borderBottom: "2px solid var(--signal)",
                            paddingBottom: "2px",
                          }
                        : undefined
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link href="/kontakt">
                <Button variant="primary" size="sm">
                  Bezpłatny audyt
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] -mr-2 text-text-primary touch-manipulation"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: "var(--bg-base)" }}
            onClick={() => setMobileOpen(false)}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-medium transition-colors ${
                  pathname === link.href
                    ? "text-signal"
                    : "text-text-secondary hover:text-text-primary"
                }`}
                style={{ fontFamily: "var(--font-tight)" }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kontakt">
              <Button variant="primary" size="md">
                Bezpłatny audyt
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-16" />
    </>
  );
}
