import { Bebas_Neue, Montserrat } from "next/font/google";
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"

const montserrat = Montserrat({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400'],
});

const bebas = Bebas_Neue({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400'],
});

export const PreviewContact = () => {
    return (
        <div className="w-[80%] shadow-lg mx-auto my-60 bg-gradient-to-r to-white from-[#46bcc9] px-10 py-6 rounded-xl h-44 flex items-center justify-between">
            <div>
                <h1 className={`text-4xl text-zinc-600 ${bebas.className}`}>Contactanos Ahora Mismo.</h1>
                <p></p>
            </div>
            <Link
                href="/work"
                className={`flex items-center justify-center w-[135px] md:w-[145px] gap-2 hover:gap-5 pl-4 py-2 border border-[#00a2af] bg-zinc-100 text-zinc-800 font-semibold text-sm md:text-base rounded-lg shadow-md transition-all duration-150 ${montserrat.className}`}
            >
                <p>Ver Más</p>
                <IoIosArrowRoundForward size={30} />
            </Link>
        </div>
    )
}