"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap-client";

export type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "clip" | "stagger" | "clip-stagger";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  selector?: string;
  parallax?: boolean;
};

/**
 * Adds motion only after hydration. The rendered children remain visible in the
 * HTML response and when JavaScript is unavailable or reduced motion is set.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  selector = "[data-reveal-item]",
  parallax = false,
}: ScrollRevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const element = root.current;
    if (!element) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const targets = variant === "stagger" || variant === "clip-stagger"
        ? element.querySelectorAll<HTMLElement>(selector)
        : [element];

      if (!targets?.length) return;

      const from = variant === "clip" || variant === "clip-stagger"
        ? { autoAlpha: 0, y: 16, clipPath: "inset(0 0 100% 0)" }
        : variant === "fade-left"
          ? { autoAlpha: 0, y: 8, clipPath: "inset(0 0 0 7%)" }
          : variant === "fade-right"
            ? { autoAlpha: 0, y: 8, clipPath: "inset(0 7% 0 0)" }
            : { autoAlpha: 0, y: 22 };

      gsap.fromTo(targets, from, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: variant === "clip" || variant === "clip-stagger" ? 0.9 : 0.72,
        delay,
        ease: "power3.out",
        stagger: variant === "stagger" || variant === "clip-stagger" ? 0.12 : 0,
        clearProps: "clipPath,transform,opacity,visibility",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });
    });

    if (parallax) {
      media.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
        const image = element.querySelector("img");
        if (!image) return;
        gsap.to(image, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      });
    }

    return () => media.revert();
  }, { scope: root, dependencies: [delay, parallax, selector, variant], revertOnUpdate: true });

  return <div ref={root} className={className}>{children}</div>;
}
