import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

const points = [
  "Boat routes through mangrove-lined channels",
  "Views of the estuary and Golden Sand Beach",
  "Sunrise, sunset, and lunch cruise options",
]

export default function ExperienceSection() {
  return (
    <section aria-labelledby="experience-poovar-boating" className="theme-burgundy-deep w-full py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div data-reveal-item className="space-y-6">
          <ScrollReveal variant="clip" parallax>
          <div className="relative overflow-hidden rounded-[2rem] border border-[#fff0dc]/20 bg-[#790b13]/10">
            <Image
              src="/gallery/1000185868.webp"
              alt="Passengers travelling beneath a boat canopy through Poovar’s mangroves"
              width={800}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-[320px] w-full object-cover sm:h-[420px]"
              priority
            />
          </div>
          </ScrollReveal>
          <div className="space-y-4">
            <p className="eyebrow">What the route looks like</p>
            <p className="text-base leading-8 text-[#fff0dc]/85 sm:text-lg">
              The channel narrows under the mangroves, then opens toward the estuary. Ask which cruise includes the stop you have in mind.
            </p>
          </div>
        </div>

        <div data-reveal-item className="py-2 md:py-8 lg:py-12">
          <h2 id="experience-poovar-boating" className="font-editorial text-4xl leading-tight text-[#fff0dc] sm:text-5xl">
            Choose the cruise that fits your day.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#fff0dc]/85 sm:text-lg">
            There are sunrise and sunset rides, plus a lunch cruise. Send us your date and group size; we’ll confirm the available timing and route.
          </p>

          <ul className="mt-8">
            {points.map((point, index) => (
              <li key={point} className="flex items-baseline gap-4 border-t border-[#fff0dc]/25 py-4 text-sm leading-7 text-[#fff0dc] sm:text-base">
                <span className="font-editorial text-lg text-[#fff0dc]">0{index + 1}</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/booking" className="button-primary px-6 py-3">
              Ask about availability
            </Link>
            <Link href="https://wa.me/918139031924" target="_blank" rel="noreferrer" className="button-outline px-6 py-3">
              Message us on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
