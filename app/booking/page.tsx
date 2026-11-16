import EnquiryForm from "@/components/EnquiryForm";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Book Poovar Boating | Ask About a Date",
  description: "Share your date, group size and cruise preference. Kayaloram can confirm current Poovar boating availability and price.",
  path: "/booking",
  index: false,
});

export default function Booking() {
  return (
    <>
      <section aria-label="Poovar boating booking">
        <EnquiryForm headingLevel="h1" />
      </section>
    </>
  );
}
