import PlanExperienceSection from "@/components/PlanExperienceSection";
import PoovarCruises from "@/components/PoovarCruises";
import ServicesHero from "@/components/ServicesHero";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Poovar Boating Cruises | Compare Options",
  description: "Compare the listed sunrise, lunch and sunset cruises in Poovar, then ask Kayaloram about routes, dates and current prices.",
  path: "/services",
})

export default function Services() {
  return (
    <>
      <section aria-label="Poovar boating services">
        <ServicesHero />
      </section>

      <section aria-label="Poovar cruise options">
        <PoovarCruises />
      </section>

      <section aria-label="Book a cruise">
        <ScrollReveal variant="fade-left"><PlanExperienceSection /></ScrollReveal>
      </section>
    </>
  );
}
