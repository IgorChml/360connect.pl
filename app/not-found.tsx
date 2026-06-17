import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-accent-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>
          404
        </p>
        <h1 className="text-h3 text-text-primary mb-2">Strona nie znaleziona</h1>
        <p className="text-text-secondary mb-8">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link href="/">
          <Button variant="primary">Wróć na stronę główną</Button>
        </Link>
      </div>
    </section>
  );
}
