import Link from "next/link";

import { FaTooth } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import { bebas, montserrat } from "@/app/fonts/fonts";

export const PreviewWork = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto mt-10">
            <p className={`text-center mb-3 text-zinc-600 text-base md:text-lg ${montserrat.className}`}>
                Conoce nuestro trabajo que nos lleva a la perfección.
            </p>
            <h1 className={`text-4xl md:text-6xl text-center text-zinc-700 ${bebas.className}`}>
                Te Contamos un Poco de <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">lo que Hacemos.</span>
            </h1>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-10 md:mt-20">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-white via-zinc-100 to-[#00a2af] flex flex-col items-center rounded-lg min-h-[32rem] h-auto w-full shadow-lg p-5"
                    >
                        <FaTooth size={40} className="text-[#a6a6a6] mb-5" />

                        <h1
                            className={`text-center text-2xl md:text-4xl font-semibold text-[#a6a6a6] mx-5 md:mx-10 ${bebas.className}`}
                        >
                            {item.title}
                        </h1>

                        <p
                            className={`mt-5 text-center text-zinc-600 text-sm md:text-base flex-grow ${montserrat.className}`}
                        >
                            {item.description}
                        </p>

                        <Link
                            href="/work"
                            className={`flex items-center justify-center w-[135px] md:w-[145px] gap-2 hover:gap-5 mt-auto md:pl-4 pl-2 md:py-2 py-1 border border-[#00a2af] bg-zinc-100 text-zinc-800 font-semibold text-sm md:text-base rounded-lg shadow-md transition-all duration-150 ${montserrat.className}`}
                        >
                            <p>Ver Más</p>
                            <IoIosArrowRoundForward size={30} />
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
};

const info = [
    {
        title: "Prevención y diagnóstico",
        description: "Incluye especialidades enfocadas en evitar problemas dentales y detectarlos de forma temprana, como limpiezas, chequeos rutinarios, aplicación de flúor, selladores y cuidado dental especializado para niños."
    },
    {
        title: "Tratamientos correctivos y restauradores",
        description: "Se centra en tratar problemas existentes para restaurar la funcionalidad y estética dental. Esto incluye tratamientos de conductos, cuidado de encías, prótesis dentales, implantes y cirugías correctivas."
    },
    {
        title: "Corrección y estética",
        description: "Agrupa procedimientos para mejorar la alineación y apariencia de los dientes, como ortodoncia, blanqueamientos, carillas y reconstrucciones dentales para lograr una sonrisa más atractiva."
    },
];
