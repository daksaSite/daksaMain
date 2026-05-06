"use client";

import { Loader2 } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, INQUIRY_SERVICE_OPTIONS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

function buildMailto(subject: string, body: string) {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function InquiryForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [fallbackNotice, setFallbackNotice] = React.useState(false);
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>(
    {},
  );

  const validateFields = (values: {
    fullName: string;
    phone: string;
    email: string;
    service: string;
  }) => {
    const errors: Record<string, string> = {};
    if (!values.fullName) errors.fullName = "Please enter your full name.";
    if (!values.phone) errors.phone = "Please enter your phone number.";
    if (!values.email) errors.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errors.email = "Please enter a valid email address.";
    if (!values.service) errors.service = "Please select a service.";
    return errors;
  };

  React.useEffect(() => {
    if (status !== "success") return;
    const id = window.setTimeout(() => setStatus("idle"), 5000);
    return () => window.clearTimeout(id);
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const validationErrors = validateFields({
      fullName,
      phone,
      email,
      service,
    });
    setFieldErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      setErrorMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);
    setFallbackNotice(false);

    const textBody = [
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message || "(No message)",
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          service,
          message: message || undefined,
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        code?: string;
        error?: string;
      };

      if (res.ok) {
        setStatus("success");
        setFieldErrors({});
        form.reset();
        return;
      }

      if (res.status === 503 && payload.code === "NOT_CONFIGURED") {
        window.location.href = buildMailto(
          `Website inquiry — ${service}`,
          textBody,
        );
        setFallbackNotice(true);
        setStatus("idle");
        return;
      }

      setStatus("error");
      setErrorMessage(
        typeof payload.error === "string"
          ? payload.error
          : "Something went wrong. Please try again or email us directly.",
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Check your connection or email us directly.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-5", className)}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full name <span className="text-primary">*</span>
          </label>
          <Input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            placeholder="e.g. Shashank Singh"
            className={cn("h-11", fieldErrors.fullName && "aria-invalid:ring-destructive/30")}
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
            disabled={status === "loading"}
            onBlur={(e) =>
              setFieldErrors((prev) => ({
                ...prev,
                fullName: e.target.value.trim() ? "" : "Please enter your full name.",
              }))
            }
          />
          {fieldErrors.fullName ? (
            <p id="fullName-error" className="text-xs text-destructive">
              {fieldErrors.fullName}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-primary">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 …"
            className={cn("h-11", fieldErrors.phone && "aria-invalid:ring-destructive/30")}
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            disabled={status === "loading"}
            onBlur={(e) =>
              setFieldErrors((prev) => ({
                ...prev,
                phone: e.target.value.trim() ? "" : "Please enter your phone number.",
              }))
            }
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="text-xs text-destructive">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email <span className="text-primary">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={cn("h-11", fieldErrors.email && "aria-invalid:ring-destructive/30")}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          disabled={status === "loading"}
          onBlur={(e) => {
            const value = e.target.value.trim();
            setFieldErrors((prev) => ({
              ...prev,
              email: !value
                ? "Please enter your email address."
                : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                  ? ""
                  : "Please enter a valid email address.",
            }));
          }}
        />
        {fieldErrors.email ? (
          <p id="email-error" className="text-xs text-destructive">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Service <span className="text-primary">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          disabled={status === "loading"}
          className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-60"
          defaultValue=""
          aria-invalid={Boolean(fieldErrors.service)}
          aria-describedby={fieldErrors.service ? "service-error" : undefined}
          onBlur={(e) =>
            setFieldErrors((prev) => ({
              ...prev,
              service: e.target.value ? "" : "Please select a service.",
            }))
          }
        >
          <option value="" disabled>
            Select a service
          </option>
          {INQUIRY_SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {fieldErrors.service ? (
          <p id="service-error" className="text-xs text-destructive">
            {fieldErrors.service}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project or needs"
          className="min-h-28 resize-y"
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {errorMessage}
        </p>
      ) : null}

      {status === "success" ? (
        <p
          className="rounded-lg border border-primary/25 bg-primary/5 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          Thanks, your request is in. We&apos;ll review it and get back within 1 business day.
        </p>
      ) : null}

      {fallbackNotice ? (
        <p className="text-sm text-muted-foreground" role="status">
          Email sending isn&apos;t configured on the server yet — we opened your mail app instead.
          Add{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">RESEND_API_KEY</code> for direct
          delivery.
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          className="h-11 px-8 font-semibold sm:h-12"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </Button>
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          What happens after you submit? We review your brief, share next steps, and schedule
          a consultation call.
        </p>
      </div>
    </form>
  );
}
