import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Historia Pinasco",
    description: "En este espacio te contamos acerca de nuestra historia, como llegamos hasta aqui, y que nos motiva a seguir adelante.",
};

export default function History() {
    return (
        <div>
            <h1>Our History</h1>
        </div>
    )
}