"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape and on outside click.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header className="site-header" id="top" ref={headerRef}>
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Doug Pro home">
          <img
            src="/assets/favicon.svg"
            alt=""
            className="brand-mark"
            width={36}
            height={36}
          />
          <span className="brand-text">
            Doug Pro
            <span className="brand-sub">Handyman Services &mdash; Calgary</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={"mobile-menu" + (open ? " open" : "")}
        id="mobileMenu"
        hidden={!open}
      >
        <Link href="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link href="/#services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link href="/#gallery" onClick={() => setOpen(false)}>
          Gallery
        </Link>
        <Link href="/#contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
        <Link
          href="/#contact"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
