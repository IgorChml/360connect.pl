"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

/**
 * Trwałe CTA na mobile (Prawo Fittsa) — zawsze w zasięgu kciuka.
 * Ukryte na desktopie i na stronie kontaktu (gdzie konwersja jest już na widoku).
 */
export default function StickyCtaMobile() {
  const pathname = usePathname();
  if (pathname === "/kontakt") return null;

  return (
    <>
      {/* rezerwacja miejsca, by pasek nie zasłaniał treści stopki na mobile */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
      <div
        className="fixed inset-x-0 bottom-0 z-40 lg:hidden border-t border-border-subtle px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        style={{
          background: "rgba(14, 14, 16, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <Link href="/kontakt">
          <Button variant="primary" size="md" className="w-full">
            Umów bezpłatny audyt
          </Button>
        </Link>
      </div>
    </>
  );
}
