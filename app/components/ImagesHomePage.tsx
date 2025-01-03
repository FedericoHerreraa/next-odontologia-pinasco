

import { bebas, montserrat } from "@/app/fonts/fonts"
import Image from "next/image";
import camilla from "@/app/img/camilla.jpg"
import salaEspera from "@/app/img/salaEspera.jpg"
import consultorio from "@/app/img/consultorio.jpg"

export const ImagesHomePage = () => {
    return (
        <div className="min-h-[80vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Descubre quiénes somos.</p>
            <h1 className={`md:text-6xl text-4xl text-zinc-700  text-center ${bebas.className}`}>Explora Nuestro Espacio <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Odontológico.</span></h1>

            {/* <section className="flex flex-col gap-28 items-center mt-32 md:w-[80%] w-[90%] mx-auto mb-32">
                {info.map((item, index) => (
                    <div key={index} className={`flex ${index%2 == 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col' } w-full`}>
                        <Image 
                            src={item.img}
                            alt="imagen"
                            className="md:w-1/2 h-auto rounded-lg shadow-lg"
                        />
                        <div className="md:w-1/2 p-5">
                            <h2 className="text-2xl text-center">{item.title}</h2>
                            <p className={`text-center mt-3 ${montserrat.className}`}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </section> */}

            <section className="flex gap-4 items-center mt-32 md:w-[90%] w-[90%] mx-auto mb-20">
                {info.map((item, index) => (
                    <div 
                        key={index} 
                        className="relative group w-full h-auto"
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
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300
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
        img: consultorio
    },
    {
        title: "Sala de Espera",
        description: "Nuestra sala de espera está equipada con un ambiente moderno y acogedor, pensado para brindarte tranquilidad antes de tu consulta.",
        img: salaEspera
    },
];