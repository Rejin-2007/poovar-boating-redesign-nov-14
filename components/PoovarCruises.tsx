"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { gsap, useGSAP } from "@/lib/gsap-client";

const cruises = [
  {
    title: "Silver Cruise",
    image: "/Deluxe.webp",
    description: "An early ride through the backwaters and mangrove channels.",
    alt: "Boat moving through a mangrove-lined waterway",
    layout: "feature",
  },
  {
    title: "Golden Cruise",
    image: "/gallery/WhatsApp Image 2026-10-24 at 20.06.21.jpeg",
    description: "A boat ride toward the sandbank and estuary.",
    alt: "A boat heading toward the rocky outcrop across Poovar’s estuary",
    layout: "portrait",
  },
  {
    title: "Platinum Cruise",
    image: "/Premium.webp",
    description: "Ask us about a private cruise, an extended route, and available stops.",
    alt: "Private boat on the Poovar backwaters",
    layout: "offset",
  },
  {
    title: "Sunrise Cruise",
    image: "/sunrise.webp",
    description: "An early start for backwater views and birdwatching.",
    alt: "Sunrise over open water",
    layout: "wide",
  },
  {
    title: "Lunch Cruise",
    image: "/lunch.webp",
    description: "Pair a boat trip with a traditional Kerala lunch.",
    alt: "Traditional Kerala lunch served during a Poovar boat trip",
    layout: "half",
  },
  {
    title: "Sunset Cruise",
    image: "/sunset.webp",
    description: "Head out in the evening as the light settles over the estuary.",
    alt: "Evening light over the Poovar backwaters",
    layout: "half",
  },
];

export default function PoovarCruises() {
  const root = useRef<HTMLElement>(null);
  const { contextSafe } = useGSAP({ scope: root });

  const handleCardEnter = contextSafe((event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const image = card.querySelector("img");
    gsap.to(card, { y: -4, duration: 0.24, ease: "power2.out" });
    if (image) gsap.to(image, { scale: 1.035, duration: 0.5, ease: "power2.out" });
  });

  const handleCardLeave = contextSafe((event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const image = card.querySelector("img");
    gsap.to(card, { y: 0, duration: 0.28, ease: "power2.out" });
    if (image) gsap.to(image, { scale: 1, duration: 0.5, ease: "power2.out" });
  });

  return (
    <section ref={root} className="theme-teal px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal variant="fade-right" className="mb-9 sm:mb-12">
        <header className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Cruise options</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#F3EEE8] sm:text-4xl lg:text-5xl">
              Six options, from sunrise to sunset.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#F3EEE8]/85 lg:justify-self-end sm:text-lg">
            Routes and timings depend on the cruise. Send us your date and group size and we’ll confirm what’s available.
          </p>
        </header>
        </ScrollReveal>

        <ScrollReveal variant="clip-stagger" selector=".cruise-card">
        <div className="cruise-layout">
          {cruises.map((cruise, index) => (
            <article
              className={`cruise-card group cruise-card--${cruise.layout}`}
              key={cruise.title}
              onPointerEnter={handleCardEnter}
              onPointerLeave={handleCardLeave}
            >
              <div className="cruise-card-image">
                <Image
                  src={cruise.image}
                  alt={cruise.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="cruise-card-copy">
                <p className="eyebrow mb-2">0{index + 1}</p>
                <h3 className="font-editorial text-3xl leading-tight text-[#F3EEE8] sm:text-4xl">{cruise.title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-7 text-[#F3EEE8]/85 sm:text-base">{cruise.description}</p>
                <Link
                  href={`https://wa.me/918139031924?text=${encodeURIComponent(`Hello, I am interested in the ${cruise.title} in Poovar. Could you please share the current price, duration and availability?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about the ${cruise.title}`}
                  className="mt-4 inline-flex min-h-11 items-center border-b border-[#F3EEE8]/70 text-sm font-semibold text-[#F3EEE8] transition hover:border-[#FF6845]"
                >
                  Ask about this cruise <span className="ml-2" aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
        <nav aria-label="Poovar cruise guides" className="mt-10 border-t border-[#F3EEE8]/25 pt-6">
          <p className="text-sm font-semibold text-[#F3EEE8]">Plan by experience</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#F3EEE8]/90">
            <li><Link className="underline decoration-[#FF6845] underline-offset-4" href="/poovar-backwater-cruise">Backwater cruise</Link></li>
            <li><Link className="underline decoration-[#FF6845] underline-offset-4" href="/sunset-cruise">Sunset cruise</Link></li>
            <li><Link className="underline decoration-[#FF6845] underline-offset-4" href="/poovar-island-boating">Island boating</Link></li>
            <li><Link className="underline decoration-[#FF6845] underline-offset-4" href="/mangrove-forest-boating">Mangrove boating</Link></li>
            <li><Link className="underline decoration-[#FF6845] underline-offset-4" href="/pricing">Price and booking questions</Link></li>
          </ul>
        </nav>
        </ScrollReveal>
      </div>
    </section>
  );
}
