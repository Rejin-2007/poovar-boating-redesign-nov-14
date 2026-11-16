import Link from "next/link";

export default function TermsAndConditionsSection() {
  return (
    <section className="bg-[#F3EEE8] py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 sm:mb-14 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17645F] mb-4">
            Terms and Conditions for Poovar Boating Services
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#17645F]">
            Please read these terms carefully before booking your Kerala backwater cruise.
          </p>
          <div className="mt-6 bg-[#F3EEE8] inline-block px-5 py-3 rounded-lg">
            <p className="font-semibold text-[#17645F] text-sm sm:text-base">
              Effective Date: <span className="text-[#17645F]">27 January 2025</span>
            </p>
          </div>
        </header>

        <div className="space-y-12">
          {/* Section 1 */}
          <section className="border-b border-[#F3EEE8] pb-8">
            <div className="flex items-start gap-4">
              <span className="bg-[#F3EEE8] text-[#17645F] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                1
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17645F] mb-3">
                  General Terms and Acceptance
                </h2>
                <div className="space-y-4 text-[#17645F] text-sm sm:text-base">
                  <p>
                    By accessing and using <strong>Poovar Boating</strong>{" "}
                    services, including booking backwater cruises and houseboat
                    rides, you agree to be bound by these Terms and Conditions.
                  </p>
                  <ul className="space-y-2 bg-[#F3EEE8] p-4 rounded-lg">
                    <li>• Applicable to all visitors and customers</li>
                    <li>• Continued use means acceptance of updates</li>
                    <li>• Minimum booking age: 18 years</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border-b border-[#F3EEE8] pb-8">
            <div className="flex items-start gap-4">
              <span className="bg-[#F3EEE8] text-[#17645F] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                2
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17645F] mb-3">
                  Booking and Reservation Policy
                </h2>
                <div className="space-y-6 text-sm sm:text-base text-[#17645F]">
                  <div>
                    <p className="mb-3">
                      Reservations must be made through our official website
                      or authorized partners.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-[#F3EEE8] p-4 rounded-lg">
                        <h4 className="font-semibold text-[#17645F] mb-1">
                          Official Website
                        </h4>
                        <p className="text-sm">poovarboating.in</p>
                      </div>
                      <div className="bg-[#F3EEE8] p-4 rounded-lg">
                        <h4 className="font-semibold text-[#17645F] mb-1">
                          Authorized Travel Partners
                        </h4>
                        <p className="text-sm">
                          Verified agents and resort partners
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F3EEE8] p-5 rounded-lg">
                    <h4 className="font-semibold text-[#17645F] mb-2">
                      Booking Confirmation
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Confirmation email with booking ID</li>
                      <li>✓ Service details, date & meeting point included</li>
                      <li>✓ Present confirmation at boating center</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="border-b border-[#F3EEE8] pb-8">
            <div className="flex items-start gap-4">
              <span className="bg-[#F3EEE8] text-[#17645F] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                3
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17645F] mb-3">
                  Pricing and Payment Terms
                </h2>
                <div className="space-y-6 text-sm sm:text-base text-[#17645F]">
                  <div className="bg-[#F3EEE8] p-5 rounded-lg">
                    <h4 className="font-semibold text-[#17645F] mb-2">
                      Price Variation Notice
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                      <li>• Seasonal demand</li>
                      <li>• Tax revisions</li>
                      <li>• Fuel cost changes</li>
                      <li>• Special events</li>
                    </ul>
                  </div>

                  <div>
                    <p className="mb-3">
                      Final checkout price may include GST, service fees, and
                      optional add-ons.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-[#F3EEE8] p-4 rounded-lg text-center">
                        <div className="font-bold">GST</div>
                        <div className="text-xs text-[#17645F]">
                          Applicable tax
                        </div>
                      </div>
                      <div className="bg-[#F3EEE8] p-4 rounded-lg text-center">
                        <div className="font-bold">Service Fees</div>
                        <div className="text-xs text-[#17645F]">
                          Booking charges
                        </div>
                      </div>
                      <div className="bg-[#F3EEE8] p-4 rounded-lg text-center">
                        <div className="font-bold">Add-ons</div>
                        <div className="text-xs text-[#17645F]">
                          Food, photography etc.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-b border-[#F3EEE8] pb-8">
            <div className="flex items-start gap-4">
              <span className="bg-[#F3EEE8] text-[#17645F] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                4
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17645F] mb-3">
                  User Responsibilities
                </h2>
                <div className="space-y-6 text-sm sm:text-base text-[#17645F]">
                  <div className="bg-[#F3EEE8] p-5 rounded-lg">
                    <h4 className="font-semibold text-[#17645F] mb-2">
                      Accurate Information
                    </h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Full names of participants</li>
                      <li>• Valid contact details</li>
                      <li>• Accurate age & special requirements</li>
                    </ul>
                  </div>

                  <div className="bg-[#F3EEE8] p-5 rounded-lg">
                    <h4 className="font-semibold text-[#17645F] mb-2">
                      Safety Guidelines
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>⚠ Damage to property may incur charges</li>
                      <li>⚠ Follow crew instructions at all times</li>
                      <li>⚠ Littering may result in penalties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-start gap-4">
              <span className="bg-[#F3EEE8] text-[#17645F] font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                5
              </span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17645F] mb-3">
                  Cancellation by Poovar Boating
                </h2>
                <div className="space-y-6 text-sm sm:text-base text-[#17645F]">
                  <div className="bg-purple-50 p-5 rounded-lg">
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                      <li>• Adverse weather</li>
                      <li>• Safety concerns</li>
                      <li>• Technical issues</li>
                      <li>• Government restrictions</li>
                    </ul>
                  </div>

                  <div className="bg-[#F3EEE8] p-5 rounded-lg">
                    <h4 className="font-semibold text-[#17645F] mb-2">
                      Refund Policy
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Full refund within 7–10 business days</li>
                      <li>✓ Credited to original payment method</li>
                      <li>✓ Option to reschedule available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <div className="mt-14 bg-[#F3EEE8] rounded-xl p-8 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#17645F] mb-4">
              Need Assistance?
            </h2>
            <p className="text-[#17645F] mb-6 text-sm sm:text-base">
              Contact us for clarification regarding your Poovar boating
              booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@poovarboating.in"
                className="bg-[#17645F] text-[#F3EEE8] px-6 py-3 rounded-lg hover:bg-[#17645F] transition font-semibold text-sm sm:text-base"
              >
                Email Support
              </a>
              <Link
                href="/contact"
                className="border-2 border-[#17645F] text-[#17645F] px-6 py-3 rounded-lg hover:bg-[#F3EEE8] transition font-semibold text-sm sm:text-base"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
