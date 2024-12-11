'use client'

import { CiMemoPad } from "react-icons/ci";
import img from "../img/back.png";

import {Bebas_Neue, Montserrat} from "next/font/google";
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
});
const montserrat = Montserrat({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
});

import { useMobileView } from "../context/MobileView";


export const LandingPage = () => {
  const { isMobile } = useMobileView();

  return (
    <div
      className="bg-cover bg-center md:h-[90vh] h-[70vh] flex items-center"
      style={!isMobile ? { backgroundImage: `url(${img.src})` } : {}}
    >
      <div className="flex flex-col lg:flex-row gap-5 mx-auto px-5 sm:px-10 lg:px-20 pt-10 rounded-lg w-full max-w-7xl">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 text-center lg:text-left ${bebas.className}`}>
            Pinasco Odontología Consultorio Privado.
          </h1>
          <p className={`"text-zinc-500 text-sm sm:text-base lg:text-lg mb-10 text-center lg:text-left ${montserrat.className}`}>
            En nuestro consultorio privado, nos especializamos en brindarte el
            mejor cuidado dental con un enfoque personalizado y profesional.
            Nuestro equipo de odontólogos altamente capacitados utiliza
            tecnología de vanguardia para garantizarte una experiencia cómoda,
            segura y efectiva.
          </p>
          <button className="bg-[#00a2af] text-white md:w-full w-[60%] px-5 py-4 mt-5 rounded-xl hover:scale-105 duration-200 flex justify-center items-center gap-3 mx-auto lg:mx-0">
            <p className="text-sm sm:text-base lg:text-lg">Agenda tu Cita Ahora</p>
            <CiMemoPad size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};