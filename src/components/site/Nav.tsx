"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-espresso/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-md bg-gold font-display text-sm text-espresso"
          >
            F
          </span>
          <span className="font-display text-[0.95rem] tracking-tight">
            Florian Gouesse
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-ivory-dim transition-colors hover:text-ivory"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ivory px-4 py-2 text-[0.8rem] font-semibold text-espresso transition-transform hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-ivory transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-ivory transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-ivory transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open ? (
        <div className="border-t border-line bg-espresso/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-ivory-dim hover:bg-espresso-2 hover:text-ivory"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-4 py-3 text-center font-semibold text-espresso"
            >
              LinkedIn
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
