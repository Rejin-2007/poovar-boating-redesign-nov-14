import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative flex min-h-[55vh] items-center overflow-hidden md:h-[65vh] lg:h-[75vh]"
    >
      <Image
        src="/gallery-small4.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#17645F]/65" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-0 text-[#F3EEE8]">
        <div className="space-y-6 max-w-3xl">
          
          {/* Main Heading */}
          <h1
            id="contact-hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl  leading-tight"
          >
            Contact Kayaloram Poovar Boating & Backwater Cruise
          </h1>

          {/* Description */}
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-[#F3EEE8]">
            <p>
              Call or message Kayaloram to ask about departure times, cruise options, and routes.
            </p>

            <p>
              If you know your date, group size, or preferred time, include it in your message. We’ll check what’s available.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
