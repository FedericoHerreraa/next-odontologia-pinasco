

import { CiMemoPad } from "react-icons/ci";
// import img from "../img/Periodoncia.png"

export const LandingPage = () => {
    return (
        <div className="flex gap-5 h-[65vh]  mx-auto pt-40 bg-gradient-to-b from-[#00a2af] to-white">
            <div className="w-1/2 flex flex-col gap-2 pl-40 pr-10">
                <h1 className="text-5xl font-semibold mb-5 font-Bebas-Neue">Pinasco Odontologia Consultorio Privado.</h1>
                <p className="text-zinc-500 mb-10 text-lg">En nuestro consultorio privado, nos especializamos en brindarte el mejor cuidado dental con un enfoque personalizado y profesional. Nuestro equipo de odontólogos altamente capacitados utiliza tecnología de vanguardia para garantizarte una experiencia cómoda, segura y efectiva.</p>
                <button className="bg-[#00a2af] text-white w-[60%] px-5 py-4 mt-5 rounded-xl hover:scale-110 duration-200 flex justify-center items-center gap-3">
                    <p className="text-xl">Agenda tu Cita Ahora</p>
                    <CiMemoPad size={25} />
                </button>
            </div>
            {/* <div className="relative w-1/2 h-96 overflow-hidden ">
                <img className="absolute top-0 w-[120%] right-[-200px] animate-rotate" src={img}/>
            </div> */}
        </div>
    )
}