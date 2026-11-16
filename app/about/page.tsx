import AboutSection from "@/components/AboutSection"
import ScrollReveal from "@/components/ScrollReveal"
import { createPageMetadata } from "@/lib/site-metadata"

export const metadata = createPageMetadata({
  title: "About Kayaloram | Poovar Boating",
  description: "Learn about Kayaloram’s Poovar boat routes, cruise options and local booking contact details.",
  path: "/about",
})

export default function About() {
  return (
    <>
      <section aria-label="About Poovar boating">
        <ScrollReveal variant="stagger" selector="[data-about-item]"><AboutSection /></ScrollReveal>
      </section>
    </>
  )
}
