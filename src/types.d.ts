export {};

declare global {
  interface Window {
    fbq?: (
      action: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
  }
}
