import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
    title: "Contáctanos | Pinasco Odontología - Reserva tu Cita Hoy",
    description: "¿Tienes preguntas, dudas o deseas agendar una cita? En Pinasco Odontología estamos aquí para ayudarte. Contáctanos fácilmente y permite que nuestro equipo cuide de tu sonrisa.",
};

export default function ContactUs() {
    return (
        <ContactContent />
    );
}
