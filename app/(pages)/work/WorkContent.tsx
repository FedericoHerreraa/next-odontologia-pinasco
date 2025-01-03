'use client'


import { bebas, montserrat } from "@/app/fonts/fonts"
import { TitleSection } from "./TitleSection"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { RiStarSFill } from "react-icons/ri";

import esteticaDental from '@/app/img/estetica.png'
import protesis from '@/app/img/protesis.png'
import blanqueamiento from '@/app/img/blanqueamiento.png'
import endodoncia from '@/app/img/endodoncia.png'
import limpieza from '@/app/img/limpieza.png'
import peridontal from '@/app/img/peridontal.png'
import bucomaxilofacial from '@/app/img/bucomaxilofacial.png'
import placa from '@/app/img/placa.png'

export const WorkContent = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Descubre lo que hacemos cada día.</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center ${bebas.className}`}>Explora Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Diario.</span></h1>

            <div className="relative md:w-[80%] mx-auto mt-20">
                <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                    <Marquee speed={80} gradient={false} direction="left">
                        {peopleOpinions.map((item, index) => (
                            <div key={index} className="md:w-[500px] w-[350px] min-h-52 bg-zinc-100 rounded-xl mx-3 p-5">
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
                            <h1 className="text-4xl mb-10">{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                        <div className="md:w-2/3 bg-zinc-100 rounded-xl h-full shadow-lg"></div>
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
        title: 'Estetica Dental',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla, illum reprehenderit cupiditate totam consequuntur, culpa consequatur quod nemo distinctio quibusdam impedit esse, iusto ratione sit sapiente facere repellendus nam.'
    },
    {
        id: 'protesis',
        title: 'Prótesis',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla, illum reprehenderit cupiditate totam consequuntur, culpa consequatur quod nemo distinctio quibusdam impedit esse, iusto ratione sit sapiente facere repellendus nam.'
    },
    {
        id: 'blanqueamiento',
        title: 'Blanqueamiento',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla, illum reprehenderit cupiditate totam consequuntur, culpa consequatur quod nemo distinctio quibusdam impedit esse, iusto ratione sit sapiente facere repellendus nam.'
    },
    {
        id: 'endodoncia',
        title: 'Endodoncia',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla, illum reprehenderit cupiditate totam consequuntur, culpa consequatur quod nemo distinctio quibusdam impedit esse, iusto ratione sit sapiente facere repellendus nam.'
    },
    {
        id: 'limpieza',
        title: 'Limpieza',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor',
    },
    {
        id: 'peridontal',
        title: 'Peridontal',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla, illum reprehenderit cupiditate totam consequuntur, culpa consequatur quod nemo distinctio quibusdam impedit esse, iusto ratione sit sapiente facere repellendus nam.'
    },
    {
        id: 'bucomaxilofacial',
        title: 'Bucomaxilofacial',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla, illum reprehenderit cupiditate totam consequuntur, culpa consequatur quod nemo distinctio quibusdam impedit esse, iusto ratione sit sapiente facere repellendus nam.'
    },
    {
        id: 'placa',
        title: 'Placa',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis eum natus tempore cumque nostrum ipsum dignissimos, in aspernatur autem praesentium illum eveniet expedita omnis sed error! Vero deserunt magnam quae. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nulla, illum reprehenderit cupiditate totam consequuntur, culpa consequatur quod nemo distinctio quibusdam impedit esse, iusto ratione sit sapiente facere repellendus nam.'
    },
]

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