
import { bebas, montserrat } from "@/app/fonts/fonts"
import { MdLocationPin } from "react-icons/md";

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
                        <p className={`${montserrat.className} text-zinc-700 text-lg`}>Crisólogo Larralde 2627</p>
                    </div>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1360418158156!2d-58.47316252370121!3d-34.55011075467002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb69ba4c8d1bd%3A0xecb6db762fa74929!2sCris%C3%B3logo%20Larralde%202627%2C%20C1429BTG%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1738537688504!5m2!1ses!2sar" 
                    loading="lazy" 
                    className="border border-zinc-100 rounded-lg shadow-xl md:w-2/3 md:h-[50vh] h-[50vh] w-full"
                ></iframe>
            </section>
        </div>
    )
}