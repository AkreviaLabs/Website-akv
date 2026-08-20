# Akrevia — one-page site

Next.js 16 (App Router) · TypeScript · Tailwind v4 · Geist. Fully static, no backend.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static output, no env vars needed
```

## Where to change things

| What                                    | File                                 |
| --------------------------------------- | ------------------------------------ |
| Emails, phones, LinkedIn, domain        | `lib/site.ts` (marked `PLACEHOLDER`) |
| Accent colour                           | `app/globals.css` → `--color-accent`  |
| Page title / description / OG tags      | `app/layout.tsx`                     |
| Social share card                       | `app/opengraph-image.tsx`            |
| Section copy                            | `components/<Section>.tsx`           |

Sections are composed in `app/page.tsx`: Header · Hero · Services · Approach · WhyUs · Contact · Footer.

## Deploy (Vercel)

Import the repo — framework auto-detected, no config, no env vars. Build `next build`, output handled automatically. Point `akrevia.in` at it, then set the real domain in `lib/site.ts` (`url`) so OG/canonical tags are absolute.

## Notes

- Scroll animations use one `IntersectionObserver` (`components/ScrollReveal.tsx`); content stays visible with JS off and for `prefers-reduced-motion`.
- Smooth scrolling is native CSS, no JS library.
- Only client component is `Header` (mobile menu). Everything else is a server component.
