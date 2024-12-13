
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trabajo | Pinasco Odontología",
    description: "En nuestro consultorio privado, nos especializamos en brindarte el mejor cuidado dental con un enfoque personalizado y profesional. Nuestro equipo de odontólogos altamente capacitados utiliza tecnología de vanguardia para garantizarte una experiencia cómoda, segura y efectiva.",
  };

export default function OurWork() {
    return (
        <div>
            <h1 className="text-5xl text-black mt-10 text-center">Mira Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo.</span></h1>
        </div>
    )
}