import { site } from "@/lib/site";

export default function WhyUs() {
  return (
    <section
      id="why"
      className="border-t border-line bg-accent-soft px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl border-l-2 border-accent pl-6 sm:pl-10" data-reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            Why {site.name}
          </p>
          <p className="mt-6 text-xl leading-relaxed font-medium tracking-tight text-pretty sm:text-2xl sm:leading-relaxed">
            We&apos;re a focused engineering team with deep experience building
            production systems — from custom CRM and ERP platforms with
            offline-capable mobile apps to high-performance backends handling
            real workloads. We care about two things: building it precisely, and
            making sure it delivers real results for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
