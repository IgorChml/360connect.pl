import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Nieprawidłowe dane formularza." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Formularz kontaktowy jest tymczasowo niedostępny." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, company, budget, message } = parsed.data;
    const contactEmail = process.env.CONTACT_EMAIL ?? "kontakt@360connect.pl";

    await resend.emails.send({
      from: "360 Connect <noreply@360connect.pl>",
      to: contactEmail,
      subject: `Nowe zapytanie od ${name} — ${company}`,
      html: `
        <h2>Nowe zapytanie z formularza kontaktowego</h2>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone ?? "—"}</p>
        <p><strong>Firma:</strong> ${company}</p>
        <p><strong>Budżet miesięczny:</strong> ${budget}</p>
        <p><strong>Opis projektu:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Dziękujemy! Odezwiemy się w ciągu 24 godzin.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Wystąpił błąd. Spróbuj ponownie później." },
      { status: 500 }
    );
  }
}
