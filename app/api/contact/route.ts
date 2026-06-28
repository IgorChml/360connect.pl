import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";
import { buildTeamNotification, buildAutoReply } from "@/lib/email";

// The "from" address must use a domain verified in Resend. Override per
// environment with RESEND_FROM_EMAIL (e.g. "360 Connect <noreply@360connect.pl>").
const DEFAULT_FROM = "360 Connect <noreply@360connect.pl>";
const DEFAULT_CONTACT_EMAIL = "kontakt@360connect.pl";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Nieprawidłowe dane formularza." },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Nieprawidłowe dane formularza." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured — contact form disabled.");
    return NextResponse.json(
      { success: false, message: "Formularz kontaktowy jest tymczasowo niedostępny." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM;
  const contactEmail = process.env.CONTACT_EMAIL ?? DEFAULT_CONTACT_EMAIL;
  const data = parsed.data;

  try {
    const team = buildTeamNotification(data);

    // Critical path: notify the agency. replyTo lets the team answer the
    // sender directly while keeping the verified "from" domain.
    const { error } = await resend.emails.send({
      from,
      to: contactEmail,
      replyTo: data.email,
      subject: team.subject,
      html: team.html,
      text: team.text,
    });

    if (error) {
      console.error("Resend failed to send contact notification:", error);
      return NextResponse.json(
        { success: false, message: "Wystąpił błąd. Spróbuj ponownie później." },
        { status: 502 }
      );
    }

    // Best-effort auto-reply to the sender. A failure here must not fail the
    // request — the agency already received the lead.
    const autoReply = buildAutoReply(data);
    const { error: autoReplyError } = await resend.emails.send({
      from,
      to: data.email,
      replyTo: contactEmail,
      subject: autoReply.subject,
      html: autoReply.html,
      text: autoReply.text,
    });

    if (autoReplyError) {
      console.error("Resend failed to send auto-reply:", autoReplyError);
    }

    return NextResponse.json({
      success: true,
      message: "Dziękujemy! Odezwiemy się w ciągu 24 godzin.",
    });
  } catch (err) {
    console.error("Unexpected error while handling contact form:", err);
    return NextResponse.json(
      { success: false, message: "Wystąpił błąd. Spróbuj ponownie później." },
      { status: 500 }
    );
  }
}
