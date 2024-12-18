
import { bebas, montserrat } from "@/app/fonts/fonts"

export const WorkContent = () => {
    return (
        <div>
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Que hacemos en el dia a dia</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center ${bebas.className}`}>Mira Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Diario.</span></h1>
        </div>
    )
}