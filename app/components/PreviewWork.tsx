"use client";

import { FaTooth } from "react-icons/fa";
import { bebas, montserrat } from "@/app/fonts/fonts";

import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/app/components/ui/alert-dialog";

export const PreviewWork = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10">
      <p
        className={`text-center mb-3 text-zinc-600 text-base md:text-lg ${montserrat.className}`}
      >
        Conocé nuestro trabajo que nos lleva a la perfección.
      </p>
      <h1
        className={`text-4xl md:text-6xl text-center text-zinc-700 ${bebas.className}`}
      >
        Te Contamos un Poco de{" "}
        <span className="bg-gradient-to-r to-[#00a2af] from-[#46bcc9] bg-clip-text text-transparent">
          lo que Hacemos.
        </span>
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-20">
        {info.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            name={item.name}
          />
        ))}
        {info2.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            name={item.name}
          />
        ))}
      </section>
    </div>
  );
};

const Card = ({
  name,
  title,
  description,
}: {
  title: string;
  description: string;
  name: string;
}) => {
  return (
    <div className="bg-white flex flex-col items-center rounded-xl md:min-h-[20rem] min-h-[25rem] shadow-lg p-6 border border-zinc-200 transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <FaTooth size={30} className="text-[#00a2af] mb-4" />
      <h2
        className={`text-center text-3xl md:text-4xl font-semibold text-[#00a2af] mx-5 md:mx-10 ${bebas.className}`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-center text-zinc-600 text-sm md:text-base flex-grow leading-relaxed ${montserrat.className}`}
      >
        {description}
      </p>
      {name === "odontologiaDigital" ? (
        <AlertDialog>
          <AlertDialogTrigger
            className={`flex items-center justify-center w-[140px] md:w-[150px] gap-2 hover:gap-5 mt-5 px-4 py-2 border border-[#00a2af] bg-[#00a2af] text-white font-semibold text-sm md:text-base rounded-full shadow-md transition-all duration-200 hover:bg-[#008895] hover:border-[#008895]`}
          >
            <p>Ver Más</p>
            <IoIosArrowRoundForward size={24} />
          </AlertDialogTrigger>
          <AlertDialogContent className="w-full md:w-[70%] max-w-[900px]">
            <AlertDialogHeader>
              <AlertDialogTitle
                className={`text-3xl font-semibold text-[#00a2af] ${bebas.className}`}
              >
                Odontología Digital
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription className="aspect-video bg-black rounded-lg flex flex-col items-center ">
              <div className="w-[30%] h-[20%]">
                <video className="" controls muted loop>
                  <source
                    src="/videos/odontologiaDigital.mp4"
                    type="video/mp4"
                  />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel asChild className="w-[100px] md:w-[150px]">
                <button className="w-full h-full flex items-center justify-center text-[#00a2af] font-semibold text-sm md:text-base">
                  Cerrar
                </button>
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ) : (
        <Link
          href="/work"
          className={`flex items-center justify-center w-[140px] md:w-[150px] gap-2 hover:gap-5 mt-5 px-4 py-2 border border-[#00a2af] bg-[#00a2af] text-white font-semibold text-sm md:text-base rounded-full shadow-md transition-all duration-200 hover:bg-[#008895] hover:border-[#008895]`}
        >
          <p>Ver Más</p>
          <IoIosArrowRoundForward size={24} />
        </Link>
      )}
    </div>
  );
};

const info = [
  {
    name: "tratamientoPreventivo",
    title: "Tratamientos preventivos",
    description:
      "La odontología preventiva busca mantener una boca sana e incluye exámenes orales regulares, limpieza dental y radiografías de rutina y estimular el desarrollo de hábitos de higiene bucal. A su vez, se centra en el diagnóstico de problemas de salud antes de que se manifiesten los síntomas o surjan complicaciones.",
  },
  {
    name: "odontologiaRestauradora",
    title: "Odontología restauradora",
    description:
      "La odontología restauradora se centra en abordar problemas dentales existentes con el objetivo de devolver la funcionalidad y la estética a la sonrisa del paciente. Esta disciplina abarca una variedad de tratamientos especializados, que incluyen: eliminación de caries y restauraciones con resinas, tratamientos de conductos, cuidado de encías, prótesis dentales, implantes y cirugías correctivas.",
  },
];

const info2 = [
  {
    name: "esteticaDisenoSonrisa",
    title: "Estética y diseño de sonrisa",
    description:
      "Agrupa procedimientos para mejorar la alineación y apariencia de los dientes, como ortodoncia, blanqueamientos, carillas y reconstrucciones dentales para lograr una sonrisa más atractiva.",
  },
  {
    name: "odontologiaDigital",
    title: "Odontología digital",
    description:
      "La odontología digital combina tecnologías avanzadas como escáneres intraorales, impresión 3D y radiografías digitales para mejorar la precisión en diagnósticos y tratamientos. Ofrece mayor comodidad al paciente, resultados estéticos más predecibles y diagnósticos más precisos, reduciendo tiempos de laboratorio y mejorando la comunicación mediante la visualización de resultados.",
  },
];
