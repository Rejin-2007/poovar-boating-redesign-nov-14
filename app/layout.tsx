import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";
import { DM_Serif_Display, Inter, Manrope } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import TawkToChat from "@/components/TawkToChat";
import ConversionTracking from "@/components/ConversionTracking";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site-metadata";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const editorial = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-editorial" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Poovar Boating | Backwater Cruises in Kerala",
  description:
    "Cruise Poovar’s mangrove channels, estuary and Golden Sand Beach. See available trips and ask Kayaloram about your date.",
  applicationName: SITE_NAME,
  keywords: [
    "Poovar boating",
    "Poovar island boating",
    "Kerala backwater cruise",
    "Trivandrum boating",
    "Poovar backwaters",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Poovar Boating | Backwater Cruises in Kerala",
    description: "Cruise Poovar’s mangrove channels, estuary and Golden Sand Beach.",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Boat ride along Poovar’s backwaters and mangrove channels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Poovar Boating | Backwater Cruises in Kerala",
    description: "Cruise Poovar’s mangrove channels, estuary and Golden Sand Beach.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F3EEE8",
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Kayaloram Backwater Cruise",
  description: "Boat trips through Poovar’s backwaters, mangrove channels and estuary.",
  url: SITE_URL,
  telephone: "+91 81390 31924",
  email: "rajeshkayaloram@gmail.com",
  areaServed: { "@type": "City", name: "Poovar" },
  hasMap: "https://www.google.com/maps/search/?api=1&query=Kayaloram+Backwater+Cruise%2C+Club+Mahindra+Resort+Road%2C+Viraly%2C+Poovar%2C+Kerala+695525",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Club Mahindra Resort Road, Viraly",
    addressLocality: "Poovar",
    addressRegion: "Kerala",
    postalCode: "695525",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 80754 13797",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Temporary jQuery compatibility for GTM */}
        <Script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
      </head>

      <body className={`${inter.variable} ${manrope.variable} ${editorial.variable} min-h-screen antialiased`}>
        <Navbar />
        {children}
        <FloatingContactButtons />
        <ConversionTracking />
        <TawkToChat />
        <Footer />
      </body>

      <GoogleTagManager gtmId="GTM-MGN2W4K" />
    </html>
  );
}
