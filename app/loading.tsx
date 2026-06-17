export default function Loading() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: "var(--accent-tech)", borderTopColor: "transparent" }}
        />
        <p className="text-sm text-text-muted">Ładowanie...</p>
      </div>
    </section>
  );
}
