export {};

type FbqParams = Record<string, unknown>;

type Fbq = {
  (command: "init", pixelId: string, options?: FbqParams): void;
  (command: "track", eventName: string, parameters?: FbqParams): void;
  (...args: unknown[]): void;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}
