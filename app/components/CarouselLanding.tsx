
import Marquee from "react-fast-marquee"


export const CarouselLanding = () => {
    return (
        <div className="mb-20 w-[75%] mx-auto shadow-xl px-2 py-4 rounded-2xl bg-zinc-100">
            <Marquee speed={100} gradient={false}>
                {treatmentNames.map((name, index) => (
                    <div key={index} className="flex items-center ">
                        <p className="font-bold mx-5 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">{name}</p>
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