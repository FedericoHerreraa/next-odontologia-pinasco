'use client';
import { bebas, montserrat } from "@/app/fonts/fonts"


export const HistoryContent = () => {

    return (
        <section className="container mx-auto px-4  h-full">
      
            <div className="text-center mb-8">
            <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Quiénes somos</p>
                <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Conocenos Un <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Poco Más</span></h1>
            </div>

            
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
                
                <div className="flex flex-col gap-4">
                    <div className="text-center p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#00a2af]">Cómo trabajamos</h3>
                        <p className="text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem autem illo accusamus repellat a, omnis illum provident aliquid, molestias architecto, officia ducimus dolore neque pariatur voluptate quibusdam eius quis porro.
                        </p>
                    </div>
                    <div className="text-center p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-[#00a2af]">Experiencia profesional</h3>
                        <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio veniam debitis, ex accusantium provident iste totam at qui perspiciatis molestias hic, delectus maiores asperiores facere id voluptates, dignissimos ad sint.
                        </p>
                    </div>
                </div>

                
                <div className="w-full aspect-video bg-black flex items-center justify-center text-gray-500 text-xl h-full">
                <video
                    className="w-full h-full"
                    controls
                    autoPlay
                    muted
                    loop
                    >
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                </div>

            
                <div className="flex flex-col gap-4">
                <div className="text-center p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#00a2af]">Nuestros valores</h3>
                    <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus doloremque eligendi temporibus incidunt dolor repellat, odio, soluta, inventore eos doloribus eum vero dolore magni vel ea est magnam nemo!
                    </p>
                </div>
                <div className="text-center p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#00a2af]">Enfoque en el cliente</h3>
                    <p className="text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab unde ducimus vero, eligendi exercitationem reprehenderit sit perspiciatis aut corrupti et suscipit consequuntur voluptatibus consequatur ullam quae officia saepe, a dolores.
                    </p>
                </div>
                </div>
            </div>
        </section>
        
    );
};

