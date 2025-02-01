
import { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
    title: "Nuestro Trabajo | Pinasco Odontología - Tratamientos de Calidad",
    description: "Descubrí cómo en Pinasco Odontología transformamos sonrisas con tratamientos personalizados. Nuestro equipo utiliza tecnología avanzada para garantizar resultados efectivos, cómodos y seguros. ¡Explora nuestro trabajo y confía tu salud bucal a los mejores!",
};

export default function OurWork() {
    return (
        <WorkContent />
    )
}