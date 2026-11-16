import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Enquiry Submitted | Poovar Boating",
  description: "Your Poovar boating enquiry has been submitted.",
  path: "/success",
  index: false,
});

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F3EEE8] px-6">
      
      <ScrollReveal className="max-w-lg w-full">
      <div className="bg-[#F3EEE8] rounded-2xl shadow-xl p-10 text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F3EEE8]">
            <span className="text-4xl">✅</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-[#17645F]">
          Form Submitted Successfully!
        </h1>

        {/* Description */}
        <p className="mt-4 text-[#17645F] leading-relaxed">
          Thank you for reaching out to us.  
          We have received your submission and will get back to you shortly.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="/"
            className="px-6 py-3 bg-[#17645F] hover:bg-[#17645F] text-[#F3EEE8] font-medium rounded-xl shadow-md transition duration-300"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 bg-[#F3EEE8] border border-[#17645F]/25 hover:bg-[#17645F]/5 text-[#17645F] font-medium rounded-xl transition duration-300"
          >
            Submit Another Response
          </Link>

        </div>

        {/* Small UX Note */}
        <p className="mt-6 text-sm text-[#17645F]">
          A confirmation message has been recorded successfully.
        </p>

      </div>
      </ScrollReveal>
    </main>
  );
}
