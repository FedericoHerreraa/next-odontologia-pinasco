import { CiMemoPad } from "react-icons/ci";
import img from "../img/back.png";

export const LandingPage = () => {
  return (
    <div
      className="bg-cover bg-center h-[90vh] flex "
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="flex gap-5 mx-auto pt-10 rounded-lg">
        <div className="w-1/2 flex flex-col gap-2 pl-20 pr-10">
          <h1 className="text-5xl font-semibold mb-5">
            Pinasco Odontología Consultorio Privado.
          </h1>
          <p className="text-zinc-500 mb-10 text-lg">
            En nuestro consultorio privado, nos especializamos en brindarte el
            mejor cuidado dental con un enfoque personalizado y profesional.
            Nuestro equipo de odontólogos altamente capacitados utiliza
            tecnología de vanguardia para garantizarte una experiencia cómoda,
            segura y efectiva.
          </p>
          <button className="bg-[#00a2af] text-white w-[60%] px-5 py-4 mt-5 rounded-xl hover:scale-110 duration-200 flex justify-center items-center gap-3">
            <p className="text-lg">Agenda tu Cita Ahora</p>
            <CiMemoPad size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
