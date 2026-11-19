import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

const highlights = [
  "Mangrove-lined waterways",
  "Golden Sand Beach and estuary views",
  "Sunrise, lunch, and sunset options",
]

export default function AboutSection() {
  return (
    <section className="bg-[#790b13] py-14 text-[#fff0dc] sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
        <div>
          <p data-about-item className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#fff0dc]">
            About Poovar Boating
          </p>
          <h1 data-about-item className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Poovar, seen from the water.
          </h1>
          <p data-about-item className="mt-5 max-w-2xl text-base leading-8 text-[#fff0dc]/80 sm:text-lg">
            We run boat trips through the mangrove channels and toward the estuary. Our listed options include sunrise and sunset rides, a lunch cruise, and private cruises. Share your date and group size and we’ll help confirm the route.
          </p>

          <ul className="mt-8 grid gap-x-7 gap-y-3 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <li data-about-item key={item} className="flex items-baseline gap-3 border-t border-[#fff0dc]/20 pt-3 text-sm leading-6 text-[#fff0dc] sm:text-base">
                <span className="font-editorial text-lg text-[#fff0dc]">0{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div data-about-item className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-[#fff0dc] px-6 py-3 text-sm font-semibold tracking-[0.2em] text-[#790b13] transition hover:bg-[#fff0dc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fff0dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff0dc]"
            >
              Ask about a ride
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-[#fff0dc]/20 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-[#fff0dc] transition hover:bg-[#fff0dc]/10 hover:text-[#fff0dc] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fff0dc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fff0dc]"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <ScrollReveal variant="clip" parallax>
        <div className="overflow-hidden rounded-4xl border border-[#fff0dc]/10 bg-[#790b13]/5 shadow-[0_16px_44px_rgba(48,3,7,0.08)]">
          <div className="relative h-80 w-full sm:h-105 lg:h-125">
            <Image
              src="/about.webp"
              alt="Waterfront cottages beside a Kerala backwater"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
