import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { getPoovarSeoPage, poovarSeoPages } from "@/lib/poovar-seo-pages";
import { createPageMetadata, SITE_URL } from "@/lib/site-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return poovarSeoPages.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

function renderParagraph(text: string) {
  const parts = text.split(/(<a href="\/[^"]+">[^<]+<\/a>)/g);
  return parts.map((part, index) => {
    const match = part.match(/^<a href="(\/[^"]+)">([^<]+)<\/a>$/);
    return match ? (
      <Link key={`${match[1]}-${index}`} href={match[1]} className="font-medium text-[#17645F] underline decoration-[#FF6845] underline-offset-4 hover:decoration-2">
        {match[2]}
      </Link>
    ) : part;
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPoovarSeoPage(slug);
  if (!page) return {};

  return createPageMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/${page.slug}`,
    image: page.image,
    imageAlt: page.imageAlt,
  });
}

export default async function PoovarGuidePage({ params }: Props) {
  const { slug } = await params;
  const page = getPoovarSeoPage(slug);
  if (!page) notFound();

  const url = `${SITE_URL}/${page.slug}`;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.description,
    url,
    isPartOf: { "@type": "WebSite", name: "Poovar Boating", url: `${SITE_URL}/` },
  };

  return (
    <main className="theme-ivory">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#17645F]/80">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link className="underline decoration-[#FF6845] underline-offset-4" href="/">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{page.title}</li>
          </ol>
        </nav>

        <ScrollReveal variant="clip">
        <header className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div>
            <p className="eyebrow mb-4">Poovar · Kerala</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#17645F] sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#17645F]/85 sm:text-lg">
              {page.intro}
            </p>
            {slug === "how-to-reach-poovar" && (
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kayaloram+Backwater+Cruise%2C+Club+Mahindra+Resort+Road%2C+Viraly%2C+Poovar%2C+Kerala+695525"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#17645F] underline decoration-[#FF6845] underline-offset-4"
              >
                Search the listed address in Google Maps ↗
              </a>
            )}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/booking" className="button-coral px-6 py-3">Ask about a date</Link>
              <Link href="/contact" className="button-outline px-6 py-3">Contact Kayaloram</Link>
            </div>
          </div>
          <figure className="relative aspect-[6/5] overflow-hidden rounded-[2rem] bg-[#17645F]/10 lg:aspect-[5/4]">
            <Image
              src={page.image}
              alt={page.imageAlt}
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 55vw"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </figure>
        </header>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 border-t border-[#17645F]/20 pt-8 sm:mt-16 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-16">
          <div className="max-w-3xl">
            {page.sections.map((section) => (
              <ScrollReveal key={section.heading} variant="fade-left" className="mb-9 sm:mb-12">
              <section>
                <h2 className="text-2xl font-semibold leading-tight text-[#17645F] sm:text-3xl">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-base leading-8 text-[#17645F]/85">{renderParagraph(paragraph)}</p>
                ))}
              </section>
              </ScrollReveal>
            ))}
          </div>

          <aside className="h-fit border-t-2 border-[#FF6845] pt-5 lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold text-[#17645F]">Related Poovar guides</h2>
            <nav aria-label="Related Poovar boating guides" className="mt-4">
              <ul className="space-y-3">
                {page.related.map((item) => (
                  <li key={item.href}>
                    <Link className="text-sm font-medium leading-6 text-[#17645F] underline decoration-[#FF6845] underline-offset-4 hover:decoration-2" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </article>
    </main>
  );
}
