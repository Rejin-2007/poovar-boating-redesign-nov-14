"use client";

import { usePathname } from "next/navigation";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  const pathname = usePathname();
  const hasMobileForm = ["/booking", "/enquiry", "/contact"].includes(pathname);

  return (
    <nav
      className={`fixed bottom-5 right-4 z-50 flex-col gap-3 sm:right-6 ${hasMobileForm ? "hidden sm:flex" : "flex"}`}
      aria-label="Contact Poovar Boating"
    >
      <a
        href="https://wa.me/918139031924?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20Poovar%20boating%20experience.%20Could%20you%20please%20share%20the%20available%20packages%20and%20booking%20details%3F"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Message Poovar Boating on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#17645F]/10 bg-[#17645F] text-[#F3EEE8] shadow-md transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FF6845] sm:h-14 sm:w-14"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" aria-hidden="true" />
      </a>
      <a
        href="tel:+918139031924"
        aria-label="Call Poovar Boating"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#17645F]/10 bg-[#F3EEE8] text-[#17645F] shadow-md transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#17645F] sm:h-14 sm:w-14"
      >
        <FaPhone className="text-lg sm:text-xl" aria-hidden="true" />
      </a>
    </nav>
  );
}
