

import { bebas, montserrat } from "@/app/fonts/fonts"

export const ImagesHomePage = () => {
    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Conocenos un poco mas.</p>
            <h1 className={`md:text-6xl text-3xl text-zinc-700  text-center ${bebas.className}`}>Te Mostramos Algunas <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Imagenes.</span></h1>

            <section className="flex flex-col gap-20 items-center mt-20 w-[60%] mx-auto mb-20">
                {info.map((item, index) => (
                    <div key={index} className={`flex ${index%2 == 0 ? 'flex-row' : 'flex-row-reverse' } w-full`}>
                        <div className="w-1/2 h-60 bg-zinc-100 rounded-lg"></div>
                        <p className={`w-1/2 text-center mt-3 ${montserrat.className}`}>{item.description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}


const info = [
    {
        title: "Imagen 1",
        description: "Descripcion de la imagen 1"
    },
    {
        title: "Imagen 2",
        description: "Descripcion de la imagen 2"
    },
    {
        title: "Imagen 3",
        description: "Descripcion de la imagen 3"
    },
]