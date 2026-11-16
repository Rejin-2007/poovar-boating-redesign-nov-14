import TermsAndConditionsSection from "@/components/TermsAndConditionsSection";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Terms & Conditions | Poovar Boating",
  description: "Read the terms for Poovar boating enquiries, reservations and customer support.",
  path: "/terms-and-condition",
  index: false,
})

export default function TermsAndConditions() {
  return (
    <>
      <section aria-label="Terms and conditions">
        <ScrollReveal variant="fade-up"><TermsAndConditionsSection /></ScrollReveal>
      </section>
    </>
  );
}
