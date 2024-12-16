'use client';

import { InfoHistory } from "../dto/Types";
import { PiArrowBendUpRightFill } from "react-icons/pi";
import { PiArrowBendUpLeftFill } from "react-icons/pi";

export const HistoryContent = () => {
    const navigateNext = (id: number) => {        
        const element = document.getElementById(id.toString());
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="relative w-full">
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-300 -translate-x-1/2"></div>
            
            {info.map((item, index) => (
                <div 
                    id={item.id} 
                    key={index} 
                    className={`flex ${parseInt(item.id) % 2 === 0 ? 'flex-row-reverse' : 'flex-row' } items-center md:gap-10 gap-5 relative mb-40`}
                >
                    <div className={`flex flex-col ${parseInt(item.id) % 2 === 0 ? 'items-end' : 'items-start'} w-1/2 gap-2`}>
                        <h1 className={`md:text-3xl text-xl font-semibold ${parseInt(item.id) % 2 === 0 && 'text-end'}`}>{item.title}.</h1>
                        <p className="text-zinc-900 mb-5 md:text-lg">Año {item.date}.</p>
                        <p className={`md:text-base text-sm ${parseInt(item.id) % 2 === 0 && 'text-end'}`}>{item.description}.</p>
                        {item.id !== "6" && (
                            <div className={`flex ${parseInt(item.id) % 2 === 0 ? 'flex-row-reverse' : 'flex-row' } gap-1 items-end md:mt-7 mt-3`}>
                                <button 
                                    onClick={() => navigateNext(parseInt(item.id) + 1)}
                                    className="border border-zinc-300 rounded-lg md:px-4 px-2 py-1 hover:border-zinc-500 hover:bg-zinc-100 transition-all duration-200"
                                >
                                    <p className="md:text-base text-sm">Siguiente</p>
                                </button>
                                {parseInt(item.id) % 2 === 0 ? (
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
    );
};


const info: InfoHistory[] = [
    {
        id: "1",
        date: "2000",
        title: "Inicio de la Clínica",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: "2",
        date: "2005",
        title: "Primera Expansión",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: "3",
        date: "2010",
        title: "Incorporación de Nuevas Tecnologías",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: "4",
        date: "2015",
        title: "Expansión a Nuevos Mercados",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: "5",
        date: "2020",
        title: "Lanzamiento de Nueva Marca",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
    {
        id: "6",
        date: "2025",
        title: "Proyección a Nivel Internacional",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, varius nunc. Nullam et orci eu lorem consequat tincidunt vitae utenim. Cras non luctus sem, se"
    },
]