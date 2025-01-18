'use client'


import { bebas, montserrat } from "@/app/fonts/fonts"
import { TitleSection } from "./TitleSection"
import Marquee from "react-fast-marquee"
import Image from "next/image"

import { RiStarSFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

// Icons
import esteticaDental from '@/app/img/estetica.png'
import protesis from '@/app/img/protesis.png'
import blanqueamiento from '@/app/img/blanqueamiento.png'
import endodoncia from '@/app/img/endodoncia.png'
import limpieza from '@/app/img/limpieza.png'
import peridontal from '@/app/img/peridontal.png'
import ortodoncia from '@/app/img/ortodoncia.png'
import placa from '@/app/img/placa.png'
import implantes from '@/app/img/implantes.png'

// Images
import endodonciaDental from '@/app/img/work/endodoncia.jpg'
import limpiezaDental from '@/app/img/work/limpieza-dental.jpg'
import placasDentales from '@/app/img/work/placas-dentales.webp'



// Real Images
import disenoSonrisaImg from '@/app/img/work/DiseñoSonrisa.png'
import blanqueamientoImg from '@/app/img/work/blanqueamiento.jpg'
import implantesImg from '@/app/img/work/implantes.jpg'
import rehabilitacion from '@/app/img/work/rehabilitacion.png'
import traumatismo from '@/app/img/work/traumatismo.png'
import ortodonciaImg from '@/app/img/work/ortodoncia.png'

export const WorkContent = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Descubre lo que hacemos cada día.</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Explora Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Diario.</span></h1>

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
                            </div>
                            <div className="md:w-1/2 ">
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
        title: "Estetica y Diseño de Sonrisa",
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
        icon: peridontal
    },
    {
        id: 'ortodoncia',
        title: "Ortodoncia",
        icon: ortodoncia
    },
]

