'use client'

import { CiMemoPad } from "react-icons/ci";
import bgLanding from '@/app/img/background/bg-landing.png'
import { useMobileView } from "@/app/context/MobileView";
import { montserrat } from "@/app/fonts/fonts";
import Link from "next/link";
import Image from "next/image";
import logoVertical from '@/app/img/logos/LogoVertical@2x.png'
import { Header } from "./Header";

export const LandingPage = () => {
  const { isMobile } = useMobileView();

  return (
      <div
        className="bg-cover opacity-80 md:bg-fixed bg-center md:h-[125vh] h-[80vh] mb-10"
        style={{ backgroundImage: `url(${bgLanding.src})` }}
      >
        <Header />
        <div className="flex flex-col justify-center items-center ">
          <div className="md:w-1/2 flex flex-col items-center gap-5">
            <div className="flex md:justify-start justify-center bg-white rounded-full md:py-32 md:px-20 py-20 px-10 bg-opacity-80">
              <Image
                src={logoVertical}
                alt="logo"
                width={isMobile ? 200 : 270}
                height={isMobile ? 100 : 130}
              />
            </div>
            
            <Link href='/contact-us' className="bg-[#00a2af] text-white w-fit md:px-5 px-1 md:py-4 py-2 mt-2 rounded-xl hover:scale-105 duration-200 flex justify-center items-center md:gap-3 gap-1 mx-auto md:mx-0">
              <p className={`text-sm md:text-lg ${montserrat.className}`}>Hacé tu Consulta Acá</p>
              <CiMemoPad size={isMobile ? 20 : 25} />
            </Link>
          </div>
        </div>
      </div>
  );
};