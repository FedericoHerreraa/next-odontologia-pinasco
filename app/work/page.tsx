
import { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
    title: "Trabajo | Pinasco Odontología",
    description: "En nuestro consultorio privado, nos especializamos en brindarte el mejor cuidado dental con un enfoque personalizado y profesional. Nuestro equipo de odontólogos altamente capacitados utiliza tecnología de vanguardia para garantizarte una experiencia cómoda, segura y efectiva.",
  };

export default function OurWork() {
    return (
        <WorkContent />
    )
}