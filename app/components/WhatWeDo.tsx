import Link from "next/link";
import { FaTooth } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export const WhatWeDo = () => {
    return (
        <div className="w-[90%] lg:w-[80%] mx-auto mt-10">
            <p className="text-center mb-3 text-zinc-600 text-sm sm:text-base">
                Conoce nuestro trabajo que nos lleva a la perfección.
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
                Te Contamos un Poco de <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">lo que Hacemos.</span>
            </h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-10 lg:mt-20">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-white via-zinc-100 flex flex-col pt-10 items-center gap-5 to-[#00a2af] rounded-lg min-h-[28rem] sm:min-h-[30rem] lg:min-h-[32rem] h-auto w-full shadow-lg"
                    >
                        <FaTooth size={40} className="text-[#a6a6a6]" />
                        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#a6a6a6] mx-5 sm:mx-10">
                            {item.title}
                        </h1>
                        <p className="mx-5 sm:mx-10 mt-5 text-zinc-600 text-sm sm:text-base">
                            {item.description}
                        </p>
                        <Link 
                            href='/work'
                            className="flex items-center w-[135px] sm:w-[145px] gap-2 hover:gap-5 mt-6 pl-4 py-2 bg-[#00a2af] text-white font-semibold text-sm sm:text-md rounded-lg shadow-md transition-all duration-150"
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
