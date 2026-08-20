/**
 * Single source of truth for site content that changes often.
 *
 * ⚠️  PLACEHOLDERS — verify/replace before going live:
 *   - phones[]      : confirm both numbers are correct + reachable
 *   - linkedin      : confirm the company page slug
 *   - url           : the final production domain (used for OG tags / canonical)
 *
 * The accent colour lives in app/globals.css under `@theme` (--color-accent).
 */

export const site = {
  name: "Akrevia",
  // PLACEHOLDER: production domain
  url: "https://akrevia.in",
  tagline: "Custom Software, Web & Mobile Apps",
  location: "Delhi, India",

  // Primary address — used for the big CTAs
  email: "hello@akrevia.in",

  emails: [
    { label: "General", address: "hello@akrevia.in" },
    { label: "Prateek", address: "prateek@akrevia.in" },
    { label: "Gautam", address: "gautam@akrevia.in" },
  ],

  // PLACEHOLDER: confirm numbers. `tel` must stay digits-only with country code.
  phones: [
    { label: "Prateek", display: "+91 93184 21533", tel: "+919318421533" },
    { label: "Gautam", display: "+91 87890 34782", tel: "+918789034782" },
  ],

  // PLACEHOLDER: confirm LinkedIn company page
  linkedin: "https://www.linkedin.com/company/akrevialabs",
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

/** Prefilled mail client link for the "Get in touch" buttons. */
export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Project enquiry",
)}`;
