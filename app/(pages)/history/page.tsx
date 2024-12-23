
import { Metadata } from "next";
import { HistoryContent } from "./HistoryContent";

export const metadata: Metadata = {
    title: "Historia | Pinasco Odontología",
    description: "En este espacio te contamos acerca de nuestra historia, como llegamos hasta aqui, y que nos motiva a seguir adelante.",
};

export default function History() {
    return (
        <HistoryContent />
    )
}


