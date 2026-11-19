"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap-client";

export default function ServicesHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!root.current) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.fromTo("[data-services-copy]", { autoAlpha: 0, y: 22 }, {
        autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12, clearProps: "all",
      });
      timeline.fromTo(".services-hero-image", { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" }, {
        autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 0.9, clearProps: "all",
      }, 0.18);
    });
    media.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
      gsap.to(".services-hero-image img", {
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.65,
        },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return (
    <section ref={root} className="bg-[#790b13] px-4 py-10 text-[#fff0dc] sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="max-w-2xl py-3 sm:py-8">
          <p data-services-copy className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#fff0dc]" />
            Poovar Boating Services
          </p>
          <h1 data-services-copy className="font-editorial text-5xl leading-[1.02] text-[#fff0dc] sm:text-6xl lg:text-7xl">
            Pick a cruise for your day in Poovar.
          </h1>
          <p data-services-copy className="mt-6 max-w-xl text-base leading-8 text-[#fff0dc] sm:text-lg">
            Browse the available trips below: sunrise and sunset rides, a lunch cruise, and routes through the mangroves. Send us your date if you’d like help choosing.
          </p>
          <div data-services-copy className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/booking" className="button-primary px-7 py-3.5">
              Ask about a date
            </Link>
            <Link href="/contact" className="button-outline px-7 py-3.5">
              Contact the team
            </Link>
          </div>
        </div>

        <div className="services-hero-image relative min-h-[340px] overflow-hidden rounded-[2rem] sm:min-h-[480px] lg:min-h-[560px]">
          <Image
            src="/gallery/1000185940.webp"
            alt="Visitors enjoying a boat ride through Poovar backwaters"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#790b13]/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
