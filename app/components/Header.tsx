'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useMobileView } from '@/app/context/MobileView';
import { montserrat } from "@/app/fonts/fonts";
import logoHorizontal from "@/app/img/LogoHorizontal@2x.png";

import { VscListFlat } from "react-icons/vsc";

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

import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";

export const Header = () => {
    const pathname = usePathname();
    const { isMobile } = useMobileView();
    
    return (
        <header className="bg-gradient-to-b from-[#58c8d0] via-zinc-200 to-white  flex flex-col items-center ">
            <div className="flex items-center justify-end  gap-3 border-b md:pr-10 pr-2 border-zinc-500 border-opacity-20 w-full">
                <MdLocationPin size={20} className="cursor-pointer text-red-800 opacity-65"/>
                <AiFillInstagram size={20} className="cursor-pointer text-violet-600 opacity-65"/>
                <RiWhatsappFill size={20} className="cursor-pointer text-green-800 opacity-65"/>
                <Link
                    href='/' 
                    className="border border-zinc-600 mt-2  text-zinc-700 px-2 py-1 rounded-lg mb-2 text-sm"
                >
                    Pinasco
                </Link>
            </div>
            <div className="flex items-center  text-zinc-800 text-base justify-between md:px-10 px-3 cursor-pointer border-b border-b-zinc-400 border-opacity-30 w-full h-20">
                <div>
                    <Link href='/'>
                        <Image src={logoHorizontal} alt="Logo" className="w-40 h-auto"/>
                    </Link>
                </div>
                {isMobile ? (
                    <Sheet>
                        <SheetTrigger>
                            <VscListFlat size={30}/>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                            <SheetTitle className="text-start mb-10 text-lg">Pinasco Odontologia</SheetTitle>
                            <SheetDescription className={`flex flex-col gap-5 items-start ${montserrat.className}`}>
                                <Link href='/work' className={`font-semibold ${montserrat.className}`}>Nuestro Trabajo</Link>
                                <Link href='/history' className={`font-semibold ${montserrat.className}`}>Conoce Nuestra Historia</Link>
                                <Link href='/contact-us' className={`font-semibold ${montserrat.className}`}>Contactanos Ahora</Link>
                            </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <div className="flex gap-10 text-lg text-zinc-600">
                        <Link href='/work' className={`hover:scale-105 duration-200 ${montserrat.className}`}>Nuestro Trabajo</Link>
                        <Link href='/history' className={`hover:scale-105 duration-200 ${montserrat.className}`}>Conoce Nuestra Historia</Link>
                        <Link href='/contact-us' className={`hover:scale-105 duration-200 ${montserrat.className}`}>Contactanos Ahora</Link>
                    </div>
                )}
            </div>
            <div className="flex justify-start w-full items-center md:px-10 px-4 py-5">
                <Breadcrumb>
                    <BreadcrumbList className={`${montserrat.className}`}>
                        <BreadcrumbItem>
                            <Link href="/" className={`${pathname != '/' ? 'text-blue-800 hover:underline' : 'text-zinc-600'}`}>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-zinc-600"/>
                        {pathname === '/' && (
                            <BreadcrumbItem>
                                <BreadcrumbEllipsis />
                            </BreadcrumbItem>
                        )}
                        {pathname === '/work' && (
                            <BreadcrumbItem>
                                <Link href="/work" className="text-zinc-600">Nuestro Trabajo</Link>
                            </BreadcrumbItem>
                        )}
                        {pathname === '/contact-us' && (
                            <>
                                <BreadcrumbItem>
                                    <Link href="/contact-us" className="text-zinc-600">Contactanos</Link>
                                </BreadcrumbItem>
                            </>
                        )}
                        {pathname === '/history' && (
                            <>
                                <BreadcrumbItem>
                                    <Link href="/history" className="text-zinc-600">Conoce Nuestra Historia</Link>
                                </BreadcrumbItem>
                            </>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>

            </div>
        </header>
    )
}

