import Link from "next/link";

import { FaTooth } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import { bebas, montserrat } from "@/app/fonts/fonts";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/app/components/ui/alert-dialog"
  

export const PreviewWork = () => {
    return (
        <div className="w-[90%] md:w-[80%] mx-auto mt-10">
            <p className={`text-center mb-3 text-zinc-600 text-base md:text-lg ${montserrat.className}`}>
                Conocé nuestro trabajo que nos lleva a la perfección.
            </p>
            <h1 className={`text-4xl md:text-6xl text-center text-zinc-700 ${bebas.className}`}>
                Te Contamos un Poco de <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">lo que Hacemos.</span>
            </h1>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mt-10 md:mt-20">
                {info.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-white via-zinc-100 to-[#00a2af] flex flex-col items-center rounded-lg md:min-h-[32rem] min-h-[25rem] h-auto w-full shadow-lg p-5"
                    >
                        <FaTooth size={40} className="text-[#a6a6a6] mb-5" />

                        <h2
                            className={`text-center text-2xl md:text-4xl font-semibold text-[#a6a6a6] mx-5 md:mx-10 ${bebas.className}`}
                        >
                            {item.title}
                        </h2>

                        <p
                            className={`mt-5 text-center text-zinc-600 text-sm md:text-base flex-grow ${montserrat.className}`}
                        >
                            {item.description}
                        </p>

                        <Link
                            href="/work"
                            className={`flex items-center justify-center w-[135px] md:w-[145px] gap-2 hover:gap-5 mt-3 md:pl-4 pl-2 md:py-2 py-1 border border-[#00a2af] bg-zinc-100 text-zinc-800 font-semibold text-sm md:text-base rounded-lg shadow-md transition-all duration-150 ${montserrat.className}`}
                        >
                            <p>Ver Más</p>
                            <IoIosArrowRoundForward size={30} />
                        </Link>
                        <AlertDialog>
                            <AlertDialogTrigger>Open</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Dialog Title</AlertDialogTitle>
                                </AlertDialogHeader>
                                <AlertDialogDescription>
                                    This is the content area of the dialog. You can put any content here.
                                </AlertDialogDescription>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Accept</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                ))}
            </section>
        </div>
    );
};

const info = [
    {
        title: "Tratamientos preventivos",
        description: "La odontología preventiva busca mantener una boca sana e incluye exámenes orales regulares, limpieza dental y radiografías de rutina y estimular  el desarrollo de hábitos de higiene bucal. A su vez se centra en el diagnóstico de problemas de salud antes de que se manifiesten los síntomas o surjan complicaciones."
    },
    {
        title: "Odontología restauradora",
        description: "La odontología restauradora se centra en abordar problemas dentales existentes con el objetivo de devolver la funcionalidad y la estética a la sonrisa del paciente. Esta disciplina abarca una variedad de tratamientos especializados, que incluyen: tratamientos de conductos, cuidado de encías, prótesis dentales, implantes y cirugías correctivas."
    },
    {
        title: "Estética y diseño de sonrisa",
        description: "Agrupa procedimientos para mejorar la alineación y apariencia de los dientes, como ortodoncia, blanqueamientos, carillas y reconstrucciones dentales para lograr una sonrisa más atractiva."
    },
    {
        title: "Odontología digital",
        description: "La odontología digital combina tecnologías avanzadas como escáneres intraorales, impresión 3D y radiografías digitales para mejorar la precisión en diagnósticos y tratamientos. Ofrece mayor comodidad al paciente, resultados estéticos más predecibles y diagnósticos más precisos, reduciendo tiempos de laboratorio y mejorando la comunicación mediante la visualización de resultados."
    },
    
];
