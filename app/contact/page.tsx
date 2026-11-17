import ContactDetailsSection from "@/components/ContactDetailsSection"
import ContactSection from "@/components/ContactSection"
import ScrollReveal from "@/components/ScrollReveal"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "Contact Poovar Boating | Kayaloram Details",
  description: "Call or email Kayaloram about Poovar cruise routes, departure times, prices and availability.",
  path: "/contact",
})

export default function Contact() {
  return (
    <>
      <section aria-label="Contact Poovar boating">
        <ScrollReveal variant="clip" textReveal><ContactSection /></ScrollReveal>
      </section>

      <section aria-label="Poovar boating contact details">
        <ScrollReveal variant="fade-left"><ContactDetailsSection /></ScrollReveal>
      </section>
    </>
  );
}
