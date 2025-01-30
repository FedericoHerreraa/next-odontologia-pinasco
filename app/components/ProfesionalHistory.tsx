
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

            <section className="flex items-center flex-col justify-center gap-10 w-[80%] mx-auto mt-20">
                <div className="flex items-center gap-3 bg-zinc-100 p-5 rounded-lg">
                    <Image
                        src={Micaela}
                        alt="Micaela"
                        width={350}
                        className="rounded-lg shadow-lg"
                    />
                    <p>
                        <strong className='text-2xl'>Micaela Pinasco</strong>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eius
                        impedit iusto, labore eveniet officia ad delectus magnam sequi at
                        voluptatum, cum expedita? Provident dolore deleniti harum vitae magni.
                        Obcaecati.
                    </p>
                </div>
                <div className="flex items-center gap-3 text-sm bg-zinc-100 p-5 rounded-lg">
                    <p>
                        <strong className='text-2xl'>Laura Pinasco</strong>
                        <br />
                        Odontóloga graduada de la Facultad de Odontología de la Universidad de
                        Buenos Aires, Argentina
                        <br />
                        ▪ Especialista en Endodoncia, título otorgado por Ministério de Salud
                        <br />
                        ▪ Especialista en Endodoncia, título otorgado por la Facultad de
                        Odontología de la Universidad de Buenos Aires
                        <br />
                        ▪ Docente autorizada de la Facultad de Odontología de la Universidad de
                        Buenos Aires
                        <br />
                        ▪ Ex Profesora adjunta regular de la Cátedra de Endodoncia de la Facultad
                        de Odontología de la Universidad de Buenos Aires
                        <br />
                        ▪ Ex Co-directora de la Carrera de Especialista en Endodoncia de la
                        Facultad de Odontología de la Universidad de Buenos Aires
                        <br />
                        ▪ Ex-Coordinadora de la Unidad de Traumatismos Dentarios Facultad de
                        Odontología de la Universidad de Buenos Aires
                        <br />
                        ▪ Dictante de cursos de postgrado de la F.O.U.B.A.
                        <br />
                        ▪ Dictante de cursos de especialidad en el país y en el exterior
                        <br />
                        ▪ Jurado de concursos para cargos regulares de la Facultad de Odontología
                        de la Universidad de Buenos Aires
                        <br />
                        ▪ Autora de publicaciones referidas a la especialidad en revistas
                        nacionales y en el exterior
                        <br />
                        ▪ Participación en campañas de extensión universitaria
                        <br />
                        ▪ Organizadora de PENN ENDO GLOBAL ARGENTINA 2018
                        <br />
                        ▪ Dictado de clases y participación académica en la Universidad
                        Complutense de Madrid en el marco de movilidad académica internacional
                        2018
                        <br />
                        ▪ Coautora en premios de trabajos de investigación presentados en el país
                        y en el exterior
                    </p>
                    <Image
                        src={Laura}
                        alt="Laura Pinasco"
                        width={350}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </section>
        </div>
    )
}