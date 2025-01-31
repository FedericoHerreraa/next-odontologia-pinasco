
import { Metadata } from "next";
import { HistoryContent } from "./HistoryContent";

export const metadata: Metadata = {
    title: "Nuestra Historia | Pinasco Odontología - Pasión por las Sonrisas",
    description: "Conoce cómo comenzó nuestro camino en Pinasco Odontología. Descubrí nuestra historia, los valores que nos inspiran y nuestra pasión por cuidar de tu sonrisa. ¡Un recorrido lleno de dedicación y compromiso con la salud bucal!",
};

export default function History() {
    return (
        <HistoryContent />
    )
}


