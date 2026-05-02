import { CONTACT } from "@/lib/site-content";

/** Daksa brand — HTML email clients ignore site CSS. */
const NAVY = "#1a1b35";
const NAVY_LIGHT = "#2d2f4f";
const PRIMARY = "#e91e43";
const PRIMARY_SOFT = "#fde8ec";
const MUTED = "#64748b";
const BORDER = "#e2e8f0";
const PAGE_BG = "#eef1f6";
const CARD_SHADOW = "0 4px 24px rgba(26,27,53,0.08)";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(s: string): string {
  return escapeHtml(s);
}

function nl2br(s: string): string {
  return escapeHtml(s).replace(/\r\n/g, "\n").replace(/\n/g, "<br />");
}

export type ContactInquiryEmailInput = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  deliveryNote?: string;
};

export function buildContactInquiryEmail(
  input: ContactInquiryEmailInput,
): { html: string; text: string } {
  const { fullName, phone, email, service, message, deliveryNote } = input;

  const messagePlain = message.trim() || "(No message provided)";
  const safeName = escapeHtml(fullName);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeService = escapeHtml(service);

  const websiteHref = escapeAttr(CONTACT.website);
  const websiteLabel = escapeHtml(CONTACT.websiteLabel);

  const textParts: string[] = [];
  if (deliveryNote) {
    textParts.push(deliveryNote, "");
  }
  textParts.push(
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Service: ${service}`,
    "",
    messagePlain,
    "",
    `— ${CONTACT.websiteLabel}`,
  );
  const text = textParts.join("\n");

  const noteBlock = deliveryNote
    ? `
    <tr><td style="padding:0 32px 20px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#fffbeb 0%,#fef3c7 100%);border:1px solid #fcd34d;border-radius:10px;">
        <tr><td style="padding:14px 18px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#b45309;">Delivery note</p>
          <p style="margin:0;font-size:13px;line-height:1.55;color:#78350f;">${escapeHtml(deliveryNote)}</p>
        </td></tr>
      </table>
    </td></tr>`
    : "";

  const mailHref = escapeAttr(`mailto:${encodeURIComponent(email)}`);

  const detailRow = (
    iconLetter: string,
    label: string,
    valueHtml: string,
    borderTop?: boolean,
  ) => `
    <tr><td style="padding:0;border-top:${borderTop ? `1px solid ${BORDER}` : "none"};">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td width="44" valign="top" style="padding:16px 0 16px 4px;">
            <div style="width:32px;height:32px;line-height:32px;text-align:center;border-radius:8px;background:${PRIMARY_SOFT};color:${PRIMARY};font-size:13px;font-weight:800;font-family:Arial,sans-serif;">${iconLetter}</div>
          </td>
          <td valign="top" style="padding:14px 0 14px 8px;">
            <p style="margin:0;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${MUTED};">${label}</p>
            <div style="margin-top:4px;font-size:15px;line-height:1.45;color:${NAVY};font-weight:600;font-family:Arial,Helvetica,sans-serif;">${valueHtml}</div>
          </td>
        </tr>
      </table>
    </td></tr>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width"/>
  <meta http-equiv="x-ua-compatible" content="ie=edge"/>
  <title>New website inquiry</title>
</head>
<body style="margin:0;padding:0;background:${PAGE_BG};-webkit-font-smoothing:antialiased;">
  <!-- Preheader (hidden in many clients) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:${PAGE_BG};opacity:0;">
    ${escapeHtml(`${fullName} · ${service}`)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE_BG};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BORDER};box-shadow:${CARD_SHADOW};">

        <!-- Brand strip (wordmark — no remote image) -->
        <tr><td style="padding:28px 32px 20px;background:#ffffff;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="left" valign="middle">
                <p style="margin:0;font-size:24px;line-height:1.15;color:${NAVY};font-weight:800;font-family:Georgia,'Times New Roman',serif;letter-spacing:-0.02em;">Daksa Digital</p>
              </td>
              <td align="right" valign="middle" style="text-align:right;">
                <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:${PRIMARY_SOFT};color:${PRIMARY};font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-family:Arial,sans-serif;">New lead</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Accent bar -->
        <tr><td style="height:4px;line-height:4px;font-size:0;background:linear-gradient(90deg,${PRIMARY} 0%,${NAVY_LIGHT} 55%,${NAVY} 100%);">&nbsp;</td></tr>

        <!-- Intro -->
        <tr><td style="padding:24px 32px 8px;background:#fafbfc;">
          <p style="margin:0;font-size:18px;line-height:1.35;color:${NAVY};font-weight:700;font-family:Georgia,'Times New Roman',serif;">Someone reached out from your website</p>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.55;color:${MUTED};font-family:Arial,Helvetica,sans-serif;">They submitted the contact form. Reply to this email to answer them directly.</p>
        </td></tr>

        ${noteBlock}

        <!-- Service highlight -->
        <tr><td style="padding:12px 32px 8px;">
          <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${MUTED};font-family:Arial,sans-serif;">Interested in</p>
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr><td style="background:${NAVY};color:#ffffff;padding:10px 18px;border-radius:10px;font-size:15px;font-weight:700;font-family:Arial,Helvetica,sans-serif;">
              ${safeService}
            </td></tr>
          </table>
        </td></tr>

        <!-- Details -->
        <tr><td style="padding:8px 28px 8px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;border:1px solid ${BORDER};overflow:hidden;background:#ffffff;">
            ${detailRow("N", "Full name", safeName, false)}
            ${detailRow("P", "Phone", safePhone, true)}
            ${detailRow("E", "Email", `<a href="${mailHref}" style="color:${PRIMARY};text-decoration:none;font-weight:700;">${safeEmail}</a>`, true)}
          </table>
        </td></tr>

        <!-- Message -->
        <tr><td style="padding:16px 32px 28px;">
          <p style="margin:0 0 10px;font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${MUTED};font-family:Arial,sans-serif;">Their message</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;border:1px solid ${BORDER};border-left:4px solid ${PRIMARY};background:#f8fafc;">
            <tr><td style="padding:18px 20px;font-size:14px;line-height:1.65;color:#334155;font-family:Arial,Helvetica,sans-serif;">
              ${nl2br(message.trim() || "(No message provided)")}
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:22px 32px;background:${NAVY};">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="vertical-align:middle;">
                <p style="margin:0;font-size:13px;font-weight:700;color:#ffffff;font-family:Arial,Helvetica,sans-serif;">Daksa Digital Pvt. Ltd.</p>
                <p style="margin:6px 0 0;font-size:12px;line-height:1.5;color:rgba(255,255,255,0.75);font-family:Arial,Helvetica,sans-serif;">${escapeHtml(CONTACT.address)}</p>
              </td>
              <td align="right" style="vertical-align:middle;text-align:right;">
                <a href="${websiteHref}" style="display:inline-block;padding:10px 16px;border-radius:8px;background:${PRIMARY};color:#ffffff;font-size:12px;font-weight:700;text-decoration:none;font-family:Arial,sans-serif;">Visit ${websiteLabel}</a>
              </td>
            </tr>
            <tr><td colspan="2" style="padding-top:16px;">
              <p style="margin:0;font-size:11px;line-height:1.55;color:rgba(255,255,255,0.55);font-family:Arial,Helvetica,sans-serif;">
                <strong style="color:rgba(255,255,255,0.85);">Tip:</strong> Use Reply — the visitor&apos;s email is set as <strong style="color:#ffffff;">Reply-To</strong>.
              </p>
            </td></tr>
          </table>
        </td></tr>

      </table>

      <p style="margin:20px 0 0;font-size:11px;line-height:1.5;color:${MUTED};text-align:center;font-family:Arial,sans-serif;">
        This message was generated by your website contact form.
      </p>
    </td></tr>
  </table>
</body>
</html>`;

  return { html, text };
}
