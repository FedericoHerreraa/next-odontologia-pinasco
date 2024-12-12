import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Historia | Pinasco Odontología",
    description: "En este espacio te contamos acerca de nuestra historia, como llegamos hasta aqui, y que nos motiva a seguir adelante.",
};

export default function History() {
    return (
        <div className="">
            <h1 className="text-4xl text-black mt-10 text-center">Conoce Nuestra Historia</h1>
        </div>
    )
}