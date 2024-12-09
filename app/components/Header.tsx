'use client'
import Link from "next/link";
import { PiMapPinLineLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoWhatsapp } from "react-icons/bi";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
  

export const Header = () => {
    const pathname = usePathname();
    console.log(pathname === '/work');
    return (
        <header className="bg-gradient-to-b from-[#00a2af] to-white  flex flex-col items-center">
            <div className="flex items-center justify-end gap-3 border-b border-b-[#00a2af] w-full p-3">
                <PiMapPinLineLight />
                <IoLogoInstagram />
                <BiLogoWhatsapp />
                <button className="bg-white text-[#a6a6a6] p-2 rounded-lg mb-2 text-sm">
                    Contactanos
                </button>
            </div>
            <div className="flex items-center  text-zinc-800 text-md justify-between px-10 cursor-pointer border-b border-b-[#00a2af] w-full h-16">
                <div>
                    <p>LOGO</p>
                </div>
                <div className="flex gap-10">
                    <Link href='/work' className="hover:scale-110 duration-200">Nuestro Trabajo</Link>
                    <Link href='/history' className="hover:scale-110 duration-200">Conoce Nuestra Historia</Link>
                    <Link href='/contact-us' className="hover:scale-110 duration-200">Contactanos Ahora</Link>
                </div>
            </div>
            <div className="flex justify-start w-full items-center px-10 pb-8 pt-4">
                <Breadcrumb>
                    <BreadcrumbList >
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="text-zinc-800">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        {pathname === '/work' && <BreadcrumbSeparator className="text-zinc-800"/>}
                        {pathname === '/work' && (
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/work" className="text-zinc-800">Nuestro Trabajo</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {pathname === '/contact-us' && <BreadcrumbSeparator className="text-zinc-800"/>}
                        {pathname === '/contact-us' && (
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/contact-us" className="text-zinc-800">Contactanos</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {pathname === '/history' && <BreadcrumbSeparator className="text-zinc-800"/>}
                        {pathname === '/history' && (
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/history" className="text-zinc-800">Conoce Nuestra Historia</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
        </header>
    )
}

