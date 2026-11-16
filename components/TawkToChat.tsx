"use client";

import Script from "next/script";

export default function TawkToChat() {
  return (
    <>
      <Script id="tawk-to-init" strategy="afterInteractive">
        {`
          window.Tawk_API = window.Tawk_API || {};
          window.Tawk_LoadStart = new Date();
        `}
      </Script>
      <Script
        id="tawk-to-embed"
        src="https://embed.tawk.to/5d3ac7a69b94cd38bbe96575/1h8mcqpl6"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
    </>
  );
}
