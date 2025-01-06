
import Marquee from "react-fast-marquee"
import { montserrat } from '@/app/fonts/fonts'


export const CarouselLanding = () => {
    return (
        <div className="mb-20 md:w-[75%] w-[90%] mx-auto shadow-xl md:px-2 px-1 md:py-4 py-2 rounded-2xl bg-zinc-100">
            <Marquee speed={70} gradient={false}>
                {treatmentNames.map((name, index) => (
                    <div key={index} className="flex items-center">
                        <p className={`font-bold mx-5 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent md:text-base text-sm ${montserrat.className}`}>{name}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}


const treatmentNames = [
    'Estetica Dental',
    'Prótesis',
    'Blanqueamiento',
    'Endodoncia',
    'Limpieza',
    'Peridontal',
    'Bucomaxilofacial',
    'Placa',
    'Traumatismos Dentarios'
];