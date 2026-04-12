"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { INQUIRY_SERVICE_OPTIONS } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function InquiryForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!fullName || !phone || !email || !service) {
      return;
    }

    const body = [
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:daksadigitalprivatelimited@gmail.com?subject=${encodeURIComponent(
      `Website inquiry — ${service}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-4", className)}
      noValidate
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="text-sm font-medium text-foreground">
            Full Name <span className="text-primary">*</span>
          </label>
          <Input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-10"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number <span className="text-primary">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Phone"
            className="h-10"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address <span className="text-primary">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className="h-10"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Service Required <span className="text-primary">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="h-10 w-full rounded-lg border border-input bg-background px-2.5 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          defaultValue=""
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
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your goals, timeline, or questions."
          className="min-h-24"
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="h-10 px-6 sm:h-11">
          Send inquiry
        </Button>
        {status === "sent" ? (
          <p className="text-sm text-muted-foreground" role="status">
            If your mail app did not open, email us directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}
