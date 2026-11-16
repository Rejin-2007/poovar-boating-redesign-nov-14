import PrivacyPolicySection from "@/components/PrivacyPolicySection";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Poovar Boating",
  description: "Read the privacy policy for the Poovar Boating website and enquiries.",
  path: "/privacy-policy",
  index: false,
})

export default function PrivacyPolicy() {
  return (
    <>
      <section aria-label="Privacy policy">
        <ScrollReveal variant="fade-up"><PrivacyPolicySection /></ScrollReveal>
      </section>
    </>
  );
}
