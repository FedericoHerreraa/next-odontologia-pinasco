import Link from "next/link";
import img from "@/app/img/history/equipo.jpg";
import { bebas } from "@/app/fonts/fonts";

export const CallToHistory = () => {
  return (
    <div
      className="flex justify-center items-center md:space-x-4 md:space-y-0 space-y-4 w-full md:h-80 h-64 shadow-md mt-40"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.7,
      }}
    >
      <Link
        href="/history"
        className="w-fit md:h-auto h-fit md:px-6 px-3 md:py-6 py-2 bg-[#00a2af] bg-opacity-65 text-center rounded-md shadow-xl hover:bg-[#008b96] md:mt-[10%]  mt-[30%]"
      >
        <p
          className={`text-white font-thin md:text-3xl text-xl ${bebas.className}`}
        >
          Conocé más acerca de nosotros
        </p>
      </Link>
    </div>
  );
};
