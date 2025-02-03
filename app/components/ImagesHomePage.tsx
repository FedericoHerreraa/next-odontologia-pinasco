

import { bebas, montserrat } from "@/app/fonts/fonts"
import Image from "next/image";
import camilla from "@/app/img/history/camilla.jpg"
import salaEspera2 from '@/app/img/history/salaEspera2.png'
import camilla2 from '@/app/img/history/camilla3.png'

export const ImagesHomePage = () => {
    return (
        <div className="min-h-[80vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Descubrí quiénes somos.</p>
            <h1 className={`md:text-6xl text-4xl text-zinc-700  text-center ${bebas.className}`}>Explorá Nuestro Espacio <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Odontológico.</span></h1>

            <section className="flex md:flex-row flex-col gap-4 items-center mt-32 md:w-[90%] w-[90%] mx-auto mb-20">
                {info.map((item, index) => (
                    <div 
                        key={index} 
                        className="relative group w-full h-auto rounded-lg"
                    >
                        <Image 
                            src={item.img}
                            alt="imagen"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />

                        <div 
                            className="
                                absolute inset-0 flex items-center justify-center 
                                bg-black bg-opacity-50 text-white text-lg font-semibold 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg
                            "
                        >
                            <p className={montserrat.className}>{item.title}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}


const info = [
    {
        title: "Equipamiento Moderno",
        description: "Contamos con tecnología de punta para ofrecerte los mejores tratamientos odontológicos en un entorno profesional y seguro.",
        img: camilla
    },
    {
        title: "Nuestro Consultorio",
        description: "Nuestro consultorio está equipado con la última tecnología en odontología, para brindarte un servicio de calidad y profesionalismo.",
        img: salaEspera2
    },
    {
        title: "Sala de Espera",
        description: "Nuestra sala de espera está equipada con un ambiente moderno y acogedor, pensado para brindarte tranquilidad antes de tu consulta.",
        img: camilla2
    },
];