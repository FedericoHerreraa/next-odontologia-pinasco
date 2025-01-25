

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
        <Accordion type="single" collapsible className="md:w-[40%] w-[80%] mx-auto mb-40 mt-10">
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
                    <p className="font-semibold">Trabajamos de forma particular realizando facturas para reintegro de obras sociales.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className={`${montserrat.className}`}>¿Qué estudios necesito para hacerme un implante?</AccordionTrigger>
                <AccordionContent className={`${montserrat.className}`}>
                    <p className="font-semibold">Tomografía cone bean solicitada por un odontólogo.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className={`${montserrat.className}`}>¿Cada cuanto debo realizarme una limpieza?</AccordionTrigger>
                <AccordionContent className={`${montserrat.className}`}>
                    <p className="font-semibold">Entre 6 meses y un año dependiendo de lo que te recomiende tu odontólogo.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className={`${montserrat.className}`}>¿Como hago para pedir presupuesto de un tratamiento?</AccordionTrigger>
                <AccordionContent className={`${montserrat.className}`}>
                    <p className="font-semibold">Para pasar presupuesto, es necesario solicitar una consulta clínica y el profesional solicitará los estudios radiográficos necesarios para poder realizar un diagnóstico preciso y por lo tanto, un tratamiento acorde.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}