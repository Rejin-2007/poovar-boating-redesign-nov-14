import EnquiryForm from "@/components/EnquiryForm";

export default function ContactDetailsSection() {
  return (
    <section
      aria-labelledby="contact-details-heading"
      className="theme-ivory mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="space-y-10">

          {/* Heading */}
          <header>
            <h2
              id="contact-details-heading"
              className="text-2xl sm:text-3xl  font-semibold text-[#17645F] mb-4"
            >
              Contact Kayaloram Poovar Boating & Backwater Cruise
            </h2>

            <p className="text-[#17645F] leading-relaxed max-w-xl">
              Kayaloram Backwater Cruise is on Club Mahindra Resort Road in Viraly, Poovar. Call us about boat timings, cruise options, or availability.
            </p>
          </header>

          {/* Address */}
          <div>
            <p className="eyebrow mb-2">
              ADDRESS
            </p>

            <address className="not-italic text-base leading-relaxed text-[#17645F] sm:text-lg">
              Kayaloram Backwater Cruise <br />
              Club Mahindra Resort Road <br />
              Viraly, Poovar <br />
              Thiruvananthapuram (Trivandrum), Kerala – 695525 <br />
              India
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kayaloram+Backwater+Cruise%2C+Club+Mahindra+Resort+Road%2C+Viraly%2C+Poovar%2C+Kerala+695525"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[#17645F] underline decoration-[#FF6845] underline-offset-4"
            >
              Search this address in Google Maps
            </a>
          </div>

          {/* Reception Manager */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#17645F] mb-2">
              RECEPTION MANAGER
            </p>

            <p className="text-base sm:text-lg font-medium text-[#17645F]">
              Rajesh M – Poovar Boating Service
            </p>
          </div>

          {/* Primary Phone */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#17645F] mb-2">
              PHONE
            </p>

            <a
              href="tel:+918139031924"
              className="text-base sm:text-lg font-medium text-[#17645F] hover:underline"
            >
              +91 81390 31924
            </a>
          </div>

          {/* Secondary Phone */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#17645F] mb-2">
              SECOND PHONE
            </p>

            <a
              href="tel:+918075413797"
              className="text-base sm:text-lg font-medium text-[#17645F] hover:underline"
            >
              +91 80754 13797
            </a>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#17645F] mb-2">
              EMAIL
            </p>

            <a
              href="mailto:rajeshkayaloram@gmail.com"
              className="text-base sm:text-lg font-medium text-[#17645F] hover:underline break-all"
            >
              rajeshkayaloram@gmail.com
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="rounded-2xl border border-[#17645F]/15 bg-[#F3EEE8] p-6 shadow-sm sm:p-8">
          <EnquiryForm />
        </div>

      </div>
    </section>
  );
}
