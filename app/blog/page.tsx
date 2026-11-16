import BlogPost from "@/components/BlogPost";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/site-metadata";

export const metadata = createPageMetadata({
  title: "Poovar Boating Blog | Routes & Planning",
  description: "Practical notes on Poovar boat routes, cruise options and what to confirm before booking.",
  path: "/blog",
})

const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Poovar Boating Blog",
  "description": "A short guide to choosing a cruise, checking departure times, and planning your Poovar boat ride.",
  "url": "https://www.poovarboating.in/blog",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": []
  }
};

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BLOG_SCHEMA),
        }}
      />
      <section aria-label="Poovar boating blog">
        <ScrollReveal><BlogPost /></ScrollReveal>
      </section>
    </>
  );
}
