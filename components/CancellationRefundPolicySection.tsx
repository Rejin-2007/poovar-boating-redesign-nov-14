import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy – Poovar Boating Services",
  description:
    "Read the official cancellation and refund policy for Poovar Boating Services including backwater cruises and houseboat bookings in Kerala.",
}

export default function CancellationRefundPolicy() {
  return (
    <main className="bg-[#790b13]">
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <header className="mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fff0dc] mb-4">
              Cancellation & Refund Policy for Poovar Boating Services
            </h1>
            <p className="text-base sm:text-lg text-[#fff0dc]">
              Clear policies for Kerala backwater cruise bookings
            </p>
            <div className="mt-6 bg-[#65090f] inline-block px-6 py-3 rounded-lg">
              <p className="font-semibold text-[#fff0dc]">
                Effective Date: <span className="text-[#fff0dc]">27 January 2025</span>
              </p>
            </div>
          </header>

          <div className="space-y-12">

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-[#fff0dc] mb-4">
                1. Cancellation Policy
              </h2>

              <div className="space-y-6">

                <div className="bg-[#65090f] p-5 rounded-lg border-l-4 border-[#fff0dc]">
                  <h3 className="font-bold text-[#fff0dc] mb-2">
                    Full Refund (48+ Hours Before Booking)
                  </h3>
                  <ul className="list-disc ml-6 text-[#fff0dc] space-y-1">
                    <li>100% refund of booking amount</li>
                    <li>No cancellation charges</li>
                    <li>Processed within 7–10 business days</li>
                  </ul>
                </div>

                <div className="bg-[#65090f] p-5 rounded-lg border-l-4 border-[#fff0dc]">
                  <h3 className="font-bold text-[#fff0dc] mb-2">
                    Partial Refund (Within 48 Hours)
                  </h3>
                  <ul className="list-disc ml-6 text-[#fff0dc] space-y-1">
                    <li>50% cancellation fee</li>
                    <li>50% refund of booking amount</li>
                    <li>Processed within 10–14 business days</li>
                  </ul>
                </div>

                <div className="bg-[#65090f] p-5 rounded-lg border-l-4 border-[#fff0dc]">
                  <h3 className="font-bold text-[#fff0dc] mb-2">
                    Non-Refundable Scenarios
                  </h3>
                  <ul className="list-disc ml-6 text-[#fff0dc] space-y-1">
                    <li>No-shows at boating center</li>
                    <li>Same-day cancellations</li>
                    <li>Late arrival exceeding 30 minutes</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[#fff0dc] mb-4">
                2. Refund Processing Policy
              </h2>

              <div className="space-y-4 text-[#fff0dc]">
                <p>
                  Refunds are initiated within 24 hours after approval and
                  processed within 7–10 business days. International
                  transactions may take up to 30 days.
                </p>

                <ul className="list-disc ml-6 space-y-1">
                  <li>Refunds issued to original payment method</li>
                  <li>Gateway processing fees may apply</li>
                  <li>GST refunded proportionally</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[#fff0dc] mb-4">
                3. How to Request Cancellation or Refund
              </h2>

              <ol className="list-decimal ml-6 text-[#fff0dc] space-y-2">
                <li>
                  Email <strong>rajeshkayaloram@gmail.com</strong> with subject:
                  &#34;Cancellation Request – [Booking ID]&#34;
                </li>
                <li>Provide booking ID, name, contact number, and date</li>
                <li>Mention reason for cancellation</li>
                <li>Wait for confirmation within 4–6 business hours</li>
              </ol>
            </section>

            {/* CTA */}
            <section className="mt-10 rounded-xl border border-[#fff0dc]/25 bg-linear-to-r from-[#790b13] to-[#65090f] p-6 text-center">
              <h2 className="text-xl font-bold text-[#fff0dc] mb-3">
                Need Help?
              </h2>
              <p className="text-[#fff0dc] mb-5">
                Contact our support team for assistance with Poovar boating
                cancellations or refund tracking.
              </p>

              <a
                href="mailto:rajeshkayaloram@gmail.com"
                className="inline-block rounded-lg bg-[#fff0dc] px-8 py-3 font-semibold text-[#790b13] transition hover:brightness-95"
              >
                Request Cancellation via Email
              </a>

              <p className="mt-4 text-sm text-[#fff0dc]">
                Response Time: Within 4–6 Business Hours
              </p>
            </section>

          </div>
        </div>
      </section>
    </main>
  )
}
