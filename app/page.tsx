import { LandingPage } from "./components/LandingPage";
import { WhatWeDo } from "./components/WhatWeDo";
import { CustomSeparator } from "./components/CustomSeparator";
import { Metadata } from "next";
import { PreviewContact } from "./components/PreviewContact";

export const metadata: Metadata = {
  title: "Inicio | Pinasco Odontología",
  description: "En nuestro consultorio privado, nos especializamos en brindarte el mejor cuidado dental con un enfoque personalizado y profesional. Nuestro equipo de odontólogos altamente capacitados utiliza tecnología de vanguardia para garantizarte una experiencia cómoda, segura y efectiva.",
};

export default function Home() {
  return (
    <>
      <LandingPage />
      <CustomSeparator />
      <WhatWeDo />
      <PreviewContact />
      <CustomSeparator />
    </>
  );
}
