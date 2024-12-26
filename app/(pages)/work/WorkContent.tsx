
import { bebas, montserrat } from "@/app/fonts/fonts"
import { TitleSection } from "./TitleSection"
import Marquee from "react-fast-marquee"


export const WorkContent = () => {
    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Que hacemos en el dia a dia</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center ${bebas.className}`}>Mira Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Diario.</span></h1>

            <div className="relative w-[80%] mx-auto mt-20">
                <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                    <Marquee speed={80} gradient={false} direction="left">
                        {peopleOpinions.map((item, index) => (
                        <div key={index} className="w-[500px] h-40 bg-zinc-100 rounded-xl mx-3 p-5">
                            <h2 className="font-semibold text-lg">{item.name}</h2>
                            <p className="text-zinc-600">{item.opinion}</p>
                        </div>
                        ))}
                    </Marquee>
                <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
            </div>

            <section className="mb-20">
                {info.map((item, index) => (
                    <div key={index}>
                        <TitleSection title={item.title}/>
                        <div className={`flex ${index%2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-5 mt-10 w-[85%] mx-auto`}>
                            <div className="w-1/2 flex flex-col">
                                <h2 className="text-3xl">Tratamientos</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident rem quam esse exercitationem. Est odit architecto, veritatis ea rem temporibus necessitatibus, distinctio vitae nemo aut iusto veniam facere? Molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a aliquam maiores reiciendis. Nemo culpa, animi voluptate quaerat, esse mollitia et, modi maxime nulla necessitatibus est obcaecati eligendi? Libero, ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque ex. Placeat, quae nulla quisquam saepe dolore beatae corrupti debitis quis excepturi iusto qui in dicta consequuntur voluptatum sed facere!</p>
                            </div>
                            <div className="w-1/2 h-72 bg-zinc-200 rounded-xl">
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
        name: "Lucía Fernández",
        opinion: "La atención fue excelente, muy profesional y me explicaron todo con claridad. ¡Estoy muy contenta con los resultados!"
    },
    {
        name: "Martín Gómez",
        opinion: "Tenía un poco de miedo, pero todo salió perfecto. El personal es muy amable y el consultorio está impecable. Lo recomiendo."
    },
    {
        name: "Sofía Ramírez",
        opinion: "Es el mejor lugar al que he ido, se nota que se preocupan por sus pacientes. El trato fue increíble."
    },
    {
        name: "Joaquín López",
        opinion: "Todo el proceso fue rápido y eficiente. Me gustó mucho el ambiente relajado y la dedicación del equipo."
    },
    {
        name: "Valeria Sánchez",
        opinion: "Los resultados superaron mis expectativas, y eso que soy bastante exigente. Sin duda volveré para mis controles."
    },
];