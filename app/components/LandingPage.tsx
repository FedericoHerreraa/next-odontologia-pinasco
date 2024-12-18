'use client'

import { CiMemoPad } from "react-icons/ci";
import img from "@/app/img/back.png";
import { useMobileView } from "@/app/context/MobileView";
import { bebas, montserrat } from "../fonts/fonts";


export const LandingPage = () => {
  const { isMobile } = useMobileView();

  return (
    <div
      className="bg-cover bg-center md:h-[90vh] h-[70vh] flex items-center"
      style={!isMobile ? { backgroundImage: `url(${img.src})` } : {}}
    >
      <div className="md:absolute top-1/3 gap-5 mx-auto px-5 md:px-20 rounded-lg w-full max-w-7xl">
        <div className="md:w-1/2 flex flex-col gap-2">
          <p className={`text-zinc-600 md:text-left text-center md:text-base text-sm ${montserrat.className}`}>Consultorio Privado.</p>
          <h1 className={`text-4xl md:text-6xl font-semibold mb-5 text-center md:text-left ${bebas.className}`}>
            Pinasco Odontología.
          </h1>
          <p className={`"text-zinc-500 text-sm md:text-base mb-10 text-center md:text-left ${montserrat.className}`}>
            En nuestro consultorio privado, nos especializamos en brindarte el
            mejor cuidado dental con un enfoque personalizado y profesional.
            Nuestro equipo de odontólogos altamente capacitados utiliza
            tecnología de vanguardia para garantizarte una experiencia cómoda,
            segura y efectiva.
          </p>
          <button className="bg-[#00a2af] text-white md:w-[60%] w-[70%] md:px-5 px-1 md:py-4 py-2 mt-5 rounded-xl hover:scale-105 duration-200 flex justify-center items-center md:gap-3 gap-1 mx-auto md:mx-0">
            <p className={`text-sm md:text-lg ${montserrat.className}`}>Consulta Disponibilidad</p>
            <CiMemoPad size={isMobile ? 20 : 25} />
          </button>
        </div>
      </div>
    </div>
  );
};