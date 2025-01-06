'use client'


import { bebas, montserrat } from "@/app/fonts/fonts"
import { TitleSection } from "./TitleSection"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { RiStarSFill } from "react-icons/ri";

// Icons
import esteticaDental from '@/app/img/estetica.png'
import protesis from '@/app/img/protesis.png'
import blanqueamiento from '@/app/img/blanqueamiento.png'
import endodoncia from '@/app/img/endodoncia.png'
import limpieza from '@/app/img/limpieza.png'
import peridontal from '@/app/img/peridontal.png'
import bucomaxilofacial from '@/app/img/bucomaxilofacial.png'
import placa from '@/app/img/placa.png'

// Images
import esteticaDentalImg from '@/app/img/work/estetica-dental.jpg'
import protesisDental from '@/app/img/work/protesis-dental.jpg'
import blanqueamientoDental from '@/app/img/work/blanqueamiento-dental.jpg'
import endodonciaDental from '@/app/img/work/endodoncia.jpg'
import limpiezaDental from '@/app/img/work/limpieza-dental.jpg'
import peridontalImg from '@/app/img/work/peridontal.jpg'
import bucomaxilofacialImg from '@/app/img/work/bucomaxilofacialImg.png'
import placasDentales from '@/app/img/work/placas-dentales.webp'


