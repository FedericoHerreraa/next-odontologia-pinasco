
import { bebas, montserrat } from "@/app/fonts/fonts"
import { TitleSection } from "./TitleSection"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import dentist from '@/app/img/limpiarse-dientes.jpg'
import { RiStarSFill } from "react-icons/ri";


export const WorkContent = () => {
    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Que hacemos en el dia a dia</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center ${bebas.className}`}>Mira Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Diario.</span></h1>

            <div className="relative md:w-[80%] mx-auto mt-20">
                <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                    <Marquee speed={80} gradient={false} direction="left">
                        {peopleOpinions.map((item, index) => (
                        <div key={index} className="md:w-[500px] w-[250px] h-40 bg-zinc-100 rounded-xl mx-3 p-5">
                            <div className="flex gap-4 items-center">
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
                {info.map((item, index) => (
                    <div key={index}>
                        <TitleSection title={item.title}/>
                        <div className={`flex md:${index%2 === 0 ? 'flex-row' : 'flex-row-reverse'} flex-col gap-5 mt-10 w-[85%] mx-auto`}>
                            <div className="md:w-1/2 flex flex-col">
                                <h2 className={`md:text-2xl text-xl ${montserrat.className}`}>Tratamientos</h2>
                                <p className="md:text-base text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident rem quam esse exercitationem. Est odit architecto, veritatis ea rem temporibus necessitatibus, distinctio vitae nemo aut iusto veniam facere? Molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a aliquam maiores reiciendis. Nemo culpa, animi voluptate quaerat, esse mollitia et, modi maxime nulla necessitatibus est obcaecati eligendi? Libero, ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque ex. Placeat, quae nulla quisquam saepe dolore beatae corrupti debitis quis excepturi iusto qui in dicta consequuntur voluptatum sed facere!</p>
                            </div>  
                            <div className="md:w-1/2 min-h-72 rounded-xl">
                                <Image 
                                    alt="Dentist"
                                    src={dentist}
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

const info = [
    {
        title: "Prevención y Mantenimiento",
        description: ""
    },
    {
        title: "Odontología General y Rehabilitación",
        description: ""
    },
    {
        title: "Odontología Especializada",
        description: ""
    },
    {
        title: "Estética y Ortodoncia",
        description: ""
    },
    {
        title: "Odontología Infantil y Emergencias",
        description: ""
    },
]


const peopleOpinions = [
    {
        name: "Reseña de Google 1",
        opinion: "Excelente atención y calidez humana, son lo más ! 👌"
    },
    {
        name: "Reseña de Google 2",
        opinion: "Muy buena atención y dedicación!! Prolijos y detallistas. Excelente!! Muy recomendable."
    },
    {
        name: "Reseña de Google 3",
        opinion: "Un espectáculo, muy atentas, muy cálidas. Te explican todo, me hice una limpieza y no me dolio nada. Se nota que hacen las cosas con amor <3 y que les gustan su trabajo. 100% recomendado."
    },
];