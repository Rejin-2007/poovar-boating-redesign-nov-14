import type { Metadata } from "next"

import Hero from "@/components/Hero"
import ExperienceSection from "@/components/ExperienceSection"
import RouteStories from "@/components/RouteStories"
import GallerySection from "@/components/GallerySection"
import BoatingVideos from "@/components/BoatingVideos"
import Reviews from "@/components/Reviews"
import ScrollReveal from "@/components/ScrollReveal"
import HomeFaq from "@/components/HomeFaq"
import { createPageMetadata } from "@/lib/site-metadata"

export function generateMetadata(): Metadata {
  return createPageMetadata({
    title: "Poovar Boating | Private Backwater Cruises",
    description:
      "Cruise Poovar’s mangrove channels, estuary and Golden Sand Beach. See available trips and ask Kayaloram about your date.",
    path: "/",
    image: "/og/poovar-boating.jpg",
    imageAlt: "Boat ride along Poovar’s backwaters and mangrove channels",
  })
}

/* Stops photographed along the route. */

const ROUTE_STOPS = [
  {
    title: "Golden Sand Beach and Estuary Point",
    description:
      "Where the river meets the sea, the shoreline opens onto the estuary and backwaters.",
    image: "gallery/WhatsApp Image 2026-10-24 at 20.04.19.jpeg",
    imageAlt: "Golden shoreline at the Poovar estuary",
    href: "/golden-sand-beach",
  },
  {
    title: "Elephant Rock and Mother Mary Statue",
    description:
      "Look for the natural rock formation and the Mother Mary statue along the boat route.",
    image: "gallery/WhatsApp Image 2026-10-24 at 20.06.23.jpeg",
    imageAlt: "Elephant Rock rising from the estuary",
    href: "/elephant-rock",
  },
  {
    title: "Birds along the mangrove route",
    description:
      "Keep an eye on the mangrove edges for birds as the boat moves through the forest.",
    image: "gallery/WhatsApp Image 2026-10-24 at 20.06.27.jpeg",
    imageAlt: "Bird perched above a boat on the backwaters",
    href: "/bird-watching",
  },
]

export default function Home() {
  return (
    <>
      <main>
        <section aria-label="Poovar boat ride">
          <Hero />
        </section>

        <ScrollReveal variant="stagger" selector="[data-reveal-item]" textReveal>
          <section aria-label="Poovar boating packages">
            <ExperienceSection />
          </section>
        </ScrollReveal>

        <ScrollReveal variant="stagger" selector="[data-reveal-item]" textReveal>
          <section aria-label="Poovar routes and landmarks">
            <RouteStories stops={ROUTE_STOPS} />
          </section>
        </ScrollReveal>

        <section aria-label="Poovar boating gallery">
          <GallerySection homePreview />
        </section>

        <ScrollReveal variant="fade-right" textReveal>
          <section aria-label="Poovar backwater boating videos">
            <BoatingVideos />
          </section>
        </ScrollReveal>

        <ScrollReveal variant="stagger" selector="[data-reveal-item]" textReveal>
          <section aria-label="Poovar boating reviews">
            <Reviews />
          </section>
        </ScrollReveal>

        <ScrollReveal variant="stagger" selector="details" textReveal>
          <HomeFaq />
        </ScrollReveal>
      </main>
    </>
  )
}
