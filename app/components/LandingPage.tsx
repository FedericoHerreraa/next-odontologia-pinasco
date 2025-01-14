'use client'

import { CiMemoPad } from "react-icons/ci";
import img from "@/app/img/landingBackground.png";
import { useMobileView } from "@/app/context/MobileView";
import { montserrat } from "@/app/fonts/fonts";
import Link from "next/link";
import Image from "next/image";
import logoHorizontal from '@/app/img/LogoHorizontal@2x.png'
import logoVertical from '@/app/img/LogoVertical@2x.png'

export const LandingPage = () => {
  const { isMobile } = useMobileView();

  return (
    <div
      className="bg-cover bg-center md:h-[90vh] h-[70vh] flex items-center"
      style={!isMobile ? { backgroundImage: `url(${img.src})` } : {}}
    >
      <div className="md:absolute top-1/3 gap-5 mx-auto px-5 md:px-20 rounded-lg w-full max-w-7xl">
        <div className="md:w-1/2 flex flex-col gap-5">
          {/* <p className={`text-zinc-600 md:text-left text-center md:text-base text-sm ${montserrat.className}`}>Consultorio Privado.</p>
          <h1 className={`text-4xl md:text-6xl font-semibold mb-5 text-center md:text-left text-zinc-800 ${bebas.className}`}>
            Pinasco Odontología.
          </h1> */}
          <div className="flex md:justify-start justify-center">
            <Image
              src={isMobile ? logoVertical : logoHorizontal}
              alt="logo"
              width={isMobile ? 200 : 250}
              height={isMobile ? 100 : 100}
            />
          </div>
          <p className={`text-zinc-500 text-sm md:text-base mb-10 text-center md:text-left ${montserrat.className}`}>
            En nuestro consultorio privado, nos especializamos en brindarte el
            <span className="font-bold"> mejor cuidado dental</span> con un enfoque personalizado y profesional.
            Nuestro equipo de odontólogos altamente capacitados utiliza
            tecnología de vanguardia para garantizarte una experiencia 
            <span className="font-bold"> cómoda, segura y efectiva</span>.
          </p>
          <Link href='/contact-us' className="bg-[#00a2af] text-white md:w-[60%] w-[70%] md:px-5 px-1 md:py-4 py-2 mt-2 rounded-xl hover:scale-105 duration-200 flex justify-center items-center md:gap-3 gap-1 mx-auto md:mx-0">
            <p className={`text-sm md:text-lg ${montserrat.className}`}>Haz tu Consulta Acá</p>
            <CiMemoPad size={isMobile ? 20 : 25} />
          </Link>
        </div>
      </div>
    </div>
  );
};