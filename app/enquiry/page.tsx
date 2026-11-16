import EnquiryForm from "@/components/EnquiryForm";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Poovar Boating Enquiry | Cruise Details",
  description: "Ask Kayaloram about Poovar cruise times, route options, current prices and available dates.",
  path: "/enquiry",
  index: false,
});

export default function Enquiry() {
  return (
    <>
      <section aria-label="Poovar boating enquiry">
        <EnquiryForm headingLevel="h1" />
      </section>
    </>
  );
}
