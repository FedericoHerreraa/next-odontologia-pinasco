'use client';

import { InfoHistory } from "@/app/dto/Types";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import { PiArrowBendUpLeftFill } from "react-icons/pi";
import { montserrat, bebas } from "@/app/fonts/fonts";


export const HistoryContent = () => {
    const navigateNext = (id: number) => {        
        const element = document.getElementById(id.toString());
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Como llegamos hasta donde estamos.</p>
            <h1 className={`md:text-6xl text-4xl text-black  text-center ${bebas.className}`}>Conoce la Historia de <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Pinasco.</span></h1>
            
            <section className="mt-40 mb-20 flex flex-col gap-56 md:w-[60%] w-[90%] mx-auto">
                <div className="relative w-full">
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-300 -translate-x-1/2"></div>
                    {info.map((item, index) => (
                        <div 
                            id={item.id.toString()} 
                            key={index} 
                            className={`flex ${item.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row' } items-center md:gap-10 gap-5 relative mb-40`}
                        >
                            <div className={`flex flex-col ${item.id % 2 === 0 ? 'md:items-end items-center' : 'md:items-start items-center'} w-1/2 gap-2`}>
                                <h2 className={`md:text-3xl text-xl font-semibold ${bebas.className} ${item.id % 2 === 0 && 'text-end'}`}>{item.title}.</h2>
                                <p className={`text-zinc-900 mb-5 md:text-lg ${montserrat.className}`}>Año {item.date}.</p>
                                <p className={`md:text-base text-sm ${montserrat.className} ${item.id % 2 === 0 && 'text-end'}`}>{item.description}.</p>
                                {item.id !== 6 && (
                                    <div className={`flex ${item.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row' } gap-1 items-end md:mt-7 mt-3`}>
                                        <button 
                                            onClick={() => navigateNext(item.id + 1)}
                                            className="border border-zinc-300 rounded-lg md:px-4 px-2 py-1 hover:border-zinc-500 hover:bg-zinc-100 transition-all duration-200"
                                        >
                                            <p className="md:text-base text-sm">Siguiente</p>
                                        </button>
                                        {item.id % 2 === 0 ? (
                                            <PiArrowBendUpLeftFill size={25} className="text-zinc-500 -rotate-90"/>
                                        ) : (
                                            <PiArrowBendUpRightFill size={25} className="text-zinc-500 rotate-90"/>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="w-1/2 h-64 bg-zinc-100 rounded-lg shadow-xl">
                            </div>

                            <div className="absolute left-1/2 md:w-6 w-3 md:h-6 h-3 bg-[#00a2af] rounded-full -translate-x-1/2"></div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        
    );
};


const info: InfoHistory[] = [
    {
        id: 1,
        date: "2000",
        title: "Inicio de la Clínica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: 2,
        date: "2005",
        title: "Primera Expansión",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: 3,
        date: "2010",
        title: "Incorporación de Nuevas Tecnologías",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: 4,
        date: "2015",
        title: "Expansión a Nuevos Mercados",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: 5,
        date: "2020",
        title: "Lanzamiento de Nueva Marca",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: 6,
        date: "2025",
        title: "Proyección a Nivel Internacional",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
]