import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL || "tondekawere@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY" },
      { status: 500 }
    );
  }

  if (!fromEmail) {
    return NextResponse.json({ error: "Missing FROM_EMAIL" }, { status: 500 });
  }

  if (!email || !subject || !message) {
    return NextResponse.json(
      { error: "Missing required fields: email, subject, message" },
      { status: 400 }
    );
  }

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    if (!data || data.error) {
      const msg =
        typeof data?.error === "string"
          ? data.error
          : data?.error?.message
          ? data.error.message
          : "Failed to send email";
      return NextResponse.json(
        { error: msg },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
