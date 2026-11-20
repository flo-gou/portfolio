"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";

/** Manifeste — le seul moment typographiquement fort de la page.
    Orienté Head of Product ; un unique accent miel sur « livrer ». */
export function Manifesto() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.04 } },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="flex min-h-[92svh] flex-col justify-center px-5 pb-20 pt-32 sm:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-5xl"
      >
        <motion.p variants={item} className="eyebrow text-ivory-faint">
          {profile.role} — {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display mt-7 max-w-4xl text-[3rem] leading-[0.96] tracking-[-0.035em] sm:text-7xl lg:text-[6rem]"
        >
          {profile.headline[0]}
          <br />
          <span className="text-gold">{profile.headline[1]}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-10 max-w-[42ch] text-lg leading-relaxed text-ivory-dim"
        >
          {profile.subhead}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-[42ch] text-[0.98rem] leading-relaxed text-ivory-faint"
        >
          {profile.bio}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-[0.78rem] uppercase tracking-wider text-ivory-faint"
        >
          {profile.looking}
        </motion.p>

        <motion.div variants={item} className="mt-11 flex items-center gap-6">
          <a
            href="#projets"
            className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ivory"
          >
            Voir les projets
            <ArrowDown
              size={17}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.9rem] text-ivory-dim transition-colors hover:text-ivory"
          >
            LinkedIn
            <ArrowUpRight size={15} className="text-ivory-faint" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
