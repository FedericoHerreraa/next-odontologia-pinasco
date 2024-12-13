'use client';

import { InfoHistory } from "../dto/Types";
import { PiArrowBendUpRightFill } from "react-icons/pi";

export const HistoryContent = () => {
    const navigateNext = (id: number) => {        
        const element = document.getElementById(id.toString());
        if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="relative w-full">
            {/* Línea vertical central */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-300 -translate-x-1/2"></div>
            
            {info.map((item, index) => (
                <div 
                    id={item.id} 
                    key={index} 
                    className={`flex ${parseInt(item.id) % 2 === 0 ? 'flex-row-reverse' : 'flex-row' } items-center gap-10 relative mb-40`}
                >
                    {/* Contenido del lado izquierdo o derecho */}
                    <div className="flex flex-col items-start w-1/2 gap-2">
                        <h1 className="text-3xl font-semibold">{item.title}</h1>
                        <p className="text-zinc-900 mb-5 text-lg">Año {item.date}</p>
                        <p>{item.description}</p>
                        {item.id !== "6" && (
                            <div className="flex gap-1 items-end mt-7">
                                <button 
                                    onClick={() => navigateNext(parseInt(item.id) + 1)}
                                    className="border border-zinc-300 rounded-lg px-4 py-1 hover:border-zinc-500 hover:bg-zinc-100"
                                >
                                    <p>Siguiente</p>
                                </button>
                                <PiArrowBendUpRightFill size={25} className="text-zinc-500 rotate-90"/>
                            </div>
                        )}
                    </div>

                    <div className="w-1/2 h-64 bg-zinc-100 rounded-lg shadow-xl">
                    </div>

                    <div className="absolute left-1/2 w-6 h-6 bg-[#00a2af] rounded-full -translate-x-1/2"></div>
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