export const WorkContent = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Descubre lo que hacemos cada día.</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Explora Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Diario.</span></h1>

            <div className="relative md:w-[80%] mx-auto mt-20">
                <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                    <Marquee speed={80} gradient={false} direction="left">
                        {peopleOpinions.map((item, index) => (
                            <div key={index} className="md:w-[500px] w-[350px] min-h-52 bg-zinc-100 rounded-xl mx-3 md:p-5 p-3">
                                <div className="flex md:flex-row flex-col md:gap-4 gap-1 md:mb-0 mb-5 items-center">
                                    <h2 className="font-semibold md:text-lg">{item.name}</h2>
                                    <div className="flex gap-1">
                                        {Array(5).fill(0).map((_, index) => (
                                            <RiStarSFill key={index} size={20} className="text-yellow-500"/>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-zinc-600 md:text-base text-sm">{item.opinion}</p>
                            </div>
                        ))}
                    </Marquee>
                <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
            </div>

            <section className="mb-20">
                <div>
                    <TitleSection title={'Nuestros Tratamientos'}/>
                    <div className="flex md:gap-16 items-center mx-auto md:w-[50%] justify-center mt-10 flex-wrap">
                        {icons.map((item, index) => (
                            <div 
                                onClick={() => scrollToSection(item.id)}
                                key={index} 
                                className="flex flex-col md:mb-0 mb-10 items-center hover:opacity-60 cursor-pointer w-1/2 md:w-auto"
                            >
                                <Image 
                                    src={item.icon}
                                    width={80}
                                    height={80}
                                    alt={item.title}
                                />
                                <p className={`text-zinc-600 text-sm mt-2 ${montserrat.className}`}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section className="flex flex-col gap-40 md:w-[80%] w-[90%] mx-auto mt-60 min-h-[60vh]">
                {infoWork.map((item, index) => (
                    <div id={item.id} key={index} className={`flex ${index%2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'} gap-10 h-[60vh]`}>
                        <div className="md:w-1/3">
                            <h1 className={`md:text-5xl text-3xl mb-10 ${bebas.className}`}>{item.title}</h1>
                            <p className={`${montserrat.className}`}>{item.description}</p>
                        </div>
                        <div className="md:w-2/3 ">
                            <Image 
                                src={item.img || ''}
                                alt={item.title}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}


const icons = [
    {
        id: 'estetica',
        title: "Estética Dental",
        icon: esteticaDental
    },
    {
        id: 'protesis',
        title: "Prótesis",
        icon: protesis
    },
    {
        id: 'blanqueamiento',
        title: "Blanqueamiento",
        icon: blanqueamiento
    },
    {
        id: 'endodoncia',
        title: "Endodoncia",
        icon: endodoncia
    },
    {
        id: 'limpieza',
        title: "Limpieza",
        icon: limpieza
    },
    {
        id: 'peridontal',
        title: "Peridontal",
        icon: peridontal
    },
    {
        id: 'bucomaxilofacial',
        title: "Bucomaxilofacial",
        icon: bucomaxilofacial
    },
    {
        id: 'placa',
        title: "Placa",
        icon: placa
    },
]

const infoWork = [
    {
        id: 'estetica',
        title: 'Estética Dental',
        description: 'La estética dental busca mejorar la apariencia de los dientes y la sonrisa. Incluye tratamientos como carillas de porcelana, coronas, contorneado dental, y ortodoncia invisible. Estos procedimientos no solo mejoran la estética sino también pueden aumentar la confianza en uno mismo.',
        img: esteticaDentalImg
    },
    {
        id: 'protesis',
        title: 'Prótesis',
        description: 'La prótesis dental es una solución para reemplazar dientes perdidos o dañados. Puede ser fija (puentes y coronas) o removible (dentaduras parciales o completas). Estas restauraciones mejoran la funcionalidad al masticar y la estética de la boca.',
        img: protesisDental
    },
    {
        id: 'blanqueamiento',
        title: 'Blanqueamiento',
        description: 'El blanqueamiento dental es un procedimiento estético que elimina manchas y aclara el tono de los dientes. Se realiza en el consultorio o con kits caseros supervisados por un odontólogo, utilizando agentes blanqueadores como el peróxido de hidrógeno.',
        img: blanqueamientoDental
    },
    {
        id: 'endodoncia',
        title: 'Endodoncia',
        description: 'La endodoncia, también conocida como tratamiento de conducto, consiste en eliminar la pulpa infectada o dañada del diente para salvarlo. Es un procedimiento común para tratar caries profundas o traumatismos dentales que afectan la raíz.',
        img: endodonciaDental
    },
    {
        id: 'limpieza',
        title: 'Limpieza',
        description: 'La limpieza dental profesional elimina la placa y el sarro acumulados en los dientes y debajo de las encías. Ayuda a prevenir enfermedades como la gingivitis y mejora la salud bucal en general.',
        img: limpiezaDental
    },
    {
        id: 'peridontal',
        title: 'Periodontal',
        description: 'El tratamiento periodontal aborda enfermedades de las encías, como la gingivitis y la periodontitis. Incluye limpiezas profundas, raspado y alisado radicular, y en casos graves, procedimientos quirúrgicos para restaurar la salud gingival.',
        img: peridontalImg
    },
    {
        id: 'bucomaxilofacial',
        title: 'Bucomaxilofacial',
        description: 'La cirugía bucomaxilofacial trata problemas relacionados con los huesos, tejidos y estructuras de la cara, boca y mandíbula. Incluye tratamientos para fracturas faciales, deformidades óseas y extracción de muelas del juicio.',
        img: bucomaxilofacialImg
    },
    {
        id: 'placa',
        title: 'Placa',
        description: 'El tratamiento con placas dentales incluye dispositivos personalizados, como férulas de descarga, para tratar el bruxismo, proteger los dientes durante el sueño y aliviar dolores en la articulación temporomandibular (ATM).',
        img: placasDentales
    },
];

const peopleOpinions = [
    {
        name: "Reseña de Google",
        opinion: "Excelente atención y calidez humana, son lo más ! 👌"
    },
    {
        name: "Reseña de Google",
        opinion: "Muy buena atención y dedicación!! Prolijos y detallistas. Excelente!! Muy recomendable."
    },
    {
        name: "Reseña de Google",
        opinion: "Un espectáculo, muy atentas, muy cálidas. Te explican todo, me hice una limpieza y no me dolio nada. Se nota que hacen las cosas con amor <3 y que les gustan su trabajo. 100% recomendado."
    },
];