"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <nav
      className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:right-6"
      aria-label="Contact Poovar Boating"
    >
      <a
        href="https://wa.me/918139031924?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20Poovar%20boating%20experience.%20Could%20you%20please%20share%20the%20available%20packages%20and%20booking%20details%3F"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Message Poovar Boating on WhatsApp"
        className="whatsapp-notice-button relative isolate flex h-16 w-16 items-center justify-center rounded-full border border-[#25D366] bg-[#25D366] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#20BD5A] focus:outline-none focus:ring-2 focus:ring-[#25D366] sm:h-14 sm:w-14"
      >
        <FaWhatsapp className="relative z-10 text-3xl sm:text-2xl" aria-hidden="true" />
      </a>
      <a
        href="tel:+918139031924"
        aria-label="Call Poovar Boating"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-[#17645F]/10 bg-[#F3EEE8] text-[#17645F] shadow-md transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#17645F] sm:h-14 sm:w-14"
      >
        <FaPhone className="text-2xl sm:text-xl" aria-hidden="true" />
      </a>
    </nav>
  );
}
