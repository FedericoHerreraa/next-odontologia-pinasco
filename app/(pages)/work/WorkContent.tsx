
import { bebas, montserrat } from "@/app/fonts/fonts"
import { TitleSection } from "./TitleSection"

export const WorkContent = () => {
    return (
        <div className="min-h-[100vh]">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Que hacemos en el dia a dia</p>
            <h1 className={`md:text-6xl text-4xl text-black text-center ${bebas.className}`}>Mira Nuestro <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Trabajo Diario.</span></h1>
            
            <div className="w-[70%] mx-auto mt-16 text-zinc-700">
                <p>En nuestro <span className="font-bold">consultorio odontológico</span> ofrecemos una gama completa de servicios diseñados para cubrir todas las necesidades de salud dental y estética de nuestros pacientes, desde <span className="font-bold">prevención</span> y <span className="font-bold">tratamientos</span> básicos hasta <span className="font-bold">especialidades avanzadas y cuidado infantil</span>. Nuestro enfoque integral garantiza una atención personalizada, efectiva y de la más alta calidad para toda la familia, en un entorno cómodo y profesional.</p>
            </div>

            <section>
                <TitleSection title="Prevención y Mantenimiento"/>
                <div className="flex gap-5 mt-10 w-[85%] mx-auto">
                    <div className="w-1/2 flex flex-col">
                        <h2 className="text-3xl">Tratamientos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic provident rem quam esse exercitationem. Est odit architecto, veritatis ea rem temporibus necessitatibus, distinctio vitae nemo aut iusto veniam facere? Molestias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a aliquam maiores reiciendis. Nemo culpa, animi voluptate quaerat, esse mollitia et, modi maxime nulla necessitatibus est obcaecati eligendi? Libero, ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eaque ex. Placeat, quae nulla quisquam saepe dolore beatae corrupti debitis quis excepturi iusto qui in dicta consequuntur voluptatum sed facere!</p>
                    </div>
                    <div className="w-1/2 h-72 bg-zinc-200 rounded-xl">

                    </div>
                </div>
            </section>
        </div>
    )
}