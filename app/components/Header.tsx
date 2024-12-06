
import { RiToothFill } from "react-icons/ri";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="bg-[#00a2af] p-4 flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
                <RiToothFill size={35} className="text-zinc-300"/>
                <Link href='/' className="text-zinc-800 text-4xl text-center">Pinasco Odontologia</Link>
            </div>
            <div className="flex items-center gap-10 text-zinc-800 text-xl justify-center cursor-pointer ">
                <Link href='/work' className="hover:scale-110 duration-200">Nuestro Trabajo</Link>
                <Link href='/history' className="hover:scale-110 duration-200">Conoce Nuestra Historia</Link>
                <Link href='/contact-us' className="hover:scale-110 duration-200">Contactanos Ahora</Link>
            </div>
        </header>
    )
}

