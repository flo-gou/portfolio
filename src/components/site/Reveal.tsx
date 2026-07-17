"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li" | "span" | "section";
};

/**
 * Révélation au scroll robuste : le contenu apparaît via IntersectionObserver,
 * mais un failsafe (et un repli <noscript>, voir layout) garantit qu'il devient
 * TOUJOURS visible — jamais bloqué en opacity:0 si l'observer ne se déclenche pas.
 */
export function Reveal({
  children,
  delay = 0,
  y = 22,
  className = "",
  style,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const prefersReduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduce) {
      setReduce(true);
      setShown(true);
      return;
    }
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    io.observe(el);
    // Failsafe : si l'observer ne déclenche pas (contexte sans scroll, etc.).
    const t = window.setTimeout(() => setShown(true), 2200);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal-item ${className}`}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown || reduce ? "none" : `translateY(${y}px)`,
        transition: reduce
          ? "none"
          : "opacity .6s ease, transform .7s cubic-bezier(.22,1,.36,1)",
        transitionDelay: shown ? `${delay}s` : "0s",
      }}
    >
      {children}
    </Tag>
  );
}
