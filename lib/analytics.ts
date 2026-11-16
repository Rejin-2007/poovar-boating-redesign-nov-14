type ConversionPayload = {
  event: string;
  link_url?: string;
  link_text?: string;
};

export function pushConversionEvent(payload: ConversionPayload) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
