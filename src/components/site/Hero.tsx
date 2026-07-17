"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { profile, briquera, bandee } from "@/lib/content";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      {/* halo chaud d'ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, #e6a95e 0%, #d98a3c 42%, transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.div variants={item}>
          <span className="eyebrow text-ivory-dim">
            {profile.title} · {profile.location}
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display mt-6 max-w-4xl text-[2.6rem] leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-[5.2rem]"
        >
          Je conçois et j'expédie des applications mobiles entières.{" "}
          <span className="text-gold">En solo.</span>
        </motion.h1>

        {/* Signature : l'horizon chromatique */}
        <motion.div variants={item} className="mt-10 max-w-4xl">
          <div className="h-2 w-full overflow-hidden rounded-full">
            <motion.div
              className="spectrum h-full w-full origin-left"
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-base leading-relaxed text-ivory-dim sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#briquera"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 font-semibold text-espresso transition-transform hover:-translate-y-0.5"
          >
            Voir les études de cas
            <ArrowDown size={17} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-ivory transition-colors hover:bg-espresso-2"
          >
            Travailler ensemble
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        {/* Les deux mondes en aperçu */}
        <motion.div
          variants={item}
          className="mt-14 flex flex-wrap items-center gap-3"
        >
          {[briquera, bandee].map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className="group flex items-center gap-3 rounded-2xl border border-line bg-espresso-2/60 py-2.5 pl-2.5 pr-5 transition-colors hover:border-line-strong"
            >
              <Image
                src={p.icon}
                alt={`Icône ${p.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-display text-[0.95rem]">{p.name}</span>
                <span className="font-mono text-[0.66rem] uppercase tracking-wider text-ivory-faint">
                  {p.world}
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="text-ivory-faint transition-colors group-hover:text-gold"
              />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
