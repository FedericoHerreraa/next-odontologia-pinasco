export const META_PIXEL_ID = "1315720527130046";

const FBQ_POLL_MS = 50;
const FBQ_MAX_WAIT_MS = 10000;

function getFbq(): Window["fbq"] | undefined {
  if (typeof window === "undefined") return undefined;
  return window.fbq;
}


function whenFbqReady(label: string, action: (fbq: NonNullable<Window["fbq"]>) => void) : void {
  if (typeof window === "undefined") return;

  const run = (): boolean => {
    const fbq = getFbq();
    if (!fbq) return false;
    action(fbq);
    return true;
  };

  if (run()) return;

  console.warn(`[Meta Pixel] ${label}: esperando a que cargue fbq…`);
  const started = Date.now();
  const id = window.setInterval(() => {
    if (run()) {
      window.clearInterval(id);
      return;
    }
    if (Date.now() - started > FBQ_MAX_WAIT_MS) {
      console.warn(`[Meta Pixel] ${label}: fbq no apareció (revisá bloqueo de scripts o red)`);
      window.clearInterval(id);
    }
  }, FBQ_POLL_MS);
}

export function metaTrackPageView(): void {
  if (typeof window === "undefined") return;

  console.log("[Meta Pixel] PageView (solicitud)");
  whenFbqReady("PageView", (fbq) => {
    console.log("[Meta Pixel] PageView → enviado");
    fbq("track", "PageView");
  });
}

export function metaTrack(event: string, parameters?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  
  console.log("[Meta Pixel] evento (solicitud):", event, parameters ?? "");
  whenFbqReady(event, (fbq) => {
    console.log("[Meta Pixel] evento → enviado:", event, parameters ?? "");
    fbq("track", event, parameters);
  });
}

export function metaTrackLead(): void {
  metaTrack("Lead");
}
