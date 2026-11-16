import Image from "next/image";
import Link from "next/link";

export type RouteStop = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
};

export default function RouteStories({ stops }: { stops: RouteStop[] }) {
  return (
    <section aria-labelledby="route-stories-heading" className="theme-ivory px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-9 grid gap-4 sm:mb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">Along the route</p>
            <h2 id="route-stories-heading" className="max-w-2xl text-3xl font-semibold leading-tight text-[#17645F] sm:text-4xl lg:text-5xl">
              From mangrove channels to the estuary.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#17645F] lg:justify-self-end sm:text-lg">
            The boat routes pass from shaded waterways toward open water. Watch the banks for birds and look out for these Poovar landmarks.
          </p>
        </header>

        <div className="route-layout">
          <figure data-reveal-item className="route-feature">
            <Image
              src="/gallery/WhatsApp Image 2026-10-24 at 20.06.17.jpeg"
              alt="Boats crossing a broad backwater near Poovar"
              fill
              sizes="(max-width: 767px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17645F]/60 via-transparent to-transparent" />
            <figcaption className="font-editorial absolute bottom-6 left-6 max-w-sm text-3xl leading-tight text-[#F3EEE8] sm:bottom-8 sm:left-8 sm:text-4xl">
              Beneath the mangrove canopy
            </figcaption>
          </figure>

          <div className="route-list">
            {stops.map((stop, index) => (
              <article data-reveal-item className="route-item" key={stop.title}>
                <div className="route-item-image">
                  <Image
                    src={`/${stop.image}`}
                    alt={stop.imageAlt}
                    fill
                    sizes="(max-width: 767px) 128px, 136px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="eyebrow mb-1">0{index + 1}</p>
                  <h3 className="text-lg font-semibold leading-snug text-[#17645F] sm:text-xl">
                    {stop.href ? <Link className="decoration-[#FF6845] underline-offset-4 hover:underline" href={stop.href}>{stop.title}</Link> : stop.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#17645F]">{stop.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
