
import { montserrat } from "@/app/fonts/fonts"

export const Footer = () => {
    return (
        <footer className="h-[50vh] w-full bg-gradient-to-b from-white via-[#bbdbdd] to-[#00a2af] mt-20">
            <div className="flex flex-col items-center gap-7">
                <h1 className={`text-5xl mt-20 ${montserrat.className}`}>Pinasco Odontologia</h1>
                <p className="text-zinc-600">Mejor consultorio privado de la zona</p>
            </div>
        </footer>
    )
}