const infoWork = [
    {
        id: 'estetica',
        title: 'Estetica y Diseño de Sonrisa',
        description: 'El diseño de sonrisa es un tratamiento personalizado que combina técnicas de estética dental para mejorar la forma, el color y la alineación de tus dientes, logrando una sonrisa armónica y acorde a tus facciones. En Pinasco Odontología, utilizamos tecnología avanzada y un enfoque detallado para crear la sonrisa perfecta para ti.',
        titleText1: '¿En que consiste el Diseño de Sonrisa?',
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
        img: disenoSonrisaImg
    },
    {
        id: 'implantes',
        title: 'Implantes y Extracciones Dentales',
        description: 'Los implantes y extracciones dentales son procedimientos clave para mantener la funcionalidad y la salud bucal. Las extracciones dentales se realizan cuando un diente está dañado irreversiblemente, genera dolor o representa un riesgo para los dientes vecinos, incluyendo casos como muelas del juicio o caries severas. Por otro lado, los implantes dentales son una solución permanente para reemplazar dientes perdidos, mediante la colocación de tornillos de titanio que actúan como raíces artificiales, sobre los que se fijan coronas o prótesis.',
        img: implantesImg
    },
    {
        id: 'protesis',
        title: 'Rehabilitación Oral Integral',
        description: 'La rehabilitación oral es un tratamiento integral que busca restaurar la funcionalidad, estética y salud de tu boca. En Pinasco Odontología, ofrecemos soluciones personalizadas para pacientes que han perdido piezas dentales, tienen desgaste severo o problemas funcionales en su sonrisa.',
        titleText1: '¿Que Incluye la Rehabilitación Oral?',
        text1: [
            'Diagnóstico completo: Evaluamos dientes, encías y articulación temporomandibular (ATM).',
            'Plan de tratamiento: Combinamos diversas especialidades para lograr un resultado óptimo.',
            'Procedimientos comunes: Prótesis dentales (fijas o removibles), Coronas y puentes, Implantes dentales , Tratamientos de encias, Ajustes de mordidas.'
        ],
        titleText2: 'Beneficios:',
        text2: [
            'Recuperas la funcionalidad para masticar y hablar correctamente.',
            'Mejora la estética de tu sonrisa.',
            'Previene problemas futuros como el desgaste dental o el desplaz + into de dientes.'
        ],
        img: rehabilitacion
    },
    {
        id: 'blanqueamiento',
        title: 'Blanqueamiento',
        description: 'El blanqueamiento dental es un procedimiento estético que ayuda a aclarar el color de los dientes, eliminando manchas o decoloraciones causadas por alimentos, bebidas, tabaco o el paso del tiempo. En Pinasco Odontología, ofrecemos tratamientos seguros y efectivos para que logres una sonrisa más blanca y brillante.',
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
        img: blanqueamientoImg
    },
    {
        id: 'endodoncia',
        title: 'Endodoncia',
        description: 'La endodoncia, también conocida como tratamiento de conducto, es un procedimiento dental especializado que tiene como objetivo salvar dientes gravemente afectados por caries profundas, infecciones o traumatismos. Este tratamiento consiste en la eliminación de la pulpa dental, que es el tejido blando que se encuentra en el interior del diente, y que puede infectarse debido a bacterias que llegan a través de cavidades o fisuras. Después de limpiar el conducto radicular, se procede a sellarlo para evitar futuras infecciones y se coloca una corona para restaurar la forma y funcionalidad del diente.\n\nEste procedimiento es esencial para mantener los dientes naturales en la boca y evitar su extracción. En Pinasco Odontología, nuestro equipo altamente capacitado utiliza tecnologías de vanguardia para realizar la endodoncia de forma indolora y efectiva, garantizando que el diente afectado pueda seguir cumpliendo su función sin comprometer la salud general de tu boca.',
        img: endodonciaDental
    },
    {
        id: 'limpieza',
        title: 'Limpieza Periodontal',
        description: 'La limpieza periodontal es un tratamiento especializado que se lleva a cabo para eliminar la placa y el sarro que se acumulan tanto sobre como debajo de las encías. Si bien una limpieza dental regular puede ser suficiente para mantener una buena higiene, en casos de enfermedades periodontales, como la gingivitis o la periodontitis, se requiere un procedimiento más profundo. Este tratamiento implica no solo la limpieza de la superficie dental, sino también el raspado y alisado de las raíces para eliminar las bacterias y las toxinas que afectan las encías y el hueso que soporta los dientes.\n\nEn casos más avanzados, la limpieza periodontal también puede incluir procedimientos quirúrgicos para restaurar la salud gingival. El tratamiento previene la pérdida de dientes y otros problemas bucales graves, mejorando la salud general de las encías y reduciendo el riesgo de complicaciones futuras. Con la limpieza periodontal, se busca recuperar la salud oral y evitar que las infecciones avancen hacia niveles más críticos.',
        img: limpiezaDental
    },
    {
        id: 'placa',
        title: 'Placa Miorrelajante',
        description: 'Las placas miorrelajantes son dispositivos dentales personalizados que se utilizan para tratar diversos trastornos relacionados con la articulación temporomandibular (ATM) y para aliviar los efectos del bruxismo. El bruxismo es una condición en la que las personas rechinan o aprietan los dientes involuntariamente, lo que puede causar desgaste dental, dolor en los músculos faciales y en las articulaciones, y molestias en el cuello y la cabeza. La placa miorrelajante se coloca generalmente durante el sueño para evitar el contacto excesivo entre los dientes y prevenir los efectos del bruxismo.\n\nEste tratamiento también es muy efectivo para aliviar los dolores relacionados con la disfunción de la ATM, que es cuando la mandíbula no se mueve correctamente, causando dolor o rigidez. Las placas dentales ayudan a realinear la mandíbula y a reducir la presión en los músculos de la cara, lo que puede proporcionar un alivio significativo. En Pinasco Odontología, ofrecemos placas miorrelajantes personalizadas que se ajustan perfectamente a la estructura dental de cada paciente, asegurando una solución cómoda y eficaz para el alivio del dolor y la mejora de la salud bucal.',
        img: placasDentales
    },
    {
        id: 'traumatismos',
        title: 'Traumatismos Dentales',
        description: 'Los traumatismos dentales son lesiones ocasionadas por golpes o accidentes que pueden afectar los dientes, encías, labios o estructuras óseas. En Pinasco Odontología, ofrecemos atención inmediata y especializada para tratar este tipo de emergencias y preservar la salud y estética de tu sonrisa.',
        titleText1: 'Tipos de traumatismos mas comunes:',
        text1: [
            'Fracturas dentales: Roturas parciales o completas de los dientes.',
            'Avulsión dental: Pérdida total de un diente debido a un impacto.',
            'Luxación dental: Movimiento o desplazamiento de un diente fuera de su posición normal.',
            'Lesiones en tejidos blandos: Cortes o heridas en labios, encías o lengua.'
        ],
        titleText2: '¿Que hacer en caso de traumatismo dental?',
        text2: [
            'Diente fracturado: Enjuaga la boca con agua tibia y guarda el fragmento en leche o solución salina para llevarlo al consultorio.',
            'Diente avulsionado: Si es posible, colócalo en su lugar sin tocar la raíz o consérvalo en leche y acude de inmediato al dentista.',
            'Dolor o sangrado: Aplica compresas frías en la zona afectada y busca atención profesional.'
        ],
        titleText3: 'Tratamientos disponibles:',
        text3: [
            'Restauraciones con resinas o coronas.',
            'Reimplante dental en casos de avulsión.',
            'Tratamiento de conducto si hay daño en la raíz.',
            'Cirugía oferente si el hueso o tejidos blandos están comprometidos.'
        ],
        img: traumatismo
    },
    {
        id: 'ortodoncia',
        title: 'Ortodoncia',
        description: 'La ortodoncia es una especialidad de la odontología que se encarga de corregir la posición de los dientes y las estructuras óseas de la mandíbula para mejorar la funcionalidad y la estética de la sonrisa. Utilizando dispositivos como brackets, alineadores invisibles o retenedores, el tratamiento ortodóntico ayuda a resolver problemas como dientes torcidos, sobremordidas, maloclusión y espacios entre dientes. En Pinasco Odontología, ofrecemos soluciones personalizadas que se adaptan a las necesidades de cada paciente, garantizando una sonrisa más saludable y armoniosa.',
        titleText1: 'Tratamientos con los que trabajamos:',
        text1: [
            'Ortodoncia convencional',
            'Alineadores invisibles'
        ],
        img: ortodonciaImg
      }
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