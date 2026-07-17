"use client";

import { useState, type FormEvent, type SVGProps } from "react";
import { ArrowUpRight, Check, Mail, Loader2 } from "lucide-react";
import { profile } from "@/lib/content";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06C21.4 8.58 22 11 22 14.14V21h-4v-6.06c0-1.44-.03-3.3-2-3.3-2 0-2.3 1.56-2.3 3.19V21h-4V9Z" />
    </svg>
  );
}

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" {...props}>
      <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.08.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.57.67.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Envoi impossible");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "L'envoi a échoué. Tu peux m'écrire directement par email en attendant.",
      );
    }
  }

  const socials: { label: string; href: string; Icon: typeof LinkedinIcon }[] =
    [];
  if (profile.contacts.linkedin)
    socials.push({
      label: "LinkedIn",
      href: profile.contacts.linkedin,
      Icon: LinkedinIcon,
    });
  if (profile.contacts.github)
    socials.push({
      label: "GitHub",
      href: profile.contacts.github,
      Icon: GithubIcon,
    });

  return (
    <section
      id="contact"
      className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow dot="var(--color-gold)" className="text-ivory-dim">
              Contact
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display mt-6 text-4xl leading-[1.02] tracking-[-0.02em] sm:text-6xl">
              Une idée d'app&nbsp;? Travaillons ensemble.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory-dim">
              Ouvert aux collaborations produit & design, aux missions freelance
              et aux projets ambitieux à faire exister. Dis-moi ce que tu as en
              tête.
            </p>
          </Reveal>

          {socials.length > 0 ? (
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2.5 text-[0.85rem] font-medium transition-colors hover:bg-espresso-2"
                  >
                    <s.Icon />
                    {s.label}
                    <ArrowUpRight size={14} className="text-ivory-faint" />
                  </a>
                ))}
              </div>
            </Reveal>
          ) : null}
        </div>

        {/* Formulaire */}
        <Reveal delay={0.1}>
          {status === "sent" ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center rounded-3xl border border-line bg-espresso-2/40 p-10 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-espresso">
                <Check size={26} />
              </span>
              <h3 className="font-display mt-5 text-2xl">Message envoyé.</h3>
              <p className="mt-2 max-w-xs text-ivory-dim">
                Merci — je te réponds au plus vite. À très vite.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-line bg-espresso-2/40 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5">
                <Field label="Ton nom" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Prénom Nom"
                    className="field"
                  />
                </Field>
                <Field label="Ton email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="toi@exemple.com"
                    className="field"
                  />
                </Field>
                <Field label="Ton message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Parle-moi de ton projet…"
                    className="field resize-none"
                  />
                </Field>

                {status === "error" ? (
                  <p className="flex items-center gap-2 text-[0.85rem] text-[#ff8a6b]">
                    {error}{" "}
                    <a
                      className="inline-flex items-center gap-1 underline"
                      href={`mailto:${profile.contacts.email}`}
                    >
                      <Mail size={14} /> {profile.contacts.email}
                    </a>
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-espresso transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={17} className="animate-spin" /> Envoi…
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <ArrowUpRight size={17} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>

      <style>{`
        .field {
          width: 100%;
          border-radius: 0.85rem;
          background: var(--color-espresso);
          border: 1px solid var(--color-line);
          padding: 0.75rem 0.9rem;
          color: var(--color-ivory);
          font-size: 0.95rem;
          transition: border-color .18s ease;
        }
        .field::placeholder { color: var(--color-ivory-faint); }
        .field:focus { outline: none; border-color: var(--color-gold); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="eyebrow text-ivory-dim">{label}</span>
      {children}
    </label>
  );
}
