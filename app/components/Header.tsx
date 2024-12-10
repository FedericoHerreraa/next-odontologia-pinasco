'use client'

import Link from "next/link";
import { PiMapPinLineLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoWhatsapp } from "react-icons/bi";
import { RiToothFill } from "react-icons/ri";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
  

export const Header = () => {
    const pathname = usePathname();
    
    return (
        <header className="bg-gradient-to-b from-[#00a2af] to-white  flex flex-col items-center ">
            <div className="flex items-center justify-end gap-3 border-b pr-10 border-zinc-500 border-opacity-40 w-full">
                <PiMapPinLineLight size={20} className="cursor-pointer"/>
                <IoLogoInstagram size={20} className="cursor-pointer"/>
                <BiLogoWhatsapp size={20} className="cursor-pointer"/>
                <button className="border border-zinc-600 mt-2  text-zinc-700 px-2 py-1 rounded-lg mb-2 text-sm">
                    Contactanos
                </button>
            </div>
            <div className="flex items-center  text-zinc-800 text-md justify-between px-10 cursor-pointer border-b border-b-zinc-400 border-opacity-60 w-full h-16">
                <div>
                    <Link href='/'>
                        <RiToothFill size={40}/>
                    </Link>
                </div>
                <div className="flex gap-10 text-lg text-zinc-600">
                    <Link href='/work' className="hover:scale-110 duration-200">Nuestro Trabajo</Link>
                    <Link href='/history' className="hover:scale-110 duration-200">Conoce Nuestra Historia</Link>
                    <Link href='/contact-us' className="hover:scale-110 duration-200">Contactanos Ahora</Link>
                </div>
            </div>
            <div className="flex justify-start w-full items-center px-10 pb-8 pt-4">
                <Breadcrumb>
                    <BreadcrumbList >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-zinc-600">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-zinc-600"/>
                        {pathname === '/' && (
                            <BreadcrumbItem>
                                <BreadcrumbEllipsis />
                            </BreadcrumbItem>
                        )}
                        {pathname === '/work' && (
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/work" className="text-zinc-600">Nuestro Trabajo</BreadcrumbLink>
                            </BreadcrumbItem>
                        )}
                        {pathname === '/contact-us' && (
                            <>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/contact-us" className="text-zinc-600">Contactanos</BreadcrumbLink>
                                </BreadcrumbItem>
                            </>
                        )}
                        {pathname === '/history' && (
                            <>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/history" className="text-zinc-600">Conoce Nuestra Historia</BreadcrumbLink>
                                </BreadcrumbItem>
                            </>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
        </header>
    )
}

