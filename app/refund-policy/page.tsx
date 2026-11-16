import CancellationRefundPolicy from "@/components/CancellationRefundPolicySection";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Cancellation & Refund Policy | Poovar Boating",
  description: "Review the cancellation and refund terms for Poovar boating enquiries and cruise reservations.",
  path: "/refund-policy",
  index: false,
})

export default function RefundPolicy() {
  return (
    <>
      <section aria-label="Cancellation and refund policy">
        <ScrollReveal variant="fade-up"><CancellationRefundPolicy /></ScrollReveal>
      </section>
    </>
  );
}
