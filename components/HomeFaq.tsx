"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { poovarFaqs } from "@/lib/poovar-faqs";
import { SITE_URL } from "@/lib/site-metadata";
import { gsap, useGSAP } from "@/lib/gsap-client";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "url": `${SITE_URL}/`,
  "mainEntity": poovarFaqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function HomeFaq() {
  return (
    <section aria-labelledby="poovar-faq-title" className="theme-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQ_SCHEMA).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 max-w-3xl sm:mb-12">
          <p className="eyebrow mb-3">Before you set out</p>
          <h2 id="poovar-faq-title" className="text-3xl font-semibold leading-tight text-[#17645F] sm:text-4xl lg:text-5xl">
            Poovar boating questions, answered plainly.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#17645F]/80 sm:text-lg">
            Trip times, fares and route stops can depend on the date and cruise. We’ve noted what is available here and where to check directly.
          </p>
        </header>

        <div className="grid gap-x-12 lg:grid-cols-2">
          {poovarFaqs.map(({ question, answer }) => (
            <AnimatedFaq key={question} question={question} answer={answer} />
          ))}
        </div>

        <p className="mt-8 text-sm leading-7 text-[#17645F]/85">
          Need a current answer for your date? <Link className="font-semibold text-[#17645F] underline decoration-[#FF6845] decoration-2 underline-offset-4" href="/contact">Contact the Poovar boating team</Link> or compare the <Link className="font-semibold text-[#17645F] underline decoration-[#FF6845] decoration-2 underline-offset-4" href="/pricing">cruise pricing details</Link>.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-[#17645F]/20 pt-6">
          <Link href="/booking" className="button-coral px-6 py-3">Ask about your date</Link>
          <a
            href="https://wa.me/918139031924?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20Poovar%20boating%20experience.%20Could%20you%20please%20share%20the%20available%20packages%20and%20booking%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="button-outline px-6 py-3"
          >
            Message on WhatsApp
          </a>
          <a href="tel:+918139031924" className="min-h-11 inline-flex items-center text-sm font-semibold text-[#17645F] underline decoration-[#FF6845] underline-offset-4">
            Call +91 81390 31924
          </a>
        </div>
      </div>
    </section>
  );
}

function AnimatedFaq({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const [panelMounted, setPanelMounted] = useState(false);
  const root = useRef<HTMLDetailsElement>(null);
  const panel = useRef<HTMLParagraphElement>(null);
  const panelId = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  useGSAP(() => {
    if (!panel.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (open) {
      if (reduceMotion) return;
      gsap.fromTo(panel.current, { height: 0, autoAlpha: 0, y: -5 }, {
        height: "auto",
        autoAlpha: 1,
        y: 0,
        duration: 0.28,
        ease: "power2.out",
        clearProps: "height,opacity,visibility,transform",
      });
      return;
    }

    if (panelMounted && !reduceMotion) {
      gsap.to(panel.current, {
        height: 0,
        autoAlpha: 0,
        y: -4,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => setPanelMounted(false),
      });
    } else {
      setPanelMounted(false);
    }
  }, { scope: root, dependencies: [open], revertOnUpdate: true });

  return (
    <details ref={root} open={panelMounted} className="group border-t border-[#17645F]/20 py-5">
      <summary
        aria-controls={panelId}
        aria-expanded={open}
        onClick={(event) => {
          event.preventDefault();
          const nextOpen = !open;
          if (nextOpen) setPanelMounted(true);
          setOpen(nextOpen);
        }}
        className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-semibold text-[#17645F] marker:hidden"
      >
        {question}
        <span aria-hidden="true" className={`text-[#FF6845] transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </summary>
      <p
        ref={panel}
        id={panelId}
        aria-hidden={!open}
        className={`mt-3 max-w-prose pr-8 text-sm leading-7 text-[#17645F]/85 sm:text-base ${panelMounted ? "" : "hidden"}`}
      >
        {answer}
      </p>
    </details>
  );
}
