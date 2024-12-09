
import { FaTooth } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";


export const WhatWeDo = () => {
    return (
        <div className="h-[100vh] w-[80%] mx-auto mt-10">
            <p className="text-center mb-3 text-zinc-600">Conoce nuestro trabajo que nos lleva a la perfeccion.</p>
            <h1 className="text-5xl font-semibold text-center">
                Te Contamos un Poco de <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">lo que Hacemos.</span>
            </h1>

            <section className="flex gap-5 items-center mt-20">
                {info.map((item, index) => (
                    <div className="bg-gradient-to-br from-white via-zinc-100 flex flex-col pt-10 items-center gap-5  to-[#00a2af] rounded-lg min-h-[32rem] w-1/3">
                        <FaTooth size={40} className="text-[#a6a6a6]"/>
                        <h1 className="text-center text-4xl font-semibold text-[#a6a6a6] mx-10">{item.title}</h1>
                        <p className="mx-10 mt-5 text-zinc-600">{item.description}</p>
                        <button className="flex items-center w-[167px] gap-2 hover:gap-5 mt-16 px-6 py-3 bg-[#00a2af] text-white font-semibold text-lg rounded-lg shadow-md transition-all duration-150">
                            <p>Ver Más</p>
                            <IoIosArrowRoundForward size={30}/>
                        </button>
                    </div>
                ))}
            </section>
        </div>
    )
}


const info = [
    {
        title: "Prevención y diagnóstico",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, metus nec ultricies suscipit, nunc est ultrices nisi, ut"
    },
    {
        title: "Tratamientos correctivos y restauradores",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, metus nec ultricies suscipit, nunc est ultrices nisi, ut"
    },
    {
        title: "Corrección y estética",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, metus nec ultricies suscipit, nunc est ultrices nisi, ut"
    },
]