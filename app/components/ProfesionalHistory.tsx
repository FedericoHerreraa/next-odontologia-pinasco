import { bebas, montserrat } from '@/app/fonts/fonts';
import Image from 'next/image';
import Micaela from '@/app/img/history/Micaela.png';
import Laura from '@/app/img/history/Laura.png';

export const ProfesionalHistory = () => {
    return (
        <section className="w-full flex flex-col items-center py-16 bg-gradient-to-b from-white via-cyan-100 to-white">
            <div className="text-center mb-12">
                <p className={`text-zinc-500 md:text-lg text-base ${montserrat.className}`}>Conocé a nuestras profesionales</p>
                <h1 className={`md:text-6xl text-4xl font-bold text-black ${bebas.className}`}>
                    Nuestro <span className="text-[#00a2af]">Equipo Profesional</span>
                </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-12 w-[90%] md:w-[80%]">
                <div className="flex flex-col bg-white shadow-lg overflow-hidden md:w-1/2 rounded-t-[200px]">
                    <Image 
                        src={Micaela} 
                        alt="Micaela Pinasco" 
                        width={300}  
                        className="w-full rounded-t-[200px]" 
                    />
                    <div className="md:p-8 p-5">
                        <h2 className={`text-3xl font-bold text-[#00a2af] text-center ${montserrat.className}`}>Od. Micaela González Pinasco</h2>
                        <p className="text-gray-600 mt-4 text-base">
                            ▪ Odontóloga graduada en la Facultad de Odontología de la Universidad de Buenos Aires (2014).<br />
                            ▪ Formación en Implantología Oral con el Dr. Mariano Amer.<br />
                            ▪ Formación en Estética y Rehabilitación Oral en UBA, dirigida por el Dr. Carlos Zanotto.<br />
                            ▪ Ex ayudante de cátedra en Operatoria Dental en la Universidad de Buenos Aires.<br />
                            ▪ Capacitación en odontología restauradora indirecta en el Porcelain Workshop dictado por el Dr. Fernando Marcos Soto.<br />
                            ▪ Entrenamiento en rehabilitación protésica en implantes en el Titanium Workshop con el Dr. Fernando Marcos Soto.<br />
                            ▪ Curso de Estética en Sector Anterior con el Dr. Andrés Román.<br />
                            ▪ Participación en campañas de extensión universitaria.<br />
                        </p>
                    </div>
                </div>

                <div className="flex flex-col bg-white shadow-lg overflow-hidden md:w-1/2 rounded-t-[200px]">
                    <Image 
                        src={Laura} 
                        alt="Laura Pinasco" 
                        width={300} 
                        height={300} 
                        className="w-full h-auto object-cover rounded-t-[200px]" 
                    />
                    <div className="md:p-8 p-5">
                        <h2 className={`text-3xl font-bold text-[#00a2af] text-center ${montserrat.className}`}>Od. Laura Pinasco</h2>
                        <p className="text-gray-600 mt-4 text-base">
                                ▪ Odontóloga graduada de la Facultad de Odontología de la Universidad de Buenos Aires, Argentina<br />
                                ▪ Especialista en Endodoncia, título otorgado por Ministério de Salud<br />
                                ▪ Especialista en Endodoncia, título otorgado por la Facultad de Odontología de la Universidad de Buenos Aires<br />
                                ▪ Docente autorizada de la Facultad de Odontología de la Universidad de Buenos Aires<br />
                                ▪ Ex Profesora adjunta regular de la Cátedra de Endodoncia de la Facultad de Odontología de la Universidad de Buenos Aires<br />
                                ▪ Ex Co-directora de la Carrera de Especialista en Endodoncia de la Facultad de Odontología de la Universidad de Buenos Aires<br />
                                ▪ Ex-Coordinadora de la Unidad de Traumatismos Dentarios Facultad de Odontología de la Universidad de Buenos Aires<br />
                                ▪ Dictante de cursos de postgrado de la F.O.U.B.A.<br />
                                ▪ Dictante de cursos de especialidad en el país y en el exterior<br />
                                ▪ Jurado de concursos para cargos regulares de la Facultad de Odontología de la Universidad de Buenos Aires<br />
                                ▪ Autora de publicaciones referidas a la especialidad en revistas nacionales y en el exterior<br />
                                ▪ Participación en campañas de extensión universitaria<br />
                                ▪ Organizadora de PENN ENDO GLOBAL ARGENTINA 2018<br />
                                ▪ Dictado de clases y participación académica en la Universidad Complutense de Madrid en el marco de movilidad académica internacional 2018<br />
                                ▪ Coautora en premios de trabajos de investigación presentados en el país y en el exterior
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};