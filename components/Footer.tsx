"use client"

import { useRef } from "react"
import Link from "next/link"
import { gsap, useGSAP } from "@/lib/gsap-client"

export default function Footer() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.fromTo(".footer-column", { autoAlpha: 0, y: 20 }, {
      autoAlpha: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: "power3.out",
      clearProps: "all",
      scrollTrigger: { trigger: root.current, start: "top 88%", once: true },
    })
  }, { scope: root })

  return (
    <footer ref={root} className="border-t border-[#17645F]/10 bg-[#17645F] text-[#F3EEE8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8 lg:py-16">
        <div className="footer-column">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#F3EEE8]">
            Poovar Boating
          </p>
          <h3 className="mb-4 text-2xl font-semibold text-[#F3EEE8] sm:text-3xl">
            See Poovar from the backwaters.
          </h3>
          <p className="max-w-xl text-sm leading-7 text-[#F3EEE8] sm:text-base">
            We’re based at Kayaloram Backwater Cruise in Viraly. Call or message us about routes, departure times, and availability.
          </p>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h3 className="mb-4 text-lg font-semibold text-[#F3EEE8]">Explore</h3>
          <ul className="space-y-3 text-sm text-[#F3EEE8] sm:text-base">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Backwater cruise", "/poovar-backwater-cruise"],
              ["Sunset cruise", "/sunset-cruise"],
              ["Island boating", "/poovar-island-boating"],
              ["Mangrove boating", "/mangrove-forest-boating"],
              ["Prices and packages", "/pricing"],
              ["How to reach Poovar", "/how-to-reach-poovar"],
              ["Gallery", "/gallery"],
              ["Blog", "/blog"],
              ["Enquiry", "/enquiry"],
              ["Contact", "/contact"],
            ].map(([name, href]) => (
              <li key={name}>
                <Link href={href} className="transition hover:text-[#F3EEE8]">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-column">
          <h3 className="mb-4 text-lg font-semibold text-[#F3EEE8]">Plan your visit</h3>
          <address className="not-italic space-y-2 text-sm leading-7 text-[#F3EEE8] sm:text-base">
            <p>Kayaloram Backwater Cruise</p>
            <p>Club Mahindra Resort Road</p>
            <p>Viraly, Poovar, Kerala – 695525</p>
            <p>India</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kayaloram+Backwater+Cruise%2C+Club+Mahindra+Resort+Road%2C+Viraly%2C+Poovar%2C+Kerala+695525"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-1 text-[#F3EEE8] underline decoration-[#FF6845] underline-offset-4"
            >
              View address in Google Maps
            </a>
          </address>

          <div className="mt-6 space-y-2 text-sm sm:text-base">
            <a href="tel:+918139031924" className="block transition hover:text-[#F3EEE8]">
              +91 81390 31924
            </a>
            <a href="tel:+918075413797" className="block transition hover:text-[#F3EEE8]">
              +91 80754 13797
            </a>
            <a href="mailto:rajeshkayaloram@gmail.com" className="block break-all transition hover:text-[#F3EEE8]">
              rajeshkayaloram@gmail.com
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link href="/privacy-policy" className="transition hover:text-[#F3EEE8]">
              Privacy Policy
            </Link>
            <Link href="/terms-and-condition" className="transition hover:text-[#F3EEE8]">
              Terms
            </Link>
            <Link href="/refund-policy" className="transition hover:text-[#F3EEE8]">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#F3EEE8]/10 px-4 py-6 text-center text-sm text-[#F3EEE8] sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Kayaloram Poovar Boating. All rights reserved.</p>
        <p className="mt-2">
          Website by <a href="https://www.instagram.com/browzess" target="_blank" rel="noreferrer" className="text-[#F3EEE8] transition hover:underline">Browzess</a>
        </p>
      </div>
    </footer>
  )
}
