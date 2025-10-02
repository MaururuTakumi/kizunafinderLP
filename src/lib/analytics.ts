export type AnalyticsEvent = {
  event: string;
  [key: string]: unknown;
};

export const pushEvent = (payload: AnalyticsEvent) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}
