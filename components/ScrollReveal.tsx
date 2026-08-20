"use client";

import { useEffect } from "react";

/**
 * One observer for every `data-reveal` element on the page.
 * Mounted once in app/page.tsx — individual sections just add the attribute.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
