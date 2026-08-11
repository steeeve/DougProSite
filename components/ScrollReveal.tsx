"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS =
  ".hero-copy, .hero-photo, .about-lead, .about-card, " +
  ".service-card, .gallery-stage, .contact-copy, .contact-form, " +
  ".about-photos img, .about-page-head, .back-link";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS));
    els.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window) || els.length === 0) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
