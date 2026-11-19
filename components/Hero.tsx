"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap-client";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!root.current) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.fromTo("[data-hero-eyebrow]", { autoAlpha: 0, y: 18 }, {
        autoAlpha: 1, y: 0, duration: 0.55, clearProps: "all",
      });
      timeline.fromTo("[data-hero-line]", { autoAlpha: 0, y: 28 }, {
        autoAlpha: 1, y: 0, duration: 0.68, stagger: 0.12, clearProps: "all",
      }, "-=0.22");
      timeline.fromTo("[data-hero-support]", { autoAlpha: 0, y: 18 }, {
        autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.1, clearProps: "all",
      }, "-=0.24");
      timeline.fromTo(".hero-photo-main", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.035,
      }, {
        clipPath: "inset(0 0 0% 0)",
        scale: 1,
        duration: 1.05,
        clearProps: "clipPath,transform",
      }, 0.16);
      timeline.fromTo(".hero-photo-detail", { autoAlpha: 0, x: -18, y: 22 }, {
        autoAlpha: 1, x: 0, y: 0, duration: 0.65, clearProps: "all",
      }, 0.62);
    });

    media.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
      gsap.to(".hero-photo-main img", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    });

    return () => media.revert();
  }, { scope: root });

  return (
    <section ref={root} className="overflow-hidden bg-[#790b13] px-4 py-9 text-[#fff0dc] sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-9 lg:min-h-[min(82vh,780px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="hero-copy relative z-10 max-w-2xl py-4 sm:py-8 lg:py-0">
          <p data-hero-eyebrow className="eyebrow mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-[#fff0dc]" />
            Poovar · Kerala
          </p>

          <h1 className="max-w-[40rem] text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#fff0dc] sm:text-6xl lg:text-[4.5rem]">
            <span data-hero-line className="block">Poovar Boating</span>
            <span data-hero-line className="font-editorial block text-[#fff0dc]">in a quieter rhythm.</span>
          </h1>

          <p data-hero-support className="mt-6 max-w-lg text-base leading-8 text-[#fff0dc] sm:text-lg">
            Follow Poovar’s backwater channels beneath the mangroves and out toward the estuary. Choose a cruise, then tell us when you’re coming.
          </p>

          <div data-hero-support className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/booking" className="button-primary px-7 py-3.5">
              Book Your Boat Ride
            </Link>
            <Link href="/services" className="button-outline px-7 py-3.5">
              Explore Boating Packages
            </Link>
          </div>

          <a
            data-hero-support
            href="https://wa.me/918139031924?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20Poovar%20boating%20experience.%20Could%20you%20please%20share%20the%20available%20packages%20and%20booking%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#fff0dc] underline decoration-[#fff0dc] underline-offset-4"
          >
            Ask about packages on WhatsApp ↗
          </a>

          <p data-hero-support className="mt-8 border-t border-[#fff0dc]/15 pt-4 text-sm font-medium text-[#fff0dc]">
            Mangrove channels · estuary · Golden Sand Beach
          </p>
        </div>

        <div className="hero-art" role="group" aria-label="Scenes from Poovar’s backwaters">
          <figure className="hero-photo-main">
            <Image
              src="/Hero.webp"
              alt="A boat beside the golden shoreline at Poovar"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </figure>

          <figure className="hero-photo-detail">
            <div className="hero-photo-detail-image">
              <Image
                src="/gallery/WhatsApp Image 2026-10-24 at 20.06.22 (2).jpeg"
                alt="A boat travelling through a shaded mangrove channel"
                fill
                sizes="(max-width: 767px) 72vw, 28vw"
                className="object-cover"
              />
            </div>
            <figcaption className="font-editorial">Under the mangrove canopy</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
