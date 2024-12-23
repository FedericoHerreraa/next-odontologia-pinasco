
import { montserrat } from "@/app/fonts/fonts"
import Image from "next/image"
import logoVertical from "@/app/img/LogoVertical@2x.png"

export const Footer = () => {
    return (
        <footer className="h-[50vh] w-full bg-gradient-to-b from-white via-[#bbdbdd] to-[#00a2af] mt-20">
            <div className="flex flex-col items-center gap-7">
                <Image src={logoVertical} alt="Logo" className="w-52 h-auto mt-20"/>
                <p className={`text-zinc-500 font-semibold ${montserrat.className}`}>Mejor consultorio privado de la zona</p>
            </div>
        </footer>
    )
}