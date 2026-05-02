import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ErrorResponse } from "resend";
import { z } from "zod";

import { buildContactInquiryEmail } from "@/lib/contact-inquiry-email";
import { CONTACT, INQUIRY_SERVICE_OPTIONS } from "@/lib/site-content";

const RESEND_FALLBACK_FROM = "Daksa Website <onboarding@resend.dev>";

function isDomainNotVerifiedError(err: ErrorResponse | null): boolean {
  if (!err?.message) return false;
  const m = err.message.toLowerCase();
  return (
    m.includes("not verified") ||
    m.includes("domain") && m.includes("resend.com/domains")
  );
}

const inquirySchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(5).max(40),
  email: z.string().trim().email().max(254),
  service: z.string().refine((s) =>
    (INQUIRY_SERVICE_OPTIONS as readonly string[]).includes(s),
  ),
  message: z.string().trim().max(5000).optional(),
});

/**
 * Contact form email delivery via Resend.
 *
 * Env:
 * - RESEND_API_KEY — required (https://resend.com/api-keys)
 * - RESEND_FROM_EMAIL — optional; defaults to Resend test sender. For production,
 *   verify your domain in Resend and use e.g. "Daksa Digital <contact@yourdomain.com>"
 *   If the domain is not verified yet, we retry once with onboarding@resend.dev so
 *   the form still works (Resend may only deliver test mail per their rules).
 *
 * Emails go to CONTACT.email unless CONTACT_INBOX_EMAIL overrides the inbox.
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { fullName, phone, email, service, message } = parsed.data;
  const messageText = message ?? "";

  const apiKey = process.env.RESEND_API_KEY;
  const configuredFrom =
    process.env.RESEND_FROM_EMAIL?.trim() || RESEND_FALLBACK_FROM;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured. Add RESEND_API_KEY on the server.",
        code: "NOT_CONFIGURED",
      },
      { status: 503 },
    );
  }

  const inbox =
    process.env.CONTACT_INBOX_EMAIL?.trim() || CONTACT.email;

  const resend = new Resend(apiKey);
  const subject = `Website inquiry — ${service}`;

  const primaryMail = buildContactInquiryEmail({
    fullName,
    phone,
    email,
    service,
    message: messageText,
  });

  const basePayload = {
    to: [inbox] as [string, ...string[]],
    replyTo: email,
    subject,
    text: primaryMail.text,
    html: primaryMail.html,
  };

  let { data, error } = await resend.emails.send({
    ...basePayload,
    from: configuredFrom,
  });

  if (
    error &&
    isDomainNotVerifiedError(error) &&
    configuredFrom !== RESEND_FALLBACK_FROM
  ) {
    console.warn(
      "[contact] Custom From rejected (domain not verified in Resend). Retrying with test sender — complete DNS at https://resend.com/domains",
    );
    const fallbackMail = buildContactInquiryEmail({
      fullName,
      phone,
      email,
      service,
      message: messageText,
      deliveryNote:
        "Delivered via Resend test sender until your domain is verified at resend.com/domains. Once verified, messages send from your branded address.",
    });
    ({ data, error } = await resend.emails.send({
      ...basePayload,
      from: RESEND_FALLBACK_FROM,
      text: fallbackMail.text,
      html: fallbackMail.html,
    }));
  }

  if (error) {
    console.error("[contact]", error);
    const msg = error.message ?? "";
    if (
      msg.toLowerCase().includes("not verified") ||
      (error as ErrorResponse).statusCode === 403
    ) {
      return NextResponse.json(
        {
          code: "DOMAIN_NOT_VERIFIED",
          error:
            "Sending domain is not verified in Resend yet. Add DNS records at resend.com/domains for daksadigital.in, or rely on the automatic test-sender retry.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json(
      { error: "Could not send email. Try again or reach us by phone." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
