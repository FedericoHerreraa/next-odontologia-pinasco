'use client'

import { BiLogoWhatsapp } from "react-icons/bi";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog"
import { useMobileView } from "@/app/context/MobileView";


export const WhatsAppIcon = () => {
    const { isMobile } = useMobileView()
    const navigateToWhatsApp = () => {
        const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
        console.log(phoneNumber)
        const message = encodeURIComponent("Hola, me gustaria hacer una consulta...")

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }

    return (
        <div className="fixed md:bottom-5 bottom-1 md:right-5 right-1 rounded-full cursor-pointer z-50">
            <Dialog>
                <DialogTrigger className="p-0">
                    <BiLogoWhatsapp size={isMobile ? 40 : 50} className="text-green-500 z-50 bg-white rounded-full p-0 m-0"/>
                </DialogTrigger>
                <DialogContent className="md:mx-0 mx-auto w-[90%] rounded-lg">
                    <DialogHeader>
                        <DialogTitle>Seguro que quieres navegar a WhatsApp?</DialogTitle>
                        <DialogDescription>
                            Una vez que hagas click en el boton para navegar se te abrira una nueva ventana con el WhatsApp Web.
                        </DialogDescription>
                        <div className="pt-4">
                            <button 
                                onClick={navigateToWhatsApp}
                                className="text-start border border-blue-400 bg-blue-100 w-fit px-5 py-1 rounded-lg"
                            >
                                Navegar
                            </button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}