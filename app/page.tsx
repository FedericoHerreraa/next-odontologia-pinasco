import { LandingPage } from "./components/LandingPage";
import { PreviewWork } from "./components/PreviewWork";
import { CustomSeparator } from "./components/CustomSeparator";
import { Metadata } from "next";
import { PreviewContact } from "./components/PreviewContact";
import { ImagesHomePage } from "./components/ImagesHomePage";
import { Location } from "./components/Location";
import { CallToHistory } from "./components/CallToHistory";
import { CarouselLanding } from "./components/CarouselLanding";


export const metadata: Metadata = {
  title: "Inicio | Pinasco Odontología - Cuidado Dental de Excelencia",
  description: "Descubre el mejor cuidado dental en Pinasco Odontología. Ofrecemos tratamientos personalizados con tecnología avanzada y un equipo altamente capacitado para garantizar tu bienestar bucal. ¡Agenda tu cita hoy mismo y sonríe con confianza!",
};


export default function Home() {
  return (
    <>
      <LandingPage />
      <CarouselLanding />
      <PreviewWork />
      <CallToHistory />
      <PreviewContact />
      <CustomSeparator />
      <ImagesHomePage />
      <Location />
    </>
  );
}
