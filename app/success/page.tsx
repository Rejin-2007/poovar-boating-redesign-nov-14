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
    <main className="flex min-h-screen items-center justify-center bg-[#790b13] px-6">
      
      <ScrollReveal className="max-w-lg w-full">
      <div className="rounded-2xl border border-[#fff0dc]/25 bg-[#65090f] p-10 text-center shadow-[0_24px_70px_rgba(48,3,7,0.28)]">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#fff0dc]/35 bg-[#fff0dc]">
            <span className="text-4xl font-bold text-[#790b13]">✓</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-3xl font-bold text-[#fff0dc]">
          Form Submitted Successfully!
        </h1>

        {/* Description */}
        <p className="mt-4 text-[#fff0dc] leading-relaxed">
          Thank you for reaching out to us.  
          We have received your submission and will get back to you shortly.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="/"
            className="rounded-xl bg-[#fff0dc] px-6 py-3 font-semibold text-[#790b13] shadow-md transition duration-300 hover:brightness-95"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-[#fff0dc]/50 px-6 py-3 font-semibold text-[#fff0dc] transition duration-300 hover:bg-[#fff0dc]/10"
          >
            Submit Another Response
          </Link>

        </div>

        {/* Small UX Note */}
        <p className="mt-6 text-sm text-[#fff0dc]">
          A confirmation message has been recorded successfully.
        </p>

      </div>
      </ScrollReveal>
    </main>
  );
}
