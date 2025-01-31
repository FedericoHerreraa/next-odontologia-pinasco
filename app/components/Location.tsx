
import { bebas, montserrat } from "@/app/fonts/fonts"
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import LocationImg from "@/app/img/others/location.png"

export const Location = () => {
    return (
        <div id="location" className="min-h-[100vh] mt-40">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Estamos cerca de ti.</p>
            <h2 className={`md:text-6xl text-4xl text-zinc-700 text-center ${bebas.className}`}>Descubrí Nuestra <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Ubicación.</span></h2>

            <section className="mt-20 flex md:flex-row flex-col md:justify-center md:items-center gap-20 md:w-[80%] w-[90%] mx-auto">
                <div className="md:w-1/3">
                    <h3 className={`md:text-3xl text-2xl mb-4 ${bebas.className} text-zinc-700`}>Posición Estratégica.</h3>
                    <p className={`${montserrat.className} text-zinc-700`}>
                        Nuestro consultorio está ubicado en un punto estratégico, en el barrio de <span className="font-bold">Núñez</span>, ofreciendo fácil acceso desde cualquier parte de la región. Estamos en una de las <span className="font-bold">mejores ubicaciones de la zona</span>, rodeados de servicios y con excelentes opciones de transporte. Además, contamos con un <span className="font-bold">estacionamiento pago justo enfrente</span> para mayor comodidad. A continuación, te mostramos una foto del mapa con la ubicación para que puedas darte una idea de la zona donde estamos. <span className="font-bold">¡Vení y Descubrí la excelencia en odontología en el lugar ideal!</span>
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                        <MdLocationPin size={30} className="text-[#46bcc9]"/>
                        <p className={`${montserrat.className} text-zinc-700 text-lg`}>Ubicación exacta al privado.</p>
                    </div>
                </div>
                <Image
                    src={LocationImg}
                    alt="Ubicación de la Clínica"
                    width={600}
                    height={600}
                    className="md:w-2/3 rounded-md shadow-xl"
                />
            </section>
        </div>
    )
}