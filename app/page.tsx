import { LandingPage } from "./components/LandingPage";
import { WhatWeDo } from "./components/WhatWeDo";
import { CustomSeparator } from "./components/CustomSeparator";

export default function Home() {
  return (
    <>
      <LandingPage />
      <CustomSeparator />
      <WhatWeDo />
    </>
  );
}
