import type { Metadata } from "next";

export const SITE_NAME = "Poovar Boating";
export const SITE_URL = "https://www.poovarboating.in";
export const DEFAULT_OG_IMAGE = "/og/poovar-boating.jpg";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  image?: string;
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  imageAlt = "Poovar boat travelling through Kerala backwaters",
  image = DEFAULT_OG_IMAGE,
  index = true,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const openGraphImage = image === DEFAULT_OG_IMAGE
    ? { url: image, width: 1200, height: 630, alt: imageAlt }
    : { url: image, alt: imageAlt };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: {
      index,
      follow: true,
      googleBot: { index, follow: true },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
