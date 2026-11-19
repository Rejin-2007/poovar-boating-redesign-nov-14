import Link from "next/link"
import type { Metadata } from "next"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F3EEE8] px-6">
      <ScrollReveal className="max-w-xl">
      <section
        className="text-center max-w-xl"
        aria-labelledby="not-found-heading"
      >
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold text-[#17645F] drop-shadow-lg">
          404
        </h1>

        {/* Main Heading */}
        <h2
          id="not-found-heading"
          className="mt-6 text-3xl font-bold text-[#17645F]"
        >
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#17645F] leading-relaxed">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
          Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            prefetch={false}
            className="px-6 py-3 bg-[#17645F] hover:bg-[#17645F] text-[#F3EEE8] font-medium rounded-xl shadow-md transition duration-300"
          >
            Go to Homepage
          </Link>

          <Link
            href="/contact"
            prefetch={false}
            className="px-6 py-3 bg-[#F3EEE8] border border-[#17645F]/25 hover:bg-[#17645F]/5 text-[#17645F] font-medium rounded-xl shadow-sm transition duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* UX Tip */}
        <p className="mt-8 text-sm text-[#17645F]">
          Need help? Try searching from the homepage.
        </p>
      </section>
      </ScrollReveal>
    </main>
  )
}
