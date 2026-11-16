"use client"

import Image from "next/image"
import { useState } from "react"

type VideoItem = {
  title: string
  videoId: string
  poster: string
}

const boatingVideos: VideoItem[] = [
  {
    title: "Inside a Poovar backwater cruise",
    videoId: "Zp-0u29cDCs",
    poster: "/gallery/WhatsApp Image 2026-10-24 at 20.06.18.jpeg",
  },
  {
    title: "A boat ride through Poovar Island",
    videoId: "VNCj1mjV7sA",
    poster: "/gallery/1000082623.webp",
  },
  {
    title: "Poovar Golden Beach by boat",
    videoId: "S4drQve80D8",
    poster: "/gallery/WhatsApp Image 2026-10-24 at 20.04.19.jpeg",
  },
]

function LazyYouTube({ videoId, title, poster }: { videoId: string; title: string; poster: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] border border-[#17645F]/10 bg-[#17645F]/5 shadow-[0_18px_40px_rgba(44,74,62,0.08)]">
      {!loaded ? (
        <button onClick={() => setLoaded(true)} className="group relative h-full w-full" aria-label={`Play video: ${title}`}>
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#17645F]/35 transition group-hover:bg-[#17645F]/50">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3EEE8]/90 shadow-lg">
              <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[18px] border-t-[10px] border-b-transparent border-l-[#17645F] border-t-transparent" />
            </div>
          </div>
        </button>
      ) : (
        <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
      )}
    </div>
  )
}

export default function BoatingVideos() {
  return (
    <section className="theme-ivory w-full px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center sm:mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#17645F]">Video stories</p>
        <h2 className="text-3xl font-semibold leading-tight text-[#17645F] sm:text-4xl">
          Watch a boat ride through Poovar.
        </h2>
      </div>

      <div className="space-y-8 lg:space-y-10">
        {boatingVideos.map((video, index) => (
            <div key={video.videoId} className={`grid gap-8 ${index % 2 === 0 ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]"} lg:items-center`}>
            <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
              <h3 className="text-2xl font-semibold text-[#17645F] sm:text-3xl">{video.title}</h3>
            </div>
            <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
              <LazyYouTube videoId={video.videoId} title={video.title} poster={video.poster} />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
