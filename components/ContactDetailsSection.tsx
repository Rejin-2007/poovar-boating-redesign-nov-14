"use client";

import { useRef } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { gsap, useGSAP } from "@/lib/gsap-client";

export default function ContactDetailsSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = root.current;
    if (!section) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          once: true,
        },
      });

      timeline.fromTo("[data-contact-intro]", { autoAlpha: 0, y: 16 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        clearProps: "opacity,visibility,transform",
      });
      timeline.fromTo("[data-contact-rule]", { scaleX: 0, transformOrigin: "left center" }, {
        scaleX: 1,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "transform",
      }, "-=0.22");
      timeline.fromTo("[data-contact-item]", { autoAlpha: 0, y: 18 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.52,
        stagger: 0.1,
        clearProps: "opacity,visibility,transform",
      }, "-=0.12");
    });

    media.add("(prefers-reduced-motion: no-preference) and (hover: hover)", () => {
      const links = gsap.utils.toArray<HTMLAnchorElement>("[data-contact-link]");
      const cleanups = links.map((link) => {
        const onEnter = () => gsap.to(link, {
          y: -2,
          color: "#fff0dc",
          duration: 0.2,
          ease: "power2.out",
        });
        const onLeave = () => gsap.to(link, {
          y: 0,
          color: "#fff0dc",
          duration: 0.24,
          ease: "power2.out",
        });

        link.addEventListener("pointerenter", onEnter);
        link.addEventListener("pointerleave", onLeave);
        link.addEventListener("focus", onEnter);
        link.addEventListener("blur", onLeave);

        return () => {
          link.removeEventListener("pointerenter", onEnter);
          link.removeEventListener("pointerleave", onLeave);
          link.removeEventListener("focus", onEnter);
          link.removeEventListener("blur", onLeave);
        };
      });

      return () => cleanups.forEach((cleanup) => cleanup());
    });

    return () => media.revert();
  }, { scope: root });

  return (
    <section
      ref={root}
      aria-labelledby="contact-details-heading"
      className="theme-burgundy mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="contact-info space-y-10">

          {/* Heading */}
          <header>
            <h2
              id="contact-details-heading"
              data-contact-intro
              className="text-2xl sm:text-3xl  font-semibold text-[#fff0dc] mb-4"
            >
              Contact Kayaloram Poovar Boating & Backwater Cruise
            </h2>

            <p data-contact-intro className="text-[#fff0dc] leading-relaxed max-w-xl">
              Kayaloram Backwater Cruise is on Club Mahindra Resort Road in Viraly, Poovar. Call us about boat timings, cruise options, or availability.
            </p>
            <span data-contact-rule aria-hidden="true" className="mt-5 block h-0.5 w-16 origin-left bg-[#fff0dc]" />
          </header>

          {/* Address */}
          <div data-contact-item>
            <p className="eyebrow mb-2">
              ADDRESS
            </p>

            <address className="not-italic text-base leading-relaxed text-[#fff0dc] sm:text-lg">
              Kayaloram Backwater Cruise <br />
              Club Mahindra Resort Road <br />
              Viraly, Poovar <br />
              Thiruvananthapuram (Trivandrum), Kerala – 695525 <br />
              India
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kayaloram+Backwater+Cruise%2C+Club+Mahindra+Resort+Road%2C+Viraly%2C+Poovar%2C+Kerala+695525"
              target="_blank"
              rel="noopener noreferrer"
              data-contact-link
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#fff0dc] underline decoration-[#fff0dc] underline-offset-4"
            >
              Search this address in Google Maps
            </a>
          </div>

          {/* Reception Manager */}
          <div data-contact-item>
            <p className="text-sm font-semibold tracking-wide text-[#fff0dc] mb-2">
              RECEPTION MANAGER
            </p>

            <p className="text-base sm:text-lg font-medium text-[#fff0dc]">
              Rajesh M – Poovar Boating Service
            </p>
          </div>

          {/* Primary Phone */}
          <div data-contact-item>
            <p className="text-sm font-semibold tracking-wide text-[#fff0dc] mb-2">
              PHONE
            </p>

            <a
              href="tel:+918139031924"
              data-contact-link
              className="text-base sm:text-lg font-medium text-[#fff0dc] hover:underline"
            >
              +91 81390 31924
            </a>
          </div>

          {/* Secondary Phone */}
          <div data-contact-item>
            <p className="text-sm font-semibold tracking-wide text-[#fff0dc] mb-2">
              SECOND PHONE
            </p>

            <a
              href="tel:+918075413797"
              data-contact-link
              className="text-base sm:text-lg font-medium text-[#fff0dc] hover:underline"
            >
              +91 80754 13797
            </a>
          </div>

          {/* Email */}
          <div data-contact-item>
            <p className="text-sm font-semibold tracking-wide text-[#fff0dc] mb-2">
              EMAIL
            </p>

            <a
              href="mailto:rajeshkayaloram@gmail.com"
              data-contact-link
              className="text-base sm:text-lg font-medium text-[#fff0dc] hover:underline break-all"
            >
              rajeshkayaloram@gmail.com
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
          <EnquiryForm />

      </div>
    </section>
  );
}
