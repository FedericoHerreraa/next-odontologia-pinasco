
import { bebas, montserrat } from "@/app/fonts/fonts"

export const Location = () => {
    return (
        <div className="h-[100vh] mt-40">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Encontranos ahora.</p>
            <h1 className={`md:text-6xl text-4xl text-zinc-700  text-center ${bebas.className}`}>Te Mostramos Nuestra <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Ubicacion.</span></h1>

            <section className="mt-20 flex justify-center gap-20 w-[80%] mx-auto">
                <div className="w-1/2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate veniam quis ex tempore nihil quo quidem laudantium velit et quas ullam sunt aspernatur molestias, praesentium eius, obcaecati magni atque!Lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse deleniti nisi voluptatibus accusantium? Esse laboriosam nemo officia dolores culpa sit veritatis doloremque nobis, numquam alias, reiciendis, maiores iste adipisci recusandae?. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eveniet architecto eum harum dolorem molestias necessitatibus corporis aspernatur temporibus odio nostrum ipsa nam, nemo veniam voluptatibus facere? Corrupti, modi enim.</p>
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.8013544339137!2d-58.46990501656856!3d-34.550127799144924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7e749d648e9%3A0xb3390ff77985fc94!2sOdontolog%C3%ADa%20Pinasco!5e0!3m2!1ses!2sar!4v1735304020787!5m2!1ses!2sar" 
                    width="600" 
                    height="450" 
                    className="w-1/2"
                    loading="lazy">
                </iframe>
            </section>
        </div>
    )
}