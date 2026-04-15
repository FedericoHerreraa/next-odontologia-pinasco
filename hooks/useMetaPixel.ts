import {
  metaTrack,
  metaTrackLead,
  metaTrackPageView,
} from "@/lib/metaPixel";


export function useMetaPixel() {
  return {
    trackPageView: metaTrackPageView,
    track: metaTrack,
    trackLead: metaTrackLead,
  };
}
