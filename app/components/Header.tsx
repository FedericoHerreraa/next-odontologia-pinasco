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
        <header className="bg-[#00a2af] p-4 flex flex-col items-center gap-5">
            <div className="flex items-center justify-end gap-3 border-b border-b-white w-full">
                <PiMapPinLineLight />
                <IoLogoInstagram />
                <BiLogoWhatsapp />
                <button className="bg-white text-[#a6a6a6] p-2 rounded-lg mb-2 text-sm">
                    Contactanos
                </button>
            </div>
            <div className="flex items-center  text-white text-lg justify-between px-10 cursor-pointer border-b border-b-white w-full h-20">
                <div>
                    <p>LOGO</p>
                </div>
                <div className="flex gap-10">
                    <Link href='/work' className="hover:scale-110 duration-200">Nuestro Trabajo</Link>
                    <Link href='/history' className="hover:scale-110 duration-200">Conoce Nuestra Historia</Link>
                    <Link href='/contact-us' className="hover:scale-110 duration-200">Contactanos Ahora</Link>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <Breadcrumb>
                    <BreadcrumbList >
                        <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="text-white">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-white"/>
                        {pathname === '/work' && (
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/work" className="text-white">Nuestro Trabajo</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {pathname === '/contact-us' && (
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/contact-us" className="text-white">Contactanos</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {pathname === '/history' && (
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/history" className="text-white">Conoce Nuestra Historia</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
        </header>
    )
}

