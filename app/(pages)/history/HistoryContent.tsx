'use client';
import { bebas, montserrat } from "@/app/fonts/fonts"


export const HistoryContent = () => {

    return (
        <section className="container mx-auto px-4  h-full">
      
            <div className="text-center mb-8">
                <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Quiénes somos</p>
                <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Conocenos Un <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Poco Más</span></h1>
            </div>

            
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
                
                <div className="flex flex-col gap-4">
                    <div className="text-center p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#00a2af]">Cómo trabajamos</h3>
                        <p className="text-gray-600">
                            En Odontología Pinasco, combinamos más de 50 años de experiencia con la última tecnología en equipamiento y materiales. Nos capacitamos continuamente para garantizar un servicio de calidad, priorizando la prevención y detección temprana de lesiones para ofrecer tratamientos menos invasivos y más efectivos.
                        </p>
                    </div>
                    <div className="text-center p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#00a2af]">Experiencia profesional</h3>
                        <p className="text-gray-600">
                            Nuestro equipo está compuesto por especialistas en diversas áreas de la odontología, incluyendo endodoncia, estética dental, rehabilitación oral, ortodoncia, odontopediatría y cirugía. Esto nos permite brindar un tratamiento odontológico integral, adaptado a las necesidades específicas de cada paciente.
                        </p>
                    </div>
                </div>

                
                <div className="w-full aspect-video bg-black flex items-center rounded-xl justify-center shadow-lg text-gray-500 text-xl h-full">
                    <video
                        className="w-full h-full"
                        controls
                        autoPlay
                        muted
                        loop
                        >
                            <source src="/videos/video.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                    </video>
                </div>

            
                <div className="flex flex-col gap-4">
                    <div className="text-center p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#00a2af]">Nuestros valores</h3>
                        <p className="text-gray-600">
                            Creemos en la excelencia, el compromiso con la salud bucal y la constante actualización profesional. Nuestra prioridad es el bienestar de nuestros pacientes, ofreciendo un enfoque preventivo y tratamientos personalizados que cuidan tanto la salud como la estética dental.
                        </p>
                    </div>
                    <div className="text-center p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#00a2af]">Enfoque en el cliente</h3>
                        <p className="text-gray-600">
                            Tu sonrisa es nuestra motivación. Trabajamos para ayudarte a alcanzar la sonrisa que buscas y necesitas, siempre priorizando tu comodidad y salud en cada etapa del tratamiento.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

