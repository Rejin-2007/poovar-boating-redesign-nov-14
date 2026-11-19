import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

const galleryImages = [
  { src: "/gallery/1000082623.webp", alt: "Passengers riding beneath the boat canopy" },
  { src: "/gallery/1000114429.webp", alt: "Two passengers on a Poovar boat ride" },
  { src: "/gallery/1000142582.webp", alt: "A group travelling through the backwaters" },
  { src: "/gallery/1000163037.webp", alt: "Family on a boat ride in Poovar" },
  { src: "/gallery/WhatsApp Image 2026-10-24 at 20.06.18.jpeg", alt: "A boat passing through the mangrove-lined waterway" },
  { src: "/gallery/WhatsApp Image 2026-10-24 at 20.06.20 (1).jpeg", alt: "Mangrove branches reflected in the water" },
  { src: "/gallery/WhatsApp Image 2026-10-24 at 20.06.25 (2).jpeg", alt: "Open water and shoreline near Poovar" },
  { src: "/gallery/WhatsApp Image 2026-10-24 at 20.06.26.jpeg", alt: "Mother Mary statue near the shoreline" },
  { src: "/gallery-small3.webp", alt: "Family standing beside a boat near the shoreline" },
];

const homePreviewImages = [
  { src: "/gallery/1000135710.webp", alt: "A passenger looking out across the backwaters" },
  { src: "/gallery/1000142579.webp", alt: "Passengers seated together on a backwater boat" },
  { src: "/gallery-big2.webp", alt: "Boats and floating cottages along a Poovar waterway" },
];

export default function GallerySection({ homePreview = false }: { homePreview?: boolean }) {
  const photos = homePreview ? homePreviewImages : galleryImages;

  return (
    <section aria-labelledby="poovar-gallery-heading" className="theme-teal w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
      <ScrollReveal variant="fade-left" className="mb-9 sm:mb-12" textReveal>
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="eyebrow mb-3">Visual story</p>
          <h2 id="poovar-gallery-heading" className="max-w-xl text-3xl font-semibold leading-tight text-[#F3EEE8] sm:text-4xl lg:text-5xl">
            {homePreview ? "A few scenes from the water." : "Photos from Poovar’s backwater routes."}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-[#F3EEE8]/85 lg:justify-self-end sm:text-lg">
          {homePreview
            ? "Passengers, boats, and the banks along the Poovar route."
            : "Boats in the mangrove channels, out by the estuary, and along the shoreline."}
        </p>
        {homePreview && (
          <Link href="/gallery" className="text-sm font-semibold text-[#F3EEE8] underline decoration-[#FF6845] decoration-2 underline-offset-4 lg:justify-self-end">
            See the full gallery
          </Link>
        )}
      </div>
      </ScrollReveal>

      <ScrollReveal variant="clip-stagger" selector=".gallery-item">
        <div className="gallery-masonry">
          {photos.map((photo) => (
            <figure key={photo.src} className="gallery-item group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
          ))}
        </div>
      </ScrollReveal>
      </div>
    </section>
  )
}
