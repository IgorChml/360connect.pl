// Shared contact-form options used by both the form UI (app/kontakt/page.tsx)
// and the email notification built on the server (app/api/contact/route.ts).
// Keep the labels here so the email shows human-readable text instead of codes.

export const budgetOptions = [
  { value: "", label: "Wybierz budżet (opcjonalnie)" },
  { value: "<1k", label: "do 1 000 zł" },
  { value: "1-3k", label: "1 000 – 3 000 zł" },
  { value: "3-10k", label: "3 000 – 10 000 zł" },
  { value: "10k+", label: "powyżej 10 000 zł" },
] as const;

/** Maps a stored budget code (e.g. "1-3k") to its human-readable label. */
export function getBudgetLabel(value?: string): string {
  if (!value) return "Nie podano";
  const option = budgetOptions.find((o) => o.value === value);
  return option && option.value ? option.label : value;
}
