'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useMobileView } from '@/app/context/MobileView';
import { montserrat, bebas } from "@/app/fonts/fonts";
import logoHorizontal from "@/app/img/LogoHorizontal@2x.png";

import { VscListFlat } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "./ui/breadcrumb";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet"

export const Header = () => {
    const pathname = usePathname();
    const { isMobile } = useMobileView();
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
        <header className="flex flex-col items-center">
            <section className="flex items-center justify-end gap-2 border-b md:pr-10 pr-2 border-zinc-900 border-opacity-20 w-full bg-zinc-200 bg-opacity-60">
                <div onClick={() => scrollToSection("location")}>
                    <MdLocationPin size={20} className="cursor-pointer text-red-900 "/>
                </div>
                <Link 
                    href="https://www.instagram.com/odontologiapinasco/?hl=es" 
                    target="_blank">
                        <AiFillInstagram size={20} className="cursor-pointer text-violet-900 "/>
                </Link>
                <Link
                    href='/' 
                    className={`border border-zinc-800 mt-2  text-zinc-900 px-2 py-1 rounded-lg mb-2 md:text-sm text-xs ${montserrat.className}`}
                >
                    Pinasco
                </Link>
            </section>
            <section className="flex items-center bg-zinc-200 bg-opacity-60  text-zinc-800 text-base justify-between md:px-10 px-3 cursor-pointer border-b border-b-zinc-900 border-opacity-30 w-full h-20">
                <div>
                    <Link href='/'>
                        <p className={`${montserrat.className} text-zinc-900 md:text-sm text-xs`}>Consultorio Privado</p>
                        <h1 className={`text-2xl md:text-3xl font-semibold text-center md:text-left text-black ${bebas.className}`}>
                            Pinasco Odontología
                        </h1>
                    </Link>
                </div>
                {isMobile ? (
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger onClick={() => setIsOpen(true)}>
                            <VscListFlat size={30}/>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                            <SheetTitle className="text-start mb-10 text-lg">
                                <div onClick={() => setIsOpen(false)} className="absolute top-0 right-0 mt-2 mr-4 cursor-pointer">
                                    <p className='text-lg text-zinc-400'>X</p>
                                </div>
                                <Image src={logoHorizontal} alt="Logo" className="w-44 h-auto"/>
                            </SheetTitle>
                            <SheetDescription className={`flex flex-col gap-5 items-start ${montserrat.className}`}>
                                <Link href='/work' className={`font-semibold ${montserrat.className}`} onClick={() => setIsOpen(false)}>Nuestro Trabajo</Link>
                                <Link href='/history' className={`font-semibold ${montserrat.className}`} onClick={() => setIsOpen(false)}>Conoce Nuestra Historia</Link>
                                <Link href='/contact-us' className={`font-semibold ${montserrat.className}`} onClick={() => setIsOpen(false)}>Contactanos Ahora</Link>
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <div className="flex gap-10  text-zinc-900">
                        <Link href='/work' className={`hover:scale-105 duration-200 ${montserrat.className}`}>Nuestro Trabajo</Link>
                        <Link href='/history' className={`hover:scale-105 duration-200 ${montserrat.className}`}>Conoce Quiénes Somos</Link>
                        <Link href='/contact-us' className={`hover:scale-105 duration-200 ${montserrat.className}`}>Contactanos Ahora</Link>
                    </div>
                )}
            </section>
            <section className="flex justify-start w-full items-center md:px-10 px-4 py-5">
                <Breadcrumb>
                    <BreadcrumbList className={`${montserrat.className}`}>
                        <BreadcrumbItem>
                            <Link href="/" className={`${pathname != '/' ? 'text-blue-800 hover:underline' : 'text-zinc-950'}`}>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-zinc-950"/>
                        {pathname === '/' && (
                            <BreadcrumbItem>
                                <BreadcrumbEllipsis />
                            </BreadcrumbItem>
                        )}
                        {pathname === '/work' && (
                            <BreadcrumbItem>
                                <Link href="/work" className="text-zinc-950">Nuestro Trabajo</Link>
                            </BreadcrumbItem>
                        )}
                        {pathname === '/contact-us' && (
                            <>
                                <BreadcrumbItem>
                                    <Link href="/contact-us" className="text-zinc-950">Contactanos</Link>
                                </BreadcrumbItem>
                            </>
                        )}
                        {pathname === '/history' && (
                            <>
                                <BreadcrumbItem>
                                    <Link href="/history" className="text-zinc-950">Conoce Nuestra Historia</Link>
                                </BreadcrumbItem>
                            </>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>
            </section>
        </header>
    )
}

