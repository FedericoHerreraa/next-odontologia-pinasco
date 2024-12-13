import { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
    title: "Contactanos | Pincasco Odontología",
    description: "En este aparatado puedes contactarnos para agendar una cita, o para cualquier duda o comentario que tengas.",
}

export default function ContactUs() {
    return (
        <ContactContent />
    );
}
