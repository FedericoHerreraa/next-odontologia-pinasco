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


export const WhatsAppIcon = () => {
    const navigateToWhatsApp = () => {
        const phoneNumber = "1122343359";
        const message = encodeURIComponent("Hola, me gustaria hacer una consulta, gracias!")

        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }

    return (
        <div className="fixed bottom-5 right-5 rounded-full cursor-pointer z-50">
            <Dialog>
                <DialogTrigger>
                    <BiLogoWhatsapp size={50} className="text-green-500 bg-white rounded-full"/>
                </DialogTrigger>
                <DialogContent>
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