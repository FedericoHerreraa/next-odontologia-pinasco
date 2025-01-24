

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"

import Link from "next/link"

import { montserrat } from "@/app/fonts/fonts"
  

export const FAQs = () => {
    return (
        <Accordion type="single" collapsible className="md:w-[30%] w-[80%] mx-auto mb-40 mt-10">
            <AccordionItem value="item-1">
                <AccordionTrigger className={`${montserrat.className}`}>¿Cuáles son los horarios de atención?</AccordionTrigger>
                <AccordionContent className={`font-semibold ${montserrat.className}`}>
                    <p className={`font-semibold`}>Horarios de atención:</p>  
                    <ul className="ml-1">
                        <li>Lunes: 13:00 a 20:00 hs</li>
                        <li>Martes: 12:00 a 20:00 hs</li>
                        <li>Miércoles: 10:00 a 15:00 hs</li>
                        <li>Jueves: 12:00 a 20:00 hs</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className={`${montserrat.className}`}>¿Como puedo agendar una cita?</AccordionTrigger>
                <AccordionContent className={`${montserrat.className}`}>
                    <p className="font-semibold">Para agendar una cita, podés comunicarte con nosotros por WhatsApp 
                        <Link className="text-[#00a2af] font-bold" href='/contact-us'> haciendo click aca.</Link>
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className={`${montserrat.className}`}>¿Trabajan con seguros o prepagas?</AccordionTrigger>
                <AccordionContent className={`${montserrat.className}`}>
                    <p className="font-semibold">No, el consultorio es 100% privado.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}