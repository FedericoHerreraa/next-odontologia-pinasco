
import { bebas, montserrat } from "@/app/fonts/fonts"
import { MdLocationPin } from "react-icons/md";

export const Location = () => {
    return (
        <div id="location" className="h-[100vh] mt-40">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Encontranos ahora.</p>
            <h1 className={`md:text-6xl text-4xl text-zinc-700  text-center ${bebas.className}`}>Te Mostramos Nuestra <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Ubicacion.</span></h1>

            <section className="mt-20 flex md:flex-row flex-col md:justify-center md:items-center gap-20 md:w-[80%] w-[90%] mx-auto">
                <div className="md:w-1/2">
                    <h2 className={`md:text-3xl text-2xl mb-4 ${bebas.className} text-zinc-700`}>Posicion Estrategica.</h2>
                    <p className={`${montserrat.className} text-zinc-700`}>
                        Nuestro consultorio está ubicado en un punto estratégico, en el barrio de Núñez, ofreciendo fácil acceso desde cualquier parte de la región. Estamos en una de las <span className="font-bold">mejores ubicaciones de la zona</span>, rodeados de servicios y con excelentes opciones de transporte y estacionamiento. A continuación, te mostramos un mapa interactivo para que puedas llegar de manera cómoda y sin complicaciones. <span className="font-bold">¡Ven y descubre la excelencia en odontología en el lugar ideal!</span>
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                        <MdLocationPin size={30} className="text-red-600"/>
                        <p className={`${montserrat.className} text-zinc-700 text-lg`}>Crisólogo Larralde 2600, CABA.</p>
                    </div>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.8013544339137!2d-58.46990501656856!3d-34.550127799144924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7e749d648e9%3A0xb3390ff77985fc94!2sOdontolog%C3%ADa%20Pinasco!5e0!3m2!1ses!2sar!4v1735304020787!5m2!1ses!2sar" 
                    width="600" 
                    height="450" 
                    className="md:w-1/2 rounded-md shadow-xl"
                    loading="lazy">
                </iframe>
            </section>
        </div>
    )
}