
import { bebas, montserrat } from "@/app/fonts/fonts";
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"

export const PreviewContact = () => {
    return (
        <div className="w-[80%] mx-auto my-40 border-l-4 border-l-[#00a2af] px-10 py-6  min-h-36 flex md:flex-row flex-col items-center md:justify-between md:gap-0 gap-10">
            <div>
                <h1 className={`md:text-4xl md:text-left text-center text-3xl text-zinc-600 ${bebas.className}`}>Contactanos Ahora Mismo.</h1>
                <p className="md:text-lg md:text-left text-center text-zinc-500 font-light">
                    Cuidar tu sonrisa es nuestra prioridad. Contactanos ahora y agenda tu consulta con nosotros.
                </p>
            </div>
            <Link
                href="/contact-us"
                className={`flex items-center justify-center w-[135px] md:w-[145px] gap-2 hover:gap-5 md:pl-4 pl-2 md:py-2 py-1 border border-[#00a2af] bg-zinc-100 text-zinc-800 font-semibold text-sm md:text-base rounded-lg shadow-md transition-all duration-150 ${montserrat.className}`}
            >
                <p className="text-sm md:text-base">Ver Más</p>
                <IoIosArrowRoundForward size={30} />
            </Link>
        </div>
    )
}