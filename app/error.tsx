"use client";

import Button from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-error mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Ups!
        </p>
        <h1 className="text-h3 text-text-primary mb-2">Coś poszło nie tak</h1>
        <p className="text-text-secondary mb-8">Spróbuj ponownie lub wróć na stronę główną.</p>
        <Button variant="primary" onClick={() => reset()}>
          Spróbuj ponownie
        </Button>
      </div>
    </section>
  );
}
