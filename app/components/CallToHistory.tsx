import Link from "next/link"
import img from "@/app/img/equipo.jpg"

export const CallToHistory = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:space-x-4 md:space-y-0 space-y-4 w-full h-80 shadow-md " style={{backgroundImage: `url(${img.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.7}}>
        <div className="w-80 h-auto px-4 py-6 bg-[#00a2af] text-center rounded-md shadow-xl "> 
            <Link href="/history" className="text-white font-thin text-3xl">Conocenos</Link>
        </div>
    </div>
  )
}
