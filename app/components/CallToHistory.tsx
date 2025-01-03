import Link from "next/link"
import img from "@/app/img/equipo.jpg"
import {bebas } from "@/app/fonts/fonts";

export const CallToHistory = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:space-x-4 md:space-y-0 space-y-4 w-full h-80 shadow-md mt-40" style={{backgroundImage: `url(${img.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.7}}>
        <Link href="/history" className="w-100 h-auto px-6 py-6 bg-[#00a2af] text-center rounded-md shadow-xl hover:bg-[#008b96]"> 
            <p className={`text-white font-thin text-3xl ${bebas.className}`}>Conocé más acerca de nosotros</p> 
        </Link>
    </div>
  )
}
