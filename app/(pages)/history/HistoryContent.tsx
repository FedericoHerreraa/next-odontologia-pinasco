'use client'

import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { ProfesionalHistory } from "@/app/components/ProfesionalHistory";

import { bebas, montserrat } from "@/app/fonts/fonts"
import Image from "next/image";
import Marquee from "react-fast-marquee"

// Images
import camilla2 from '@/app/img/history/camilla2.jpeg'
import camilla3 from '@/app/img/history/camilla3.jpeg'
import consulta from '@/app/img/history/consulta.jpeg'
import salaEspera2 from '@/app/img/history/salaEspera2.jpeg'
import odontopediatria from '@/app/img/history/odontopediatria.jpg'
import trabajando from '@/app/img/history/trabajando.jpg'
import trabajando2 from '@/app/img/history/trabajando2.jpg'


export const HistoryContent = () => {
    return (
        <>
            <section className="container mx-auto px-4  h-full">
        
                <div className="text-center mb-8">
                    <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Quiénes somos</p>
                    <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Conocenos Un <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Poco Más</span></h1>
                </div>

                
                <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
                    
                    <div className="flex flex-col gap-4">
                        <div className="text-center p-4 rounded-lg">
                            <h3 className={`text-2xl font-semibold text-[#00a2af] ${bebas.className}`}>Cómo trabajamos</h3>
                            <p className={`text-gray-600 ${montserrat.className}`}>
                                En Odontología Pinasco, combinamos más de 50 años de experiencia con la última tecnología en equipamiento y materiales. Nos capacitamos continuamente para garantizar un servicio de calidad, priorizando la prevención y detección temprana de lesiones para ofrecer tratamientos menos invasivos y más efectivos.
                            </p>
                        </div>
                        <div className="text-center p-4 rounded-lg">
                            <h3 className={`text-2xl font-semibold text-[#00a2af] ${bebas.className}`}>Experiencia profesional</h3>
                            <p className={`text-gray-600 ${montserrat.className}`}>
                                Nuestro equipo está compuesto por especialistas en diversas áreas de la odontología, incluyendo endodoncia, estética dental, rehabilitación oral, ortodoncia, odontopediatría y cirugía. Esto nos permite brindar un tratamiento odontológico integral, adaptado a las necesidades específicas de cada paciente.
                            </p>
                        </div>
                    </div>

                    
                    <div className="w-full aspect-video bg-black flex items-center rounded-xl justify-center shadow-lg text-gray-500 text-xl h-full">
                        <video
                            className="w-full h-full"
                            controls
                            muted
                            loop
                            >
                                <source src="/videos/video.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                        </video>
                    </div>

                
                    <div className="flex flex-col gap-4">
                        <div className="text-center p-4 rounded-lg">
                            <h3 className={`text-2xl font-semibold text-[#00a2af] ${bebas.className}`}>Nuestros valores</h3>
                            <p className={`text-gray-600 ${montserrat.className}`}>
                                Creemos en la excelencia, el compromiso con la salud bucal y la constante actualización profesional. Nuestra prioridad es el bienestar de nuestros pacientes, ofreciendo un enfoque preventivo y tratamientos personalizados que cuidan tanto la salud como la estética dental.
                            </p>
                        </div>
                        <div className="text-center p-4 rounded-lg">
                            <h3 className={`text-2xl font-semibold text-[#00a2af] ${bebas.className}`}>Enfoque en el cliente</h3>
                            <p className={`text-gray-600 ${montserrat.className}`}>
                                Tu sonrisa es nuestra motivación. Trabajamos para ayudarte a alcanzar la sonrisa que buscas y necesitas, siempre priorizando tu comodidad y salud en cada etapa del tratamiento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="flex flex-col md:gap-4 gap-1 w-[80%] md:w-[80%] mx-auto mt-20 mb-40">
                <Marquee speed={60} gradient={false} className="flex items-center">
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 mx-2">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="intrinsic"
                                width={220} 
                                height={150}
                                className="md:rounded-lg rounded-md shadow-md transition-transform duration-300"
                            />
                        </div>
                    ))}
                </Marquee>
            </section>

            <CustomSeparator />

            <section className="mt-40">
                <ProfesionalHistory />
            </section>
            
            <section className="mt-40">
                <div className="text-center mb-8">
                    <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Te aclaramos algunas dudas</p>
                    <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Preguntas <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Frecuentes</span></h1>
                </div>
                <FAQs />
            </section>
        </>
        
    );
};

const images = [
    { id:1, src: salaEspera2, alt: "Sala de espera" },
    { id:2, src: camilla2, alt: "Camilla" },
    { id:3, src: camilla3, alt: "Camilla 3" },
    { id:4, src: consulta, alt: "Consulta" },
    { id:5, src: odontopediatria, alt: "Odontopediatría" },
    { id:6, src: trabajando, alt: "Consulta" },
    { id:7, src: trabajando2, alt: "Consulta" },
];

