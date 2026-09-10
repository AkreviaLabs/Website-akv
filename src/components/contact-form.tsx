"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

const FIELD_CLASS =
  "w-full border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none disabled:opacity-50";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    const result = await sendContactEmail(data);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
      form.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={status === "loading"}
            placeholder="Your name"
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={status === "loading"}
            placeholder="you@company.com"
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Company <span className="normal-case text-muted-foreground/70">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          disabled={status === "loading"}
          placeholder="Where you work"
          className={`mt-2 ${FIELD_CLASS}`}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={status === "loading"}
          placeholder="What are you trying to build?"
          className={`mt-2 resize-none ${FIELD_CLASS}`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="group inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90 disabled:pointer-events-none disabled:opacity-50 w-fit"
        >
          {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send message"}
          {status !== "success" && (
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          )}
        </button>

        {status === "success" && (
          <p className="text-sm text-accent">
            Thanks for reaching out! We&rsquo;ll get back to you shortly.
          </p>
        )}
        
        {status === "error" && (
          <p className="text-sm text-destructive">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
        )}
      </div>
    </form>
  );
}
