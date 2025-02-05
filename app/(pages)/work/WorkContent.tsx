'use client'

import { bebas, montserrat } from "@/app/fonts/fonts"
import { TitleSection } from "./TitleSection"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import Link from "next/link"

import { RiStarSFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { GoArrowRight } from "react-icons/go";

// Icons
import esteticaDental from '@/app/img/icons/estetica.png'
import protesis from '@/app/img/icons/protesis.png'
import blanqueamiento from '@/app/img/icons/blanqueamiento.png'
import endodoncia from '@/app/img/icons/endodoncia.png'
import limpieza from '@/app/img/icons/limpieza.png'
import traumatismos from '@/app/img/icons/traumatismodental.png'
import ortodoncia from '@/app/img/icons/ortodoncia.png'
import placa from '@/app/img/icons/placa.png'
import implantes from '@/app/img/icons/implantes.png'
import odontopediatriaicon from '@/app/img/icons/odontopediatria.png'
import buttonTreatments from '@/app/img/icons/treatmentButton2.png'

// Fake Images
import placasDentales from '@/app/img/work/placas-dentales.webp'

// Real Images
import endodonciaDental from '@/app/img/work/endodoncia.jpg'
import disenoSonrisaImg from '@/app/img/work/DiseñoSonrisa.png'
import blanqueamientoImg from '@/app/img/work/blanqueamiento.jpg'
import implantesImg from '@/app/img/work/implantes.png'
import rehabilitacion from '@/app/img/work/rehabilitacion.png'
import traumatismo from '@/app/img/work/traumatismo.png'
import ortodonciaImg from '@/app/img/work/ortodoncia.png'
import limpiezaPeriodontal from '@/app/img/work/limpiezaPeriodontal.jpg'
import odontopediatria from '@/app/img/work/odontopediatria.png'


export const WorkContent = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    // const navigateToWhatsApp = () => {
    //     const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
    //     const message = encodeURIComponent("Hola, me gustaria hacer una consulta...")

    //     window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    // }

    
    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Descubrí lo que hacemos cada día.</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Explorá Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Díario.</span></h1>

            <article className="relative md:w-[80%] mx-auto mt-20">
                <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                    <Marquee speed={80} gradient={false} direction="left">
                        {peopleOpinions.map((item, index) => (
                            <div key={index} className="md:w-[500px] w-[350px] md:min-h-40 min-h-52 bg-zinc-50 rounded-xl mx-3 md:p-5 p-3">
                                <div className="flex md:flex-row flex-col md:gap-4 gap-1 md:mb-0 mb-5 items-center">
                                    <h2 className={`font-semibold md:text-lg flex items-center gap-2 ${montserrat.className}`}>Reseña de Google <FcGoogle /> </h2>
                                    <div className="flex gap-1">
                                        {Array(5).fill(0).map((_, index) => (
                                            <RiStarSFill key={index} size={20} className="text-yellow-500"/>
                                        ))}
                                    </div>
                                </div>
                                <p className={`text-zinc-600 text-sm ${montserrat.className}`}>{item.opinion}</p>
                            </div>
                        ))}
                    </Marquee>
                <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

                <div className="flex justify-center mt-10">
                    <Link
                        target="_blank" 
                        href='https://www.google.com.ar/maps/place/Odontología+Pinasco/@-34.5500287,-58.4725496,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb7e749d648e9:0xb3390ff77985fc94!8m2!3d-34.5500331!4d-58.4699747!16s%2Fg%2F11j1js7njm?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D' 
                        className="flex items-center gap-3 border border-[#46bcc9] px-5 py-1 rounded-3xl hover:bg-zinc-100 transition-all duration-75"
                    >
                        <p className={`text-center text-zinc-800 text-sm ${montserrat.className}`}>Ver más reseñas</p>
                        <GoArrowRight size={25} className="text-[#46bcc9]"/>
                    </Link>
                </div>
            </article>

            <article className="mb-20">
                <div>
                    <TitleSection title={'Nuestros Tratamientos'}/>
                    <div className="flex md:gap-16 items-center mx-auto md:w-[50%] justify-center mt-10 flex-wrap">
                    {icons.map((item, index) => (
                        <div 
                            onClick={() => scrollToSection(item.id)}
                            key={index} 
                            className="flex flex-col items-center hover:opacity-60 md:m-0 m-5 cursor-pointer w-24 md:w-28"
                        >
                            <Image 
                                src={item.icon}
                                width={80}
                                height={80}
                                alt={item.title}
                            />
                            <p className={`text-zinc-600 text-sm mt-2 text-center ${montserrat.className}`}>
                                {item.title}
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
            </article>


            <article className="flex flex-col gap-40 mt-60">
                {infoWork.map((item, index) => (
                    <div key={index} className="bg-gradient-to-b from-white via-cyan-100 to-white w-full md:p-10 p-3">
                        <div id={item.id} className={`flex ${index%2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'} gap-10 min-h-[80vh] md:w-[80%] w-[95%] mx-auto`}>
                            <div className="md:w-1/2">
                                <h2 className={`md:text-5xl text-3xl mb-10 ${bebas.className}`}>{item.title}</h2>
                                <p className={`${montserrat.className}`}>{item.description}</p>
                                {item.titleText1 && (
                                    <div className="mt-10">
                                        <h3 className={`font-semibold md:text-xl text-lg ${montserrat.className}`}>{item.titleText1}</h3>
                                        <ol className="list-disc mt-3 pl-7">
                                            {item.text1.map((text, index) => (
                                                <li key={index} className={`${montserrat.className}`}>{text}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                                {item.titleText2 && (
                                    <div className="mt-10">
                                        <h3 className={`font-semibold md:text-xl text-lg ${montserrat.className}`}>{item.titleText2}</h3>
                                        <ul className="list-disc mt-3 pl-7">
                                            {item.text2.map((text, index) => (
                                                <li key={index} className={`${montserrat.className}`}>{text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {item.titleText3 && (
                                    <div className="mt-10">
                                        <h3 className={`font-semibold md:text-xl text-lg ${montserrat.className}`}>{item.titleText3}</h3>
                                        <ul className="list-disc mt-3 pl-7">
                                            {item.text3.map((text, index) => (
                                                <li key={index} className={`${montserrat.className}`}>{text}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <div className="mt-10">
                                    {/* <button
                                        onClick={() => navigateToWhatsApp()} 
                                        className=" bg-[#00a2af] bg-opacity-70 px-4 py-2 rounded-full flex items-center gap-2 hover:gap-5 transition-all duration-150"
                                    >
                                        <p className={`${montserrat.className}   text-zinc-100`}>{item.btnContent}</p>
                                        <GoArrowRight size={25} className="text-zinc-100"/>
                                    </button> */}
                                    <Image
                                        src={buttonTreatments}
                                        alt="pinasco button"
                                        width={400}
                                        height={100}
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <Image 
                                    src={item.img || ''}
                                    alt={item.title}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </div>
    )
}


const icons = [
    {
        id: 'estetica',
        title: "Estética y Diseño de Sonrisa",
        icon: esteticaDental
    },
    {
        id: 'implantes',
        title: "Implantes y Extracciones Dentales",
        icon: implantes
    },
    {
        id: 'protesis',
        title: "Rehabilitación Oral Integral",
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
        title: "Limpieza Periodontal",
        icon: limpieza
    },
    {
        id: 'placa',
        title: "Placa Miorrelajante",
        icon: placa
    },
    {
        id: 'traumatismos',
        title: "Traumatismos Dentales",
        icon: traumatismos
    },
    {
        id: 'ortodoncia',
        title: "Ortodoncia",
        icon: ortodoncia
    },
    {
        id: 'odontopediatria',
        title: "Odontopediatría",
        icon: odontopediatriaicon
    },
]

const infoWork = [
    {
        id: 'estetica',
        title: 'Estetica y Diseño de Sonrisa',
        description: 'El diseño de sonrisa es un tratamiento personalizado que combina técnicas de estética dental para mejorar la forma, el color y la alineación de tus piezas dentarias, logrando una sonrisa armónica y acorde a tus facciones. En Pinasco Odontología, utilizamos tecnología avanzada y un enfoque detallado para crear la sonrisa perfecta para ti.',
        titleText1: '¿En qué consiste el Diseño de Sonrisa?',
        text1: [
            'Evaluación inicial: Analizamos tu sonrisa, estructura facial y necesidades especificas.',
            'Plan personalizado: Diseñamos una propuesta digital o física para visualizar el resultado antes del tratamiento.',
            'Procedimientos personalizados: Incluye blanqueamiento, carillas, resinas, ortodoncia o contorneado dental según el caso.'
        ],
        text2: [
            'Mejora la simetría y estética de tu sonrisa.',
            'Incrementa tu confianza y autoestima.',
            'Resultados naturales y duraderos.'
        ],
        img: disenoSonrisaImg,
        btnContent: 'Quiero mi Diseño de Sonrisa'
    },
    {
        id: 'implantes',
        title: 'Implantes y Extracciones Dentales',
        description: 'Si perdiste una pieza dental y querés recuperar la estética y funcionalidad de tu sonrisa, los implantes dentales son la mejor solución. En Pinasco Odontología, trabajamos con tecnología avanzada y materiales de alta calidad para garantizar resultados seguros y duraderos.',
        titleText1: '¿Cómo es el procedimiento?',
        text1: [
            'Evaluación y planificación personalizada: Analizamos tu caso con estudios específicos para diseñar un plan de tratamiento adaptado a tus necesidades.',
            'Colocación del implante: Se inserta quirúrgicamente un tornillo de titanio en el hueso, que actuará como la raíz del diente.',
            'Cicatrización y osteointegración: Esperamos el tiempo necesario para que el implante se fije correctamente al hueso.',
            'Colocación de la corona definitiva: Diseñamos una prótesis personalizada para que tu nueva pieza luzca y funcione como un diente natural.'
        ],
        titleText2: 'Beneficios de los implantes dentales',
        text2: [
            'Recuperás la funcionalidad y estética de tu sonrisa.',
            'Evitás la pérdida ósea y el desplazamiento de los dientes vecinos.',
            'Son una solución fija y duradera, sin necesidad de adhesivos.',
            'Brindan comodidad y confianza para hablar y masticar con naturalidad.'
        ],
        img: implantesImg,
        btnContent: 'Quiero mi Implante Dental'
    },
    {
        id: 'protesis',
        title: 'Rehabilitación Oral Integral',
        description: 'La rehabilitación oral es un tratamiento integral que busca restaurar la funcionalidad, estética y salud de tu boca. En Pinasco Odontología, ofrecemos soluciones personalizadas para pacientes que han perdido piezas dentales, tienen desgaste severo o problemas funcionales en su sonrisa.',
        titleText1: '¿Qué Incluye la Rehabilitación Oral?',
        text1: [
            'Diagnóstico completo: Evaluamos piezas dentarias, encías y articulación temporomandibular (ATM).',
            'Plan de tratamiento: Combinamos diversas especialidades para lograr un resultado óptimo.',
            'Procedimientos comunes: Prótesis dentales (fijas o removibles), Coronas y puentes, Implantes dentales , Tratamientos de encías, Ajustes de mordidas.'
        ],
        titleText2: 'Beneficios:',
        text2: [
            'Recuperás la funcionalidad para masticar y hablar correctamente.',
            'Mejora la estética de tu sonrisa.',
            'Previene problemas futuros como el desgaste dental o el desplazamiento de piezas dentarias.'
        ],
        img: rehabilitacion,
        btnContent: 'Quiero una Rehabilitación Oral'
    },
    {
        id: 'blanqueamiento',
        title: 'Blanqueamiento',
        description: 'El blanqueamiento dental es un procedimiento estético que ayuda a aclarar el color de las piezas dentarias, eliminando manchas o decoloraciones causadas por alimentos, bebidas, tabaco o el paso del tiempo. En Pinasco Odontología, ofrecemos tratamientos seguros y efectivos para que logres una sonrisa más blanca y brillante.',
        titleText1: 'Beneficios del Blanqueamiento Dental:',
        text1: [
            'Mejora la estética de tu sonrisa.',
            'Incrementa la confianza y seguridad personal.',
            'Es un procedimiento rápido y no invasivo.'
        ],
        titleText2: 'Tipos de Blanqueamiento:',
        text2: [
            'En consultorio: Utilizamos agentes blanqueadores de alta calidad y tecnología avanzada para resultados inmediatos.',
            'En casa: Con férulas personalizadas y geles profesionales, ideal para quienes prefieren mayor comodidad.'
        ],
        img: blanqueamientoImg,
        btnContent: 'Quiero mi Blanqueamiento Dental'
    },
    {
        id: 'endodoncia',
        title: 'Endodoncia',
        description: 'La endodoncia, también conocida como tratamiento de conducto, es un procedimiento dental especializado que tiene como objetivo salvar piezas dentarias gravemente afectados por caries profundas, infecciones o traumatismos. Este tratamiento consiste en la eliminación de la pulpa dental, que es el tejido blando que se encuentra en el interior de la pieza dentaria, y que puede infectarse o inflamarse de manera irreversible debido a bacterias que llegan a través de cavidades o fisuras. Después de conformar el conducto radicular, se procede a sellarlo para evitar futuras infecciones y se restaura la forma y funcionalidad del pieza dentaria.\n\nEste procedimiento es esencial para mantener las piezas dentarias en boca y evitar su extracción. En Pinasco Odontología, nuestro equipo altamente capacitado utiliza tecnologías de vanguardia para realizar la endodoncia de forma indolora y efectiva, garantizando que la pieza dentaria afectada pueda seguir cumpliendo su función sin comprometer la salud general de tu boca.',
        img: endodonciaDental,
        btnContent: 'Necesito una Endodoncia'
    },
    {
        id: 'limpieza',
        title: 'Limpieza Periodontal',
        description: 'La limpieza periodontal es un tratamiento especializado que se lleva a cabo para eliminar la placa y el sarro que se acumulan tanto sobre como debajo de las encías. Si bien una limpieza dental regular puede ser suficiente para mantener una buena higiene, en casos de enfermedades periodontales, como la gingivitis o la periodontitis, se requiere un procedimiento más profundo. Este tratamiento implica no solo la limpieza de la superficie dental, sino también el raspado y alisado de las raíces para eliminar las bacterias y las toxinas que afectan las encías y el hueso que soporta las piezas dentarias.\n\nEn casos más avanzados, la limpieza periodontal también puede incluir procedimientos quirúrgicos para restaurar la salud gingival. El tratamiento previene la pérdida de piezas dentarias y otros problemas bucales graves, mejorando la salud general de las encías y reduciendo el riesgo de complicaciones futuras. Con la limpieza periodontal, se busca recuperar la salud oral y evitar que las infecciones avancen hacia niveles más críticos.',
        img: limpiezaPeriodontal,
        btnContent: 'Necesito una Limpieza Periodontal'
    },
    {
        id: 'placa',
        title: 'Placa Miorrelajante',
        description: 'Las placas miorrelajantes son dispositivos dentales personalizados que se utilizan para tratar diversos trastornos relacionados con la articulación temporomandibular (ATM) y para aliviar los efectos del bruxismo. El bruxismo es una condición en la que las personas rechinan o aprietan las piezas dentarias involuntariamente, lo que puede causar desgaste dental, dolor en los músculos faciales y en las articulaciones, y molestias en el cuello y la cabeza. La placa miorrelajante se coloca generalmente durante el sueño para evitar el contacto excesivo entre las piezas dentarias y prevenir los efectos del bruxismo.\n\nEste tratamiento también es muy efectivo para aliviar los dolores relacionados con la disfunción de la ATM, que es cuando la mandíbula no se mueve correctamente, causando dolor o rigidez. Las placas dentales ayudan a realinear la mandíbula y a reducir la presión en los músculos de la cara, lo que puede proporcionar un alivio significativo. En Pinasco Odontología, ofrecemos placas miorrelajantes personalizadas que se ajustan perfectamente a la estructura dental de cada paciente, asegurando una solución cómoda y eficaz para el alivio del dolor y la mejora de la salud bucal.',
        img: placasDentales,
        btnContent: 'Necesito una Placa Miorrelajante'
    },
    {
        id: 'traumatismos',
        title: 'Traumatismos Dentales',
        description: 'Los traumatismos dentales son lesiones ocasionadas por golpes o accidentes que pueden afectar las piezas dentarias, encías, labios o estructuras óseas. En Pinasco Odontología, ofrecemos atención inmediata y especializada para tratar este tipo de emergencias y preservar la salud y estética de tu sonrisa.',
        titleText1: 'Tipos de traumatismos más comunes:',
        text1: [
            'Fracturas de piezas dentarias: Roturas parciales o completas de las piezas dentarias.',
            'Avulsión dental: Pérdida total de una pieza dentaria debido a un impacto.',
            'Luxación dental: Movimiento o desplazamiento de una pieza dentaria fuera de su posición normal.',
            'Lesiones en tejidos blandos: Cortes o heridas en labios, encías o lengua.'
        ],
        titleText2: '¿Qué hacer en caso de traumatismo dental?',
        text2: [
            'Diente fracturado: Enjuaga la boca con agua tibia y guarda el fragmento en leche o solución salina para llevarlo al consultorio.',
            'Diente avulsionado: Si es posible, tomar la pieza dentaria por la corona, enjuagarlo bajo chorro de agua y sin tocar la raíz colocarlo en su posición.',
            'Dolor o sangrado: Aplica compresas frías en la zona afectada y busca atención profesional.'
        ],
        titleText3: 'Tratamientos disponibles:',
        text3: [
            'Restauraciones con resinas o coronas.',
            'Reimplante dental en casos de avulsión.',
            'Tratamiento de conducto si hay daño en la raíz.',
            'Cirugía oferente si el hueso o tejidos blandos están comprometidos.'
        ],
        img: traumatismo,
        btnContent: 'Tengo un Traumatismo Dental'
    },
    {
        id: 'ortodoncia',
        title: 'Ortodoncia',
        description: 'La ortodoncia es una especialidad de la odontología que se encarga de corregir la posición de las piezas dentarias y las estructuras óseas de la mandíbula para mejorar la funcionalidad y la estética de la sonrisa. Utilizando dispositivos como brackets, alineadores invisibles o retenedores, el tratamiento ortodóntico ayuda a resolver problemas como piezas dentarias en mala posicion, sobremordidas, maloclusión y espacios entre piezas. En Pinasco Odontología, ofrecemos soluciones personalizadas que se adaptan a las necesidades de cada paciente, garantizando una sonrisa más saludable y armoniosa.',
        titleText1: 'Tratamientos con los que trabajamos:',
        text1: [
            'Ortodoncia convencional',
            'Alineadores invisibles'
        ],
        img: ortodonciaImg,
        btnContent: 'Necesito Ortodoncia'
    },
    {
        id: 'odontopediatria',
        title: 'Odontopediatría',
        description: 'En Pinasco Odontología, sabemos lo importante que es generar una experiencia positiva en los más pequeños. Nuestro enfoque en odontopediatría está basado en la paciencia, el cuidado y la prevención, para que cada visita sea una experiencia agradable y libre de miedo.',
        titleText1: '¿Cómo trabajamos con los niños?',
        text1: [
            '✅ Adaptación y confianza: Nos tomamos el tiempo necesario para que los niños se sientan cómodos y seguros.',
            '✅ Prevención y educación: Enseñamos hábitos saludables desde la infancia para evitar problemas futuros.',
            '✅ Tratamientos sin miedo: Aplicamos técnicas amigables y minimizamos la incomodidad en cada procedimiento.',
            '✅ Cuidado integral: Desde la primera consulta hasta el recambio dentario, acompañamos cada etapa del crecimiento.'
        ],
        text2: [
            '🌟 Cuidar la sonrisa de los más pequeños es nuestra misión. Si querés que tu hijo tenga una experiencia positiva en el dentista, en Pinasco Odontología estamos para ayudar.'
        ],
        img: odontopediatria,
        btnContent: 'Agendar Consulta'
    }
];

const peopleOpinions = [
    {
        name: "Reseña de Google",
        opinion: "Excelente atención y calidez humana, son lo más!👌"
    },
    {
        name: "Reseña de Google",
        opinion: "Muy buena atención y dedicación! Prolijos y detallistas. Excelente!! Muy recomendable."
    },
    {
        name: "Reseña de Google",
        opinion: "Un espectáculo, muy atentas, muy cálidas. Te explican todo, me hice una limpieza y no me dolio nada. Se nota que hacen las cosas con amor <3 y que les gustan su trabajo. 100% recomendado."
    },
];