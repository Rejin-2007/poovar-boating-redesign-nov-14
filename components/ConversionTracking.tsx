"use client";

import { useEffect } from "react";
import { pushConversionEvent } from "@/lib/analytics";

export default function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href") || "";
      const eventName = href.startsWith("https://wa.me/")
        ? "whatsapp_click"
        : href.startsWith("tel:")
          ? "phone_click"
          : href === "/booking" || href === "/enquiry"
            ? "booking_click"
            : null;

      if (!eventName) return;

      pushConversionEvent({
        event: eventName,
        link_url: href,
        link_text: link.textContent?.trim().slice(0, 120),
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
