'use client'

import { CustomSeparator } from "@/app/components/CustomSeparator";
import { FAQs } from "@/app/components/FAQs";
import { ProfesionalHistory } from "@/app/components/ProfesionalHistory";

import { bebas, montserrat } from "@/app/fonts/fonts"
import Image from "next/image";
import Marquee from "react-fast-marquee"

// Images
import consulta from '@/app/img/history/consulta.jpeg'
import trabajando from '@/app/img/history/trabajando.jpg'
import trabajando2 from '@/app/img/history/trabajando2.jpg'
import trabajando3 from '@/app/img/history/trabajando3.png'


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
                                En Pinasco Odontología, nuestro enfoque se basa en confianza, calidad y bienestar del paciente. Evaluamos cada caso de manera personalizada, utilizando tecnología avanzada y materiales de alta calidad. Nos especializamos en brindar un ambiente tranquilo, ideal para quienes sienten miedo al dentista. Además, combinamos estética y funcionalidad en nuestros tratamientos, promoviendo la prevención y el cuidado continuo para mantener sonrisas saludables a lo largo del tiempo.
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
                            <h3 className={`text-2xl font-semibold text-[#00a2af] ${bebas.className}`}>Enfoque en el paciente</h3>
                            <p className={`text-gray-600 ${montserrat.className}`}>
                                Tu salud bucal es nuestra motivación. Trabajamos en equipo para lograr la sonrisa que buscas y necesitas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="flex flex-col md:gap-4 gap-1 w-[80%] md:w-[80%] mx-auto mt-20 mb-40">
                <Marquee speed={60} gradient={false} className="flex items-center">
                    {images.map((image, index) => (
                        <div key={index} className="flex-shrink-0 mx-5">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="intrinsic"
                                width={250} 
                                height={150}
                                className="md:rounded-md rounded-md shadow-xl transition-transform duration-300"
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
    { id:1, src: trabajando3, alt: "Camilla" },
    { id:2, src: consulta, alt: "Consulta" },
    { id:4, src: trabajando, alt: "Consulta" },
    { id:3, src: trabajando3, alt: "Camilla" },
    { id:5, src: trabajando2, alt: "Consulta" },
];

