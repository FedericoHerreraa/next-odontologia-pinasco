
import { bebas, montserrat } from '@/app/fonts/fonts'
import Image from 'next/image'
import Micaela from '@/app/img/history/Micaela.png'
import Laura from '@/app/img/history/Laura.png'

export const ProfesionalHistory = () => {
    return (
        <div>
            <div className="text-center mb-8">
                <p className={`text-center mt-10 mb-3 text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Conoce a nuestras profesionales.</p>
                <h1 className={`md:text-6xl text-4xl text-black text-center md:mx-0 mx-2 ${bebas.className}`}>Nuestra historia <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">Profesional</span></h1>
            </div>

            <section className='flex items-center justify-center gap-7 w-[80%] mx-auto mt-20'>
                <div className='flex items-center gap-3'>
                    <Image
                        src={Micaela}
                        alt='Micaela'
                        width={350}
                        className='rounded-lg shadow-lg'
                    />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eius impedit iusto, labore eveniet officia ad delectus magnam sequi at voluptatum, cum expedita? Provident dolore deleniti harum vitae magni. Obcaecati.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id dolor delectus culpa est accusantium. Officia incidunt totam perferendis, quia explicabo impedit esse aspernatur iusto ab, inventore tempore molestiae, suscipit ullam.</p>
                    <Image
                        src={Laura}
                        alt='Micaela'
                        width={350}
                        className='rounded-lg shadow-lg'
                    />
                </div>
            </section>
        </div>
    )
}