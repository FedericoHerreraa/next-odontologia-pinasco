
import { bebas, montserrat } from "../fonts/fonts";
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"

export const PreviewContact = () => {
    return (
        <div className="w-[80%] shadow-lg mx-auto my-60 bg-gradient-to-r from-[#46bcc9] via-zinc-100 to-white  px-10 py-6 rounded-xl h-44 flex items-center justify-between">
            <div>
                <h1 className={`text-4xl text-zinc-600 ${bebas.className}`}>Contactanos Ahora Mismo.</h1>
                <p className="text-lg text-zinc-500 font-light">
                    Cuidar tu sonrisa es nuestra prioridad. Contáctanos ahora y agenda tu consulta con nosotros.
                </p>
            </div>
            <Link
                href="/contact-us"
                className={`flex items-center justify-center w-[135px] md:w-[145px] gap-2 hover:gap-5 pl-4 py-2 border border-[#00a2af] bg-zinc-100 text-zinc-800 font-semibold text-sm md:text-base rounded-lg shadow-md transition-all duration-150 ${montserrat.className}`}
            >
                <p>Ver Más</p>
                <IoIosArrowRoundForward size={30} />
            </Link>
        </div>
    )
}